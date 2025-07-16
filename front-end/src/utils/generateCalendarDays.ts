interface CalendarDay {
	day: number;
	weekdayShort: string;
	isToday: boolean;
}

export function generateCalendarDays(year: number, monthIndex: number): CalendarDay[] {
	const today = new Date();
	const isCurrentMonth = today.getFullYear() === year && today.getMonth() === monthIndex;
	const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

	return Array.from({ length: daysInMonth }, (_, i) => i + 1)
		.map((day) => {
			const date = new Date(year, monthIndex, day);
			const weekday = date.getDay();
			const isWeekday = weekday >= 1 && weekday <= 5;

			return isWeekday
				? {
						day,
						weekdayShort: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date),
						isToday: isCurrentMonth && day === today.getDate(),
				  }
				: null;
		})
		.filter((day): day is CalendarDay => day !== null);
}
