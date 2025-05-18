import { ReceiptEditor } from '@/entities/receipt/ui'

const MyDraftsPage = () => {
	return (
		<div>
			<h2 className="text-3xl font-semibold">
				Новый рецепт
			</h2>
			<ReceiptEditor/>
		</div>
	) 
}

export default MyDraftsPage