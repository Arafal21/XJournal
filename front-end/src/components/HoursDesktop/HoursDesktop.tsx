import styles from './HoursDesktop.module.scss';

import { lessonTimeSlots } from '../../constants/academicConstans';

export function HoursDesktop() {
	return (
		<div className={`${styles.column}`}>
			<div className={styles.blank}></div>
			<ul className={styles.hours}>
				{lessonTimeSlots.map((hour) => (
					<li key={hour} className={styles.hour}>
						{hour}
					</li>
				))}
			</ul>
		</div>
	);
}
