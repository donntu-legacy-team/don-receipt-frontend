import { CategoriesBar } from '@/entities/category/ui/categories-bar'
import { getApi } from '@/shared/api'

const Home = async () => {
	const {
		categoryApi,
	} = getApi()

	const { categories } = await categoryApi.getCategories()

	return (
		<div>
			{categories && (
				<CategoriesBar
					categories={categories}
				/>
			)}
		</div>			
	)
}

export default Home