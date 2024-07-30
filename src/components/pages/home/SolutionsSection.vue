<template>
  <SectionHeader title="What We Do" subtitle="Our Solutions" class="pb-0">
    <div
      class="relative max-w-4xl rounded-lg lg:ml-60 aspect-[3/4] sm:aspect-video cards"
      v-for="item in DUMMY_DATA"
      :key="item.id"
    >
      <img :src="item.image" alt="images" class="object-cover w-full h-full rounded-lg" />
      <div class="absolute top-0 left-0 flex flex-col justify-between w-full h-full p-5 sm:px-20">
        <span class="text-xs text-white sm:absolute left-5 top-12">04</span>
        <h5 class="text-3xl text-white sm:mt-5">{{ item.title }}</h5>

        <div>
          <p class="block text-sm text-white md:text-lg">
            {{ item.description }}
          </p>
          <BaseButton title="Learn More" class="mt-5 md:mb-2" />
        </div>
      </div>
    </div>
  </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'

import SolutionImage1 from '@/assets/images/home/solution-1.png'

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Training & Education',
    description:
      "Comprehensive training and education programs to enhance your team's expertise and uphold industry standards. Our tailored courses ensure that your personnel are equipped with the latest knowledge and skills to maintain excellence in quality assurance and supply chain management.",
    image: SolutionImage1,
    link: '#'
  }
]
</script>

<style scoped>
.cards {
  animation: fade-in linear;
  animation-timeline: view();
}

@keyframes fade-in {
  from { scale: 0.5; opacity: 0; }
  to { scale: 1; opacity: 1; }
}
</style>