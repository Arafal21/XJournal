'use client';

import styles from './CalendarDesktopComponent.module.scss';

import { use, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { MonthLongNavigation } from '../MonthLongNavigation/MonthLongNavigation';
import { SideModalBase } from '../SideModalBase/SideModalBase';
import { ModalMonthlySchedule } from '../ModalMonthlySchedule/ModalMonthlySchedule';
import { DaySummaryModal } from '../DaySummaryModal/DaySummaryModal';
import { ResponsiveModalBase } from '../ResponsiveModalBase/ResponsiveModalBase';
import { CalendarDayCardDesktop } from '../CalendarDayCardDesktop/CalendarDayCardDesktop';
import { MonthScheduleSummaryButton } from '../../ui/buttons/MonthlyScheduleButton/MonthScheduleSummaryButton';
import { CalendarActionModal } from '../../ui/modalContent/CalendarActionModal/CalendarActionModal';

import { resolveCalendarParams } from '../../utils/resolveCalendarParams';
import { generateDesktopCalendarGrid } from '../../utils/generateDesktopCalendarGrid';

import { CalendarEvent, SelectedExam } from '../../types/calendarProps';

import { schoolDays } from '../../constants/academicConstans';
import { initialSubjectKey } from '../../constants/subjects';
import { SelectedSubjectContext } from '../../contexts/SelectedSubjectContext';

interface CalendarDesktopComponentProps {
	calendarData: CalendarEvent[];
	isTeacherOrPrincipal: boolean;
}

export function CalendarDesktopComponent({ calendarData, isTeacherOrPrincipal }: CalendarDesktopComponentProps) {
	const searchParams = useSearchParams();
	const { setSelectedSubject } = use(SelectedSubjectContext);

	const [showMonthModal, setShowMonthModal] = useState(false);
	const [showDayModal, setShowDayModal] = useState(false);
	const [isActionModalOpen, setIsActionModalOpen] = useState(false);
	const [selectedDay, setSelectedDay] = useState<number | null>(null);
	const [selectedExam, setSelectedExam] = useState<SelectedExam>({
		id: null,
		startDate: undefined,
		endDate: undefined,
		subject: undefined,
	});

	const { year, monthIndex } = resolveCalendarParams(searchParams);
	const grid = generateDesktopCalendarGrid(year, monthIndex);

	const closeActionModal = () => {
		setIsActionModalOpen(false);
		setSelectedSubject(initialSubjectKey);
	};

	const handleOpenActionModal = () => {
		setShowDayModal(false);
		setShowMonthModal(false);
		setIsActionModalOpen(true);
	};

	return (
		<div className={styles.calendarContainer}>
			<div className={styles.calendarControlContainer}>
				<MonthLongNavigation />

				<div className={styles.monthlyScheduleBtnWrapper}>
					<MonthScheduleSummaryButton onClick={() => setShowMonthModal((v) => !v)} />
				</div>

				<SideModalBase isModalVisible={showMonthModal} setIsModalVisible={setShowMonthModal}>
					<ModalMonthlySchedule
						isTeacherOrPrincipal={isTeacherOrPrincipal}
						calendarData={calendarData}
						setSelectedExam={setSelectedExam}
						handleOpenActionModal={handleOpenActionModal}
					/>
				</SideModalBase>
			</div>

			<div className={styles.schoolDaysContainer}>
				{schoolDays.map((schoolDay) => (
					<p key={schoolDay} className={styles.schoolDay}>
						{schoolDay}
					</p>
				))}
			</div>

			<div className={styles.calendar}>
				{grid.map((cell, dayNumber) =>
					cell ? (
						<CalendarDayCardDesktop
							key={dayNumber}
							day={cell.day}
							isToday={cell.isToday}
							calendarData={calendarData}
							isTeacherOrPrincipal={isTeacherOrPrincipal}
							onClick={() => {
								setSelectedDay(cell.day);
								setShowDayModal(true);
							}}
						/>
					) : (
						<div key={dayNumber} className={styles.block} />
					),
				)}

				<SideModalBase isModalVisible={showDayModal} setIsModalVisible={setShowDayModal}>
					<DaySummaryModal
						selectedDay={selectedDay}
						year={year}
						monthIndex={monthIndex}
						calendarData={calendarData}
						isTeacherOrPrincipal={isTeacherOrPrincipal}
						handleOpenActionModal={handleOpenActionModal}
						closeActionModal={closeActionModal}
						selectedExam={selectedExam}
						setSelectedExam={setSelectedExam}
					/>
				</SideModalBase>

				<ResponsiveModalBase isModalVisible={isActionModalOpen}>
					<CalendarActionModal
						closeActionModal={closeActionModal}
						selectedExam={selectedExam}
					/>
				</ResponsiveModalBase>
			</div>
		</div>
	);
}
