'use client'
import { useUser } from '@/entities/user/lib'
import { MyProfile } from '@/widgets/my-profile/ui'

const MyProfilePage = () => {
	const user = useUser()

	return (
		<section>
			<h2 className="text-3xl font-semibold mb-4">
				Мой профиль
			</h2>
			{user.currentUser && (
				<MyProfile
					user={user.currentUser}
				/>
			)}
		</section>
	)
}

export default MyProfilePage