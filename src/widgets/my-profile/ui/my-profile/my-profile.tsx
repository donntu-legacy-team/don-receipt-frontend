import { UserDto } from '@/shared/api/generated/Api'

export type MyProfileProps = {
	user: UserDto,
}

export const MyProfile = (props: MyProfileProps) => {
	return (
		<div>
			<h2>
				{props.user.username}
			</h2>
		</div>
	)
}