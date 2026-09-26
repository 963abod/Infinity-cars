import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const LOCALES = ["ar", "en", "tr", "es", "de", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore internal assets, api, or static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname has a supported locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Extract current locale and save to cookie
    const currentLocale = pathname.split("/")[1] as Locale;
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", currentLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  // Determine preferred locale from cookie or default to 'ar'
  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value as Locale | undefined;
  const targetLocale =
    savedLocale && LOCALES.includes(savedLocale as Locale)
      ? savedLocale
      : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
