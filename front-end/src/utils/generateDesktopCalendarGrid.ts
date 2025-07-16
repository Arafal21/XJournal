interface CalendarCell {
	day: number;
	isToday: boolean;
}

export function generateDesktopCalendarGrid(year: number, month: number): (CalendarCell | null)[] {
	const today = new Date();
	const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const firstWeekday = new Date(year, month, 1).getDay(); 
    
	const emptyStart = firstWeekday === 0 || firstWeekday === 6 ? 0 : firstWeekday - 1;

	const dayCells = Array.from({ length: daysInMonth }, (_, i) => i + 1)
		.map((day) => {
			const weekday = new Date(year, month, day).getDay();
			if (weekday < 1 || weekday > 5) return null; // weekend = empty
			return {
				day,
				isToday: isCurrentMonth && day === today.getDate(),
			} as CalendarCell;
		})
		.filter(Boolean) as CalendarCell[];

	const totalCells = emptyStart + dayCells.length;
	const emptyEnd = totalCells % 5 === 0 ? 0 : 5 - (totalCells % 5);

	return [...Array(emptyStart).fill(null), ...dayCells, ...Array(emptyEnd).fill(null)];
}