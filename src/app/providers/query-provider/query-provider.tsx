'use client'

import { getQueryClient } from '@/shared/lib/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export type QueryProviderProps = {
	children?: ReactNode,
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}