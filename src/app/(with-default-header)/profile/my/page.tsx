'use client'
import { useUser } from '@/entities/user/lib'
import { MyProfile } from '@/widgets/my-profile/ui'

const MyProfilePage = () => {
	const user = useUser()

	return (
		<section>
			<h1>
				Мой профиль
			</h1>
			{user.currentUser && (
				<MyProfile
					user={user.currentUser}
				/>
			)}
		</section>
	)
}

export default MyProfilePage