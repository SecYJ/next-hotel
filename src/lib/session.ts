import ROUTES from "@/constants/routes";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import "server-only";

const secretKey = process.env.JWT_SECRET_KEY;
if (!secretKey) {
	throw new Error("JWT_SECRET_KEY is not set");
}

const key = new TextEncoder().encode(secretKey);

export type SessionData = {
	userId: string;
	email: string;
};

export async function createToken({ data, expiresAt }: { data: SessionData; expiresAt?: Date }) {
	const token = await new SignJWT(data)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(expiresAt ?? "7d")
		.sign(key);

	return token;
}

export async function createSession(data: SessionData) {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

	const token = await createToken({ data, expiresAt });

	const cookieStore = await cookies();
	cookieStore.set("session", token, {
		httpOnly: true,
		expires: expiresAt,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
	});
}

export async function getSession() {
	const cookieStore = await cookies();
	const session = cookieStore.get("session");

	if (!session?.value) return null;

	try {
		const { payload } = await jwtVerify(session.value, key, { algorithms: ["HS256"] });
		return payload as SessionData;
	} catch (error) {
		return null;
	}
}

export async function logout() {
	// const cookieStore = await cookies();
	// cookieStore.set("session", "", {
	// 	expires: new Date(0),
	// });
	const cookie = await cookies();
	cookie.delete("session");
	redirect(ROUTES.LOGIN);
}
