<template>
    <div>
        <Category :items="categoryProduct" label="Category" :loading="isLoading" />
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '~/store/category';
import type { ICategory } from '~/types/global';

const { categories, categoryProduct, isLoading } = storeToRefs(useCategoryStore())

const onLoad = async () => {
    Promise.all([
        getCategories(),
    ])
}

const getCategories = async () => {
    isLoading.value = true
    const { data, error } = await useApi<ICategory[]>('/categories')
    if (error.value) {
        isLoading.value = false
        console.error('Failed to fetch categories:', error.value);
    } else {
        isLoading.value = false
        categories.value = data.value || []
    }
}

onMounted(async () => {
    await nextTick()
    await onLoad()
})
</script>

<style scoped>

</style>