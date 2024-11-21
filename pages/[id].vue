<template>
    <LayoutBreadcrumb class="mb-6" :breadcrumbs="breadcrumbs" />
    <div>
        <h3>{{ product.name }}</h3>
        <div class="tabs">
            <div class="tab" v-for="(tab, index) in tabs" :key="index">
                <div class="tab__title" :class="{ 'tab__title--active': selectedTab.name === tab.name }" @click="selectedTab = tab">
                    {{ tab.name }}
                </div>
                <Rating :rating="product.rating" />
            </div>
        </div>
        <div class="detail-content" v-if="currentComponent">
            <component  :is="currentComponent" :product="product" :loading="isLoading" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb, IProduct } from '~/types/global';

const route = useRoute()
const id = route.params.id
const product = ref<IProduct>({} as IProduct)
const isLoading = ref(true)
const tabs = ref([
    {
        name: 'General Info',
        component: 'GeneralInfo',
    }
])
const selectedTab = ref(tabs.value[0])
const currentComponent = ref(null);

function preloadComponents(componentName: string) {
    if(import.meta.server) return null;
    return defineAsyncComponent(() =>
        import(`~/components/detail/${componentName}.vue`)
    );
}

watch(
  () => selectedTab.value.component,
  (newComponent) => {
    if (newComponent) {
      currentComponent.value = preloadComponents(newComponent);
    }
  },
  { immediate: true }
);

const breadcrumbs = computed<IBreadcrumb[]>(() => [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Shop',
        path: '/',
    },
    {
        name: 'Product',
    },
])

const onLoaded = async () => {
    isLoading.value = true
    const { data, error } = await useApi<IProduct>(`/products/${id}`)
    if (error.value) {
        isLoading.value = false
        console.error('Failed to fetch products:', error.value);
    } else {
        isLoading.value = false
        product.value = data.value || {} as IProduct
    }
}

onMounted(async () => {
    await nextTick()
    await onLoaded()
})
</script>

<style lang="postcss" scoped>
.tabs {
    border-bottom: 1px solid #e5e7eb;
    .tab {
        display: flex;
        justify-content: space-between;
        &__title {
            font-size: 12px;
            padding: 10px 0;
            &--active {
                border-bottom: 1px solid #000;
            }
        }
    }
}
.detail-content {
    margin: 24px 0;
}
</style>