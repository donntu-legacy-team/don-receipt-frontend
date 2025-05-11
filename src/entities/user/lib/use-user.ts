import { getApi } from '@/shared/api'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const CURRENT_USER_QUERY_KEY = 'currentUser'

export const useUser = () => {
	const {
		userApi,
	} = getApi()

	const queryClient = useQueryClient()

	// не захотел выносить в api, ради удобства нейминга
	const { data: currentUser, isLoading, isError, refetch } = useQuery({ 
		queryKey: [CURRENT_USER_QUERY_KEY],
		queryFn: async () => {
			const res = await userApi.getUser()
			return res.user
		},
		staleTime: 1000 * 60 * 3, // 3 минуты
		retry: 1,
		placeholderData: undefined,
	})

	const logoutMutation = () => {
		queryClient.resetQueries({ queryKey: [CURRENT_USER_QUERY_KEY] })
	}

	return {
		isLogged: !!currentUser,
		currentUser: currentUser,
		isLoadingUser: isLoading,
		isErrorUser: isError,    
		getUser: refetch,
		logOut: logoutMutation,
	}
}
