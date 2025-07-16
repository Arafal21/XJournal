import styles from './GradesForStudent.module.scss';

import { getGradesStudentParent } from '../../api/gradesApi';
import { firstSemesterKey, firstSemesterLabel, lastSemesterKey, lastSemesterLabel } from '../../constants/semesters';

import { SemesterSection } from '../SemesterSection/SemesterSection';

interface ApiGrade {
	season: string;
	subject: string;
	grade: number;
}

interface SemesterGrade {
	subject: string;
	grade: number;
}

export async function GradesForStudent() {
	try {
		const userGrades: ApiGrade[] = await getGradesStudentParent();

		const fallWinter: SemesterGrade[] = userGrades
			.filter((g) => g.season === firstSemesterKey)
			.map(({ subject, grade }) => ({ subject, grade }));

		const springSummer: SemesterGrade[] = userGrades
			.filter((g) => g.season === lastSemesterKey)
			.map(({ subject, grade }) => ({ subject, grade }));

		return (
			<>
				<h2 className={`${styles.heading} hiddenOnDesktop`}>Your grades</h2>
				<SemesterSection title={firstSemesterLabel} grades={fallWinter} />
				<SemesterSection title={lastSemesterLabel} grades={springSummer} />
			</>
		);
	} catch {
		return <p>Unfortunately, student&apos;s grades could not be fetched.</p>;
	}
}
