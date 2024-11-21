<template>
    <LayoutBreadcrumb class="mb-6" :breadcrumbs="breadcrumbs" />
    <h3>
        Shop catalog
    </h3>
    <div class="banner grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <img src="~/assets/images/banner.svg" alt="banner" />
        <img src="~/assets/images/banner-2.svg" class="hidden md:block" alt="banner" />
    </div>

    <div class="flex gap-4">
        <SidebarFilter class="sidebar-filter hidden lg:block" />
        <div class="items grid grid-cols-2 lg:grid-cols-3 gap-8">
            <template v-if="isLoading">
                <div v-for="i in 6" :key="i" class="flex flex-col gap-4">
                    <Loading width="160" height="100" responsive>
                        <rect x="0" y="0" width="100%" height="100%" />
                    </Loading>
                    <Loading />
                    <Loading width="200" />
                    <Loading />
                </div>
            </template>
            <Item v-for="product in products" :key="product.id" :item="product" />
        </div>
    </div>

    <img src="~/assets/images/banner-2.svg" class="md:hidden block w-full mt-8" alt="banner" />
</template>

<script setup lang="ts">
import { useProductStore } from '~/store/product';
import type { IBreadcrumb, IProduct } from '~/types/global';

const breadcrumbs = computed<IBreadcrumb[]>(() => [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Catalog',
    },
])

const { products, isLoading } = storeToRefs(useProductStore())

const onLoaded = async () => {
    isLoading.value = true
    const { data, error } = await useApi<IProduct[]>('/products')

    if (error.value) {
        console.error('Failed to fetch products:', error.value);
        isLoading.value = false
    } else {
        isLoading.value = false
        products.value = data.value || [] as IProduct[]
    }

}

onMounted(async () => {
    await nextTick()
    await onLoaded()
})

</script>

<style lang="postcss" scoped>
.banner {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    img {
        max-width: 100%;
        object-fit: contain;
    }
}

.sidebar-filter {
    width: 306px;
}

.items {
    flex: 1;
}

/* @media (min-width: 1024px) {
  .lg\:hidden {
    display: none;
  }
  .lg\:block {
    display: block;
  }
} */
</style>