export function formatDateWithToday(dateString: string): string {
	const date = new Date(dateString);
	const today = new Date();
	const isToday =
		date.getFullYear() === today.getFullYear() &&
		date.getMonth() === today.getMonth() &&
		date.getDate() === today.getDate();

	return isToday
		? 'Today'
		: date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
		  });
}
