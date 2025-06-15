import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
			outDir: 'dist/types',
			insertTypesEntry: true,
		}),
	],
	build: {
		outDir: 'dist',
		target: 'esnext',
		lib: {
			entry: resolve(__dirname, 'src', 'index.ts'),
			name: 'BiosUI',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['@linaria/react', '@linaria/core', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js',
			},
		},
	},
});
