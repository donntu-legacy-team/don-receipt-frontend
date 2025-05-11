'use client'
import { useUser } from '@/entities/user/lib'
import { UserSignUpFormValues } from '@/entities/user/model'
import { UserSignUpForm } from '@/entities/user/ui/user-sign-up-form'
import { getApi } from '@/shared/api'
import { ROUTES } from '@/shared/lib/routes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

const SignUpPage = () => {
	const {
		authApi,
	} = getApi()

	const {
		currentUser,
	} = useUser()

	const router = useRouter()

	const onRegisterSubmit = async (values: UserSignUpFormValues) => {
		const res = await authApi.register({
			email: values.email,
			password: values.password,
			username: values.username,
		})

		if (res.user) {
			toast(`Пользователь ${res.user.username} успешно создан`)
			router.push(ROUTES.SIGN_IN)
		}
	}

	useEffect(() => {
		if (currentUser) {
			return router.push(ROUTES.HOME)
		}
	}, [currentUser, router])

	return (
		<Card>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">
					Создайте аккаунт
				</CardTitle>
				<CardDescription>
					Введите email, логин и пароль в форме снизу для регистрации
				</CardDescription>
			</CardHeader>
			<CardContent>
				<UserSignUpForm
					onSubmit={onRegisterSubmit}
				/>
			</CardContent>
		</Card>
	)
}

export default SignUpPage
