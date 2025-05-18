import { Button } from '@/shared/ui/button'
import { LinkIcon } from 'lucide-react'

export type SetLinkButtonProps = {
	isActive: boolean,
	onLinkSet: (url: string) => void,
	getPreviousUrl: () => string,
}

export const SetLinkButton = (props: SetLinkButtonProps) => {
	const onClick = () => {
		const previousUrl = props.getPreviousUrl()

		let url = prompt('Введите URL: ', previousUrl)

		if (url === null || url === '') {
			props.onLinkSet('')
			return
		}

		if (!url.startsWith('https://') || !url.startsWith('http://')) {
			url = 'https://' + url
		}

		props.onLinkSet(url)
	}

	return (
		<Button
			variant={props.isActive ? 'default' : 'ghost'}
			size="icon"
			onClick={onClick}
		>
			<LinkIcon className="h-4 w-4" />
		</Button>
	)
}