import { render, screen } from '@testing-library/svelte';
import Table from '../Table.svelte';

describe('Table', () => {
	it('should render with default table classes', () => {
		render(Table, {
			'data-testid': 'test-table'
		});
		const table = screen.getByTestId('test-table');

		expect(table).toBeInTheDocument();
		expect(table).toHaveClass('b-table');
		expect(table).toHaveClass('border-collapse');
		expect(table).toHaveClass('border');
		expect(table).toHaveClass('border-fg-dark');
		expect(table.tagName).toBe('TABLE');
	});

	it('should render with custom className', () => {
		render(Table, {
			className: 'custom-table-class',
			'data-testid': 'custom-table'
		});
		const table = screen.getByTestId('custom-table');

		expect(table).toBeInTheDocument();
		expect(table).toHaveClass('b-table');
		expect(table).toHaveClass('custom-table-class');
	});

	it('should pass through additional props', () => {
		render(Table, {
			id: 'table-id',
			role: 'grid',
			'data-testid': 'props-table'
		});
		const table = screen.getByTestId('props-table');

		expect(table).toHaveAttribute('id', 'table-id');
		expect(table).toHaveAttribute('role', 'grid');
	});
});
