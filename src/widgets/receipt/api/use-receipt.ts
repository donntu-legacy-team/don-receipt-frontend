import { useQuery } from '@tanstack/react-query'
import { getApi } from '@/shared/api'
import { RECEIPT_QUERY_KEY } from '.'

export const useReceipt = (receiptId: number) => {
	const {
		receiptApi,
	} = getApi()

	return useQuery({
		queryKey: [RECEIPT_QUERY_KEY, receiptId],
		queryFn: () => receiptApi.getReceipt(receiptId),
	})
}