'use client';

import styles from './ScheduleBlockDesktop.module.scss';

import { use, useEffect, useState } from 'react';

import { schoolDays } from '../../constants/academicConstans';

import { LoadingThreeDotsJumping } from '../MotionDev/LoadingThreeDotsJumping';
import { mapScheduleDataToCalendar } from '../../utils/mapScheduleDataToCalendar';
import { LessonFromApi, SelectedHours } from '../../types/lessonScheduleProps';
import { initialSubjectKey, subjectThemeMap } from '../../constants/subjects';
import { SelectedDayContext } from '../../contexts/SelectedDayContext';
import { timeBlockHours } from '../../utils/timeBlockHours';
import { ScheduleBlockButton } from '../../ui/buttons/ScheduleBlockButton/ScheduleBlockButton';
import { SelectedSubjectContext } from '../../contexts/SelectedSubjectContext';

interface ScheduleBlockDesktop {
	handleToggleModal: () => void;
	scheduleData: LessonFromApi[];
	isTeacherOrPrincipal: boolean;
	setSelectedHour: (hours: SelectedHours | null) => void;
	setSelectedLesson: (lessonId: string | null) => void;
}

export function ScheduleBlockDesktop({
	handleToggleModal,
	scheduleData,
	isTeacherOrPrincipal,
	setSelectedHour,
	setSelectedLesson,
}: ScheduleBlockDesktop) {
	const [teachersData, setTeachersData] = useState<Record<string, string>>({});
	const [classSchedule, setClassSchedule] = useState<Record<string, string[]> | null>(null);
	const { setSelectedDay } = use(SelectedDayContext);
	const { setSelectedSubject } = use(SelectedSubjectContext);

	useEffect(() => {
		if (scheduleData.length === 0) {
			setClassSchedule({
				Monday: Array(9).fill(''),
				Tuesday: Array(9).fill(''),
				Wednesday: Array(9).fill(''),
				Thursday: Array(9).fill(''),
				Friday: Array(9).fill(''),
			});
			return;
		}

		const teacherMap: Record<string, string> = {};
		scheduleData.forEach((lesson) => {
			const displaySubject = lesson.subject;
			teacherMap[displaySubject] = (lesson as any).teacherName || '';
		});
		setTeachersData(teacherMap);

		const mappedCalendar = mapScheduleDataToCalendar(scheduleData);
		setClassSchedule(mappedCalendar);
	}, [scheduleData]);

	if (!classSchedule) {
		return <LoadingThreeDotsJumping />;
	}

	const handleClick = (day: string, index: number) => {
		handleToggleModal();
		setSelectedDay(day);
		const startHour = timeBlockHours(index).startHour;
		const endHour = timeBlockHours(index).endHour;
		setSelectedHour({ startHour, endHour });
	};

	return (
		<div className={`${styles.daysContainer} hiddenOnMobile`}>
			{schoolDays.map((day) => {
				const slots = classSchedule[day] || [];

				return (
					<div className={styles.scheduleBlock} key={day}>
						<div className={styles.dayText}>{day}</div>
						{slots.map((lessonName, index) => {
							const theme = subjectThemeMap[lessonName] || 'empty';
							const teacherName = teachersData[lessonName] || '';
							const { startHour, endHour } = timeBlockHours(index);
							const lessonTime = lessonName ? `${startHour} - ${endHour}` : '';

							const foundLesson = scheduleData.find(
								(lesson) =>
									lesson.dayOfWeek.toLowerCase() === day.toLowerCase() &&
									lesson.startTime === startHour,
							);

							return (
								<ScheduleBlockButton
									key={`${day}-${startHour}-${endHour}`}
									theme={theme}
									disabled={!isTeacherOrPrincipal}
									lessonName={lessonName}
									lessonTeacher={teacherName}
									lessonTime={lessonTime}
									onClick={() => {
										setSelectedLesson(foundLesson?._id ?? null);
										setSelectedSubject(lessonName || initialSubjectKey);
										handleClick(day, index);
									}}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
