'use server';

import styles from './GradesPanel.module.scss';

import { Suspense } from 'react';

import { getGradesStudentParent } from '../../api/gradesApi';
import { getStudentsFromClass } from '../../api/adminApi';

import { ClassSelectMobile } from '../ClassSelectMobile/ClassSelectMobile';
import { GradesForStudent } from '../GradesForStudent/GradesForStudent';
import { GradesManaging } from '../GradesManaging/GradesManaging';
import { GradesAdminStudent, StudentInClass } from '../../types/gradesProps';
import { SchoolSubjects } from '../SchoolSubjects/SchoolSubjects';
import { LoadingThreeDotsJumping } from '../MotionDev/LoadingThreeDotsJumping';
import { ManagingShowedSemester } from '../ManagingShowedSemester/ManagingShowedSemester';

interface GradesPanelProps {
	isTeacherOrPrincipal: boolean;
	gradesData: GradesAdminStudent[];
	classId: string;
}

export async function GradesPanel({ isTeacherOrPrincipal, gradesData, classId }: GradesPanelProps) {
	// avoiding the error of fetching data serving teachers, being logged on the student/parent
	const studentsInSelectedClass: StudentInClass[] = isTeacherOrPrincipal ? await getStudentsFromClass(classId) : [];
	const studentsGrades: GradesAdminStudent[] = isTeacherOrPrincipal ? gradesData : await getGradesStudentParent();

	return (
		<>
			<div className={styles.reverse}>
				{isTeacherOrPrincipal && (
					<>
						<ManagingShowedSemester isTeacherOrPrincipal={isTeacherOrPrincipal} />
						<ClassSelectMobile />
					</>
				)}
			</div>

			{isTeacherOrPrincipal && (
				<>
					<SchoolSubjects />
					<div className={styles.line}></div>
				</>
			)}

			<Suspense fallback={<LoadingThreeDotsJumping />}>
				{isTeacherOrPrincipal && (
					<GradesManaging studentsInSelectedClass={studentsInSelectedClass} studentsGrades={studentsGrades} />
				)}

				{!isTeacherOrPrincipal && <GradesForStudent />}
			</Suspense>
		</>
	);
}
