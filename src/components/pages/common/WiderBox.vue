<template>
  <section class="w-full h-20 bg-white" />
  <section
    class="relative flex items-center w-full h-screen bg-no-repeat bg-cover full-page-box"
    :style="{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center' }"
  >
    <div class="absolute w-full h-full" />
    <div
      class="flex flex-col w-full p-6 md:px-12 max-w-full md:max-w-[35rem] text-white justify-center"
    >
      <h5 class="mb-5 text-2xl md:text-4xl font-roboto">
        <slot name="title"></slot>
      </h5>
      <p class="my-5 mt-4 text-base md:text-lg font-roboto">
        <slot></slot>
      </p>

      <router-link
        :to="link"
        class="flex items-center mt-6 text-white rounded-full hover:opacity-70"
      >
        {{ linkText }}
        <ArrowIcon
          type="top-right"
          class="w-4 h-4 ml-2 md:w-6 md:h-6"
          path-class="stroke-[#FF544F]"
        />
      </router-link>
    </div>
  </section>
  <section class="w-full h-20 bg-white" />
</template>

<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

defineProps<{
  backgroundImage: string
  link: string
  linkText: string
}>()
</script>

<style scoped>
.full-page-box div:nth-child(1) {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
}
.full-page-box div:nth-child(2) {
  z-index: 2;
}
</style>
