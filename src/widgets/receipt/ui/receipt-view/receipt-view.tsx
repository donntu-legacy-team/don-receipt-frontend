'use client'

import { formatDateTime } from '@/shared/lib/date'
import { useReceipt } from '../../api/use-receipt'
import { Skeleton } from '@/shared/ui/skeleton'
import { ReceiptEditor } from '@/entities/receipt/ui/receipt-editor'

export type ReceiptViewProps = {
	receiptId: number,
}

export const ReceiptView = (props: ReceiptViewProps) => {
	const {
		data: receipt,
		isLoading: isReceiptLoading,
	} = useReceipt(props.receiptId)

	if (isReceiptLoading || !receipt) {
		return (
			<div className="flex flex-col gap-2">
				<Skeleton className="w-full h-10" />
				<Skeleton className="w-full h-10" />
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-4">
			<div>
				<p className="text-gray-500 text-xs">{formatDateTime(receipt.createdAt)}</p>
				<p>{receipt.subcategory?.name}</p>
			</div>
			<ReceiptEditor
				title={receipt.title}
				body={receipt.receiptContent}
				isEditable={false}
			/>
		</div>
	)
}