import styles from './MonthLongNavigation.module.scss';

import { NextButton } from '../../ui/buttons/NextButton/NextButton';
import { PreviousButton } from '../../ui/buttons/PreviousButton/PreviousButton';
import { convertValue } from '../../utils/convertValue';
import { availableMonths, monthsKeysForBackend } from '../../constants/calendar';
import { useRouteNavigation } from '../../hooks/useRouteNavigation';

export function MonthLongNavigation() {
	const { navigateToGrades, selectedMonthYear, selectedYear } = useRouteNavigation();

	const yearNumber = +selectedYear;

	const currentIndex = availableMonths.findIndex((m) => m === selectedMonthYear);

	const handlePrevious = () => {
		if (!availableMonths.length) return;

		const prevIndex = (currentIndex - 1 + availableMonths.length) % availableMonths.length;
		const newMonth = availableMonths[prevIndex];

		const wrappedBack = currentIndex === 0;
		const newYear = wrappedBack ? yearNumber - 1 : yearNumber;

		navigateToGrades({ month: newMonth, year: newYear });
	};

	const handleNext = () => {
		if (!availableMonths.length) return;

		const nextIndex = (currentIndex + 1) % availableMonths.length;
		const newMonth = availableMonths[nextIndex];

		const wrappedForward = currentIndex === availableMonths.length - 1;
		const newYear = wrappedForward ? yearNumber + 1 : yearNumber;

		navigateToGrades({ month: newMonth, year: newYear });
	};

	const currentlyDisplayingMonth = convertValue(monthsKeysForBackend, availableMonths, selectedMonthYear);

	return (
		<div className={styles.calendarControl}>
			<PreviousButton onClick={handlePrevious} />
			<p className={styles.selectedPeriod}>
				{currentlyDisplayingMonth} {yearNumber}
			</p>
			<NextButton onClick={handleNext} />
		</div>
	);
}
