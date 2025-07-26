import { convertValue } from '@/utils/convertValue';

describe('convertValue()', () => {
	const from = ['x', 'y', 'z'];
	const to = ['X', 'Y', 'Z'];

	it('returns the corresponding element from toArray', () => {
		expect(convertValue(from, to, 'y')).toBe('Y');
	});

	it('returns the original value if not found in fromArray', () => {
		expect(convertValue(from, to, 'a')).toBe('a');
	});

	it('returns the original value if index is out of bounds of toArray', () => {
		expect(convertValue(['q'], [], 'q')).toBe('q');
	});
});
