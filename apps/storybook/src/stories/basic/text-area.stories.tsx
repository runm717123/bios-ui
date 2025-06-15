import { BodyText, TextArea, InputLabel } from '@bios-ui/basic';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const meta = {
	title: 'Bios UI/basic/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	args: { placeholder: 'Enter your text here', name: 'test' },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
	render: (props) => {
		return (
			<InputLabel>
				<BodyText>Message</BodyText>
				<br />
				<TextArea className="b-py1" placeholder="Enter your message here" onChange={fn()} {...props} />
			</InputLabel>
		);
	},
};