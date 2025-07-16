import styles from './CalendarNavMobile.module.scss';

import { ClassSelectMobile } from '../ClassSelectMobile/ClassSelectMobile';
import { MonthSelectMobile } from '../MobileFilterNavigation/MonthSelectMobile';

interface CalendarNavMobileProps {
	isTeacherOrPrincipal: boolean
}

export function CalendarNavMobile({isTeacherOrPrincipal}: CalendarNavMobileProps) {
	return (
		<nav>
			{isTeacherOrPrincipal ? (
				<>
					<div className={styles.daySelectMobileContainer}>
						<ClassSelectMobile />
					</div>
					<div className={styles.daySelectMobileContainer}>
						<MonthSelectMobile />
					</div>
				</>
			) : (
				<div className={styles.daySelectMobileContainer}>
					<MonthSelectMobile />
				</div>
			)}
		</nav>
	);
}
