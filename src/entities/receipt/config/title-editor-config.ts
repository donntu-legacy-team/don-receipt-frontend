import type { UseEditorOptions } from '@tiptap/react'

import Heading from '@tiptap/extension-heading'

import Document from '@tiptap/extension-document'

import Text from '@tiptap/extension-text'

import History from '@tiptap/extension-history'

import Placeholder from '@tiptap/extension-placeholder'

import CharacterCount from '@tiptap/extension-character-count'

export const TITLE_CHARACTER_COUNT_LIMIT = 300

export const titleEditorConfig: UseEditorOptions = {
	extensions: [
		Document.extend({
			content: 'heading',
		}),
		Text,
		History,
		CharacterCount.configure({
			limit: TITLE_CHARACTER_COUNT_LIMIT,
			mode: 'nodeSize',
		}),
		Placeholder.configure({
			placeholder: 'Вкусные творожные блинчики',
		}),
		Heading.configure({
			levels: [3],
		}),
	],
}