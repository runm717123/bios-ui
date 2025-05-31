import { Input, Table } from '@bios-ui/basic';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Bios UI/basic/Table',
	component: Table,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		return (
			<Table>
				<thead>
					<tr>
						<th>Header 1</th>
						<th>Header 2</th>
						<th>Header 3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Row 1, Cell 1</td>
						<td>Row 1, Cell 2</td>
						<td>Row 1, Cell 3</td>
					</tr>
					<tr>
						<td>Row 2, Cell 1</td>
						<td>Row 2, Cell 2</td>
						<td>Row 2, Cell 3</td>
					</tr>
					<tr>
						<td>Row 3, Cell 1</td>
						<td>Row 3, Cell 2</td>
						<td>Row 3, Cell 3</td>
					</tr>
				</tbody>
			</Table>
		);
	},
};
