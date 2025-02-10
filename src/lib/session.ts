import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const secretKey = process.env.JWT_SECRET_KEY;
if (!secretKey) {
	throw new Error("JWT_SECRET_KEY is not set");
}

const key = new TextEncoder().encode(secretKey);

export type SessionData = {
	id: string;
	email: string;
};

export async function createSession(data: SessionData) {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

	const token = await new SignJWT({ ...data })
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(expiresAt)
		.sign(key);

	const cookieStore = await cookies();
	cookieStore.set("session", token, {
		httpOnly: true,
		expires: expiresAt,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
	});

	return token;
}

export async function getSession(): Promise<SessionData | null> {
	const cookieStore = await cookies();
	const session = cookieStore.get("session");

	if (!session?.value) return null;

	try {
		const { payload } = await jwtVerify(session.value, key);
		return payload as SessionData;
	} catch (error) {
		return null;
	}
}

export async function validateRequest(request: NextRequest) {
	const session = request.cookies.get("session");

	if (!session?.value) return null;

	try {
		const { payload } = await jwtVerify(session.value, key);
		return payload as SessionData;
	} catch (error) {
		return null;
	}
}

export async function logout() {
	const cookieStore = await cookies();
	cookieStore.set("session", "", {
		expires: new Date(0),
	});
}
