export type AuthLayoutProps = Readonly<{
	children: React.ReactNode,
}>

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center">
			<div className="w-full max-w-sm mx-auto">
				{children}
			</div>
		</div>
	)
}

export default AuthLayout