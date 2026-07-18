import { NextResponse } from "next/server";

const locales = ["en", "hinglish"];
const defaultLocale = "en";

export function proxy(request){
    const pathname = request.nextUrl.pathname;

    // check if pathname is already starting with any locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if(pathnameHasLocale){
        return NextResponse.next(); // if already has locale, nothing to do
    }

    // if there is no locale, then redirect it with the default locale
    const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: [
        // match everything except, api routes, _next internal files, aur static files
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ]
}