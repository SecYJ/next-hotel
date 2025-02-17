import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./lib/session";
import { ROUTES } from "./constants/routes";
// This function can be marked `async` if using `await` inside

// const PUBLIC_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.HOME] as string[];

export async function middleware(request: NextRequest) {
    const session = await getSession();

    if (new URL(request.url).pathname === "/login" && session) {
        return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
