'use client'

import Link from 'next/link'

export type LogoProps = {
	href?: string, 
}

export const Logo = ({ href }: LogoProps) => {

	if (href) {
		return (
			<Link href={href}>
				<div className="text-2xl font-bold">
					ДонРецепты.ру
				</div>
			</Link>
		)
	}

	return (
		<div className="text-2xl font-bold">
			ДонРецепты.ру
		</div>
	)
}
