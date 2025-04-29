import { UserSignUpForm } from '@/entities/user/ui/user-sign-up-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'

const SignUpPage = () => {
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
				<UserSignUpForm/>
			</CardContent>
		</Card>
	)
}

export default SignUpPage
