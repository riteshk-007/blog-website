import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const AuthToken = cookies().get("authToken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/signup"
  ) {
    return null;
  }

  const loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  if (loggedInUserNotAccessPath) {
    // if user is logged in, redirect to home page
    if (AuthToken) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } else {
    // if user is not logged in, redirect to login page
    if (!AuthToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          { error: "You are not authorized" },
          { status: 401 }
        );
      } else if (
        !AuthToken &&
        request.nextUrl.pathname.startsWith("/add-blog")
      ) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
      }
    }
  }
}

export const config = {
  matcher: ["/", "/login", "/register", "/add-blog", "/api/:path*"],
};
