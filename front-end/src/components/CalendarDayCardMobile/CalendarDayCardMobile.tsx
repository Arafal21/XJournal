'use client';

import styles from './CalendarDayCardMobile.module.scss';
import { CalendarBlock } from '../CalendarBlock/CalendarBlock';
import { CalendarEvent } from '../../types/calendarProps';
import { convertValue } from '../../utils/convertValue';
import { availableSubjects, subjectKeysForBackend, subjectThemeMap } from '../../constants/subjects';

interface CalendarDayCardMobileProps {
	dateNumber: number;
	weekdayShort: string;
	isToday: boolean;
	calendarData: CalendarEvent[];
	monthIndex: number;
	year: number;
	isTeacherOrPrincipal: boolean;
	onAddExam: () => void;
	onEditExam: (exam: CalendarEvent) => void;
}

export function CalendarDayCardMobile({
	dateNumber,
	weekdayShort,
	isToday,
	calendarData,
	monthIndex,
	year,
	isTeacherOrPrincipal,
	onAddExam,
	onEditExam,
}: CalendarDayCardMobileProps) {
	const examsForThisDay = calendarData
		.filter((exam) => {
			const d = new Date(exam.startDate);
			return d.getFullYear() === year && d.getMonth() === monthIndex && d.getDate() === dateNumber;
		})
		.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

	return (
		<div className={styles.dayCard}>
			<div className={`${styles.dayContainer} ${isToday ? styles.active : ''}`}>
				<p className={styles.dayNumber}>{dateNumber}</p>
				<p className={styles.dayName}>{weekdayShort}</p>
			</div>

			<div className={styles.examContainer}>
				{examsForThisDay.map((exam) => {
					const key = convertValue(subjectKeysForBackend, availableSubjects, exam.subject);
					const theme = subjectThemeMap[key] || '';

					return (
						<CalendarBlock
							key={exam._id}
							subject={exam.subject}
							eventType={exam.eventType}
							start={exam.startDate}
							end={exam.endDate}
							theme={theme}
							editButton={isTeacherOrPrincipal}
							onClick={() => onEditExam(exam)}
							empty={false}
						/>
					);
				})}

				{isTeacherOrPrincipal && examsForThisDay.length < 3 && (
					<CalendarBlock empty editButton={false} onClick={onAddExam} />
				)}
			</div>
		</div>
	);
}
