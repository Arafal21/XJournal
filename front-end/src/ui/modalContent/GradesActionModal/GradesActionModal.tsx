'use client';

import styles from './GradesActionModal.module.scss';

import { use } from 'react';

import Image from 'next/image';

import Avatar from '../../../icons/avatar.svg';

import { ModalActionButton } from '../../buttons/ModalActionButton/ModalActionButton';
import { FullModalHeader } from '../../modalHeader/FullModalHeader/FullModalHeader';
import { GradeOptionButton } from '../../buttons/GradeOptionButton/GradeOptionButton';
import { SelectedSemesterContext } from '../../../contexts/SelectedSemesterContext';
import { SelectedSubjectContext } from '../../../contexts/SelectedSubjectContext';
import { deleteGrade, postGrade, updateGrade } from '../../../api/gradesApi';
import { StudentInClass } from '../../../types/gradesProps';
import { convertValue } from '../../../utils/convertValue';
import { gradesPool } from '../../../constants/academicConstans';
import { availableSubjects, subjectKeysForBackend } from '../../../constants/subjects';

interface GradesActionModalProps {
	closeModal: () => void;
	selectedGrade: number | null;
	setSelectedGrade: (grade: number) => void;
	selectedStudentId: string;
	selectedGradeId: string;
	studentsInSelectedClass: StudentInClass[];
}

export function GradesActionModal({
	closeModal,
	selectedGrade,
	setSelectedGrade,
	selectedStudentId,
	selectedGradeId,
	studentsInSelectedClass,
}: GradesActionModalProps) {
	const { selectedSemester } = use(SelectedSemesterContext);
	const { selectedSubject } = use(SelectedSubjectContext);

	const isEditing = selectedGradeId !== '';

	const currentStudent = studentsInSelectedClass.find((s) => s._id === selectedStudentId);

	async function handleSubmit() {
		if (selectedGrade === null) return;
		try {
			if (isEditing) {
				await updateGrade(selectedStudentId, selectedGradeId, selectedGrade);
			} else {
				await postGrade(selectedStudentId, selectedGrade, selectedSubject, selectedSemester);
			}
			closeModal();
		} catch {
			alert('The operation on the grades failed. Try again later.');
		}
	}

	async function handleDelete() {
		if (!isEditing) return;
		try {
			await deleteGrade(selectedStudentId, selectedGradeId);
			closeModal();
		} catch {
			alert('Deleting grade failed. Try again later.');
		}
	}

	return (
		<div className={styles.modalContent}>
			<FullModalHeader onClose={closeModal} onDelete={handleDelete} hasSelected={isEditing}>
				{isEditing ? 'Edit grade' : 'New grade'}
			</FullModalHeader>

			<p className={styles.subject}>{convertValue(subjectKeysForBackend, availableSubjects, selectedSubject)}</p>

			<div className={styles.createdInfo}>
				<Image src={Avatar} alt="student's avatar" width={32} height={32} />

				<p className={styles.name}>
					{currentStudent ? `${currentStudent.firstName} ${currentStudent.lastName}` : null}
				</p>
			</div>

			<div className={styles.gradeSelectContainer}>
				{gradesPool.map((grade) => (
					<GradeOptionButton
						key={grade}
						grade={grade}
						onClick={() => setSelectedGrade(grade)}
						selectedGrade={selectedGrade}>
						{grade}
					</GradeOptionButton>
				))}
			</div>

			<div className={styles.buttonContainer}>
				<ModalActionButton isFormValid={selectedGrade !== null} onClick={handleSubmit}>
					{isEditing ? 'SAVE' : 'POST'}
				</ModalActionButton>
			</div>
		</div>
	);
}
