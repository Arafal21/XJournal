'use client';

import styles from './GradesStudentRow.module.scss';

import { useState } from 'react';
import Image from 'next/image';

import Avatar from '../../icons/avatar.svg';
import { AddNewMarkButton } from '../../ui/buttons/AddNewMarkButton/AddNewMarkButton';
import { MarkButton } from '../../ui/buttons/MarkButton/MarkButton';
import { GradesActionModal } from '../../ui/modalContent/GradesActionModal/GradesActionModal';
import { ResponsiveModalBase } from '../ResponsiveModalBase/ResponsiveModalBase';

import { GradesAdminStudent, StudentInClass } from '../../types/gradesProps';

interface GradesStudentRowProps {
	studentsInSelectedClass: StudentInClass[];
	studentsGrades: GradesAdminStudent[];
}

export function GradesStudentRow({ studentsInSelectedClass, studentsGrades }: GradesStudentRowProps) {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
	const [selectedStudentId, setSelectedStudentId] = useState<string>('');
	const [selectedGradeId, setSelectedGradeId] = useState<string>('');

	const resetSelectedGrade = () => {
		setSelectedGrade(null);
		setSelectedGradeId('');
	};

	const initGradeForm = (studentId: string) => {
		setSelectedStudentId(studentId);
		setIsModalOpened(true);
	};

	const addGrade = (studentId: string) => {
		initGradeForm(studentId);
		resetSelectedGrade();
	};

	const changeGrade = (studentId: string, grade: number, gradeId: string) => {
		initGradeForm(studentId);

		setSelectedGrade(grade);
		setSelectedGradeId(gradeId);
	};

	const closeModal = () => {
		setIsModalOpened(false);
		setSelectedStudentId('');
		resetSelectedGrade();
	};

	console.log(studentsInSelectedClass);

	return (
		<>
			{studentsInSelectedClass.map((student) => {
				const record = studentsGrades.find((r) => r._id === student._id);
				const grades = record?.grades ?? [];

				return (
					<div key={student._id} className={styles.gradesContainer}>
						<div className={styles.dataContainer}>
							<Image
								src={Avatar}
								width={32}
								height={32}
								alt={`Avatar of ${student.firstName} ${student.lastName}`}
							/>
							<p className={styles.name}>
								{student.firstName} {student.lastName}
							</p>
						</div>

						<div className={styles.gradesControl}>
							<ul className={styles.gradesList}>
								{grades.map((g) => (
									<li key={g._id}>
										<MarkButton onClick={() => changeGrade(student._id, g.grade, g._id)} selectedGrade={g.grade}>
											{g.grade}
										</MarkButton>
									</li>
								))}
							</ul>

							<div>
								<AddNewMarkButton onClick={() => addGrade(student._id)} />
							</div>
						</div>
					</div>
				);
			})}

			<ResponsiveModalBase isModalVisible={isModalOpened}>
				<GradesActionModal
					studentsInSelectedClass={studentsInSelectedClass}
					selectedStudentId={selectedStudentId}
					selectedGrade={selectedGrade}
					selectedGradeId={selectedGradeId}
					setSelectedGrade={(grade) => setSelectedGrade(grade)}
					closeModal={closeModal}
				/>
			</ResponsiveModalBase>
		</>
	);
}
