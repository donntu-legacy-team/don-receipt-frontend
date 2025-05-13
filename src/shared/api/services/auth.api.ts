import { Api } from '../generated/Api'
import type { CreateUserDto, LoginDto } from '../generated/Api'

export class AuthApi {
	constructor(private api: Api<unknown>) {}

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
