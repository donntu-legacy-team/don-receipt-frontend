import { ROUTES } from '@/shared/lib/routes'
import { Header } from '@/shared/ui/header'
import { Logo } from '@/shared/ui/logo'
import { UserButton } from '@/widgets/user/ui/user-button'

export type WithDefaultHeaderLayoutProps = {
	children: React.ReactNode,
}

const WithDefaultHeaderLayout = ({ children }: WithDefaultHeaderLayoutProps) => {
	return (
		<div className="h-full">
			<Header
				leftContent={<Logo href={ROUTES.HOME}/>}
				rightContent={<UserButton/>}
			/>
			{children}
		</div>
	)
}

export default WithDefaultHeaderLayout
