import { getApi } from '@/shared/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { CATEGORIES_QUERY_KEY } from '.'


export const useCategories = () => {
	const {
		categoryApi,
	} = getApi()

	return useSuspenseQuery({
		queryKey: [CATEGORIES_QUERY_KEY],
		queryFn: async () => await categoryApi.getCategories(), 
	})
}