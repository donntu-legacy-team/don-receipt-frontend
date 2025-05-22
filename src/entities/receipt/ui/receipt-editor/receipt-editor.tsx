'use client'

import { TitleEditor } from './title-editor'

import './receipt-editor.scss'
import { BodyEditor } from './body-editor'

export type ReceiptEditorProps = {
	title?: string,
	body?: string,
	isEditable?: boolean,
	onTitleUpdate?: (content: string) => void,
	onBodyUpdate?: (content: string) => void,
}

export const ReceiptEditor = (props: ReceiptEditorProps) => {
	return (
		<div className="prose prose-lg lg:prose-xl max-w-full">
			<TitleEditor
				title={props.title}
				isEditable={props.isEditable}
				onTitleUpdate={props.onTitleUpdate}
			/>
			<BodyEditor
				body={props.body}
				isEditable={props.isEditable}
				onBodyUpdate={props.onBodyUpdate}
			/>
		</div>
	)
}