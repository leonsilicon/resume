import { defineConfig } from 'vite'
import { dirname } from 'desm'

export default defineConfig({
	resolve: {
		alias: {
			'~': dirname(import.meta.url)
		}
	}
})