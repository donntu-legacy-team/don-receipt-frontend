import { Api, HttpClient } from '@/shared/api/generated/Api'
import { CategoryApi } from './services'

class Gateway {
	categoryApi: CategoryApi

	constructor(private httpClient: HttpClient) {
		const api = new Api(httpClient)
		this.categoryApi = new CategoryApi(api)
	}
}

export const getApi = () => {
	const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

	const httpClient = new HttpClient({
		baseURL,
	})

	return new Gateway(httpClient)
}