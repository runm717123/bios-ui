import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				customElement: false,
			},
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src', 'lib', 'index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: [/node_modules/],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src/lib',
				entryFileNames: '[name].js',
			},
		},
	},
});
