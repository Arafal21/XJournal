import styles from './ManagingShowedSemester.module.scss';

import { SchoolSemesterControl } from '../SchoolSemesterControl/SchoolSemesterControl';
import { SchoolSemesterYear } from '../SchoolSemesterYear/SchoolSemesterYear';

interface ManagingShowedSemesterProps {
	isTeacherOrPrincipal: boolean;
}

export function ManagingShowedSemester({ isTeacherOrPrincipal }: ManagingShowedSemesterProps) {
	return (
		<section className={styles.row}>
			<SchoolSemesterYear isTeacherOrPrincipal={isTeacherOrPrincipal} />
			<SchoolSemesterControl isTeacherOrPrincipal={isTeacherOrPrincipal} />
		</section>
	);
}
