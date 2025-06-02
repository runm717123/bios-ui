import { defineConfig } from 'vite';
import wyw from '@wyw-in-js/vite';
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import dashify from 'dashify'

// get current dirname
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    wyw({
      classNameSlug: (_hash, title) => dashify(title),
    }),

  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'BiosUI',
      // the proper extensions will be added
      fileName: 'bios-ui',
    },
  },
});
