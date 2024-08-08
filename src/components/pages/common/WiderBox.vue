<template>
  <section class="w-full h-20 bg-white" />
  <section class="relative flex items-center w-full h-screen bg-white overflow-hidden" ref="container">
    <div :style="{ backgroundImage: `url(${backgroundImage})`, zIndex: 1, height: 'calc(100vh + 140px' }"
      class="absolute top-[-70px] left-0 h-full w-full pointer-events-none bg-no-repeat bg-center bg-cover" ref="background" />
    <div class="absolute w-full h-full back-shadow" style="z-index: 2;" />
    <div ref="textContent"
      class="flex flex-col w-full p-6 md:px-12 max-w-full md:max-w-[35rem] text-white justify-center box-text"
      style="z-index: 3;">
      <h5 class="mb-5 text-2xl md:text-4xl font-roboto">
        <slot name="title"></slot>
      </h5>
      <p class="my-5 mt-4 text-base md:text-lg font-roboto">
        <slot></slot>
      </p>

      <router-link :to="link" class="flex items-center mt-6 text-white rounded-full hover:opacity-70">
        {{ linkText }}
        <ArrowIcon type="top-right" class="w-4 h-4 ml-2 md:w-6 md:h-6" path-class="stroke-[#FF544F]" />
      </router-link>
    </div>
  </section>
  <section class="w-full h-20 bg-white" />
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref } from 'vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

defineProps<{
  backgroundImage: string
  link: string
  linkText: string
}>()

const textContent = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const background = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.fromTo(textContent.value, {
    y: 150
  }, {
    y: -50,
    scrollTrigger: {
      trigger: container.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })

  gsap.fromTo(background.value, {
    y: -70
  }, {
    y: 70,
    scrollTrigger: {
      trigger: container.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<style scoped>
.back-shadow{
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
}

.box-text {
  z-index: 2;
}
</style>
