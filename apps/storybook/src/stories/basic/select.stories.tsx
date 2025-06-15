import { BodyText, Select, InputLabel } from '@bios-ui/basic';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const meta = {
	title: 'Bios UI/basic/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	args: { 
		options: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
		]
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
	render: (props) => {
		return (
			<InputLabel>
				<BodyText>Choose an option</BodyText>
				<br />
				<Select className="b-py1" onChange={fn()} {...props} />
			</InputLabel>
		);
	},
};
