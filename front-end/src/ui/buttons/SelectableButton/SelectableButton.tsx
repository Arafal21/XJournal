'use client';

import styles from './SelectableButton.module.scss';

import { availableSubjects, subjectKeysForBackend } from '../../../constants/subjects';
import { convertValue } from '../../../utils/convertValue';

interface SelectableButtonProps {
	data: string[];
	selected: string;
	onSelect: (value: string) => void;
}

export function SelectableButton({ data, selected, onSelect }: SelectableButtonProps) {
	return data.map((item) => (
		<button
			key={item}
			className={`${styles.selectableButton} ${selected === item ? styles.active : null}`}
			onClick={() => onSelect(item)}>
			{convertValue(subjectKeysForBackend, availableSubjects, item)}
		</button>
	));
}
