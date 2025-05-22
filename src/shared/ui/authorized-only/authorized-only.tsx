'use client'

import { useUser } from '@/entities/user/lib'
import { ROUTES } from '@/shared/lib/routes'
import { LoaderCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export type AuthorizedOnlyProps = {
	children?: ReactNode,
	fallback?: ReactNode,
}

export const AuthorizedOnly = (props: AuthorizedOnlyProps) => {
	const user = useUser()

	const router = useRouter()

	useEffect(() => {
		if (!user.currentUser && !user.isLoadingUser) {
			router.push(ROUTES.HOME)
		}
	}, [user, router])

	if (!user.currentUser || user.isLoadingUser || !props.children) {
		if (props.fallback) {
			return props.fallback
		}

		return (
			<div className="h-full flex items-center justify-center">
				<LoaderCircleIcon className="animate-spin"/>
			</div>
		)
	}

	return props.children
}