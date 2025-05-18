import { Button } from '@/shared/ui/button'
import { PlusIcon } from 'lucide-react'

export type SetNewSectionButtonProps = {
	onClick: () => void,
}

export const SetNewSectionButton = (props: SetNewSectionButtonProps) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			title="Новый раздел"
			onClick={props.onClick}
		>
			<PlusIcon className="h-4 w-4" />
		</Button>
	)
} 

