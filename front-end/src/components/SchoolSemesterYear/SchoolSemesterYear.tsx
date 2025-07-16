'use client';

import styles from './SchoolSemesterYear.module.scss';

import { schoolYear } from '../../constants/constans';

import { PreviousButton } from '../../ui/buttons/PreviousButton/PreviousButton';

import { firstSemesterKey, lastSemesterKey } from '../../constants/semesters';
import { NextButton } from '../../ui/buttons/NextButton/NextButton';
import { useRouteNavigation } from '../../hooks/useRouteNavigation';

interface SchoolSemesterYearProps {
	isTeacherOrPrincipal: boolean;
}

export function SchoolSemesterYear({ isTeacherOrPrincipal }: SchoolSemesterYearProps) {
	const { navigateToGrades } = useRouteNavigation();

	return (
		<div className={`${isTeacherOrPrincipal ? 'hiddenOnMobile' : 'hiddenOnDesktop'} ${styles.btnContainer}`}>
			<div className={styles.semesterBtn}>
				<PreviousButton onClick={() => navigateToGrades({ semester: firstSemesterKey })} />
				<span className={styles.text}>{schoolYear}</span>
				<NextButton onClick={() => navigateToGrades({ semester: lastSemesterKey })} />
			</div>
		</div>
	);
}
