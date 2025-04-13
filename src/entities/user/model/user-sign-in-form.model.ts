import { z } from 'zod'

export const userSignInFormSchema = z.object({
	username: z.string().min(1, 'Логин обязателен'),
	password: z.string().min(1, 'Пароль обязателен'),
})

export type UserSignInFormValues = z.infer<typeof userSignInFormSchema>