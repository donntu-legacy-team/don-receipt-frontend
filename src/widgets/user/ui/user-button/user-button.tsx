'use client'

import { useAuth } from '@/entities/user/lib'
import { useUser } from '@/entities/user/lib'
import { LoginButton } from '@/entities/user/ui/login-button'
import { UserMenu } from '@/entities/user/ui/user-menu'
import { ROUTES } from '@/shared/lib/routes'
import { Button } from '@/shared/ui/button'
import { ChevronDownIcon, LoaderCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const UserButton = () => {
	const {
		currentUser,
		isLoadingUser,
	} = useUser()

	const {
		signOut,
	} = useAuth()

	const router = useRouter()

	const onSignOutClick = () => {
		signOut()
		toast('Вы вышли из аккаунта')
	}

	const onMyProfileClick = () => {
		router.push(ROUTES.MY_PROFILE)
	}

	if (isLoadingUser){
		return (
			<Button className="w-[94px]">
				<LoaderCircleIcon className="animate-spin"/>
			</Button>
		)
	}

	if (currentUser) {
		return (
			<UserMenu
				menuTrigger={(
					<Button variant="ghost" className="flex gap-1 items-center">
						{currentUser.username}
						<ChevronDownIcon size="20px"/>
					</Button>
				)}
				onSignOutClick={onSignOutClick}
				onMyProfileClick={onMyProfileClick}
			/>
		)
	}

	return (
		<LoginButton signInHref={ROUTES.SIGN_IN}/>
	)
}
