import { redirect } from 'next/navigation';

import { getInitialClass } from '../../../api/adminApi';
import { moderatingRoles } from '../../../constants/permissions';
import { initialSubjectKey } from '../../../constants/subjects';
import { firstSemesterKey } from '../../../constants/semesters';
import { getUserRole } from '../../../api/profileDataApi';
import { BASE_ROUTE } from '../../../constants/routing';

export default async function GradesFilterPage() {
	const userRole = await getUserRole();
	const initialClass = moderatingRoles.includes(userRole) ? await getInitialClass() : null;

	const redirectModeratingRoles = `/${BASE_ROUTE}/grades/${initialClass}?subject=${initialSubjectKey}&semester=${firstSemesterKey}`;
	const redirectNoModeratingRoles = `/${BASE_ROUTE}/grades/student_grades`;

	moderatingRoles.includes(userRole) ? redirect(redirectModeratingRoles) : redirect(redirectNoModeratingRoles);
}
