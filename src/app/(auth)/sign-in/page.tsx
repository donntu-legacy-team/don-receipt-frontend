import { UserSignInForm } from '@/entities/user/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'

const SignInPage = () => {
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
				<UserSignInForm />
			</CardContent>
		</Card>
	)
}

export default SignInPage
