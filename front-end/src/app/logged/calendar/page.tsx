import { redirect } from 'next/navigation';

import { getInitialClass } from '../../../api/adminApi';

import { moderatingRoles } from '../../../constants/permissions';
import { BASE_ROUTE } from '../../../constants/routing';
import { getStudentClass, getStudentClassByParent, getUserRole } from '../../../api/profileDataApi';
import { getCurrentMonth } from '../../../utils/getCurrentMonth';
import { getCurrentYear } from '../../../utils/getCurrentYear';

export default async function CalendarFilterPage() {
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

	redirect(`/${BASE_ROUTE}/calendar/${initialClass}?month=${getCurrentMonth('normal')}&year=${getCurrentYear()}`);
}
