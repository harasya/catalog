import type { ICategory } from "~/types/global"
import { useProductStore } from "./product"

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([])
  const isLoading = ref(true)
  const { products } = storeToRefs(useProductStore())

  const categoryProduct = computed(() => {
    return categories.value.map((category) => {
      return {
        ...category,
        count: products.value.filter((product) => product.categoryId === category.id).length
      }
    })
  })

  return {
    categories,
    isLoading,
    categoryProduct
  }
})