import { ReactNode } from 'react'

export type ProfileLayoutProps = {
	children: ReactNode,
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
	return (
		<div className="container mx-auto px-4 mt-4">
			{children}
		</div>
	)
}

export default ProfileLayout