'use server';

import { revalidatePath } from 'next/cache';
import { apiDelete, apiGet, apiPost, makeRequest } from './lib/api';
import { getStudentIdFromParent, getUserId, getUserRole } from './profileDataApi';
import { BASE_ROUTE } from '../constants/routing';

export async function getGradesStudentParent() {
	const role = await getUserRole();
	const studentId = role === 'parent' ? await getStudentIdFromParent() : await getUserId();

	const response = await apiGet({
		path: `/admin/user/student/${studentId}/grades`,
		requireAuth: true,
	});

	return response;
}

export async function getGradesAdmin(selectedClass: string, selectedSemester: string, selectedSubject: string) {
	const response = await apiGet({
		path: `/class/${selectedClass}/grades?season=${selectedSemester}&subject=${selectedSubject}`,
		requireAuth: true,
	});

	return response;
}

export async function postGrade(studentId: string, grade: number, subject: string, season: string) {
	const response = await apiPost({
		path: `/admin/user/student/${studentId}/grade`,
		body: { grade, subject, season },

		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/grades/`);
	return response;
}

export async function updateGrade(studentId: string, gradeId: string, grade: number) {
	const response = await makeRequest({
		path: `/admin/user/student/${studentId}/${gradeId}`,
		body: {
			newGrade: grade,
		},
		method: 'PATCH',
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/grades/`);
	return response;
}

export async function deleteGrade(studentId: string, gradeId: string) {
	await apiDelete({
		path: `/admin/user/student/${studentId}/${gradeId}`,
		requireAuth: true,
	});

	revalidatePath(`/${BASE_ROUTE}/grades/`);
}
