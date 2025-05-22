import { getApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { toast } from 'sonner'

export type SaveReceiptDraftParams = {
	receiptDraftId: number,
	title?: string,
	body?: string,
	subcategoryId?: number,
}

export const useSaveReceiptDraft = () => {
	const {
		receiptApi,
	} = getApi()

	const { mutate: saveReceiptDraft, isPending } = useMutation({
		mutationFn: async (params: SaveReceiptDraftParams) => {
			const response = await receiptApi.updateReceiptDraft(params.receiptDraftId, {
				title: params.title,
				receiptContent: params.body,
				subcategoryId: params.subcategoryId,
			})

			return response
		},
		onSuccess: () => {
			toast.success('Рецепт сохранен')
		},
		onError: (error) => {
			if (isAxiosError(error) && error.response?.data) {
				toast.error(error.response.data.message || 'Ошибка при сохранении рецепта')
			} else {
				toast.error('Ошибка при сохранении рецепта')
			}
		},
	})

	return { saveReceiptDraft, isPending }
}