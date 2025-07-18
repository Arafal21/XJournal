export function formatUTCToHour(isoString?: string) {
	if (!isoString) return;

	const date = new Date(isoString);
	if (isNaN(date.getTime())) return;

	const hours = date.getUTCHours().toString().padStart(2, '0');
	const minutes = date.getUTCMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
}

// returns:
// from: 2025-07-16T11:24:18.955
// to: 11:24
