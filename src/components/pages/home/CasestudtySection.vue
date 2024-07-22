<template>
  <section class="relative w-full px-6 mt-16 mb-24 md:px-12">
    <div class="flex flex-col items-start w-full mb-12 md:flex-row md:items-center">
      <div class="flex items-center w-full h-auto mt-1 md:w-52">
        <span class="block bg-[#FF544F] w-2 h-2 md:w-3 md:h-3"></span>
        <span class="ml-2 text-xs uppercase font-roboto">How we do it</span>
      </div>

      <h5 class="mt-4 text-2xl text-black md:text-4xl font-roboto md:mt-0">Case Studies</h5>

      <router-link
        to="/casestudies"
        class="flex items-center mt-4 ml-auto text-xs uppercase rounded-full w-max md:mt-1 hover:opacity-70"
      >
        View All Case Studies
        <svg
          width="12"
          height="12"
          viewBox="0 0 13.484375 13.5"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-[2px] ml-3"
        >
          <g id="Group-5">
            <path
              d="M0 0L12.4843 0L12.4843 12.5"
              id="Stroke-1"
              fill="none"
              fill-rule="evenodd"
              stroke="#FF544F"
              stroke-width="1"
            />
            <path
              d="M1.17367e-13 12.4999L12.4785 0.00415039"
              id="Stroke-3"
              fill="none"
              fill-rule="evenodd"
              stroke="#FF544F"
              stroke-width="1"
            />
          </g>
        </svg>
      </router-link>
    </div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="w-full" v-for="item in DUMMY_DATA" :key="item.id">
        <img :src="item.image" alt="Image" class="w-full pointer-events-none" />
        <p class="mt-4 text-base font-normal md:text-lg font-roboto">
          {{ item.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Image1 from '@/assets/images/home/case-study-2.png'
import Image2 from '@/assets/images/home/case-study-1.png'

const DUMMY_DATA = [
  {
    id: 1,
    image: Image1,
    title:
      ' How White Horse Labs saved Boeing billions of dollars in revenue by detecting counterfeit parts'
  },
  {
    id: 2,
    image: Image2,
    title:
      'How White Horse Labs saved Tesla billions of dollars in revenue by detecting counterfeit parts'
  }
]
</script>
