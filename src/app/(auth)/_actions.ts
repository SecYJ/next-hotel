"use server";

import ROUTES from "@/constants/routes";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { hashPassword, verifyPassword } from "@/lib/password";
import { createSession } from "@/lib/session";
import { USER_BASE_SCHEMA } from "@/lib/validations";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const createUserAction = async (formData: FormData) => {
	const rawData = Object.fromEntries(formData);

	// Convert boolean fields back from string
	const data = {
		...rawData,
		agreeTerm: rawData.agreeTerm === "1",
	};

	const results = USER_BASE_SCHEMA.safeParse(data);
	// safeParse(data);
	console.log("server side", results);

	// NOTE: will refactor here later as go for error handling
	if (results.success) {
		const hashedPassword = await hashPassword(results.data.password);
		const { email, phoneNumber, username: name } = results.data;
		const user = await db.insert(usersTable).values({
			email,
			password: hashedPassword,
			phoneNumber,
			name,
		});

		console.log("user created", user);

		redirect(ROUTES.HOME);
	}

	return results;
};

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
	const users = await db.select().from(usersTable).where(eq(usersTable.email, data.email)).limit(1);

	const user = users[0];

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
		id: user.id,
		email: user.email,
	});

	redirect(ROUTES.HOME);
};
