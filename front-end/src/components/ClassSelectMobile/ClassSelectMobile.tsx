'use client';

import styles from './ClassSelectMobile.module.scss';

import { useClassNames } from '../../hooks/useClassNames';
import { PreviousButton } from '../../ui/buttons/PreviousButton/PreviousButton';
import { availableClasses, classesKeysForBackend } from '../../constants/classes';
import { convertValue } from '../../utils/convertValue';
import { NextButton } from '../../ui/buttons/NextButton/NextButton';
import { useRouteNavigation } from '../../hooks/useRouteNavigation';

export function ClassSelectMobile() {
	const classNames = useClassNames();
	const { navigateToGrades, selectedClass } = useRouteNavigation();

	const currentIndex = classNames.findIndex((c) => c === selectedClass);

	const handlePrevious = () => {
		if (classNames.length === 0) return;
		const prevIndex = (currentIndex - 1 + classNames.length) % classNames.length;
		const newClass = classNames[prevIndex];
		navigateToGrades({ className: newClass });
	};

	const handleNext = () => {
		if (classNames.length === 0) return;
		const nextIndex = (currentIndex + 1) % classNames.length;
		const newClass = classNames[nextIndex];
		navigateToGrades({ className: newClass });
	};

	const currentlyDisplayingClass = convertValue(classesKeysForBackend, availableClasses, selectedClass);

	return (
		<div className={`${styles.classesContainer} hiddenOnDesktop`}>
			<PreviousButton onClick={handlePrevious} />
			<span className={styles.classItem}>{currentlyDisplayingClass}</span>
			<NextButton onClick={handleNext} />
		</div>
	);
}
