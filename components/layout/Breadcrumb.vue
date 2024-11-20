<template>
    <div class="flex items-center gap-2">
        <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <NuxtLink :to="breadcrumb.path" :class="[breadcrumb.path ? 'text-gray-700' : 'text-gray-400']">{{ breadcrumb.name }}</NuxtLink>
            <img src="~/assets/images/chevron-right.svg" alt="chevron-right" v-if="index !== breadcrumbs.length - 1" />
        </template>
    </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from '~/types/global';

defineProps({
    breadcrumbs: {
        type: Array as PropType<IBreadcrumb[]>,
        required: true,
    },
})
</script>

<style lang="postcss" scoped>

</style>