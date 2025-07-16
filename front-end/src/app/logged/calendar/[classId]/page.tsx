import { getCalendarAdmin } from '../../../../api/calendarApi';

import { initialMonth } from '../../../../constants/calendar';
import { getCurrentYear } from '../../../../utils/getCurrentYear';

import { CalendarPage } from '../../../_views/CalendarPage/CalendarPage';

export const metadata = {
	title: 'Calendar - Plan Your Schedule with XJournal',
	description:
		'Stay on top of exams, quizzes, and important school events with the XJournal calendar. Organize your time and never miss a date!',
};

interface CalendarRouteProps {
	params: Promise<{ classId: string }>;
	searchParams: Promise<{ month?: string; year?: number }>;
}

export default async function CalendarRoute({ params, searchParams }: CalendarRouteProps) {
	const { classId } = await params;
	const { month, year } = await searchParams;

	const actualMonth = month ?? initialMonth;
	const actualYear = year ?? getCurrentYear();

	const calendarData = await getCalendarAdmin(classId, actualMonth, actualYear);

	return (
		<CalendarPage
			selectedClass={classId}
			selectedMonthYear={actualMonth}
			selectedYear={actualYear}
			calendarData={calendarData}
		/>
	);
}
