import { redirect } from 'next/navigation';

import { getInitialClass } from '../../../api/adminApi';
import { getStudentClass, getStudentClassByParent, getUserRole } from '../../../api/profileDataApi';
import { moderatingRoles } from '../../../constants/permissions';
import { BASE_ROUTE } from '../../../constants/routing';

export default async function LessonScheduleFilterPage() {
	const userRole = await getUserRole();
	let initialClass;

	switch (true) {
		case moderatingRoles.includes(userRole):
			initialClass = await getInitialClass();
			break;

		case userRole === 'student':
			initialClass = await getStudentClass('_id');
			break;

		case userRole === 'parent':
			initialClass = await getStudentClassByParent();
			break;
		default:
			throw new Error(`unsupported role: ${userRole}`);
	}

	redirect(`/${BASE_ROUTE}/lesson-schedule/${initialClass}`);
}
