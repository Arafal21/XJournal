import styles from './LessonTimeStamps.module.scss';

import { lessonTimeStamps } from '../../constants/academicConstans';
import { SelectableButton } from '../../ui/buttons/SelectableButton/SelectableButton';

type TimeSlot = (typeof lessonTimeStamps)[number];

interface LessonTimeStampsProps {
	selected: TimeSlot;
	onSelect: (value: TimeSlot) => void;
}

export function LessonTimeStamps({ selected, onSelect }: LessonTimeStampsProps) {
	return (
		<div className={styles.subjectContainer}>
			<SelectableButton data={lessonTimeStamps} selected={selected} onSelect={onSelect} />
		</div>
	);
}
