import { Api, HttpClient } from '@/shared/api/generated/Api'
import { CategoryApi } from './services'
import { AuthApi } from './services/auth.api'
import { withGlobalErrorHandler } from './wrapper/with-global-error-handler'
import { withAuthorization } from './wrapper/with-authorization'
import { withUnauthorizedHandler } from './wrapper/with-unauthorized-handler'
import { UserApi } from './services/user.api'

export { ServiceHandleError } from './wrapper/service-handle-error'

class Gateway {
	categoryApi: CategoryApi
	authApi: AuthApi
	userApi: UserApi

	constructor(private httpClient: HttpClient) {

		const api = new Api(httpClient)
		this.categoryApi = new CategoryApi(api)
		this.authApi = new AuthApi(api)
		this.userApi = new UserApi(api)
	}
}

export const getApi = () => {
	const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

	const httpClient = new HttpClient({
		baseURL,
	})

	withAuthorization(httpClient)
	withUnauthorizedHandler(httpClient)
	withGlobalErrorHandler(httpClient)

	return new Gateway(httpClient)
}