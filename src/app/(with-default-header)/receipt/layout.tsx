import { ReactNode } from 'react'

export type ReceiptLayoutProps = {
	children: ReactNode,
}

const ReceiptLayout = ({ children }: ReceiptLayoutProps) => {
	return (
		<div className="container mx-auto px-4 mt-4">{children}</div>
	)
}

export default ReceiptLayout