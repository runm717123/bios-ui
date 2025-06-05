import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// get current dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		react(),
		wyw({
			include: ['**/*.{ts,tsx}'],
			babelOptions: {
				presets: ['@babel/preset-typescript', '@babel/preset-react'],
			},
		}),
		dts({
			include: ['src'],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'BiosUI',
			// the proper extensions will be added
			fileName: 'bios-ui',
			formats: ['es', 'cjs'],
		},
	},
});
