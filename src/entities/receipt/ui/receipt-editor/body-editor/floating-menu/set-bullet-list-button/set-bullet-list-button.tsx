import { Button } from '@/shared/ui/button'
import { ListIcon } from 'lucide-react'

export type SetBulletListButtonProps = {
	onClick: () => void,
}

export const SetBulletListButton = (props: SetBulletListButtonProps) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			title="Добавить маркированный список"
			onClick={props.onClick}
		>
			<ListIcon className="h-4 w-4" />
		</Button>
	)
}