import styles from './ResponsiveHourSelector.module.scss';

import { LessonInterval } from '../LessonInterval/LessonInterval';

interface ResponsiveHourSelectorProps {
	selectedHours: { startHour: string; endHour: string };
	setSelectedHours: React.Dispatch<React.SetStateAction<{ startHour: string; endHour: string }>>;
}

export function ResponsiveHourSelector({ selectedHours, setSelectedHours }: ResponsiveHourSelectorProps) {
	return (
		<>
			<p className={`${styles.title} hiddenOnDesktop`}>Select a time-slot</p>
			<LessonInterval selectedHours={selectedHours} setSelectedHours={setSelectedHours} />
		</>
	);
}
