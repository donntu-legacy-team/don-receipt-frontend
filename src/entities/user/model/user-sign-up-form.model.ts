import { z } from 'zod'

export const userSignUpFormSchema = z.object({
	email: z.string().min(2).max(50),
	username: z.string().min(2).max(50),
	password: z.string().min(2).max(50),
	passwordConfirm: z.string().min(2).max(50),
}).refine((data) => data.password === data.passwordConfirm, {
	message: 'Пароли не совпадают',
	path: ['passwordConfirm'],
})

export type UserSignUpFormValues = z.infer<typeof userSignUpFormSchema>