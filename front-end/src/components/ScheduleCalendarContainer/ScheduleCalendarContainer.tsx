'use client';

import styles from './ScheduleCalendarContainer.module.scss';

import { useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';

import { HoursAndPlanMobile } from '../HoursAndPlanMobile/HoursAndPlanMobile';

import { ScheduleActionModal } from '../../ui/modalContent/ScheduleActionModal/ScheduleActionModal';
import { ResponsiveModalBase } from '../ResponsiveModalBase/ResponsiveModalBase';
import { LessonFromApi, SelectedHours } from '../../types/lessonScheduleProps';

import { DesktopScheduleView } from '../DesktopScheduleView/DesktopScheduleView';

interface ScheduleCalendarContainerProps {
	isTeacherOrPrincipal: boolean;
	scheduleData: LessonFromApi[];
}

export function ScheduleCalendarContainer({ isTeacherOrPrincipal, scheduleData }: ScheduleCalendarContainerProps) {
	const { isMobileOrTablet } = useResponsive();
	const [selectedHours, setSelectedHour] = useState<SelectedHours | null>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

	const toggleModal = () => setIsModalVisible((v) => !v);

	return (
		<>
			<div className={styles.calendarContainer}>
				{/* Mobile */}
				{isMobileOrTablet ? (
					<HoursAndPlanMobile
						setSelectedLesson={setSelectedLesson}
						setSelectedHour={setSelectedHour}
						handleToggleModal={toggleModal}
						scheduleData={scheduleData}
						isTeacherOrPrincipal={isTeacherOrPrincipal}
					/>
				) : (
					<DesktopScheduleView
						setSelectedLesson={setSelectedLesson}
						setSelectedHour={setSelectedHour}
						handleToggleModal={toggleModal}
						scheduleData={scheduleData}
						isTeacherOrPrincipal={isTeacherOrPrincipal}
					/>
				)}
			</div>

			<ResponsiveModalBase isModalVisible={isModalVisible}>
				<ScheduleActionModal
					handleToggleModal={toggleModal}
					selectedHours={selectedHours}
					selectedLesson={selectedLesson}
				/>
			</ResponsiveModalBase>
		</>
	);
}
