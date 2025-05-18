import { Button } from '@/shared/ui/button'
import { ItalicIcon } from 'lucide-react'

export type ToggleItalicButtonProps = {
	isActive: boolean,
	onClick: () => void,
}

export const ToggleItalicButton = (props: ToggleItalicButtonProps) => {
	return (<Button 
		variant={props.isActive ? 'default' : 'ghost'} 
		size="icon"
		title="Курсив"
		onClick={props.onClick}
	>
		<ItalicIcon className="h-4 w-4" />
	</Button>)
}