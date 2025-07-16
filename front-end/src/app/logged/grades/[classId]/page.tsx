import { getGradesAdmin } from '../../../../api/gradesApi';
import { getUserRole } from '../../../../api/profileDataApi';

import { moderatingRoles } from '../../../../constants/permissions';
import { firstSemesterKey } from '../../../../constants/semesters';
import { initialSubjectKey } from '../../../../constants/subjects';
import { GradesPage } from '../../../_views/GradesPage/GradesPage';

export const metadata = {
	title: 'Grades - Stay Updated with Academic Progress | XJournal',
	description:
		'Easily access and review academic performance. XJournal helps you stay informed and organized with all your grades in one place.',
};

interface GradesRouteProps {
	params: Promise<{ classId: string }>;
	searchParams: Promise<{ semester?: string; subject?: string }>;
}

export default async function GradesRoute({ params, searchParams }: GradesRouteProps) {
	const { classId } = await params;
	const { subject, semester } = await searchParams;

	const actualSubject = subject ?? initialSubjectKey;
	const actualSemester = semester ?? firstSemesterKey;

	const userRole = await getUserRole();

	const gradesData = moderatingRoles.includes(userRole)
		? await getGradesAdmin(classId, actualSemester, actualSubject)
		: null;

	return (
		<GradesPage
			userRole={userRole}
			selectedClass={classId}
			initialSemester={actualSemester}
			initialSubject={actualSubject}
			gradesData={gradesData}
		/>
	);
}
