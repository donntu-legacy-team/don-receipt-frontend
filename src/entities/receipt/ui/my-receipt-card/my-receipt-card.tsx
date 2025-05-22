import { ReceiptDto } from '@/shared/api/generated/Api'
import { CalendarIcon, EyeIcon } from 'lucide-react'
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { formatDateTime } from '@/shared/lib/date'
import { getStatusColor } from '../../lib/receipt-status'
import { getStatusText } from '../../lib/receipt-status'

import { Badge } from '@/shared/ui/badge'

export type MyReceiptCardProps = {
	receipt: ReceiptDto,
	onViewClick: () => void,
}

export const MyReceiptCard = (props: MyReceiptCardProps) => {
	return (
		<Card className="w-full hover:shadow-md transition-shadow">
			<CardHeader className="flex flex-row justify-between">
				<div>
					<CardTitle className="text-lg font-medium">
						{props.receipt.title || (
							<span className="text-gray-500">Без заголовка</span>
						)}
					</CardTitle>
					<CardDescription className="flex items-center gap-1 mt-1 text-sm text-gray-500">
						<CalendarIcon className="h-4 w-4" />
						{formatDateTime(props.receipt.updatedAt)}
					</CardDescription>
				</div>
				<Badge className={`${getStatusColor(props.receipt.receiptStatus)}`}>
					{getStatusText(props.receipt.receiptStatus)}
				</Badge>
			</CardHeader>
			<CardFooter className="flex justify-between">
				<Button variant="outline" size="sm" className="flex items-center gap-1" onClick={props.onViewClick}>
					<EyeIcon className="h-4 w-4" />
					Просмотр
				</Button>
			</CardFooter>
		</Card>
	)
}