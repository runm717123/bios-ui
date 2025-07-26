import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import TextArea from '../TextArea.svelte';

describe('TextArea', () => {
	it('should render with default classes', () => {
		render(TextArea, {
			'data-testid': 'test-textarea'
		});
		const textarea = screen.getByTestId('test-textarea');

		expect(textarea).toBeInTheDocument();
		expect(textarea).toHaveClass('font-family-base');
		expect(textarea).toHaveClass('outline-1');
		expect(textarea).toHaveClass('focus:outline-[3px]');
		expect(textarea).toHaveClass('outline-fg-dark');
		expect(textarea).toHaveClass('bg-transparent');
		expect(textarea.tagName).toBe('TEXTAREA');
	});

	it('should render with custom className', () => {
		render(TextArea, {
			className: 'custom-textarea-class',
			'data-testid': 'custom-textarea'
		});
		const textarea = screen.getByTestId('custom-textarea');

		expect(textarea).toBeInTheDocument();
		expect(textarea).toHaveClass('font-family-base');
		expect(textarea).toHaveClass('custom-textarea-class');
	});

	it('should handle value binding', async () => {
		const user = userEvent.setup();
		render(TextArea, {
			value: 'initial text',
			'data-testid': 'value-textarea'
		});
		const textarea = screen.getByTestId('value-textarea') as HTMLTextAreaElement;

		expect(textarea.value).toBe('initial text');

		await user.clear(textarea);
		await user.type(textarea, 'new text content');

		expect(textarea.value).toBe('new text content');
	});

	it('should pass through additional props', () => {
		render(TextArea, {
			placeholder: 'Enter description',
			rows: 5,
			cols: 30,
			'data-testid': 'props-textarea'
		});
		const textarea = screen.getByTestId('props-textarea');

		expect(textarea).toHaveAttribute('placeholder', 'Enter description');
		expect(textarea).toHaveAttribute('rows', '5');
		expect(textarea).toHaveAttribute('cols', '30');
	});
});
