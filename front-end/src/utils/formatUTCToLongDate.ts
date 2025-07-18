export function formatUTCToLongDate(isoString?: string): string | undefined {
	if (!isoString) return;

	const date = new Date(isoString);
	if (isNaN(date.getTime())) return;

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
		timeZone: 'UTC',
	};

	return date.toLocaleDateString('en-US', options);
}
// returns:
// from: 2025-07-16T11:24:18.955
// to: Wednesday, 07/16/2025