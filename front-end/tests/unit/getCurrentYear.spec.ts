import { getCurrentYear } from '@/utils/getCurrentYear';

describe('getCurrentYear()', () => {
	beforeAll(() => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2025-06-15T12:00:00Z'));
	});
	afterAll(() => {
		jest.useRealTimers();
	});

	it('returns system year', () => {
		expect(getCurrentYear()).toBe(2025);
	});
});
