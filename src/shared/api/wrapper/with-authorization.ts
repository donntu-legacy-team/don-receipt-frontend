import { LocalStorage } from '@/shared/lib/persist'
import { HttpClient } from '../generated/Api'

export const withAuthorization = (httpClient: HttpClient) => {
	httpClient.instance.interceptors.request.use((config) => {
		if (typeof window !== 'undefined') {
			const token = LocalStorage.accessToken?.trim().replace(/(\r\n|\n|\r)/gm, '')

			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
		}

		return config
	})
}
