import { getApi } from '@/shared/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { RECEIPT_DRAFTS_QUERY_KEY } from '.'

export const useReceiptDrafts = () => {
	const {
		receiptApi,
	} = getApi()

	return useSuspenseQuery({
		queryKey: [RECEIPT_DRAFTS_QUERY_KEY],
		queryFn: () => receiptApi.getReceiptDrafts(),
	})
}
