import { LocalStorage } from '@/shared/lib/persist'
import { Api, HttpClient } from '../generated/Api'
import { AuthApi } from '../services/auth.api'

let isRefreshing = false

let failedQueue: Array<{ resolve: (value?: unknown) => void, reject: (reason?: unknown) => void }> = []

const processQueue = (error: unknown, token?: unknown) => {
	failedQueue.forEach(prom => {
		if (error) {
			prom.reject(error)
		} else {
			prom.resolve(token)
		}
	})
	failedQueue = []
}

export const withUnauthorizedHandler = ((httpClient: HttpClient) => {
	const api = new Api(httpClient)
	const authApi = new AuthApi(api)

	return httpClient.instance.interceptors.response.use(null, async (error) => {
		const originalRequest = error.config

		if (error.response?.status === 401  && !originalRequest._isRetry) {

			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject })
				})
					.then(token => {
						originalRequest.headers.Authorization = `Bearer ${token}`
						return httpClient.instance(originalRequest)
					})
					.catch(() => {
						throw error
					})
			}

			originalRequest._isRetry = true
			isRefreshing = true

			try {
				const refreshToken = LocalStorage.refreshToken

				if (!refreshToken) throw Error('[Auth] Unauthorized')

				const res = await authApi.refresh(refreshToken)

				if (!res.accessToken || !res.refreshToken) {
					throw Error('[Auth] Refresh token expired')
				}

				console.log('[Auth] Access token refresh')

				const newAccessToken = res.accessToken
				const newRefreshToken = res.refreshToken

				LocalStorage.accessToken = newAccessToken
				LocalStorage.refreshToken = newRefreshToken

				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

				isRefreshing = false
				processQueue(null, newAccessToken)

				return httpClient.instance(originalRequest)
			} catch (refreshError) {
				LocalStorage.accessToken = null
				LocalStorage.refreshToken = null

				isRefreshing = false
				processQueue(refreshError, undefined)

				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	})
})
