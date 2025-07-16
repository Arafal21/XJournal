'use server';

import { revalidatePath } from 'next/cache';
import { apiDelete, apiGet, apiPost, makeRequest } from './lib/api';
import { BASE_ROUTE } from '../constants/routing';

export async function fetchSchedule(classId: string) {
	try {
		const response = await apiGet({
			path: `/class/schedule/${classId}`,
			requireAuth: true,
		});

		return response;
	} catch (error) {
		console.error('Schedule fetching error:', error);
		throw new Error('Schedule fetching error');
	}
}

export async function postSchedule(
	classId: string,
	startTime: string,
	endTime: string,
	subject: string,
	dayOfWeek: string,
) {
	const response = await apiPost({
		path: `/admin/class/schedule/${classId}`,
		body: { startTime, endTime, subject, dayOfWeek },
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/lesson-schedule/`);

	return response;
}

export async function deleteSchedule(classId: string, lessonId: string) {
	await apiDelete({
		path: `/admin/class/schedule/${classId}/${lessonId}`,
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/lesson-schedule/`);
}

export async function updateSchedule(
	classId: string,
	lessonId: string,
	startTime: string,
	endTime: string,
	subject: string,
	dayOfWeek: string,
) {
	const response = await makeRequest({
		path: `/admin/class/schedule/${classId}/${lessonId}`,
		body: { startTime, endTime, subject, dayOfWeek },
		method: 'PATCH',
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/lesson-schedule/`);
	return response;
}
