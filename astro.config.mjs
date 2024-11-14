// @ts-check
import { defineConfig } from 'astro/config';
import wikiLinkPlugin from "remark-wiki-link-plus";

// https://astro.build/config
export default defineConfig({
  site: 'https://kuma3ierae.github.io',
  base: '/pages_test02',
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          markdownFolder: `src/content/docs`,
        },
      ],
    ],
  },
})
