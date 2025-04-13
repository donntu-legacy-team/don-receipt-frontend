import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

import stylistic from '@stylistic/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/semi': ['warn', 'never'],
			'@stylistic/quotes': ['warn', 'single'],
			'@stylistic/comma-dangle': ['warn', 'always-multiline'],
			'@stylistic/block-spacing': ['warn', 'always'],
			'@stylistic/object-curly-spacing': ['warn', 'always'],
			'@stylistic/indent': ['warn', 'tab'],
		},
	},
]

export default eslintConfig
