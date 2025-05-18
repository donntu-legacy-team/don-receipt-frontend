'use client'
import { bodyEditorConfig } from '@/entities/receipt/config'
import {  EditorProvider } from '@tiptap/react'
import { FloatingMenuWithButtons } from './floating-menu'
import { BubbleMenuWithButtons } from './bubble-menu'

export type BodyEditorProps = {
	body?: string,
	isEditable?: boolean,
	onBodyUpdate?: (content: string) => void,
}

export const BodyEditor = (props: BodyEditorProps) => {
	return (
		<EditorProvider
			{...bodyEditorConfig}
			content={props.body}
			editable={props.isEditable ?? true}
			onUpdate={({ editor }) => props.onBodyUpdate?.(editor.getHTML())}
		>
			<FloatingMenuWithButtons />
			<BubbleMenuWithButtons />
		</EditorProvider>
	)
}