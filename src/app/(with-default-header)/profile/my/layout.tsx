import { AuthorizedOnly } from '@/shared/ui/authorized-only'
import { ReactNode } from 'react'

export type MyProfileLayoutProps = {
	children?: ReactNode,
}

const MyProfileLayout = ({ children }: MyProfileLayoutProps) => {
	return (
		<AuthorizedOnly>
			{children}
		</AuthorizedOnly>
	)
}

export default MyProfileLayout