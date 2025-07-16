import type { NextRequest } from 'next/server';

export interface AuthUser {
	userId: string;
	role: string;
}

const SESSION_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/profile/session`;

function decodeJwt(token: string): { exp: number; sub?: string; userId?: string } | null {
	try {
		const [, b64] = token.split('.');
		const payload = JSON.parse(Buffer.from(b64, 'base64').toString());
		return payload;
	} catch {
		return null;
	}
}

export async function fetchAuthUser(request: NextRequest): Promise<AuthUser | null> {
	const token = request.cookies.get('accessToken')?.value;
	if (!token) return null;

	const payload = decodeJwt(token);
	if (!payload || typeof payload.exp !== 'number' || Date.now() >= payload.exp * 1000) {
		return null;
	}

	try {
		const res = await fetch(SESSION_URL, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
			},
		});
		if (!res.ok) return null;

		const json = await res.json();
		const data = json.data;
		if (!data?.role) return null;

		const id = payload.sub || payload.userId || data._id;
		return { userId: id, role: data.role };
	} catch {
		return null;
	}
}
