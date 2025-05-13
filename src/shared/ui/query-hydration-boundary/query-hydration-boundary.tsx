import { getQueryClient } from '@/shared/lib/query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { ReactNode } from 'react'

export type QueryHydrationBoundaryProps = {
	children: ReactNode,
}

export const QueryHydrationBoundary = ({ children }: QueryHydrationBoundaryProps) => {
	return (
		<HydrationBoundary state={dehydrate(getQueryClient())}>
			{children}
		</HydrationBoundary>
	)
}