import { useReceipts } from '@/entities/receipt/api/use-receipts'
import { MyReceiptCard } from '@/entities/receipt/ui/my-receipt-card'
import { useUser } from '@/entities/user/lib/use-user'
import { buildReceiptRoute } from '@/shared/lib/routes'
import { LoaderCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const MyPublishedReceiptsList = () => {
	const { currentUser } = useUser()

	const {
		data: receipts,
		isLoading: isReceiptsLoading,
	} = useReceipts({
		authorId: currentUser?.id,
	})

	const router = useRouter()

	const onViewClick = (receiptId: number) => {
		router.push(buildReceiptRoute(receiptId))
	}	

	return (
		<div>
			{isReceiptsLoading && (
				<div className="flex justify-center items-center h-full">
					<LoaderCircleIcon className="w-4 h-4 animate-spin" />
				</div>
			)}
			{!isReceiptsLoading && !receipts?.length && (
				<p className="text-xl font-medium text-gray-500">У вас нет опубликованных рецептов</p>
			)}
			{!isReceiptsLoading && !!receipts?.length && (
				<div className="flex flex-col gap-4">
					{receipts.map((receipt) => (
						<MyReceiptCard key={receipt.id} receipt={receipt} onViewClick={() => onViewClick(receipt.id)} />
					))}
				</div>
			)}
		</div>
	)
}