import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import Input from '../Input.svelte';

describe('Input', () => {
	it('should render with default classes', () => {
		render(Input, {
			'data-testid': 'test-input'
		});
		const input = screen.getByTestId('test-input');

		expect(input).toBeInTheDocument();
		expect(input.tagName).toBe('INPUT');
	});

	it('should render with custom className', () => {
		render(Input, {
			className: 'custom-input-class',
			'data-testid': 'custom-input'
		});
		const input = screen.getByTestId('custom-input');

		expect(input).toBeInTheDocument();
		expect(input).toHaveClass('custom-input-class');
	});

	it('should handle value binding', async () => {
		const user = userEvent.setup();
		render(Input, {
			value: 'initial value',
			'data-testid': 'value-input'
		});
		const input = screen.getByTestId('value-input') as HTMLInputElement;

		expect(input.value).toBe('initial value');

		await user.clear(input);
		await user.type(input, 'new value');

		expect(input.value).toBe('new value');
	});

	it('should pass through additional props', () => {
		render(Input, {
			placeholder: 'Enter text',
			type: 'email',
			'data-testid': 'props-input'
		});
		const input = screen.getByTestId('props-input');

		expect(input).toHaveAttribute('placeholder', 'Enter text');
		expect(input).toHaveAttribute('type', 'email');
	});

	it('should handle disabled state', () => {
		render(Input, {
			disabled: true,
			'data-testid': 'disabled-input'
		});
		const input = screen.getByTestId('disabled-input');

		expect(input).toBeDisabled();
	});
});
