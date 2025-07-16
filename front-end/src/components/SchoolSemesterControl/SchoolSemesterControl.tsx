'use client';

import styles from './SchoolSemesterControl.module.scss';

import { SemesterButton } from '../../ui/buttons/SemesterButton/SemesterButton';

import { convertValue } from '../../utils/convertValue';
import {
	availableSemesters,
	firstSemesterKey,
	lastSemesterKey,
	semestersKeysForBackend,
} from '../../constants/semesters';
import { useRouteNavigation } from '../../hooks/useRouteNavigation';

interface SchoolSemesterControlTypes {
	isTeacherOrPrincipal: boolean;
}

export function SchoolSemesterControl({ isTeacherOrPrincipal }: SchoolSemesterControlTypes) {
	const { selectedSemester, navigateToGrades } = useRouteNavigation();

	return (
		<div className={`${!isTeacherOrPrincipal ? 'hiddenOnDesktop' : null} ${styles.semesterContainer}`}>
			<SemesterButton
				semester={firstSemesterKey}
				currentSemester={selectedSemester}
				onClick={() => navigateToGrades({ semester: firstSemesterKey })}
				first>
				{convertValue(semestersKeysForBackend, availableSemesters, firstSemesterKey)}
			</SemesterButton>

			<SemesterButton
				semester={lastSemesterKey}
				currentSemester={selectedSemester}
				onClick={() => navigateToGrades({ semester: lastSemesterKey })}>
				{convertValue(semestersKeysForBackend, availableSemesters, lastSemesterKey)}
			</SemesterButton>
		</div>
	);
}
