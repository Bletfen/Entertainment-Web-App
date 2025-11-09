import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (
    pathname === "/" ||
    pathname.startsWith("/movies") ||
    pathname.startsWith("/tv-series") ||
    pathname.startsWith("/bookmarked")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if ((pathname === "/login" || pathname === "/register") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/movies/:path*",
    "/tv-series/:path*",
    "/bookmarked/:path*",
  ],
};
