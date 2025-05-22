import { Button } from '@/shared/ui/button'
import { BoldIcon } from 'lucide-react'

export type ToggleBoldButtonProps = {
	isActive: boolean,
	onClick: () => void,
}

export const ToggleBoldButton = (props: ToggleBoldButtonProps) => {
	return (
		<Button 
			variant={props.isActive ? 'default' : 'ghost'} 
			size="icon"
			title="Жирный"
			onClick={props.onClick}
		>
			<BoldIcon className="h-4 w-4" />
		</Button>
	)
}