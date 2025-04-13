/* eslint-disable @typescript-eslint/no-require-imports */
const { pascalCase, pathCase } = require('change-case-all')

module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Component name (PascalCase)',
		validate(value) {
			return pascalCase(value) === value
		},
	},
	{
		type: 'input',
		name: 'path',
		message: 'Path to the dir where to create component (path/case)',
		validate(value) {
			return pathCase(value) === value
		},
	},
]