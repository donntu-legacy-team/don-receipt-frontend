import { getApi } from '@/shared/api'
import { LoginDto } from '@/shared/api/generated/Api'
import { LocalStorage } from '@/shared/lib/persist'
import { CURRENT_USER_QUERY_KEY, useUser } from './use-user'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAuth = () => {
	const queryClient = useQueryClient()

	const {
		authApi,
	} = getApi()

	const {
		logOut,
	} = useUser()

	const signInMutation = useMutation({
		mutationFn: (data: LoginDto) => authApi.login(data),
		onSuccess: (res) => {
			if (res.accessToken && res.refreshToken && typeof window !== undefined) {
				LocalStorage.accessToken = res.accessToken
				LocalStorage.refreshToken = res.refreshToken

				queryClient.invalidateQueries({
					queryKey: [CURRENT_USER_QUERY_KEY],
				})
			}
		},
		
	})

	const signOut = () => {
		LocalStorage.accessToken = null
		LocalStorage.refreshToken = null
		return logOut()
	}

	return {
		signIn: signInMutation.mutateAsync,
		signInError: signInMutation.error,
		isSignInLoading: signInMutation.isPending,
		signOut,
	}
}
