import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateRequest } from "./lib/session";
import ROUTES from "./constants/routes";

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Public routes that don't require authentication
	if (
		pathname.startsWith("/_next") || // Next.js system routes
		pathname.startsWith("/api") || // API routes
		pathname.startsWith("/static") || // Static files
		pathname === ROUTES.LOGIN ||
		pathname === ROUTES.REGISTER
	) {
		return NextResponse.next();
	}

	const session = await validateRequest(request);

	// If there's no session and we're not on an auth route, redirect to login
	if (!session) {
		const url = new URL(ROUTES.LOGIN, request.url);
		url.searchParams.set("from", pathname);
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder
		 */
		"/((?!_next/static|_next/image|favicon.ico|public/).*)",
	],
};
