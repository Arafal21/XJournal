'use server';

import { revalidatePath } from 'next/cache';
import { BASE_ROUTE } from '../constants/routing';
import { apiDelete, apiGet, apiPost, makeRequest } from './lib/api';

export async function getCalendarAdmin(classId: string, month: string, year: number) {
	const response = await apiGet({
		path: `/calendar/${classId}/all?month=${month}&year=${year}`,
		requireAuth: true,
	});

	return response;
}

export async function postCalendarEvent(
	classId: string,
	eventType: string,
	startDate: string,
	endDate: string,
	subject: string,
) {
	const response = await apiPost({
		path: `/calendar/admin/${classId}/event`,
		body: {
			eventType,
			startDate,
			endDate,
			subject,
		},

		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/calendar/`);
	return response;
}

export async function updateCalendar(classId: string, calendarEventId: string, eventType: string, subject: string, 

	startDate: string,
	endDate: string,

) {
	const response = await makeRequest({
		path: `/calendar/admin/${classId}/${calendarEventId}`,

		body: {
			eventType,
			subject,
			endDate,
			startDate,
		},

		method: 'PATCH',
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/calendar/`);
	return response;
}

export async function deleteCalendarEvent(classId: string, calendarEventId: string) {
	await apiDelete({
		path: `/calendar/admin/${classId}/${calendarEventId}`,

		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/calendar/`);
}
