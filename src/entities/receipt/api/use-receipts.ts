import { useQuery } from '@tanstack/react-query'
import { RECEIPTS_QUERY_KEY } from '.'
import { getApi } from '@/shared/api'
import { ReceiptsControllerGetAllPublishedParams } from '@/shared/api/generated/Api'

export const useReceipts = (params?: ReceiptsControllerGetAllPublishedParams) => {
	const {
		receiptApi,
	} = getApi()

	return useQuery({
		queryKey: [RECEIPTS_QUERY_KEY],
		queryFn: () => {
			return receiptApi.getReceipts(params ?? {})
		},
	})
}