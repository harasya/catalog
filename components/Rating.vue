<template>
    <div class="rating">
        <div class="stars">
            <template v-for="(star, index) in 5" :key="index">
                <span class="star" :class="{ full: index < fullStars, half: index === fullStars && hasHalfStar }">★</span>
            </template>
        </div>
        <span class="rating-value">({{ rating }})</span>
    </div>
</template>

<script setup lang="ts">
const props =  defineProps({
    rating: {
      type: Number,
      default: 4.5,
    },
  });

  const fullStars = Math.floor(props.rating);
  const hasHalfStar = props.rating % 1 !== 0;
</script>

<style lang="postcss" scoped>
.rating {
    display: flex;
    align-items: center;
    gap: 5px;
    &-value {
        font-size: 12px;
        color: #9CA3AF;
    }
}

.stars {
    display: flex;
}

.star {
    font-size: 12px;
    color: #ddd;
    &.full {
        color: #ffc107;
    }

    &.half::before {
        content: "★";
        position: absolute;
        color: #ffc107;
        width: 50%;
        overflow: hidden;
        display: inline-block;
    }
}


</style>
