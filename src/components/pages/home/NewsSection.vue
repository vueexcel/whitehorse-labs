<template>
  <SectionHeader
    title="The Latest"
    subtitle="News & Insights"
    cta="VIEW ALL NEWS AND INSIGHTS"
    cta-link="#"
    class="pt-0 sm:pt-8"
  >
    <ul class="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
      <li
        v-for="({ title, image, link }, index) in DUMMY_DATA"
        :key="index"
        class="w-full transition-transform hover:scale-95"
      >
        <router-link :to="link">
          <img :src="image" :alt="'news-' + index" class="w-full" />
          <h5 class="mt-3 text-sm text-black sm:text-md font-roboto max-">
            {{ title }}
          </h5>
        </router-link>
      </li>
    </ul>
  </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue'

import NewsImage1 from '@/assets/images/home/news-1.png'
import NewsImage2 from '@/assets/images/home/news-2.png'
import NewsImage3 from '@/assets/images/home/news-3.png'

const DUMMY_DATA = [
  {
    title:
      "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
    image: NewsImage1,
    link: '#'
  },
  {
    title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
    image: NewsImage2,
    link: '#'
  },
  {
    title:
      'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
    image: NewsImage3,
    link: '#'
  }
]
</script>
