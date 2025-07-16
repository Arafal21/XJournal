'use server';

import { revalidatePath } from 'next/cache';

import { apiDelete, apiGet, apiPost, makeRequest } from './lib/api';
import { getRoleParam } from '../utils/getRoleParam';

import { User } from '../types/principalPanelProps';
import { BASE_ROUTE } from '../constants/routing';

export async function createUser(userData: any, userType: string) {
	const endpoint = userType === 'teacher' ? 'teacher' : userType === 'parentAndStudent' ? 'student' : userType;

	const response = await apiPost({
		path: `/admin/user/${endpoint}`,
		body: userData,
		jsonStringifyBody: true,
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/principal-panel`);
	return response;
}

export async function updateUser(userData: any, userId: string) {
	const response = await makeRequest({
		path: `/admin/user/${userId}`,
		body: userData,
		method: 'PATCH',
		requireAuth: true,
	});
	revalidatePath(`/${BASE_ROUTE}/principal-panel`);
	return response;
}

export async function deleteUser(id: string) {
	await apiDelete({
		path: `/admin/user/${id}`,
		requireAuth: true,
		returnData: false,
	});

	revalidatePath(`/${BASE_ROUTE}/principal-panel`);
}

export async function fetchAllUsers(filter: string = 'all'): Promise<User[]> {
	let page = 1;
	let allUsers: User[] = [];
	const roleParam = getRoleParam(filter);
	let endpoint = '/admin/user/all' + (roleParam ? `?role=${roleParam}` : '');

	while (true) {
		const finalPath =
			page === 1 ? endpoint : endpoint.includes('?') ? `${endpoint}&page=${page}` : `${endpoint}?page=${page}`;
		const { data, pagination } = await apiGet({
			path: finalPath,
			requireAuth: true,
		});

		let pageUsers: User[];
		if (!roleParam) {
			pageUsers = data.all;
		} else if (roleParam === 'teacher') {
			pageUsers = data.teachers;
		} else {
			pageUsers = data.studentsAndParents;
		}

		allUsers = allUsers.concat(pageUsers);
		if (allUsers.length >= pagination.resultsCount) break;
		page++;
	}

	return Array.from(new Map(allUsers.map((user) => [user._id, user])).values());
}
