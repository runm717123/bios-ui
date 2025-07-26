import { render, screen } from '@testing-library/svelte';
import BodyTextSmall from '../BodyTextSmall.svelte';

describe('BodyTextSmall', () => {
	it('should render with default text-sm class', () => {
		render(BodyTextSmall, {
			'data-testid': 'body-text-small'
		});
		const element = screen.getByTestId('body-text-small');

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass('text-sm');
		expect(element.tagName).toBe('P');
	});

	it('should render with custom className', () => {
		render(BodyTextSmall, {
			className: 'custom-small-class',
			'data-testid': 'custom-body-text-small'
		});
		const element = screen.getByTestId('custom-body-text-small');

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass('text-sm');
		expect(element).toHaveClass('custom-small-class');
	});

	it('should pass through additional props', () => {
		render(BodyTextSmall, {
			id: 'unique-small-text',
			role: 'note',
			'data-testid': 'props-body-text-small'
		});
		const element = screen.getByTestId('props-body-text-small');

		expect(element).toHaveAttribute('id', 'unique-small-text');
		expect(element).toHaveAttribute('role', 'note');
	});
});
