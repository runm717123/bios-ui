import type { Preview } from '@storybook/react';
import '@bios-ui/core';
import '@bios-ui/basic/dist/bios-ui.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'custom',
			values: [
				{
					name: 'custom',
					value: 'var(--color-bg-dark)',
				},
			],
		},
	},
};

export default preview;
