import { Button } from '@/shared/ui/button'
import { HeadingIcon } from 'lucide-react'

export type SetSubheadingButtonProps = {
	onClick: () => void,
}

export const SetSubheadingButton = (props: SetSubheadingButtonProps) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			title="Добавить подзаголовок"
			onClick={props.onClick}
		>
			<HeadingIcon className="h-3 w-3" />
		</Button>
	)
}