import { buttonVariants } from '@/shared/ui/button'
import { User as UserIcon } from 'lucide-react'
import Link from 'next/link'

export type LoginButtonProps = {
	signInHref: string,
}

export const LoginButton = ({ signInHref }: LoginButtonProps) => {
	return (
		<Link href={signInHref} className={buttonVariants({ variant: 'default' })}>
			<div className="flex gap-1 items-center">
				<span className="font-medium text-sm">Войти</span>{''}
				<UserIcon height="20px"/>
			</div>
		</Link>
	)
}
