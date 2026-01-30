// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Obserbatorio Ambiental',
			logo:{
				src: './src/assets/logo_bq_verde.png',
				replacesTitle: true
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						{ label: 'Introducción', slug: 'introduction' },
					]
				},
				{
					label: 'App Frontend',
					autogenerate: { directory: 'frontend' },
					collapsed: true
				},
				{
					label: 'App Backend',
					autogenerate: { directory: 'backend' },
					collapsed: true
				}
			],
		}),
	],
});
