/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'jsdom',
		setupFiles: './tests/setupTest.ts',
		passWithNoTests: true,
	},
	define: {
		NODE_ENV: JSON.stringify(process.env.NODE_ENV),
	},
})
