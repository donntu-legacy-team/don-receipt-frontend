"use client"
import { useEffect, useState } from 'react'
import { useApi } from '@/lib/use-api'
import { CategoryDto } from '@/api/generated/Api'

export default function Home() {
  const api = useApi()

  const [categories, setCategories] = useState<CategoryDto[]>() 

  useEffect(() => {
    (async () => {
      const { data } = await api.categories.categoriesControllerGetCategories()
      if (data) {
        setCategories(data.categories)
      }
    })()
  }, [])

  return (
    <div>
      {JSON.stringify(categories)}
    </div>
  )
}
