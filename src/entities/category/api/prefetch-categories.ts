import { getQueryClient } from '@/shared/lib/query-client'
import { CATEGORIES_QUERY_KEY } from '.'

export const prefetchCategories = async () => {
	const queryClient = getQueryClient()

	await queryClient.prefetchQuery({
		queryKey: [CATEGORIES_QUERY_KEY],
	}) 
}