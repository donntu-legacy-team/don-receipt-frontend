import { ReceiptDraft } from '@/widgets/receipt/ui/receipt-draft'

export type MyDraftPageParams = {
	id: string,
}

const MyDraftPage = async ({ params }: { params: Promise<MyDraftPageParams> }) => {
	const { id } = await params

	return (
		<ReceiptDraft
			key={id}
			receiptId={Number(id)}
		/>
	)
}

export default MyDraftPage