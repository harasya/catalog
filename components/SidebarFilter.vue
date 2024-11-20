<template>
    <div>
        <Category :items="categoryProduct" label="Category" />
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '~/store/category';
import type { ICategory } from '~/types/global';

const { categories, categoryProduct } = storeToRefs(useCategoryStore())

const onLoad = async () => {
    Promise.all([
        getCategories(),
    ])
}

const getCategories = async () => {
    const { data, error } = await useApi<ICategory[]>('/api/categories')
    if (error.value) {
        console.error('Failed to fetch categories:', error.value);
    } else {
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