import { render, screen } from '@testing-library/svelte';
import BodyText from '../BodyText.svelte';

describe('BodyText', () => {
	it('should render with default text-base class', () => {
		render(BodyText, {
			'data-testid': 'body-text'
		});
		const element = screen.getByTestId('body-text');

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass('text-base');
		expect(element.tagName).toBe('SPAN');
	});

	it('should render with custom className', () => {
		render(BodyText, {
			className: 'custom-body-class',
			'data-testid': 'custom-body-text'
		});
		const element = screen.getByTestId('custom-body-text');

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass('text-base');
		expect(element).toHaveClass('custom-body-class');
	});

	it('should pass through additional props', () => {
		render(BodyText, {
			id: 'unique-body-text',
			role: 'text',
			'data-testid': 'props-body-text'
		});
		const element = screen.getByTestId('props-body-text');

		expect(element).toHaveAttribute('id', 'unique-body-text');
		expect(element).toHaveAttribute('role', 'text');
	});
});
