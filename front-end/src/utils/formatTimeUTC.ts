export function formatTimeUTC(isoString?: string) {
	if (isoString === undefined) {
		return;
	}
    
	const date = new Date(isoString);
	const hours = date.getUTCHours().toString().padStart(2, '0');
	const minutes = date.getUTCMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
}
