import { Button } from '@/shared/ui/button'
import { HeadingIcon } from 'lucide-react'

export type SetHeadingButtonProps = {
	onClick: () => void,
}

export const SetHeadingButton = (props: SetHeadingButtonProps) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			title="Добавить заголовок"
			onClick={props.onClick}
		>
			<HeadingIcon className="h-4 w-4" />
		</Button>	)
}