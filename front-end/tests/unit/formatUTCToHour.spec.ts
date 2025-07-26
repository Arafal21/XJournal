import { formatUTCToHour } from '@/utils/formatUTCToHour';

describe('formatUTCToHour()', () => {
	it('parsing iso string and returns Hour:Minute', () => {
		expect(formatUTCToHour('2025-07-24T14:45:00.000Z')).toBe('14:45');
	});

	it('returns undefined for empty or non-ISO input', () => {
		expect(formatUTCToHour()).toBeUndefined();
		expect(formatUTCToHour('invalid')).toBeUndefined();
	});
});
