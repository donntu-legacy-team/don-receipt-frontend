'use client'

import { useReceiptDrafts } from '@/entities/receipt/api'
import { MyReceiptCard } from '@/entities/receipt/ui/my-receipt-card'
import { NewReceiptButton } from '@/features/receipt/new-receipt-button'
import { buildMyDraftRoute } from '@/shared/lib/routes'
import { LoaderCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const ReceiptDraftsList = () => {
	const {
		data: receiptDrafts,
		isLoading: isReceiptDraftsLoading,
		error: receiptDraftsError,
	} = useReceiptDrafts()

	const router = useRouter()

	useEffect(() => {
		if (receiptDraftsError) {
			toast.error(receiptDraftsError.message)
		}
	}, [receiptDraftsError])

	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-3xl font-semibold">
					Мои черновики
				</h2>
				<NewReceiptButton/>
			</div>
			<div>
				{isReceiptDraftsLoading && (
					<div className="flex justify-center items-center h-full">
						<LoaderCircleIcon className="w-4 h-4 animate-spin" />
					</div>
				)}
				{!isReceiptDraftsLoading && !receiptDrafts?.length && (
					<p className="text-xl font-medium text-gray-500">У вас нет черновиков, начните писать новый рецепт</p>
				)}
				{!isReceiptDraftsLoading && !!receiptDrafts?.length && (
					<div className="flex flex-col gap-4">
						{receiptDrafts.map((receiptDraft) => (
							<MyReceiptCard
								key={receiptDraft.id}
								receipt={receiptDraft}
								onViewClick={() => {
									router.push(buildMyDraftRoute(receiptDraft.id))
								}}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}