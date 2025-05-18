'use client'

import { TitleEditor } from './title-editor'

import './receipt-editor.scss'
import { BodyEditor } from './body-editor'

export type ReceiptEditorProps = {
	isEditable?: boolean,
}

export const ReceiptEditor = (props: ReceiptEditorProps) => {
	return (
		<div className="prose prose-lg lg:prose-xl">
			<TitleEditor
				isEditable={props.isEditable}
				onTitleUpdate={console.log}
			/>
			<BodyEditor
				isEditable={props.isEditable}
				onBodyUpdate={console.log}
			/>
		</div>
	)
}