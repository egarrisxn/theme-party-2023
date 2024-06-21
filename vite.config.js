import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vite-theme-party/',
  css: {
    postcss: './postcss.config.cjs'
  }
});
