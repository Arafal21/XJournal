'use client';

import styles from './GradesManaging.module.scss';

import { use } from 'react';

import { GradesStudentRow } from '../GradesStudentRow/GradesStudentRow';
import { GradesAdminStudent, StudentInClass } from '../../types/gradesProps';
import { SelectedClassContext } from '../../contexts/SelectedClassContext';
import { availableClasses, classesKeysForBackend } from '../../constants/classes';
import { convertValue } from '../../utils/convertValue';

interface GradesManagingProps {
	studentsInSelectedClass: StudentInClass[];
	studentsGrades: GradesAdminStudent[];
}

export function GradesManaging({ studentsGrades, studentsInSelectedClass }: GradesManagingProps) {
	const { selectedClass } = use(SelectedClassContext);

	const currentlyDisplayingClass = convertValue(classesKeysForBackend, availableClasses, selectedClass);

	try {
		return (
			<section>
				<h2 className={`${styles.displayingClass} hiddenOnDesktop`}>Class members</h2>
				<h3 className={`${styles.displayingClass} hiddenOnMobile`}>{currentlyDisplayingClass}</h3>
				<GradesStudentRow studentsInSelectedClass={studentsInSelectedClass} studentsGrades={studentsGrades} />
			</section>
		);
	} catch {
		return <p>Unfortunately, grades panel isn&apos;t available right now.</p>;
	}
}
