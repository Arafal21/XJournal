'use client';

import styles from './DaySelectMobile.module.scss';

import { use } from 'react';

import { PreviousButton } from '../../ui/buttons/PreviousButton/PreviousButton';

import { SelectedDayContext } from '../../contexts/SelectedDayContext';
import { schoolDays } from '../../constants/academicConstans';
import { NextButton } from '../../ui/buttons/NextButton/NextButton';

export function DaySelectMobile() {
	const { selectedDay, setSelectedDay } = use(SelectedDayContext);

	const currentIndex = schoolDays.findIndex((day) => day === selectedDay);

	const handlePrevious = () => {
		if (schoolDays.length === 0) return;
		const prevIndex = (currentIndex - 1 + schoolDays.length) % schoolDays.length;
		setSelectedDay(schoolDays[prevIndex]);
	};

	const handleNext = () => {
		if (schoolDays.length === 0) return;
		const nextIndex = (currentIndex + 1) % schoolDays.length;
		setSelectedDay(schoolDays[nextIndex]);
	};

	return (
		<div className={`${styles.daySelectContainer} hiddenOnDesktop`}>
			<PreviousButton onClick={handlePrevious} />
			<span className={styles.classItem}>{selectedDay}</span>
			<NextButton onClick={handleNext} />
		</div>
	);
}
