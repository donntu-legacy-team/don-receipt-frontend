import Placeholder from '@tiptap/extension-placeholder'
import type { UseEditorOptions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Link from '@tiptap/extension-link'

export const bodyEditorConfig: UseEditorOptions = {
	extensions: [
		StarterKit.configure({
			heading: {
				levels: [3, 4],
			},
			codeBlock: false,
		}),
		Placeholder.configure({
			placeholder: 'Напишите свой рецепт',
		}),
		Link.configure({
			defaultProtocol: 'https',
			autolink: true,
			openOnClick: 'whenNotEditable',
		}),
	],
	immediatelyRender: false,
}