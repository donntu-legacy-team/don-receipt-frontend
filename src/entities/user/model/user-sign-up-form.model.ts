import { z } from 'zod'

export const userSignUpFormSchema = z.object({
	email: z.string().email('Некорректный e-mail'),
	username: z.string().min(2, 'Длина должна быть не меньше 2 символов').max(50, 'Длина не может быть больше 50 символов'),
	password: z.string().min(2, 'Длина должна быть не меньше 2 символов').max(50, 'Длина не может быть больше 50 символов'),
	passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
	message: 'Пароли не совпадают',
	path: ['passwordConfirm'],
})

export type UserSignUpFormValues = z.infer<typeof userSignUpFormSchema>