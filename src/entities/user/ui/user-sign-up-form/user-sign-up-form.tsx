'use client'
import { useForm } from 'react-hook-form'
import { userSignUpFormSchema, UserSignUpFormValues } from '../../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { ROUTES } from '@/shared/lib/routes'

export type UserSignUpFormProps = {
	onSubmit?: (values: UserSignUpFormValues) => void,
}

export const UserSignUpForm = (props: UserSignUpFormProps) => {
	const form = useForm<UserSignUpFormValues>({
		resolver: zodResolver(userSignUpFormSchema),
		defaultValues: {
			email: '',
			username: '',
			password: '',
			passwordConfirm: '',
		},
	})

	const onSubmit = (values: UserSignUpFormValues) => {
		if (props.onSubmit) {
			props.onSubmit(values)
			return
		}

		// TODO: убрать, когда появится api под регистрацию
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="love.food@donreceipt.ru" type="email" {...field} />
							</FormControl>
							<FormMessage/>
						</FormItem>
					)}
				/>
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
								<Input placeholder="qwerty1234" type="password" {...field} />
							</FormControl>
							<FormMessage/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="passwordConfirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Подтвердите пароль</FormLabel>
							<FormControl>
								<Input placeholder="qwerty1234" type="password" {...field} />
							</FormControl>
							<FormMessage/>
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Зарегистрироваться
				</Button>
				<div className="text-center text-sm">
					Есть аккаунт?{' '}
					<Link href={ROUTES.SIGN_IN} className="underline underline-offset-4">
						Войдите
					</Link>
				</div>
			</form>
		</Form>
	)
}