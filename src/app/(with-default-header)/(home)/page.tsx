import { CategoriesBar } from '@/entities/category/ui/categories-bar'
import { prefetchCategories } from '@/entities/category/api'
import { QueryHydrationBoundary } from '@/shared/ui/query-hydration-boundary'

const Home = async () => {
	await prefetchCategories()

	return (
		<QueryHydrationBoundary>
			<CategoriesBar/>			
		</QueryHydrationBoundary>
	)
}

export default Home