import type { IProduct } from "~/types/global"

export const useProductStore = defineStore('product', () => {
  const products = ref<IProduct[]>([])
  const isLoading = ref(true)

  return {
    products,
    isLoading,
  }
})
