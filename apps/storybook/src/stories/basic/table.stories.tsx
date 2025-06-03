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
						<th className="b-px4 b-py2">Header 1</th>
						<th className="b-px4 b-py2">Header 2</th>
						<th className="b-px4 b-py2">Header 3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="b-px4 b-py2">Row 1, Cell 1</td>
						<td className="b-px4 b-py2">Row 1, Cell 2</td>
						<td className="b-px4 b-py2">Row 1, Cell 3</td>
					</tr>
					<tr>
						<td className="b-px4 b-py2">Row 2, Cell 1</td>
						<td className="b-px4 b-py2">Row 2, Cell 2</td>
						<td className="b-px4 b-py2">Row 2, Cell 3</td>
					</tr>
					<tr>
						<td className="b-px4 b-py2">Row 3, Cell 1</td>
						<td className="b-px4 b-py2">Row 3, Cell 2</td>
						<td className="b-px4 b-py2">Row 3, Cell 3</td>
					</tr>
				</tbody>
			</Table>
		);
	},
};
