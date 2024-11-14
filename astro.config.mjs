// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { remarkDiagram } from "./remark-plugins/remark-diagram.mjs";

// https://astro.build/config
export default defineConfig({
	site: 'https://kuma3ierae.github.io',
	base: '/pages_test02',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Test',
					autogenerate: { directory: 'Test' },
				},
			],
			head: [
				{
					tag: "script",
					attrs: {
						src: "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"
					}
				},
				{
					tag: "script",
					content: '(() => { const storedTheme = typeof localStorage !== "undefined" && localStorage.getItem("starlight-theme"); mermaid.initialize({ startOnLoad: true, theme: storedTheme }); })();',
				},
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkDiagram],
	},
});
