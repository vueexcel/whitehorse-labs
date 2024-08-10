<template>
  <section class="w-full h-12 bg-white" />
  <section ref="container" class="w-full px-6 h-screen flex justify-center items-center text-white bg-black sm:px-12"
    v-bind="$attrs">
    <div class="flex flex-col items-center sm:items-start w-full md:flex-row">
      <div class="flex sm:mt-12 flex-col items-start w-full mb-20 mr-2 sm:w-auto sm:flex-row md:mb-0">
        <RedTitle title="Testing process" class="mt-2 sm:w-64" />
        <div class="block">
          <h4 class="max-w-sm mt-4 text-2xl text-white sm:text-4xl font-roboto sm:mt-0">
            How our testing process works
          </h4>
          <BaseButton title="Request a Sample Report" class="mt-8" />
        </div>
      </div>
      <div class="flex-1 ml-0 sm:max-w-lg sm:ml-32 md:ml-0 sm:block">
        <div class="block ml-auto max-w-[15rem] sm:max-w-[18rem] lg:max-w-[22rem]">
          <div
            class="bg-[#EEEEEE] pointer-events-none rounded-full size-[15rem] sm:size-[18rem] lg:size-[22rem] flex items-center overflow-x-auto hide-scrollbar"
            ref="circleContent">
            <div class="flex flex-col items-center w-full shrink-0" :class="{'mr-6': index < TESTING_LIST.length - 1}" v-for="(item, index) in TESTING_LIST" :key="index">
              <span class="text-[#FF544F] font-roboto-mono">STEP {{ addzero(index + 1) }}</span>
              <span class="mt-4 text-2xl text-center text-black max-w-32 font-roboto">{{ item.title }}</span>
            </div>
          </div>
          <div
            class="mt-10 w-full pointer-events-none overflow-x-auto flex border-t border-t-[#979797] items-center hide-scrollbar"
            ref="paragraphContent">
            <p class="text-sm text-white pt-2 w-full shrink-0" :class="{'mr-6': index < TESTING_LIST.length - 1}" v-for="(item, index) in TESTING_LIST" :key="index">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, onUnmounted, ref } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue'
import RedTitle from '@/components/common/RedTitle.vue'

const addzero = (num: number) => {
  return num < 10 ? `0${num}` : num
}

const TESTING_LIST = [
  {
    title: 'Quotation & Test Plan',
    description: 'You’ll receive a quote from White Horse Laboratories as well as our comprehensive testing plan for your item.',
  },
  {
    title: 'Purchase Order',
    description: 'Step 2 : text here changes for each step… ',
  },
  {
    title: 'Delivery',
    description: 'Step 3 : text here changes for each step… ',
  },
  {
    title: 'Testing',
    description: 'Step 4 : text here changes for each step… '
  },
  {
    title: 'Reporting',
    description: 'Step 5 : text here changes for each step… '
  },
  {
    title: 'Product Acceptance',
    description: 'Step 6 : text here changes for each step… '
  },
  {
    title: 'Repackaging',
    description: 'Step 7 : text here changes for each step… '
  },
  {
    title: 'Final Shipment',
    description: 'Step 8 : text here changes for each step… '
  },
  {
    title: 'Buyer Receives Product',
    description: 'Step 9 : text here changes for each step… '
  },
]

const container = ref<HTMLDivElement | null>()
const circleContent = ref<HTMLDivElement | null>()
const paragraphContent = ref<HTMLDivElement | null>()

onMounted(() => {
  if (circleContent.value && paragraphContent.value && container.value) {
    const circle = circleContent.value;
    const paragraph = paragraphContent.value;
    const circleScrollWidth = circle!.scrollWidth


    gsap.to(container.value, {
      scrollTrigger: {
        trigger: container.value,
        start: 'top top',
        end: () => `+=${circleScrollWidth * 1.8}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          // const index = Math.floor(self.progress * 9);
          // circle!.scrollTo({ left: index * circle!.offsetWidth, top: 0, behavior: 'smooth' });
          // paragraph!.scrollTo({ left: index * paragraph!.offsetWidth, top: 0, behavior: 'smooth' });

          circle!.scrollLeft = self.progress * circle!.scrollWidth;
          paragraph!.scrollLeft = self.progress * paragraph!.scrollWidth
        },
      },
    })
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>