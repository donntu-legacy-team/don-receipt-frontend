import { Logo } from '@/shared/ui/logo'

export type HeaderProps = {
	logoHref?: string,
	loginHref?: string,
}

export const Header = () => {
	return (
		<header className="flex h-16 shrink-0 items-center gap-2 border-b">
			<div className="container mx-auto px-4">
				<Logo/>
			</div>
		</header>
	)
}
