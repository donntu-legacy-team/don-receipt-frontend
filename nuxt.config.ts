// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint'],
	pages: true,
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			BACKEND_URL: '',
		},
	},
	compatibilityDate: '2024-11-01',
	typescript: {
		typeCheck: true,
	},
	eslint: {
		config: {
			stylistic: {
				jsx: true,
				indent: 'tab',
				arrowParens: true,
				quotes: 'single',
				semi: false,
				blockSpacing: true,
				commaDangle: 'always-multiline',
				braceStyle: '1tbs',
			},
		},
	},
})
