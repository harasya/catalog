<template>
    <div class="item">
        <NuxtLink :to="`/${item.id}`" >
            <img class="item__image" :src="item.images[0]" alt="item" />
            <Rating :rating="item.rating" />
            <div class="item__label py-2">{{ item.name }}</div>
            <div class="item__price">${{ item.price }}</div>
        </NuxtLink>
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
    padding: 16px;
    &:hover {
        background-color: #F5F5F5;
        transition: all 0.3s ease-in-out;
        border-radius: 4px;
    }
    a {
        text-decoration: none;
        color: #181D25;
    }
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