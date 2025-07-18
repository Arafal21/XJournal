import styles from './ModalMonthlySchedule.module.scss';

import { Dispatch, SetStateAction, use } from 'react';

import { CalendarBlock } from '../CalendarBlock/CalendarBlock';
import { ClearModalHeader } from '../../ui/modalHeader/ClearModalHeading/ClearModalHeader';
import { availableSubjects, subjectKeysForBackend, subjectThemeMap } from '../../constants/subjects';
import { SelectedSubjectContext } from '../../contexts/SelectedSubjectContext';

import { formatUTCToLongDate } from '../../utils/formatUTCToLongDate';
import { convertValue } from '../../utils/convertValue';

import { CalendarEvent, SelectedExam } from '../../types/calendarProps';

interface ModalMonthlyScheduleProps {
	isTeacherOrPrincipal: boolean;
	calendarData: CalendarEvent[];
	setSelectedExam: Dispatch<SetStateAction<SelectedExam>>;
	handleOpenActionModal: () => void;
}

export function ModalMonthlySchedule({
	isTeacherOrPrincipal,
	calendarData,
	setSelectedExam,
	handleOpenActionModal,
}: ModalMonthlyScheduleProps) {
	const { setSelectedSubject } = use(SelectedSubjectContext);

	const sortedData = [...calendarData].sort(
		(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
	);

	const handleLessonClick = (exam: CalendarEvent) => {
		setSelectedExam({
			id: exam._id,
			startDate: exam.startDate,
		});

		setSelectedSubject(exam.subject);
	};

	return (
		<>
			<ClearModalHeader>Monthly schedule</ClearModalHeader>

			<div className={styles.modalContent}>
				<div className={styles.items}>
					{sortedData.map((exam) => {
						const mapped = convertValue(subjectKeysForBackend, availableSubjects, exam.subject);
						const theme = subjectThemeMap[mapped] || '';

						return (
							<div className={styles.item} key={exam._id}>
								<p className={styles.date}>{formatUTCToLongDate(exam.startDate)}</p>

								<CalendarBlock
									subject={exam.subject}
									start={exam.startDate}
									end={exam.endDate}
									theme={theme}
									eventType={exam.eventType}
									isMobileStyleRequired={true}
									editButton={isTeacherOrPrincipal}
									empty={false}
									onClick={() => {
										handleLessonClick(exam);
										handleOpenActionModal();
									}}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
