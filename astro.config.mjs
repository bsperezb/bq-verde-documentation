// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const LIVE_URL = 'https://bsperezb.github.io'
const DEV_URL = 'http://localhost:4321'
const LIVE_BASE_PATH = '/bq-verde-documentation'
const DEV_BASE_PATH = '/'

const isGitHubPages = process.env.BUILD_TARGET === 'gh-pages';
const SITE_URL = isGitHubPages ? LIVE_URL : DEV_URL
const BASE_PATH = isGitHubPages ? LIVE_BASE_PATH : DEV_BASE_PATH

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: BASE_PATH,
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
