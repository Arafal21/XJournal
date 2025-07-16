'use client';

import styles from './DayButton.module.scss';

import { use } from 'react';
import { SelectedDayContext } from '../../../contexts/SelectedDayContext';
import { schoolDays } from '../../../constants/academicConstans';

export function DayButton() {
	const { selectedDay, setSelectedDay } = use(SelectedDayContext);

	return (
		<>
			{schoolDays.map((item) => (
				<button
					key={item}
					className={`${styles.dayButton} ${selectedDay === item ? styles.active : null}`}
					onClick={() => setSelectedDay(item)}>
					{item}
				</button>
			))}
		</>
	);
}
