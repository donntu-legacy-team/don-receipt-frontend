import { Api } from '../generated/Api'
import { ServiceHandleError } from '../wrapper/service-handle-error'
import type { CreateUserDto, LoginDto } from '../generated/Api'

export class AuthApi {
	constructor(private api: Api<unknown>) {}

	@ServiceHandleError(() => new Object())
	async register(reqData: CreateUserDto) {
		const { data } = await this.api.auth.authControllerRegister(reqData)

		return data
	}

	async login(reqData: LoginDto) {
		const { data } = await this.api.auth.authControllerLogin(reqData)

		return data
	}

	async refresh(refreshToken: string) {
		const { data } = await this.api.auth.authControllerRefresh({
			refreshToken,
		})
		
		return data
	}
}
