import { Button } from '@/shared/ui/button'
import { QuoteIcon } from 'lucide-react'

export type SetQuoteButtonProps = {
	onClick: () => void,
}

export const SetQuoteButton = (props: SetQuoteButtonProps) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			title="Добавить цитату"
			onClick={props.onClick}
		>
			<QuoteIcon className="h-4 w-4" />
		</Button>
	)
}