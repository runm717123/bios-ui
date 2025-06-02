import type { Preview } from '@storybook/react';
import '@bios-ui/core';

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
