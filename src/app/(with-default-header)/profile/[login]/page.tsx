export type ProfileParams = {
	login: string,
}

const Profile = ({ params }: { params: Promise<ProfileParams> }) => {
	return (
		<div>
			{JSON.stringify(params)}
		</div>
	)
}

export default Profile