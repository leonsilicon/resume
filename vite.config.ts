import { defineConfig } from 'vite'
import { join } from 'desm'

export default defineConfig({
	resolve: {
		alias: {
			'#components': join(import.meta.url, 'components'),
			'#utils': join(import.meta.url, 'utils'),
			'#pages': join(import.meta.url, 'pages'),
		}
	}
})