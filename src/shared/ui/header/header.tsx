export type HeaderProps = {
	leftContent?: React.ReactNode,
	rightContent?: React.ReactNode,
}

export const Header = ({ leftContent, rightContent }: HeaderProps) => {
	return (
		<header className="flex h-16 shrink-0 items-center gap-2 border-b">
			<div className="container mx-auto px-4 flex justify-between">
				{leftContent}
				{rightContent}
			</div>
		</header>
	)
}
