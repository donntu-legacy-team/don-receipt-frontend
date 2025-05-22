import { FloatingMenu } from '@tiptap/react'
import { Editor, useCurrentEditor } from '@tiptap/react'
import { SetHeadingButton } from './set-heading-button'
import { SetSubheadingButton } from './set-subheading-button'
import { SetBulletListButton } from './set-bullet-list-button'
import { SetQuoteButton } from './set-quote-button'
import { SetNewSectionButton } from './set-new-section-button'

export type FloatingMenuWithButtonsProps = {
	editor?: Editor | null,
}

export const FloatingMenuWithButtons = (props: FloatingMenuWithButtonsProps) => {
	const currentEditor = useCurrentEditor()

	const usingEditor = props.editor || currentEditor.editor

	if (!usingEditor) {
		return
	}

	const onHeadingClick = () => {
		usingEditor.commands.setHeading({ level: 3 })
	}

	const onSubheadingClick = () => {
		usingEditor.commands.setHeading({ level: 4 })
	}

	const onListClick = () => {
		usingEditor.commands.toggleBulletList()
	}

	const onQuoteClick = () => {
		usingEditor.commands.setBlockquote()
	}

	const onNewSectionClick = () => {
		usingEditor.commands.setHorizontalRule()
	}

	return (
		<FloatingMenu
			editor={usingEditor}
			shouldShow={({ editor, state }) => editor.isActive('paragraph') && !state.selection.$anchor.node().content.size}
		>
			<div className="bg-background border rounded-lg shadow-lg p-2 flex gap-2">
				<SetHeadingButton
					onClick={onHeadingClick}
				/>
				<SetSubheadingButton
					onClick={onSubheadingClick}
				/>
				<SetBulletListButton
					onClick={onListClick}
				/>
				<SetQuoteButton
					onClick={onQuoteClick}
				/>
				<SetNewSectionButton
					onClick={onNewSectionClick}
				/>
			</div>
		</FloatingMenu>
	)
}