import { usersTable } from "@/db/schema";
import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { LOGIN_SCHEMA } from "@/lib/validations";
import { verifyPassword } from "@/lib/password";
import { createSession } from "@/lib/session";
export const POST = async (request: NextRequest) => {
	const loginData = await request.json();

	const parsedData = LOGIN_SCHEMA.omit({ remember: true }).safeParse(loginData);

	if (!parsedData.success) {
		console.log("login error", parsedData.error.flatten().fieldErrors);
		return NextResponse.json({ error: parsedData.error.flatten().fieldErrors }, { status: 400 });
	}

	let userData: typeof usersTable.$inferSelect | null = null;

	try {
		const [user] = await db.select().from(usersTable).where(eq(usersTable.email, parsedData.data.email));
		userData = user;
	} catch (error) {
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}

	const isPasswordValid = await verifyPassword(parsedData.data.password, userData.password);

	if (!isPasswordValid) {
		return NextResponse.json({ error: "Invalid password" }, { status: 400 });
	}

	await createSession({
		email: parsedData.data.email,
		userId: userData.id,
	});

	return NextResponse.json({ success: true }, { status: 200 });
};
