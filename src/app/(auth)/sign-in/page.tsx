'use client'
import { useAuth } from '@/entities/user/lib/use-auth'
import { useUser } from '@/entities/user/lib/use-user'
import { UserSignInFormValues } from '@/entities/user/model'
import { UserSignInForm } from '@/entities/user/ui'
import { ROUTES } from '@/shared/lib/routes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

const SignInPage = () => {
	const {
		currentUser,
	} = useUser()

	const {
		signIn,
		signInError,
	} = useAuth()

	const router = useRouter()

	const onLoginSubmit = async (values: UserSignInFormValues) => {
		const res = await signIn({
			username: values.username,
			password: values.password,
		})

		if (res.accessToken && res.refreshToken) {
			toast('Вы успешно вошли')
			router.push(ROUTES.HOME)
		}
	}

	useEffect(() => {
		if (signInError?.message) {
			toast(signInError.message)
		}
	}, [signInError])

	useEffect(() => {
		if (currentUser) {
			return router.push(ROUTES.HOME)
		}
	}, [currentUser, router])

	return (
		<Card>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">
					Войдите в аккаунт
				</CardTitle>
				<CardDescription>
					Введите логин и пароль в форме снизу для входа в аккаунт
				</CardDescription>
			</CardHeader>
			<CardContent>
				<UserSignInForm
					onSubmit={onLoginSubmit}
				/>
			</CardContent>
		</Card>
	)
}

export default SignInPage
