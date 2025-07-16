import styles from './SchoolDaysMobile.module.scss';

import { DayButton } from '../../ui/buttons/DayButton/DayButton';

export async function SchoolDaysMobile({}) {
	return (
		<div className={`${styles.dayContainer} hiddenOnDesktop`}>
			<DayButton />
		</div>
	);
}
