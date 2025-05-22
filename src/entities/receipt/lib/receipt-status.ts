import { ReceiptDto } from '@/shared/api/generated/Api'

export const getStatusColor = (status: ReceiptDto['receiptStatus']) => {
	switch (status) {
		case 'DRAFT':
			return 'bg-orange-50 text-orange-700 border border-orange-200 shadow-sm hover:bg-orange-100'
		case 'PUBLISHED':
			return 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm hover:bg-emerald-100'
		case 'ON_MODERATION':
			return 'bg-sky-50 text-sky-700 border border-sky-200 shadow-sm hover:bg-sky-100'
		case 'ARCHIVED':
			return 'bg-slate-50 text-slate-600 border border-slate-200 shadow-sm hover:bg-slate-100'
		default:
			return 'bg-slate-50 text-slate-600 border border-slate-200 shadow-sm hover:bg-slate-100'
	}
}

export const getStatusText = (status: ReceiptDto['receiptStatus']) => {
	switch (status) {
		case 'DRAFT':
			return 'Черновик'
		case 'PUBLISHED':
			return 'Опубликован'
		case 'ON_MODERATION':
			return 'На модерации'
		case 'ARCHIVED':
			return 'Архивирован'
		default:
			return status
	}
}