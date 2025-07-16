'use client';

import styles from './CalendarBlock.module.scss';

import { formatTimeUTC } from '../../utils/formatTimeUTC';
import { convertValue } from '../../utils/convertValue';

import { availableExams, examsKeysForBackend } from '../../constants/calendar';
import { availableSubjects, subjectKeysForBackend } from '../../constants/subjects';
import { EditIcon } from '../../icons/EditIcon';

interface CalendarBlockProps {
	subject?: string;
	eventType?: string;
	start?: string;
	end?: string;
	isMobileStyleRequired?: boolean;
	editButton?: boolean;
	theme?: string;
	onClick?: () => void;
	empty: boolean;
}

export function CalendarBlock({
	subject,
	eventType,
	start,
	end,
	isMobileStyleRequired,
	editButton,
	theme,
	onClick,
	empty,
}: CalendarBlockProps) {
	return (
		<button
			type='button'
			className={`${styles.examBlock} ${theme} ${isMobileStyleRequired ? styles.forceMobileStyles : null} ${
				empty ? styles.emptyBlock : null
			}`}
			onClick={onClick}>
			<div className={styles.examInfo}>
				{!empty && (
					<div className={styles.hours}>
						<p className={`${styles.examTime} themeTextColor`}>{formatTimeUTC(start)}</p>
						<p className={`${styles.examTime} themeTextColor`}>{formatTimeUTC(end)}</p>
					</div>
				)}

				{empty ? (
					<p className={`${styles.examDetails}`}>Add new event</p>
				) : (
					<p className={`${styles.examDetails} themeTextColor`}>
						{convertValue(examsKeysForBackend, availableExams, eventType!)} -{' '}
						{convertValue(subjectKeysForBackend, availableSubjects, subject!)}
					</p>
				)}
			</div>

			<div className={styles.editOption}>
				{editButton && <EditIcon className="themeTextColor" />}
			</div>
		</button>
	);
}
