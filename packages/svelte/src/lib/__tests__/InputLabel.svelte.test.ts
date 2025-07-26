import { render, screen } from '@testing-library/svelte';
import InputLabel from '../InputLabel.svelte';

describe('InputLabel', () => {
	it('should render with default size (md)', () => {
		render(InputLabel, {
			'data-testid': 'test-label'
		});
		const label = screen.getByTestId('test-label');

		expect(label).toBeInTheDocument();
		expect(label).toHaveClass('text-base');
		expect(label.tagName).toBe('LABEL');
	});

	it('should render with small size', () => {
		render(InputLabel, {
			size: 'sm',
			'data-testid': 'small-label'
		});
		const label = screen.getByTestId('small-label');

		expect(label).toBeInTheDocument();
		expect(label).toHaveClass('text-sm');
	});

	it('should render with large size', () => {
		render(InputLabel, {
			size: 'lg',
			'data-testid': 'large-label'
		});
		const label = screen.getByTestId('large-label');

		expect(label).toBeInTheDocument();
		expect(label).toHaveClass('text-lg');
	});

	it('should render with custom className', () => {
		render(InputLabel, {
			className: 'custom-label-class',
			'data-testid': 'custom-label'
		});
		const label = screen.getByTestId('custom-label');

		expect(label).toBeInTheDocument();
		expect(label).toHaveClass('text-base');
		expect(label).toHaveClass('custom-label-class');
	});

	it('should pass through additional props', () => {
		render(InputLabel, {
			for: 'input-id',
			id: 'label-id',
			'data-testid': 'props-label'
		});
		const label = screen.getByTestId('props-label');

		expect(label).toHaveAttribute('for', 'input-id');
		expect(label).toHaveAttribute('id', 'label-id');
	});
});
