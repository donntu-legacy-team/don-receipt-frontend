import { Api, HttpClient } from '~/api/generated/api'

export const useApi = () => {
	const config = useRuntimeConfig()

	const baseURL = config.public.BACKEND_URL

	const httpClient = new HttpClient({
		baseURL,
	})

	return new Api(httpClient)
}
