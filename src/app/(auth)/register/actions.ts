"use server";

import ROUTES from "@/constants/routes";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { hashPassword, verifyPassword } from "@/lib/password";
import { createSession } from "@/lib/session";
import { USER_BASE_SCHEMA } from "@/lib/validations";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

type FormState =
	| {
			success: boolean;
			error: Record<string, string[] | undefined> | null;
			fields?: Record<string, string>;
	  }
	| undefined;

export async function createUserAction(_: FormState, formData: FormData) {
	const rawData = Object.fromEntries(formData);

	const data = {
		...rawData,
		agreeTerm: rawData.agreeTerm === "1",
	};

	const results = USER_BASE_SCHEMA.safeParse(data);

	const fields: Record<string, string> = {};

	for (const key of Object.keys(rawData)) {
		fields[key] = rawData[key].toString();
	}

	if (!results.success) {
		return {
			success: false,
			fields,
			error: results.error.flatten().fieldErrors,
		};
	}

	const matchedEmail = await db.select().from(usersTable).where(eq(usersTable.email, results.data.email));
	if (matchedEmail.length > 0) {
		return {
			success: false,
			fields,
			error: { email: ["此信箱已被使用"] },
		};
	}

	const hashedPassword = await hashPassword(results.data.password);
	const { email, phoneNumber, username: name } = results.data;

	let userId = "";

	const [user] = await db
		.insert(usersTable)
		.values({
			email,
			password: hashedPassword,
			phoneNumber,
			name,
		})
		.returning({ id: usersTable.id });

	userId = user.id;

	await createSession({
		email,
		userId,
	});

	redirect(ROUTES.HOME);
}

export const loginAction = async (formData: FormData) => {
	const rawData = Object.fromEntries(formData);
	const data = {
		email: rawData.email as string,
		password: rawData.password as string,
	};

	// Validate the input
	if (!data.email || !data.password) {
		return {
			success: false,
			error: "Email and password are required",
		};
	}

	// Find the user
	const [user] = await db.select().from(usersTable).where(eq(usersTable.email, data.email)).limit(1);

	if (!user) {
		return {
			success: false,
			error: "Invalid email or password",
		};
	}

	// Verify password
	const isValidPassword = await verifyPassword(data.password, user.password);
	if (!isValidPassword) {
		return {
			success: false,
			error: "Invalid email or password",
		};
	}

	// Create session
	await createSession({
		userId: user.id,
		email: user.email,
	});

	redirect(ROUTES.HOME);
};
