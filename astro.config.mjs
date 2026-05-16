import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fireman333.github.io',
  base: '/KlaudeVibeCoding',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  markdown: {
    // Default Shiki theme is github-dark — too jarring against the cream
    // site bg. Use github-light (matches our warm-cream palette) and
    // override .astro-code background in global.css to surface-muted.
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
