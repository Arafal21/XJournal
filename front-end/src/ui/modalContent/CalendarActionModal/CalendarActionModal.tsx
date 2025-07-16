'use client';

import styles from './CalendarActionModal.module.scss';

import { use, useState } from 'react';

import { ResponsiveSubjectSelector } from '../../../components/ResponsiveSubjectSelector/ResponsiveSubjectSelector';
import { ExamSelecting } from '../../../components/ExamSelecting/ExamSelecting';
import { ModalActionButton } from '../../buttons/ModalActionButton/ModalActionButton';
import { FullModalHeader } from '../../modalHeader/FullModalHeader/FullModalHeader';
import { ResponsiveHourSelector } from '../../../components/ResponsiveHourSelector/ResponsiveHourSelector';
import { deleteCalendarEvent, postCalendarEvent, updateCalendar } from '../../../api/calendarApi';
import { SelectedClassContext } from '../../../contexts/SelectedClassContext';
import { SelectedSubjectContext } from '../../../contexts/SelectedSubjectContext';
import { convertValue } from '../../../utils/convertValue';
import { availableSubjects, subjectKeysForBackend } from '../../../constants/subjects';
import { formatDateUTC } from '../../../utils/formatDateUTC';
import { SelectedExam } from '../../../types/calendarProps';
import { formatDateAndTimeToUTC } from '../../../utils/formatDateAndTimeToUTC';

interface CalendarActionModalProps {
	closeActionModal: () => void;
	selectedExam: SelectedExam;
}

export function CalendarActionModal({ closeActionModal, selectedExam }: CalendarActionModalProps) {
	const { selectedClass } = use(SelectedClassContext);
	const { selectedSubject } = use(SelectedSubjectContext);

	const getTime = (iso?: string) => {
		if (!iso) return '';
		const d = new Date(iso);
		return d.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', hour12: false });
	};

	const initialStart = getTime(selectedExam.startDate) || '08:00';
	const initialEnd = getTime(selectedExam.endDate) || '09:00';

	const [selectedHours, setSelectedHours] = useState({
		startHour: initialStart,
		endHour: initialEnd,
	});

	const isEditing = selectedExam.id != null;
	const [selectedExamType, setSelectedExamType] = useState<'quiz' | 'test' | null>(null);

	const handleRadioExamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedExamType(e.target.value as 'quiz' | 'test');
	};

	const baseDate = selectedExam.startDate
		? selectedExam.startDate.split('T')[0]
		: new Date().toISOString().split('T')[0];

	const startISO = formatDateAndTimeToUTC(baseDate, selectedHours.startHour);
	const endISO = formatDateAndTimeToUTC(baseDate, selectedHours.endHour);

	async function handleSubmit() {
		if (selectedExamType === null) return;

		try {
			if (isEditing) {
				await updateCalendar(
					selectedClass,
					selectedExam.id!,
					selectedExamType,
					selectedSubject,
					startISO,
					endISO,
				);
			} else {
				await postCalendarEvent(
					selectedClass,
					selectedExamType,
					startISO,
					endISO,
					convertValue(availableSubjects, subjectKeysForBackend, selectedSubject),
				);
			}

			closeActionModal();
		} catch {
			alert('The operation on the calendar failed. Try again later.');
		}
	}

	async function handleDelete() {
		try {
			await deleteCalendarEvent(selectedClass, selectedExam.id!);
			closeActionModal();
		} catch {
			alert('Deleting exam failed. Try again later.');
		}
	}

	return (
		<>
			<FullModalHeader onClose={closeActionModal} onDelete={handleDelete} hasSelected={isEditing}>
				{isEditing ? 'Edit event' : 'New event'}
			</FullModalHeader>

			<div className={styles.modalContent}>
				<p className={styles.selectedDay}>{formatDateUTC(selectedExam.startDate) ?? 'No date selected'}</p>

				<div className={styles.subjectContainer}>
					<ResponsiveSubjectSelector />
				</div>

				<div className={styles.lessonIntervalContainer}>
					<ResponsiveHourSelector selectedHours={selectedHours} setSelectedHours={setSelectedHours} />
				</div>

				<div className={styles.radioGroup}>
					<ExamSelecting onChange={handleRadioExamChange} selectedExamType={selectedExamType} />
				</div>

				<div className={styles.buttonContainer}>
					<ModalActionButton isFormValid={true} onClick={handleSubmit}>
						{isEditing ? 'SAVE' : 'POST'}
					</ModalActionButton>
				</div>
			</div>
		</>
	);
}
