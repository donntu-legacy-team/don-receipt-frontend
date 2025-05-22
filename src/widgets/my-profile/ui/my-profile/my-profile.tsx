import { UserDto } from '@/shared/api/generated/Api'
import { MyPublishedReceiptsList } from '@/widgets/receipt/ui/my-published-receipts-list'

export type MyProfileProps = {
	user: UserDto,
}

export const MyProfile = (props: MyProfileProps) => {
	return (
		<div className="flex flex-col gap-8">
			<div>
				<h3 className="text-xl font-semibold mb-2">
					{props.user.username}
				</h3>
				<p className="text-sm text-gray-500">
					{props.user.email}
				</p>
			</div>
			<div>
				<h3 className="text-xl font-semibold mb-2">
					Мои публикации
				</h3>
				<MyPublishedReceiptsList />
			</div>
		</div>
	)
}