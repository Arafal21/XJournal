export function formatDateUTC(isoString?: string): string | undefined {
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
