<template>
    <div class="item">
        <NuxtLink :to="`/${item.id}`">
            <img class="item__image" :src="item.images[0]" alt="item" />
        </NuxtLink>
        <Rating :rating="item.rating" />
        <div class="item__label py-2">{{ item.name }}</div>
        <div class="item__price">${{ item.price }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    item: {
        type: Object,
        required: true,
    }
})
</script>

<style lang="postcss" scoped>
.item {
    height: fit-content;
    cursor: pointer;
    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__label {
        font-size: 14px;
        font-weight: medium;
    }
    &__price {
        font-weight: semibold;
        font-size: 20px;
    }
}
</style>