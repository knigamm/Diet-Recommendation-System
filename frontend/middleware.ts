import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getSession from "./app/utils/getSession";

export function middleware(request: NextRequest) {
  const sessionData = getSession();
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }
  if (
    !["/login", "/signup"].includes(request.nextUrl.pathname) &&
    !sessionData
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (["/login", "/signup"].includes(request.nextUrl.pathname) && sessionData) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
