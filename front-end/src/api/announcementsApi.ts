'use server';

import { revalidatePath } from 'next/cache';
import { apiDelete, apiGet, apiPost, makeRequest } from './lib/api';
import { BASE_ROUTE } from '../constants/routing';

export async function fetchAnnouncements() {
	const response = await apiGet({
		path: '/public/announcement/all',
		requireAuth: true,
	});

	return response.data;
}

export async function postNewAnnouncement(_previousState: unknown, formData: FormData) {
	const content = formData.get('announcementTextArea') as string;

	await apiPost({
		path: '/user/announcement/',
		body: { description: content },
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/announcements`);
}

export async function deleteAnnouncement(id: string) {
	await apiDelete({
		path: `/user/announcement/${id}`,
		requireAuth: true,
		returnData: false,
	});

	revalidatePath(`/${BASE_ROUTE}/announcements`);
}

export async function updateAnnouncement(_previousState: unknown, formData: FormData, announcement: { _id: string }) {
	const content = formData.get('announcementTextArea') as string;
	const response = await makeRequest({
		path: `/user/announcement/${announcement._id}`,
		body: { description: content },
		method: 'PATCH',
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/announcements`);
	return response;
}
