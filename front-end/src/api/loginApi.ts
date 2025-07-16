'use server';

import { apiPost, setAuthTokens } from './lib/api';

export async function loginUser(formData: FormData) {
	const response = await apiPost({
		path: '/auth/login',
		body: {
			email: formData.get('email'),
			password: formData.get('password'),
		},
		jsonStringifyBody: true,
		requireAuth: false,
	});

	if (response.accessToken && response.refreshToken) {
		await setAuthTokens(response.accessToken, response.refreshToken);
	}

	return response;
}
