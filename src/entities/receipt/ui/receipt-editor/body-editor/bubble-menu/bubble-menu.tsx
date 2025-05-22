import { Editor, useCurrentEditor, BubbleMenu } from '@tiptap/react'
import { ToggleItalicButton } from './toggle-italic-button'
import { ToggleBoldButton } from './toggle-bold-button'
import { SetLinkButton } from './set-link-button/set-link-button'

export type BubbleMenuWithButtonsProps = {
	editor?: Editor | null,
}

export const BubbleMenuWithButtons = (props: BubbleMenuWithButtonsProps) => {
	const currentEditor = useCurrentEditor()

	const usingEditor = props.editor || currentEditor.editor

	if (!usingEditor) {
		return
	}

	const onToggleItalicClick = () => {
		usingEditor.commands.toggleItalic()
	}

	const onToggleBoldClick = () => {
		usingEditor.commands.toggleBold()
	}

	const onLinkSet = (url: string) => {
		usingEditor
			.chain()
			.focus()
			.extendMarkRange('link')
			.setLink({
				href: url,
			}).run()
	}

	const getCurrentUrl = () => {
		return usingEditor.getAttributes('link').href
	}

	return <BubbleMenu editor={usingEditor}>
		<div className="bg-background border rounded-lg shadow-lg p-2 flex gap-2">
			<ToggleItalicButton
				isActive={usingEditor.isActive('italic')}
				onClick={onToggleItalicClick} 
			/>
			<ToggleBoldButton
				isActive={usingEditor.isActive('bold')}
				onClick={onToggleBoldClick}
			/>
			<SetLinkButton
				isActive={usingEditor.isActive('link')}
				onLinkSet={onLinkSet}
				getPreviousUrl={getCurrentUrl}
			/>
		</div>
	</BubbleMenu>
}
