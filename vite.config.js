import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			registerType: 'autoUpdate',

			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
			manifest: {
				name: 'Every Other Day',
				short_name: 'OtherDay',
				description: 'Tells you whether its the other day.',
				theme_color: '#1f2229',
				background_color: '#1f2229',
				orientation: 'portrait',
				display: 'standalone',
				scope: '/',
				start_url: '/',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
	resolve: {
		preserveSymlinks: true,
	},
});
