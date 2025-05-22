import { ReceiptView } from '@/widgets/receipt/ui/receipt-view'

export type ReceiptPageParams = {
	id: string,
}

const ReceiptPage = async ({ params }: { params: Promise<ReceiptPageParams> }) => {
	const { id } = await params

	return (
		<ReceiptView
			receiptId={Number(id)}
		/>
	)
}

export default ReceiptPage