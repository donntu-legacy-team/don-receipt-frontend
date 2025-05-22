import { getQueryClient } from '@/shared/lib/query-client'
import { CATEGORIES_QUERY_KEY } from '.'
import { getApi } from '@/shared/api'

export const prefetchCategories = async () => {
	const queryClient = getQueryClient()

	const {
		categoryApi,
	} = getApi()

	await queryClient.prefetchQuery({
		queryKey: [CATEGORIES_QUERY_KEY],
		queryFn: () => {
			return categoryApi.getCategories()
		},
	}) 
}