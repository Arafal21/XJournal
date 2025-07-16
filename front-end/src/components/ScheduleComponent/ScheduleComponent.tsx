'use server';

import styles from './SchoolDaysMobile.module.scss';

import { ClassSelectMobile } from '../ClassSelectMobile/ClassSelectMobile';
import { DaySelectMobile } from '../DaySelectMobile/DaySelectMobile';
import { ScheduleCalendarContainer } from '../ScheduleCalendarContainer/ScheduleCalendarContainer';
import { SchoolDaysMobile } from '../SchoolDays/SchoolDaysMobile';
import { fetchSchedule } from '../../api/scheduleApi';

interface ScheduleComponentProps {
	isTeacherOrPrincipal: boolean;
	selectedClass: string;
}

export async function ScheduleComponent({ isTeacherOrPrincipal, selectedClass }: ScheduleComponentProps) {
	try {
		const scheduleData = await fetchSchedule(selectedClass);

		return (
			<>
				{/* Mobile*/}
				{isTeacherOrPrincipal ? (
					<ClassSelectMobile />
				) : (
					<div className={styles.daySelectMobileContainer}>
						<DaySelectMobile />
					</div>
				)}

				{isTeacherOrPrincipal && <SchoolDaysMobile />}

				{/* Desktop */}
				<ScheduleCalendarContainer isTeacherOrPrincipal={isTeacherOrPrincipal} scheduleData={scheduleData} />
			</>
		);
	} catch {
		return <p>Error fetching schedule.</p>;
	}
}
