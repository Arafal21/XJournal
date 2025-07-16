import styles from './LessonTimeStamps.module.scss';

import { lessomTimeStamps } from '../../constants/academicConstans';
import { SelectableButton } from '../../ui/buttons/SelectableButton/SelectableButton';

type TimeSlot = (typeof lessomTimeStamps)[number];

interface LessonTimeStampsProps {
	selected: TimeSlot;
	onSelect: (value: TimeSlot) => void;
}

export function LessonTimeStamps({ selected, onSelect }: LessonTimeStampsProps) {
	return (
		<div className={styles.subjectContainer}>
			<SelectableButton data={lessomTimeStamps} selected={selected} onSelect={onSelect} />
		</div>
	);
}
