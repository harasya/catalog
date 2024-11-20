<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Slide :images="product.images" />
        <div class="space-y-4">
            <div>
                <div class="title">Description</div>
                <div class="description">{{ product.description }}</div>
            </div>
            <div class="flex items-center justify-between">
                <div class="price">${{ product.price }}</div>
                <div class="text-success flex items-center gap-2">
                    <img src="~/assets/images/checked.svg" alt="Checked" />
                    <span>Available to order </span>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="quantity">
                    <img class="minus" src="~/assets/images/minus.svg" alt="Minus" @click="onMinus" />
                    <input type="number" v-model="quantity" />
                    <img class="plus" src="~/assets/images/plus.svg" alt="Plus" @click="onPlus" />
                </div>
                <button class="shoping-cart !hidden lg:!block">
                    <img src="~/assets/images/cart.svg" alt="Cart" />
                    Add to cart
                </button>
                <button class="favorite">
                    <img src="~/assets/images/favorite.svg" alt="Favorite" />
                </button>
                <button class="refresh">
                    <img src="~/assets/images/refresh.svg" alt="Refresh" />
                </button>
            </div>
            <button class="shoping-cart lg:!hidden w-full">
                <img src="~/assets/images/cart.svg" alt="Cart" />
                Add to cart
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    product: {
        type: Object,
        required: true,
    },
})

const quantity = ref(1)

const onMinus = () => {
    if (quantity.value > 1) {
        quantity.value--
    }
}

const onPlus = () => {
    quantity.value++
}
</script>

<style lang="postcss" scoped>
.title {
    font-size: 14px;
    font-weight: bold;
    color: #181D25;
    margin-bottom: 12px;
}

.description {
    font-size: 14px;
    font-weight: 400;
    color: #4E5562;
}

.price {
    font-size: 24px;
    font-weight: semibold;
    color: #181D25;
}

.quantity {
    border: 1px solid #E0E5EB;
    border-radius: 8px;
    display: flex;
    width: max-content;

    .minus, .plus {
        cursor: pointer;
        padding: 15px;
    }

    input {
        outline: none;
        border: none;
        width: 50px;
        text-align: center;
        pointer-events: none;
    }
}

.shoping-cart {
    background-color: #F55266;
    color: #fff;
    padding: 16px 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    flex: auto;
    justify-content: center;
}

.favorite {
    background-color: #EEF1F6;
    padding: 16px 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #E0E5EB;
    font-size: 16px;
    font-weight: 500;
}

.refresh {
    background-color: #EEF1F6;
    padding: 16px 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #E0E5EB;
    font-size: 16px;
    font-weight: 500;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>