import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fireman333.github.io',
  base: '/KlaudeVibeCoding',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
