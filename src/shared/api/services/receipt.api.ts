import { Api, CreateReceiptDraftDto, ReceiptsControllerGetAllPublishedParams, UpdateReceiptDraftDto } from '../generated/Api'

export class ReceiptApi {
	constructor(private api: Api<unknown>) {}

	async getReceipts(params?: ReceiptsControllerGetAllPublishedParams) {
		const { data } = await this.api.receipts.receiptsControllerGetAllPublished(params ?? {})
		return data.receipts
	}

	async getReceiptDrafts() {
		const { data } = await this.api.receipts.receiptsControllerGetDrafts()
		return data.receipts
	}

	async getReceiptDraft(id: number) {
		const { data } = await this.api.receipts.receiptsControllerGetDraftById(id)
		return data.receipt
	}

	async getReceipt(id: number) {
		const { data } = await this.api.receipts.receiptsControllerGetPublishedById(id)
		return data.receipt
	}

	async createReceiptDraft(receipt: CreateReceiptDraftDto) {
		const { data } = await this.api.receipts.receiptsControllerCreateDraft(receipt)
		return data.receipt
	}

	async updateReceiptDraft(id: number, receipt: UpdateReceiptDraftDto) {
		const { data } = await this.api.receipts.receiptsControllerUpdateDraft(id, receipt)
		return data.receipt
	}

	async publishReceiptDraft(id: number) {
		const { data } = await this.api.receipts.receiptsControllerPublishDraft(id)
		return data.receipt
	}
}
