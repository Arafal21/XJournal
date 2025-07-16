'use client';

import styles from './HoursAndPlanMobile.module.scss';

import { useState, useEffect, use } from 'react';

import { SelectedDayContext } from '../../contexts/SelectedDayContext';
import { lessonTimeSlots } from '../../constants/academicConstans';
import { mapScheduleDataToCalendar } from '../../utils/mapScheduleDataToCalendar';
import { LessonFromApi, SelectedHours } from '../../types/lessonScheduleProps';
import { LoadingThreeDotsJumping } from '../MotionDev/LoadingThreeDotsJumping';
import { initialSubjectKey, subjectThemeMap } from '../../constants/subjects';
import { ScheduleBlockButton } from '../../ui/buttons/ScheduleBlockButton/ScheduleBlockButton';
import { timeBlockHours } from '../../utils/timeBlockHours';
import { SelectedSubjectContext } from '../../contexts/SelectedSubjectContext';

interface HoursAndPlanMobileProps {
	handleToggleModal: () => void;
	scheduleData: LessonFromApi[];
	isTeacherOrPrincipal: boolean;
	setSelectedHour: (hours: SelectedHours | null) => void;
	setSelectedLesson: (lessonId: string | null) => void;
}

export function HoursAndPlanMobile({
	handleToggleModal,
	scheduleData,
	isTeacherOrPrincipal,
	setSelectedHour,
	setSelectedLesson,
}: HoursAndPlanMobileProps) {
	const { selectedDay } = use(SelectedDayContext);
	const { setSelectedSubject } = use(SelectedSubjectContext);

	const [classSchedule, setClassSchedule] = useState<Record<string, string[]> | null>(null);
	const [teachersData, setTeachersData] = useState<Record<string, string>>({});

	useEffect(() => {
		const tMap: Record<string, string> = {};
		scheduleData.forEach((lesson) => {
			const displaySubject = lesson.subject;
			tMap[displaySubject] = (lesson as any).teacherName || '';
		});
		setTeachersData(tMap);

		if (scheduleData.length === 0) {
			setClassSchedule({
				Monday: Array(9).fill(''),
				Tuesday: Array(9).fill(''),
				Wednesday: Array(9).fill(''),
				Thursday: Array(9).fill(''),
				Friday: Array(9).fill(''),
			});
		} else {
			setClassSchedule(mapScheduleDataToCalendar(scheduleData));
		}
	}, [scheduleData]);

	if (!classSchedule) {
		return <LoadingThreeDotsJumping />;
	}

	const daySlots = classSchedule[selectedDay] ?? [];

	return (
		<div className={`${styles.column} hiddenOnDesktop`}>
			<div className={styles.blank}></div>
			<ul className={styles.hours}>
				{lessonTimeSlots.map((hour, index) => {
					const lessonName = daySlots[index] || '';
					const theme = subjectThemeMap[lessonName] || 'empty';
					const teacherName = teachersData[lessonName] || '';
					const nextHour = lessonTimeSlots[index + 1] ?? '';
					const lessonTime = lessonName ? `${hour} - ${nextHour}` : '';

					const foundLesson = scheduleData.find(
						(lesson) =>
							// 1) the day from lesson must match the selected day from the context
							lesson.dayOfWeek.toLowerCase() === selectedDay.toLowerCase() &&
							// 2) the start time must match the block
							lesson.startTime === timeBlockHours(index).startHour,
					);

					return (
						<div key={hour} className={styles.row}>
							<li className={styles.hour}>{hour}</li>
							<ScheduleBlockButton
								disabled={!isTeacherOrPrincipal}
								theme={theme}
								lessonName={lessonName}
								lessonTeacher={teacherName}
								lessonTime={lessonTime}
								onClick={() => {
									setSelectedLesson(foundLesson?._id ?? null);
									const { startHour, endHour } = timeBlockHours(index);
									setSelectedHour({ startHour, endHour });
									setSelectedSubject(lessonName || initialSubjectKey);
									handleToggleModal();
								}}
							/>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
