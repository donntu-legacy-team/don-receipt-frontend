import { useCategories } from '@/entities/category/api'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'
import { SelectGroup, SelectLabel } from '@radix-ui/react-select'

export type SelectSubcategoryProps = {
	placeholder?: string,
	value?: number,
	onChange: (value: number) => void,
}

export const SelectSubcategory = (props: SelectSubcategoryProps) => {
	const { data: categories } = useCategories()

	const onChange = (value: string) => {
		props.onChange(Number(value))
	}

	return (
		<Select defaultValue={props.value ? String(props.value) : undefined} onValueChange={onChange}>
			<SelectTrigger>
				<SelectValue placeholder={props.placeholder || 'Выберите категорию'} />
			</SelectTrigger>
			<SelectContent>
				{categories?.map((category) => (
					<SelectGroup key={category.id}>
						<SelectLabel className="font-semibold my-2 pl-1">{category.name}</SelectLabel>
						{category.subcategories.map((subcategory) => (
							<SelectItem key={subcategory.id} value={String(subcategory.id)}>
								{subcategory.name}
							</SelectItem>
						))}
					</SelectGroup>
				))}
			</SelectContent>
		</Select>
	)
}