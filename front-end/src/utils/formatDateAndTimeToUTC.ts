export function formatDateAndTimeToUTC(dateOnly: string, time: string): string {
	const [h, m] = time.split(':').map(Number);
	const utcHour = h + 2;
	const hh = utcHour.toString().padStart(2, '0');
	const mm = m.toString().padStart(2, '0');
	return `${dateOnly}T${hh}:${mm}:00`;
}
