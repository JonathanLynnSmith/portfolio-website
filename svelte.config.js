import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Use the static adapter to generate a static site
		adapter: adapter({
			// Specify the output directory (default is "build")
			out: 'build', 
		}),
		prerender: {
			handleMissingId: 'warn'
		},
	},
	preprocess: vitePreprocess()
};

export default config;
