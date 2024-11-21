<template>
    <div class="header bg-gray-800 p-6">
        <div class="container">
            <div class="flex items-center justify-between">
                <img src="~/assets/images/logo.svg" alt="logo" @click="navigateTo('/')" />
                <div class="flex items-center gap-4">
                    <div class="header__search">
                        <img src="~/assets/images/search.svg" alt="search" />
                        <input type="text" placeholder="Search" v-model="keyword" @keydown.enter="onSearch" />
                    </div>
                    <div class="header__cart rounded-full bg-gray-700 w-10 h-10 flex items-center justify-center">
                        <img src="~/assets/images/cart.svg" alt="cart" />
                        <div class="header__count">
                            <span class="bg-success text-white rounded-full w-4 h-4">3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/store/product';

const keyword = ref('')
const { search } = storeToRefs(useProductStore())

watch(keyword, () => {
    if (!keyword.value) {
        search.value = keyword.value
    }
})

const onSearch = () => {
    search.value = keyword.value
}
</script>

<style lang="postcss" scoped>
.header {
    &__search {
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        color: #fff;
        border-radius: 50px;
        padding: 12px 16px;
        gap: 16px;
        input {
            background: none;
            border: none;
            outline: none;
            color: #fff;
            width: 100%;
        }
    }

    &__cart {
        position: relative;
    }

    &__count {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(20%, -20%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 600;
        padding: 2px;
        background: var(--gray-800);
    }
}
</style>