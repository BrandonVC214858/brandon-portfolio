// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your real production domain before deploying.
  // Required for sitemap generation and canonical URLs.
  base: '/brandonvc214858.github.io',
  site: 'https://brandonvc214858.github.io/',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
