<template>
    <div class="section-filter">
        <div class="title">{{ label }}</div>
        <div class="space-y-2 mt-4">
            <template v-if="loading">
                <div v-for="i in 5" :key="i" class="flex items-center gap-2 justify-between w-full">
                    <Loading width="150" />
                    <Loading width="15" />
                </div>
            </template>
            <template v-else>
                <div v-for="item in items" :key="item.id" class="section-filter__list flex justify-between items-center">
                    <div>
                        {{ item.name }}
                    </div>
                    <div class="section-filter__list-count">{{ item.count }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICategory } from '~/types/global';

defineProps({
    label: {
        type: String,
        default: 'Category',
    },
    items: {
        type: Array as PropType<ICategory[]>,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    }
})

</script>

<style lang="postcss" scoped>
.section-filter {
    border: 1px solid #E0E5EB;
    border-radius: 8px;
    padding: 16px;
    .title {
        font-size: 16px;
        font-weight: 600;
    }

    &__list {
        font-size: 14px;
        color: #333D4C;
        &-count {
            font-size: 12px;
            color: #8D99AE;
        }
    }
}
</style>