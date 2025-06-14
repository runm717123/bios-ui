import { BodyText, Input, InputLabel } from '@bios-ui/basic';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const meta = {
	title: 'Bios UI/basic/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	args: { onClick: fn(), placeholder: 'Enter your text here', name: 'test' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
	render: (props) => {
		return (
			<InputLabel>
				<BodyText>Username</BodyText>
				<br />
				<Input className="b-py1" type="text" placeholder="Enter text here" onChange={fn()} {...props} />
			</InputLabel>
		);
	},
};
