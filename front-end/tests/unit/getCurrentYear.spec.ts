import { getCurrentYear } from '@/utils/getCurrentYear';

describe('getCurrentYear()', () => {
	it('returns the current full year as a number', () => {
		const year = getCurrentYear();
		expect(typeof year).toBe('number');
		expect(year).toBe(new Date().getFullYear());
	});
});
