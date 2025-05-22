import { ReceiptDto } from '@/shared/api/generated/Api'
import { formatDate } from '@/shared/lib/date'
import { buildReceiptRoute } from '@/shared/lib/routes'
import { Button } from '@/shared/ui/button'
import { Card, CardFooter, CardTitle, CardHeader } from '@/shared/ui/card'
import Link from 'next/link'

export type ReceiptCardProps = {
	receipt: ReceiptDto,
}

export const ReceiptCard = (props: ReceiptCardProps) => {
	return (
		<Link href={buildReceiptRoute(props.receipt.id)}>
			<Card key={props.receipt.id} className="w-full hover:shadow-lg transition-shadow">
				<CardHeader>
					<CardTitle>{props.receipt.title}</CardTitle>
				</CardHeader>
				<CardFooter className="flex justify-between items-center">
					<span className="text-sm text-gray-500">{formatDate(props.receipt.createdAt)}</span>
					<Button variant="link" className="text-blue-600 hover:text-blue-800">
						Посмотреть подробнее 
					</Button>
				</CardFooter>
			</Card>
		</Link>
	)
}