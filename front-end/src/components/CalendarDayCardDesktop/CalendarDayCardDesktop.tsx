'use client';

import styles from './CalendarDayCardDesktop.module.scss';

import { CalendarBlock } from '../CalendarBlock/CalendarBlock';
import { CalendarEvent } from '../../types/calendarProps';
import { convertValue } from '../../utils/convertValue';
import { availableSubjects, subjectKeysForBackend, subjectThemeMap } from '../../constants/subjects';

interface CalendarDayCardDesktopProps {
	day: number;
	isToday: boolean;
	calendarData: CalendarEvent[];
	isTeacherOrPrincipal: boolean;
	onClick: () => void;
}

export function CalendarDayCardDesktop({ day, isToday, calendarData, onClick }: CalendarDayCardDesktopProps) {
	const examsForThisDay = 
		calendarData
			.filter((exam) => {
				const d = new Date(exam.startDate);
				return d.getDate() === day;
			})
			.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

	return (
		<div className={styles.block} onClick={onClick}>
			<div className={styles.dayContainer}>
				<p className={isToday ? styles.activeDay : ''}>{day}</p>
			</div>

			<div className={styles.examContainer}>
				{examsForThisDay.map((exam) => {
					const mapped = convertValue(subjectKeysForBackend, availableSubjects, exam.subject);
					const theme = subjectThemeMap[mapped] || '';

					return (
						<CalendarBlock
							key={exam._id}
							subject={exam.subject}
							eventType={exam.eventType}
							empty={false}
							theme={theme}
							editButton={false}
						/>
					);
				})}
			</div>
		</div>
	);
}
