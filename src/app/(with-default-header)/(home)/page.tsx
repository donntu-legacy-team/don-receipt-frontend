import { CategoriesBar } from '@/entities/category/ui/categories-bar'
import { prefetchCategories } from '@/entities/category/api'
import { QueryHydrationBoundary } from '@/shared/ui/query-hydration-boundary'
import { ReceiptsList } from '@/widgets/receipt/ui/receipts-list/receipts-list'

const Home = async () => {
	await prefetchCategories()

	return (
		<QueryHydrationBoundary>
			<div className="mb-8">
				<CategoriesBar/>			
			</div>
			<section className="container mx-auto px-4">
				<ReceiptsList />
			</section>
		</QueryHydrationBoundary>
	)
}

export default Home