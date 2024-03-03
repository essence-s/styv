import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://essence-s.github.io',
  base: '/styv',
  vite: {
    assetsInclude: ['**/*.glb']
  },
  integrations: [react()]
});