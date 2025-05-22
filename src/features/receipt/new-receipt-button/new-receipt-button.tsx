'use client'

import { Button } from '@/shared/ui/button'
import { useCreateReceiptDraft } from '../api/use-create-receipt-draft'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { buildMyDraftRoute } from '@/shared/lib/routes'

export const NewReceiptButton = () => {
	const createReceiptDraft = useCreateReceiptDraft()

	const router = useRouter()

	const handleCreateReceiptDraft = async () => {
		const createdReceiptDraft = await createReceiptDraft.mutateAsync({})

		if (createReceiptDraft.error || !createdReceiptDraft) {
			toast.error(createReceiptDraft.error?.message)
		} else {
			router.push(buildMyDraftRoute(createdReceiptDraft.id))
			toast.success('Создан новый черновик')
		}
	}

	return (
		<Button onClick={handleCreateReceiptDraft}>
			Новый рецепт
		</Button>
	)
}