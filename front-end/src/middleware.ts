
import { NextRequest, NextResponse } from 'next/server';
import { BASE_ROUTE } from './constants/routing';
import { fetchAuthUser } from './api/middleware_helpers/fetchAuthUser';

export const config = {
	matcher: ['/login', `/${BASE_ROUTE}/:path*`],
};

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const isLoginPage = pathname === `/${BASE_ROUTE}`;
	const isProtected = pathname.startsWith(`/${BASE_ROUTE}`);

	const user = await fetchAuthUser(request);
	const isLoggedIn = Boolean(user);

	if (isProtected && !isLoggedIn) {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	if (isLoginPage && isLoggedIn) {
		return NextResponse.redirect(new URL(`/${BASE_ROUTE}/announcements`, request.url));
	}

	if (pathname.startsWith(`/${BASE_ROUTE}/principal-panel`)) {
		if (user?.role !== 'principal') {
			return NextResponse.redirect(new URL(`/${BASE_ROUTE}/announcements`, request.url));
		}
	}

	return NextResponse.next();
}
