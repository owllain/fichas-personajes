import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      {
        name: 'tailwindcss-v3',
        config() {
          return { css: { postcss: './postcss.config.cjs' } };
        }
      }
    ]
  },
  output: 'static',
  build: {
    format: 'directory'
  }
});
