'use client';

import styles from './ScheduleActionModal.module.scss';

import { use, useState } from 'react';
import { SelectedClassContext } from '../../../contexts/SelectedClassContext';
import { SelectedDayContext } from '../../../contexts/SelectedDayContext';
import { SelectedSubjectContext } from '../../../contexts/SelectedSubjectContext';
import { deleteSchedule, postSchedule, updateSchedule } from '../../../api/scheduleApi';
import { SchoolSubjects } from '../../../components/SchoolSubjects/SchoolSubjects';
import { DropdownMenuSelectSubject } from '../../dropdownMenus/DropdownMenuSelectSubject/DropdownMenuSelectSubject';
import { ModalActionButton } from '../../buttons/ModalActionButton/ModalActionButton';
import { FullModalHeader } from '../../modalHeader/FullModalHeader/FullModalHeader';
import { SelectedHours } from '../../../types/lessonScheduleProps';
import { availableSubjects, initialAvailableSubject, subjectKeysForBackend } from '../../../constants/subjects';
import { convertValue } from '../../../utils/convertValue';

interface ScheduleActionModalProps {
	handleToggleModal: () => void;
	selectedHours: SelectedHours | null;
	selectedLesson: string | null;
}

export function ScheduleActionModal({ handleToggleModal, selectedHours, selectedLesson }: ScheduleActionModalProps) {
	const { selectedClass } = use(SelectedClassContext);
	const { selectedDay } = use(SelectedDayContext);
	const { selectedSubject, setSelectedSubject } = use(SelectedSubjectContext);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		if (!selectedHours) return;

		setIsSubmitting(true);
		try {
			if (selectedLesson) {
				await updateSchedule(
					selectedClass,
					selectedLesson,
					selectedHours.startHour,
					selectedHours.endHour,
					convertValue(availableSubjects, subjectKeysForBackend, selectedSubject),
					selectedDay.toLowerCase(),
				);
			} else {
				await postSchedule(
					selectedClass,
					selectedHours.startHour,
					selectedHours.endHour,
					selectedSubject,
					selectedDay.toLowerCase(),
				);
			}

			handleToggleModal();
		} catch (error) {
			alert('Schedule operation error. Wait before another operation.');
		} finally {
			setIsSubmitting(false);
			setSelectedSubject(initialAvailableSubject);
		}
	};

	async function handleDelete() {
		if (!selectedLesson) return;

		try {
			await deleteSchedule(selectedClass, selectedLesson);
			handleToggleModal();
		} catch {
			alert('Deleting schedule failed. Try again later.');
		}
	}

	return (
		<div className={styles.modalContent}>
			<FullModalHeader onClose={handleToggleModal} onDelete={handleDelete} hasSelected={!!selectedLesson}>
				{selectedLesson ? 'Edit lesson' : 'New lesson'}
			</FullModalHeader>

			<div className={styles.when}>
				<p className={styles.day}>{selectedDay}</p>
				<p className={styles.hour}>
					{selectedHours ? `${selectedHours.startHour} - ${selectedHours.endHour}` : 'loading...'}
				</p>
			</div>

			<div className={`${styles.dropdownMenuSelectSubjectContainer} hiddenOnMobile`}>
				<DropdownMenuSelectSubject />
			</div>

			<div className={`${styles.schoolSubjectsContainer} hiddenOnDesktop`}>
				<SchoolSubjects />
			</div>

			<div className={styles.buttonContainer}>
				<ModalActionButton isFormValid={!isSubmitting} onClick={handleSubmit}>
					{isSubmitting ? 'saving...' : selectedSubject ? 'SAVE' : 'POST'}
				</ModalActionButton>
			</div>
		</div>
	);
}
