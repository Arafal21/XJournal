import { formatDateAndTimeToUTC } from '@/utils/formatDateAndTimeToUTC';

describe('formatDateAndTimeToUTC()', () => {
	it('adds 2 hours and formats to ISO string without timezone', () => {
		expect(formatDateAndTimeToUTC('2025-07-24', '05:07')).toBe('2025-07-24T07:07:00');
	});

	it('correctly pads single‑digit hours and minutes. (if 0 has not been added - when the hour is a single digit.)', () => {
		expect(formatDateAndTimeToUTC('2025-01-01', '8:5')).toBe('2025-01-01T10:05:00');
	});
});
