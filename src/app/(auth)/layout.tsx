'use client'
import { ROUTES } from '@/shared/lib/routes'
import { Header } from '@/shared/ui/header'
import { Logo } from '@/shared/ui/logo'
import { useRouter } from 'next/navigation'

export type AuthLayoutProps = Readonly<{
	children: React.ReactNode,
}>

const AuthLayout = ({ children }: AuthLayoutProps) => {
	const router = useRouter()

	return (
		<div className="h-full flex flex-col">
			<Header
				leftContent={
					<div className="cursor-pointer" onClick={() => router.push(ROUTES.HOME)}>
						<Logo/>
					</div>
				}
			/>
			<div className="flex grow flex-col items-center justify-center">
				<div className="w-full max-w-sm mx-auto">
					{children}
				</div>
			</div>
		</div>
		
	)
}

export default AuthLayout