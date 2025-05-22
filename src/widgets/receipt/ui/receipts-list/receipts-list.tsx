'use client'

import { useReceipts } from '@/entities/receipt/api/use-receipts'
import { ReceiptCard } from '@/entities/receipt/ui/receipt-card'
import { LoaderCircleIcon } from 'lucide-react'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const ReceiptsList = () => {
	const {
		data: receipts,
		isLoading: isReceiptsLoading,
		error: receiptsError,
	} = useReceipts()

	useEffect(() => {
		if (receiptsError) {
			toast.error(receiptsError.message)
		}
	}, [receiptsError])

	return (
		<div>
			{isReceiptsLoading && (
				<div className="flex justify-center items-center h-full">
					<LoaderCircleIcon className="w-4 h-4 animate-spin" />
				</div>
			)}
			{!isReceiptsLoading && !receipts?.length && (
				<p className="text-xl font-medium text-gray-500">Упс, не нашли рецетпы :(</p>
			)}
			{!isReceiptsLoading && !!receipts?.length && (
				<div className="flex flex-col gap-4">
					{receipts.map((receipt) => (
						<ReceiptCard key={receipt.id} receipt={receipt} />
					))}
				</div>
			)}
		</div>
	)
}