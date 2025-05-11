'use client'
import { cn } from '@/shared/lib/utils'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/shared/ui/navigation-menu'
import { useCategories } from '../../api/use-categories'

export const CategoriesBar = () => {
	const {
		data: categories,
	} = useCategories()

	return (
		<div className="border-b">
			<div className="container mx-auto">
				<NavigationMenu>
					<NavigationMenuList className="flex">
						{categories?.map((category) => (
							<NavigationMenuItem key={category.id}>
								{!!category.subcategories.length ? (
									<>
										<NavigationMenuTrigger>
											{category.name}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul>
												{category.subcategories.map((subcategory) => (
													<li key={subcategory.id}>
														<NavigationMenuLink asChild>
															<a
																className={cn(
																	'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
																)}
															>
																<div className="text-sm font-medium leading-none">{subcategory.name}</div>
															</a>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : (
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										{category.name}
									</NavigationMenuLink>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	)
}