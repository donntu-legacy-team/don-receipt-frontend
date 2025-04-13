/* eslint-disable @typescript-eslint/no-require-imports */
const { kebabCase } = require('change-case-all')

module.exports = [
	{
		type: 'select',
		name: 'layerName',
		message: 'Choose layer',
		choices: [
			'entities',
			'features',
			'widgets',
		],
	},
	{
		type: 'input',
		name: 'sliceName',
		message: 'Slice name (kebab-case)',
		validate(value) {
			return kebabCase(value) === value
		},
	},
]