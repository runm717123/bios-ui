import type { Preview } from '@storybook/react-vite';
import '@bios-ui/core';
import '@bios-ui/basic/css';

const preview: Preview = {
	//👇 Enables auto-generated documentation for all stories
	tags: ['autodocs'],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			options: {
				dark: {
					name: 'Dark',
					value: 'var(--color-bg-dark)',
				},
			},
		},

		// this is not working yet, but it should
		// https://storybook.js.org/docs/essentials/backgrounds#defining-the-background-for-a-story
		initialGlobals: {
			backgrounds: { value: 'dark' },
		},
	},
};

export default preview;
