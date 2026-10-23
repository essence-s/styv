import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const site = 'https://essence-s.github.io';
const base = '/styv';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    assetsInclude: ['**/*.glb']
  },
  integrations: [
    react(),
    sitemap({
      // Evita la variante sin slash de la home duplicada por la integración.
      filter: (page) => page !== new URL(base, site).href.replace(/\/$/, ''),
    }),
  ]
});
