import { useMutation } from '@tanstack/react-query'
import { getApi } from '@/shared/api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { isAxiosError } from 'axios'
import { buildReceiptRoute } from '@/shared/lib/routes'

export const usePublishReceiptDraft = () => {
	const { receiptApi } = getApi()

	const router = useRouter()

	const { mutate: publishReceiptDraft, isPending } = useMutation({
		mutationFn: async (receiptDraftId: number) => {
			const response = await receiptApi.publishReceiptDraft(receiptDraftId)
			return response
		},
		onSuccess: (receipt) => {
			if (!receipt) {
				return
			}

			toast.success('Рецепт опубликован')
			router.push(buildReceiptRoute(receipt?.id))
		},
		onError: (error) => {
			if (isAxiosError(error) && error.response?.data) {
				toast.error(error.response.data.message || 'Ошибка при публикации рецепта')
			} else {
				toast.error('Ошибка при публикации рецепта')
			}
		},
	})

	return { publishReceiptDraft, isPending }
}