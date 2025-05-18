'use client'

export type TitleEditorProps = {
	title?: string,
	isEditable?: boolean,
	onTitleUpdate?: (content: string) => void,
}

import { titleEditorConfig } from '@/entities/receipt/config/title-editor-config'
import { EditorProvider } from '@tiptap/react'

export const TitleEditor = (props: TitleEditorProps) => {
	return (
		<EditorProvider
			{...titleEditorConfig}
			content={props.title}
			editable={props.isEditable ?? true}
			onUpdate={({ editor }) => props.onTitleUpdate?.(editor.getHTML())}
		/>
	)
}