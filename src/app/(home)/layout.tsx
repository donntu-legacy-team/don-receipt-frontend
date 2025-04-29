import { LoginButton } from '@/entities/user/ui/login-button'
import { ROUTES } from '@/shared/lib/routes'
import { Header } from '@/shared/ui/header'
import { Logo } from '@/shared/ui/logo'

export type HomeLayoutProps = {
	children: React.ReactNode,
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<>
			<Header
				leftContent={<Logo/>}
				rightContent={<LoginButton signInHref={ROUTES.SIGN_IN}/>}
			/>
			{children}
		</>
	)
}

export default HomeLayout