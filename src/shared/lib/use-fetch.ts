import { useState } from 'react'

export const useFetch = <R>(fetchFunction: (...args: unknown[]) => Promise<R>) => {
	const [data, setData] = useState<R>()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | undefined>()

	const fetchData = async (...args: unknown[]) => {
		setIsLoading(true)
		try {
			const response = await fetchFunction(...args)
			setData(response)
		} catch (error) {
			setError(error as Error)
		} finally {
			setIsLoading(false)
		}
	}

	return { 
		data,
		isLoading,
		error,
		fetchData,
	}
}