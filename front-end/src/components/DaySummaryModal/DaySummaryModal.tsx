'use client';

import styles from './DaySummaryModal.module.scss';

import { Dispatch, SetStateAction } from 'react';
import { CalendarBlock } from '../CalendarBlock/CalendarBlock';
import { ModalActionButton } from '../../ui/buttons/ModalActionButton/ModalActionButton';
import { ClearModalHeader } from '../../ui/modalHeader/ClearModalHeading/ClearModalHeader';
import { CalendarEvent, SelectedExam } from '../../types/calendarProps';

import { convertValue } from '../../utils/convertValue';
import { availableSubjects, subjectKeysForBackend, subjectThemeMap } from '../../constants/subjects';
import { maxEventsPerDay } from '../../constants/calendar';
import { formatUTCToLongDate } from '../../utils/formatUTCToLongDate';

interface DaySummaryModalProps {
	isTeacherOrPrincipal: boolean;
	closeActionModal: () => void;
	handleOpenActionModal: () => void;
	year: number;
	monthIndex: number;
	selectedDay: number | null;
	calendarData: CalendarEvent[];
	selectedExam: SelectedExam;
	setSelectedExam: Dispatch<SetStateAction<SelectedExam>>;
}

export function DaySummaryModal({
	isTeacherOrPrincipal,
	handleOpenActionModal,
	year,
	monthIndex,
	selectedDay,
	calendarData,
	selectedExam,
	setSelectedExam,
}: DaySummaryModalProps) {
	if (selectedDay === null) return null;

	const date = new Date(Date.UTC(year, monthIndex, selectedDay));
	date.setUTCHours(date.getUTCHours() + 2);
	const isoDate = date.toISOString();

	const eventsForDay = calendarData

		.filter((exam) => {
			const day = new Date(exam.startDate);
			return (
				day.getUTCFullYear() === date.getUTCFullYear() &&
				day.getUTCMonth() === date.getUTCMonth() &&
				day.getUTCDate() === date.getUTCDate()
			);
		})

		.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

	const isFormValid = eventsForDay.length < maxEventsPerDay;

	return (
		<>
			<ClearModalHeader>{formatUTCToLongDate(isoDate)}</ClearModalHeader>

			<div className={styles.modalContent}>
				<div className={styles.items}>
					{eventsForDay.map((exam) => {
						const subjKey = convertValue(subjectKeysForBackend, availableSubjects, exam.subject);
						const theme = subjectThemeMap[subjKey] || '';

						return (
							<div key={exam._id} className={styles.item}>
								<CalendarBlock
									subject={exam.subject}
									start={exam.startDate}
									end={exam.endDate}
									eventType={exam.eventType}
									isMobileStyleRequired={true}
									editButton={isTeacherOrPrincipal}
									theme={theme}
									empty={false}
									onClick={() => {
										setSelectedExam({
											id: exam._id,
											startDate: exam.startDate,
											endDate: exam.endDate,
											subject: exam.subject,
										});
										handleOpenActionModal();
									}}
								/>
							</div>
						);
					})}

					{isTeacherOrPrincipal && (
						<div className={styles.actionsContainer}>
							<p className={styles.maxText}>A maximum {maxEventsPerDay} events can be added per day!</p>
							<ModalActionButton
								isFormValid={isFormValid}
								onClick={() => {
									setSelectedExam({
										id: null,
										startDate: isoDate,
										endDate: isoDate,
										subject: selectedExam.subject,
									});
									handleOpenActionModal();
								}}>
								add new event
							</ModalActionButton>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
