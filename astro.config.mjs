// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maker-eric.github.com/workbench',
  base: '/workbench/',
  vite: {
    plugins: [tailwindcss()]
  }
});