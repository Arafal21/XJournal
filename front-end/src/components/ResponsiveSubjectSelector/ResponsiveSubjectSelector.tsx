import styles from './ResponsiveSubjectSelector.module.scss';

import { DropdownMenuSelectSubject } from '../../ui/dropdownMenus/DropdownMenuSelectSubject/DropdownMenuSelectSubject';
import { SchoolSubjects } from '../SchoolSubjects/SchoolSubjects';

export function ResponsiveSubjectSelector() {
	return (
		<div className={styles.responsiveSubjectSelectorContainer}>
			<div className='hiddenOnMobile'>
				<p className={styles.subjectLabel}>Subject</p>
				<div className={styles.subjectDropdown}>
					<DropdownMenuSelectSubject />
				</div>
			</div>
			<div className='hiddenOnDesktop'>
				<p className={styles.subjectLabel}>Select a subject</p>
				<div className={styles.subjectDropdown}>
					<SchoolSubjects />
				</div>
			</div>
		</div>
	);
}
