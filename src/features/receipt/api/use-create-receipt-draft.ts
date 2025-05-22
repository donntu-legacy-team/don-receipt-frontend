import { getApi } from '@/shared/api'
import { CreateReceiptDraftDto } from '@/shared/api/generated/Api'
import { useMutation } from '@tanstack/react-query'
import { RECEIPT_DRAFTS_QUERY_KEY } from '@/entities/receipt/api'

export const useCreateReceiptDraft = () => {
	const {
		receiptApi,
	} = getApi()

	return useMutation({
		mutationKey: [RECEIPT_DRAFTS_QUERY_KEY],
		mutationFn: (receipt: CreateReceiptDraftDto) => receiptApi.createReceiptDraft(receipt),
	})
}