'use client'
import { useForm } from 'react-hook-form'
import { userSignInFormSchema, UserSignInFormValues } from '../../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { ROUTES } from '@/shared/lib/routes'

export type UserSignInFormProps = {
	onSubmit?: (values: UserSignInFormValues) => void,
}

export const UserSignInForm = (props: UserSignInFormProps) => {
	const form = useForm<UserSignInFormValues>({
		resolver: zodResolver(userSignInFormSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	})

	const onSubmit = (values: UserSignInFormValues) => {
		if (props.onSubmit) {
			props.onSubmit(values)
			return
		}
	
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Логин</FormLabel>
							<FormControl>
								<Input placeholder="love_food" {...field} />
							</FormControl>
							<FormMessage/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input placeholder="qwerty12345" type="password" {...field} />
							</FormControl>
							<FormMessage/>
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Войти
				</Button>
				<div className="text-center text-sm">
					Нет аккаунта?{' '}
					<Link href={ROUTES.SIGN_UP} className="underline underline-offset-4">
						Зарегистрируйтесь
					</Link>
				</div>
			</form>
		</Form>
	)
}