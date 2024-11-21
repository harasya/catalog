<template>
  <div class="image-viewer">
    <div class="slider">
      <button @click="showPrev" class="prev-btn">
        <img src="~/assets/images/chevron-left.svg" alt="Prev">
      </button>

        <Loading v-if="loading" width="160" height="100" responsive>
            <rect x="0" y="0" width="100%" height="100%" />
        </Loading>
        <transition :name="transitionName" mode="out-in">
          <img :key="currentIndex" :src="images?.[currentIndex]" class="main-image" :alt="'Image ' + (currentIndex + 1)" />
        </transition>

      <button @click="showNext" class="next-btn">
        <img src="~/assets/images/chevron-right.svg" alt="Next">
      </button>
    </div>

    <div class="thumbnails" v-if="!loading">
      <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Thumbnail ' + (index + 1)"
          :class="{ active: currentIndex === index }"
          @click="setImage(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    images: {
        type: Array as PropType<string[]>,
        required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    }
});
const currentIndex = ref(0);
const previousIndex = ref(0);
const transitionName = ref('slide-left');
const showNext = () => {
  transitionName.value = 'slide-right';
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const showPrev = () => {
  transitionName.value = 'slide-left';
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const setImage = (index: number) => {
  currentIndex.value = index;
};

watch(currentIndex, (oldVal) => {
  previousIndex.value = oldVal;
});
</script>

<style lang="postcss" scoped>
button {
  border: 1px solid #E0E5EB;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider {
  position: relative;
  overflow: hidden;
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    &.prev-btn {
      left: 0;
    }
    &.next-btn {
      right: 0;
    }
  }
}

.thumbnails {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid;
    border-color: #E0E5EB;
    &.active {
      border-color: #181D25;
    }
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
</style>