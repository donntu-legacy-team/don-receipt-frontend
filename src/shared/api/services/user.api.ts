import { Api } from '../generated/Api'

export class UserApi {
	constructor(private api: Api<unknown>) {}

	async getUser() {
		const { data } = await this.api.user.usersControllerGetCurrentUser()
        
		return data
	}
}
