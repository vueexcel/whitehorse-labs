<template>
  <section class="w-full h-auto sticky top-0 -z-10">
    <div class="relative w-full h-screen bg-no-repeat bg-cover inner-content" ref="heroSection"
      :style="'background-image: url(' + backgroundImage + ')'">
      <div ref="innerContent"
        class="w-full h-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-8 flex flex-col justify-center sm:justify-end py-8 box-border">
        <h5 class="text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl leading-[1.2] text-white font-roboto text-center sm:text-left"
          style="line-height: 1.1;">
          <slot></slot> 
        </h5>

        <div class="flex justify-center w-full my-10 md:my-20">
          <p class="max-w-sm 3xl:max-w-lg text-center text-white sm:max-w-md sm:text-left 3xl:text-lg">
            <slot name="description"></slot>
          </p>
        </div>

        <div
          class="absolute flex flex-col items-center left-0 right-0 text-white sm:static bottom-5 sm:justify-between sm:flex-row sm:left-0 sm:right-0">
          <RedTitle :title="title" class="mb-5 ml-0 w-max" />

          <p class="flex items-center text-xs text-white cursor-pointer w-max hover:opacity-75 font-roboto-mono">
            scroll to explore
            <ArrowIcon class-name="ml-1 size-4 ml-2" type="down" path-class="stroke-white" />
          </p>
        </div>
      </div>
    </div>

    <div ref="triggerBox"></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RedTitle from '@/components/common/RedTitle.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import { useAnimate } from '@/hooks/useAnimate';

defineProps<{
  title: string
  backgroundImage: string
}>()

const heroSection = ref<HTMLElement | null>(null)
const triggerBox = ref<HTMLElement | null>(null)
const innerContent = ref<HTMLElement | null>(null)

useAnimate(({ to }) => {
  to(heroSection.value, {
    y: -(window.innerHeight * 0.2),
    scrollTrigger: {
      trigger: triggerBox.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })

  to(innerContent.value, {
    y: -window.innerHeight * 0.25,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: triggerBox.value,
      start: 'top bottom',
      end: '+=' + (window.innerHeight * 0.8),
      scrub: true
    }
  })
})
</script>

<style scoped>
.inner-content::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
}
</style>