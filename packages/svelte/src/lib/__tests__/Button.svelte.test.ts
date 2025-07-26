import { render, screen } from '@testing-library/svelte';
import Button from '../Button.svelte';
import { userEvent } from '@testing-library/user-event';

describe('Button', () => {
	it('should render custom size and class as expected', () => {
		render(Button, {
			size: 'lg',
			className: 'custom-class',
			'data-testid': 'test-button'
		});
		const button = screen.getByTestId('test-button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('custom-class');
	});

	it('should handle click events properly', async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();
		render(Button, {
			onclick: handleClick,
			'data-testid': 'clickable-button'
		});
		const button = screen.getByTestId('clickable-button');

		await user.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
