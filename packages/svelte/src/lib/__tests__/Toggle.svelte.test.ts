import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import Toggle from '../Toggle.svelte';

describe('Toggle', () => {
	it('should render with default props', () => {
		render(Toggle, {
			'data-testid': 'test-toggle'
		});
		const toggle = screen.getByTestId('test-toggle');

		expect(toggle).toBeInTheDocument();
		expect(toggle).toHaveAttribute('type', 'button');
		expect(toggle).toHaveAttribute('role', 'switch');
		expect(toggle).toHaveAttribute('aria-checked', 'false');
	});

	it('should handle checked state', () => {
		render(Toggle, {
			checked: true,
			'data-testid': 'checked-toggle'
		});
		const toggle = screen.getByTestId('checked-toggle');

		expect(toggle).toHaveAttribute('aria-checked', 'true');
		expect(toggle).toHaveClass('b-toggle--checked');
	});

	it('should handle click events', async () => {
		const user = userEvent.setup();
		render(Toggle, {
			checked: false,
			'data-testid': 'clickable-toggle'
		});
		const toggle = screen.getByTestId('clickable-toggle');

		expect(toggle).toHaveAttribute('aria-checked', 'false');

		await user.click(toggle);

		expect(toggle).toHaveAttribute('aria-checked', 'true');
	});

	it('should render with custom className', () => {
		render(Toggle, {
			className: 'custom-toggle-class',
			'data-testid': 'custom-toggle'
		});
		const toggle = screen.getByTestId('custom-toggle');

		expect(toggle).toHaveClass('b-toggle');
		expect(toggle).toHaveClass('custom-toggle-class');
	});

	it('should pass through additional props', () => {
		render(Toggle, {
			id: 'toggle-id',
			'aria-label': 'Toggle setting',
			'data-testid': 'props-toggle'
		});
		const toggle = screen.getByTestId('props-toggle');

		expect(toggle).toHaveAttribute('id', 'toggle-id');
		expect(toggle).toHaveAttribute('aria-label', 'Toggle setting');
	});
});
