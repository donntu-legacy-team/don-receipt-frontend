import { useQuery } from '@tanstack/react-query'
import { getApi } from '@/shared/api'
import { RECEIPT_DRAFT_QUERY_KEY } from '.'

export const useReceiptDraft = (receiptId: number) => {
	const {
		receiptApi,
	} = getApi()

	return useQuery({
		queryKey: [RECEIPT_DRAFT_QUERY_KEY, receiptId],
		queryFn: () => receiptApi.getReceiptDraft(receiptId),
	})
}