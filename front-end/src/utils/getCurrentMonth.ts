type CaseOption = 'lower' | 'normal';

export function getCurrentMonth(caseOption: CaseOption = 'lower'): string {
	const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());

	return caseOption === 'lower' ? month.toLowerCase() : month;
}
