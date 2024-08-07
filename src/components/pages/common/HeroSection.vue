<template>
  <section class="w-full h-auto sticky top-0 -z-10">
    <div class="relative w-full h-screen bg-no-repeat bg-cover" ref="heroSection"
      :style="'background-image: url(' + backgroundImage + ')'">
      <div
        ref="innerContent"
        class="w-full h-full mx-auto max-w-[1350px] px-4 sm:px-6 md:px-8 lg:px-10 mb-8 flex flex-col justify-center sm:justify-end py-8 box-border">
        <h5 class="text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-white font-roboto text-center sm:text-left" style="line-height: 1.1;">
          <slot></slot>
        </h5>

        <div class="flex justify-center w-full my-10 md:my-20">
          <p class="max-w-sm text-center text-white sm:max-w-md sm:text-left">
            <slot name="description"></slot>
          </p>
        </div>

        <div
          class="absolute flex flex-col items-center w-full text-white sm:static bottom-5 sm:justify-between sm:flex-row sm:left-0 sm:right-0">
          <RedTitle :title="title" class="mb-5 ml-0 w-max" />

          <p class="flex items-center text-xs text-white cursor-pointer w-max hover:opacity-75 font-roboto-mono">
            scroll to explores
            <ArrowIcon class-name="ml-1 size-4 ml-2" type="down" path-class="stroke-white" />
          </p>
        </div>
      </div>
    </div>

    <div ref="triggerBox"></div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import RedTitle from '@/components/common/RedTitle.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

defineProps<{
  title: string
  backgroundImage: string
}>()

const heroSection = ref<HTMLElement | null>(null)
const triggerBox = ref<HTMLElement | null>(null)
const innerContent = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.to(heroSection.value, {
    y: -100,
    scrollTrigger: {
      trigger: triggerBox.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })

  gsap.to(innerContent.value, {
    y: -130,
    scrollTrigger: {
      trigger: triggerBox.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>
