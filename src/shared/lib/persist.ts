export enum LOCAL_STORAGE_ITEM {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken',
}

export const LocalStorage = {
	get accessToken(): string | null {
		return localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN)
	},
	set accessToken(token: string | null) {
		if (!token) {
			localStorage.removeItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN)	
			return
		}

		localStorage.setItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN, token)

	},
	get refreshToken(): string | null {
		return localStorage.getItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN)
	},
	set refreshToken(token: string | null) {
		if (!token) {
			localStorage.removeItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN)
			return
		}

		localStorage.setItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN, token)
	},
}