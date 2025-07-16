'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { CalendarNavMobile } from '../CalendarNavMobile/CalendarNavMobile';
import { ResponsiveModalBase } from '../ResponsiveModalBase/ResponsiveModalBase';
import { CalendarActionModal } from '../../ui/modalContent/CalendarActionModal/CalendarActionModal';
import { resolveCalendarParams } from '../../utils/resolveCalendarParams';
import { generateCalendarDays } from '../../utils/generateCalendarDays';
import { CalendarEvent, SelectedExam } from '../../types/calendarProps';
import { CalendarDayCardMobile } from '../CalendarDayCardMobile/CalendarDayCardMobile';

interface CalendarMobileComponentProps {
	calendarData: CalendarEvent[];
	isTeacherOrPrincipal: boolean;
}

export function CalendarMobileComponent({ calendarData, isTeacherOrPrincipal }: CalendarMobileComponentProps) {
	const [isActionModalVisible, setIsActionModalVisible] = useState(false);
	const [selectedExam, setSelectedExam] = useState<SelectedExam>({
		id: null,
		startDate: undefined,
		endDate: undefined,
		subject: undefined,
	});

	const searchParams = useSearchParams();
	const { year, monthIndex } = resolveCalendarParams(searchParams);
	const days = generateCalendarDays(year, monthIndex);

	const openAddModal = (day: number) => {
		if (!isTeacherOrPrincipal) return;

		const dateObj = new Date(year, monthIndex, day);
		
		const isoDay = new Date(
			Date.UTC(year, monthIndex, day, dateObj.getHours(), dateObj.getMinutes()),
		).toISOString();

		setSelectedExam({
			id: null,
			startDate: isoDay,
			endDate: isoDay,
			subject: undefined,
		});
		setIsActionModalVisible(true);
	};

	const openEditModal = (exam: CalendarEvent) => {
		if (!isTeacherOrPrincipal) return;
		setSelectedExam({
			id: exam._id,
			startDate: exam.startDate,
			endDate: exam.endDate,
			subject: exam.subject,
		});
		setIsActionModalVisible(true);
	};

	const closeActionModal = () => {
		setIsActionModalVisible(false);
	};

	return (
		<>
			<CalendarNavMobile isTeacherOrPrincipal={isTeacherOrPrincipal} />

			{days.map(({ day, weekdayShort, isToday }) => (
				<CalendarDayCardMobile
					key={day}
					dateNumber={day}
					weekdayShort={weekdayShort}
					isToday={isToday}
					calendarData={calendarData}
					monthIndex={monthIndex}
					year={year}
					isTeacherOrPrincipal={isTeacherOrPrincipal}
					onAddExam={() => openAddModal(day)}
					onEditExam={(exam) => openEditModal(exam)}
				/>
			))}

			<ResponsiveModalBase isModalVisible={isActionModalVisible}>
				<CalendarActionModal closeActionModal={closeActionModal} selectedExam={selectedExam} />
			</ResponsiveModalBase>
		</>
	);
}
