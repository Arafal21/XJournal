import { useRouter } from 'next/navigation';
import { apiDelete, clearAuthTokens } from './lib/api';

type AppRouterInstance = ReturnType<typeof useRouter>;

export async function performLogout(router: AppRouterInstance) {
	try {
		await logoutUser();
		await clearAuthTokens();
		router.push('/login/');
	} catch (error) {
		console.error('Logout error:', error);
	}
}
 
export async function logoutUser() {
	return apiDelete({
		path: '/user/profile/logout',
		requireAuth: true,
		returnData: false,
	});
}
