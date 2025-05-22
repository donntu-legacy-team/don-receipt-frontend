import { getApi } from '@/shared/api'
import { RECEIPT_DRAFTS_QUERY_KEY } from '.'
import { useMutation } from '@tanstack/react-query'
import { UpdateReceiptDraftDto } from '@/shared/api/generated/Api'

export type UpdateReceiptDraftParams = {
	id: number,
	receipt: UpdateReceiptDraftDto,
}

export const useUpdateReceiptDraft = () => {
	const {
		receiptApi,
	} = getApi()

	return useMutation({
		mutationKey: [RECEIPT_DRAFTS_QUERY_KEY],
		mutationFn: ({ id, receipt }: UpdateReceiptDraftParams) =>
			receiptApi.updateReceiptDraft(id, receipt),
	})
}
