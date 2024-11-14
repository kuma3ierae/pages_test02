// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://kuma3ierae.github.io',
  base: '/pages_test02',
  integrations: [starlight()],
})