import { Header } from '@/shared/ui/header'
import { Logo } from '@/shared/ui/logo'
import { UserButton } from '@/widgets/user/ui/user-button'

export type HomeLayoutProps = {
	children: React.ReactNode,
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<>
			<Header
				leftContent={<Logo/>}
				rightContent={<UserButton/>}
			/>
			{children}
		</>
	)
}

export default HomeLayout
