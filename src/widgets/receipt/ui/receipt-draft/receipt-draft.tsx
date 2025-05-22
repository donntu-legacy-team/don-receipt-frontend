'use client'

import { notFound } from 'next/navigation'
import { useReceiptDraft } from '../../api/use-receipt-draft'
import { ReceiptEditor } from '@/entities/receipt/ui'
import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/button'
import { useSaveReceiptDraft } from '../../api/use-save-receipt-draft'
import { usePublishReceiptDraft } from '../../api/use-publish-receipt-draft'
import { Skeleton } from '@/shared/ui/skeleton'
import { useUser } from '@/entities/user/lib'
import { formatDateTime } from '@/shared/lib/date'
import { SelectSubcategory } from '@/features/category/ui'

export type ReceiptDraftProps = {
	receiptId: number,
}

export const ReceiptDraft = (props: ReceiptDraftProps) => {
	const { currentUser } = useUser()

	const { data: receiptDraft, isError, isLoading  } = useReceiptDraft(props.receiptId)

	const { saveReceiptDraft, isPending: isSaving } = useSaveReceiptDraft()

	const { publishReceiptDraft, isPending: isPublishing } = usePublishReceiptDraft()

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [subcategoryId, setSubcategoryId] = useState<number | undefined>(undefined)

	useEffect(() => {
		setTitle(receiptDraft?.title || '')
		setBody(receiptDraft?.receiptContent || '')
		setSubcategoryId(receiptDraft?.subcategory?.id)
	}, [receiptDraft])

	if (isError) {
		notFound()
	}

	const isDisabled = isSaving || isPublishing

	const onSaveClick = () => {
		saveReceiptDraft({
			receiptDraftId: props.receiptId,
			title: title,
			body: body,
			subcategoryId,
		})
	}

	const onPublishClick = () => {
		publishReceiptDraft(props.receiptId)
	}

	if (isLoading || !receiptDraft) {
		return (
			<div className="flex flex-col gap-2">
				<Skeleton className="w-full h-10" />
				<Skeleton className="w-full h-10" />
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4">
				<div>
					<p className="font-semibold text-lg">{currentUser?.username}</p>
					<p className="text-gray-500 text-xs">{formatDateTime(receiptDraft.updatedAt)}</p>
				</div>
				<div className="flex gap-2">
					<Button size="lg" disabled={isDisabled} onClick={onSaveClick}>
						Сохранить
					</Button>
					<Button variant="outline" size="lg" disabled={isDisabled} onClick={onPublishClick}>
						Опубликовать
					</Button>
				</div>
			</div>
			<div>
				<h3 className="text-xl font-medium m">
					Категория блюда	
				</h3>
				<SelectSubcategory
					value={receiptDraft.subcategory?.id}
					onChange={setSubcategoryId}
				/>
			</div>
			<ReceiptEditor
				title={receiptDraft.title ?? title}
				body={receiptDraft.receiptContent ?? body}
				onTitleUpdate={setTitle}
				onBodyUpdate={setBody}
			/>
		</div>
	)
}