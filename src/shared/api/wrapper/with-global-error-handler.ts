import { HttpClient } from '../generated/Api'

export const withGlobalErrorHandler = (httpClient: HttpClient) => {
	httpClient.instance.interceptors.response.use(null, (error) => {
		if (!error.response) {
			console.log(error.message || 'Нет соединения с серверов')
			return Promise.reject(error)
		}

		const message = error.response.data?.message
      || `Ошибка ${error.response.status}: ${error.response.statusText}`


		console.log(message)

		return Promise.reject(error)
	})
}
