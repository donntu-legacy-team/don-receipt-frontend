import { getQueryClient } from '@/shared/lib/query-client'
import { RECEIPTS_QUERY_KEY } from '.'
import { getApi } from '@/shared/api'
export const prefetchReceipts = async () => {
	const queryClient = getQueryClient()

	const {
		receiptApi,
	} = getApi()

	await queryClient.prefetchQuery({
		queryKey: [RECEIPTS_QUERY_KEY],
		queryFn: () => {
			return receiptApi.getReceipts()
		},
	})
}