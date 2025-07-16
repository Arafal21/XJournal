'use client';

import styles from './SchoolSubjects.module.scss';

import { useRouteNavigation } from '../../hooks/useRouteNavigation';
import { availableSubjects, subjectKeysForBackend } from '../../constants/subjects';
import { convertValue } from '../../utils/convertValue';
import { SelectableButton } from '../../ui/buttons/SelectableButton/SelectableButton';

export function SchoolSubjects() {
	const { selectedSubject, navigateToGrades } = useRouteNavigation();

	return (
		<section className={styles.subjectContainer}>
			<SelectableButton
				data={subjectKeysForBackend}
				selected={convertValue(availableSubjects, subjectKeysForBackend, selectedSubject)}
				onSelect={(subject) => navigateToGrades({ subject: subject })}
			/>
		</section>
	);
}
