'use client';

import { CalendarDesktopComponent } from '../CalendarDesktopComponent/CalendarDesktopComponent';
import { CalendarEvent } from '../../types/calendarProps';
import { CalendarMobileComponent } from '../CalendarMobileComponent/CalendarMobileComponent';
import { useResponsive } from '../../hooks/useResponsive';

interface CalendarComponentProps {
	isTeacherOrPrincipal: boolean;
	calendarData: CalendarEvent[];
}

export function CalendarComponent({ isTeacherOrPrincipal, calendarData }: CalendarComponentProps) {
	const { isMobile, isDesktop } = useResponsive();

	try {
		return (
			<>
				{isMobile && (
					<CalendarMobileComponent calendarData={calendarData} isTeacherOrPrincipal={isTeacherOrPrincipal} />
				)}

				{isDesktop && (
					<CalendarDesktopComponent calendarData={calendarData} isTeacherOrPrincipal={isTeacherOrPrincipal} />
				)}
			</>
		);
	} catch {
		<p>Unfortunally, calendar panel is unavailable now.</p>;
	}
}
