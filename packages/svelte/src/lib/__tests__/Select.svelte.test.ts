import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import Select from '../Select.svelte';

describe('Select', () => {
	const mockOptions = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2' },
		{ label: 'Option 3', value: 'option3' }
	];

	it('should render with default classes and options', () => {
		render(Select, {
			options: mockOptions,
			'data-testid': 'test-select'
		});
		const select = screen.getByTestId('test-select');

		expect(select).toBeInTheDocument();
		expect(select).toHaveClass('font-family-base');
		expect(select).toHaveClass('border-2');
		expect(select).toHaveClass('border-fg-dark');
		expect(select.tagName).toBe('SELECT');
	});

	it('should render all options including default option', () => {
		render(Select, {
			options: mockOptions,
			'data-testid': 'options-select'
		});

		// Check default option
		expect(screen.getByText('Select an option')).toBeInTheDocument();

		// Check provided options
		expect(screen.getByText('Option 1')).toBeInTheDocument();
		expect(screen.getByText('Option 2')).toBeInTheDocument();
		expect(screen.getByText('Option 3')).toBeInTheDocument();
	});

	it('should handle value selection', async () => {
		const user = userEvent.setup();
		render(Select, {
			options: mockOptions,
			'data-testid': 'value-select'
		});
		const select = screen.getByTestId('value-select') as HTMLSelectElement;

		expect(select.value).toBe('');

		await user.selectOptions(select, 'option1');
		expect(select.value).toBe('option1');
	});

	it('should render with custom className', () => {
		render(Select, {
			options: mockOptions,
			className: 'custom-select-class',
			'data-testid': 'custom-select'
		});
		const select = screen.getByTestId('custom-select');

		expect(select).toBeInTheDocument();
		expect(select).toHaveClass('border-fg-dark');
		expect(select).toHaveClass('custom-select-class');
	});

	it('should pass through additional props', () => {
		render(Select, {
			options: mockOptions,
			disabled: true,
			id: 'select-id',
			'data-testid': 'props-select'
		});
		const select = screen.getByTestId('props-select');

		expect(select).toBeDisabled();
		expect(select).toHaveAttribute('id', 'select-id');
	});

	it('should handle empty options array', () => {
		render(Select, {
			options: [],
			'data-testid': 'empty-select'
		});
		const select = screen.getByTestId('empty-select');

		expect(select).toBeInTheDocument();
		expect(screen.getByText('Select an option')).toBeInTheDocument();
	});
});
