import { Api } from '../generated/Api'

export class CategoryApi {
	constructor(private api: Api<unknown>) {}

	async getCategories() {
		const { data } = await this.api.categories.categoriesControllerGetCategories()
		return data
	}
}