import { getTextSize } from '../get-text-size.js';

describe('getTextSize', () => {
	it('should return "text-sm" for size "sm"', () => {
		expect(getTextSize('sm')).toBe('text-sm');
	});

	it('should return "text-base" for size "md"', () => {
		expect(getTextSize('md')).toBe('text-base');
	});

	it('should return "text-lg" for size "lg"', () => {
		expect(getTextSize('lg')).toBe('text-lg');
	});
});
