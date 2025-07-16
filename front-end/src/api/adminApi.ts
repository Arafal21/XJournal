'use server';

import { StudentInClass } from '../types/gradesProps';

import { apiGet } from './lib/api';

export async function fetchUserAmount(): Promise<number> {
	const response = await apiGet({
		path: '/admin/user/all',
		requireAuth: true,
	});

	return response.pagination.resultsCount;
}

export async function getStudentsFromClass(classId: string): Promise<StudentInClass[]> {
	const data = await apiGet({
		path: `/admin/class/${classId}`,
		requireAuth: true,
	});

	return data.students;
}

interface ClassRaw {
	_id: string;
	name: string;
}

export async function getClasses(): Promise<ClassRaw[]> {
	const data = await apiGet({
		path: `/admin/class/all`,
		requireAuth: true,
	});

	return data.data;
}

export async function getInitialClass(): Promise<string> {
	try {
		const data = await apiGet({
			path: `/admin/class/all`,
			requireAuth: true,
		});

		return data.data[0]._id;
	} catch (error) {
		console.error('Getting initial class error:', error);
		throw error;
	}
}