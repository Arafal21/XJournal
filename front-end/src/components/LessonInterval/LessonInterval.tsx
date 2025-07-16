import styles from './LessonInterval.module.scss';

import { EndLessonDropdown } from '../../ui/dropdownMenus/EndLessonDropdown/EndLessonDropdown';
import { StartLessonDropdown } from '../../ui/dropdownMenus/StartLessonDropdown/StartLessonDropdown';
import { LessonTimeStamps } from '../LessonTimeStamps/LessonTimeStamps';

interface LessonIntervalProps {
	selectedHours: { startHour: string; endHour: string };
	setSelectedHours: React.Dispatch<React.SetStateAction<{ startHour: string; endHour: string }>>;
}

export function LessonInterval({ selectedHours, setSelectedHours }: LessonIntervalProps) {
	return (
		<>
			<div className={`${styles.timeLabelContainer} hiddenOnMobile`}>
				<p className={styles.startLabel}>Start</p>
				<p className={styles.endLabel}>End</p>
			</div>

			<div className={`${styles.timeInputs} hiddenOnMobile`}>
				<div className={styles.timeContainer}>
					<StartLessonDropdown maxWidth selectedHours={selectedHours} setSelectedHours={setSelectedHours} />
				</div>

				<div className={styles.line}></div>

				<div className={styles.timeContainer}>
					<EndLessonDropdown maxWidth selectedHours={selectedHours} />
				</div>
			</div>

			<div className='hiddenOnDesktop'>
				<LessonTimeStamps
					selected={selectedHours.startHour + ' - ' + selectedHours.endHour}
					onSelect={(value) => {
						const [start, end] = value.split(' - ');
						setSelectedHours({ startHour: start, endHour: end });
					}}
				/>
			</div>
		</>
	);
}
