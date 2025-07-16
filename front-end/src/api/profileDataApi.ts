import { DetailedUserData } from '../types/sessionTypes';
import { apiGet } from './lib/api';

export async function fetchUserProfile(): Promise<DetailedUserData> {
	const data = await apiGet({
		path: '/user/profile/session',
		requireAuth: true,
		returnData: true,
	});

	return {
		firstName: data.firstName,
		lastName: data.lastName,
		role: data.role,
		lastLogin: data.lastLogin,
		_id: data._id,
	};
}

export async function getUserName(): Promise<string> {
	const { firstName } = await fetchUserProfile();
	return firstName;
}

export async function getUserRole(): Promise<string> {
	const { role } = await fetchUserProfile();
	return role;
}

export async function getUserId(): Promise<string> {
	const { _id } = await fetchUserProfile();
	return _id;
}

export async function getTeacherSubject(): Promise<string> {
	const data = await apiGet({
		path: '/user/profile/session',
		requireAuth: true,
	});
	return data.profile.subject;
}

export async function getStudentClass(field: 'name' | '_id'): Promise<string | number> {
	const data = await apiGet({
		path: '/user/profile/session',
		requireAuth: true,
	});

	return data.profile.class[field];
}

export async function getStudentIdFromParent(): Promise<string> {
	const data = await apiGet({
		path: '/user/profile/session',
		requireAuth: true,
	});

	return data.profile.students._id;
}

export async function getStudentClassByParent(): Promise<string> {
	const data = await apiGet({
		path: '/user/profile/session',
		requireAuth: true,
	})

	return data.profile.students.profile.class
}
