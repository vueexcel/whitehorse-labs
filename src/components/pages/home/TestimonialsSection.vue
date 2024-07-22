<template>
  <section class="flex items-start w-full px-12 mt-20 mb-32">
    <div class="flex items-center h-auto mt-1 w-52">
      <span class="block bg-[#FF544F] size-3"></span>
      <span class="ml-2 text-xs uppercase font-roboto">testimonials</span>
    </div>
    <div class="flex-1 w-full">
      <p class="text-4xl max-w-[45rem] font-normal">"{{ DUMMY_DATA[currentActive].comment }}"</p>

      <div class="flex flex-col items-end ml-auto">
        <h5>{{ DUMMY_DATA[currentActive].name }}</h5>
        <span class="text-xs text-[#828282] max-w-[13rem] text-end">{{
          DUMMY_DATA[currentActive].position
        }}</span>
      </div>
    </div>
    <div class="flex items-center justify-end h-auto mb-1 w-52">
      <span class="ml-2 font-medium uppercase" style="font-family: 'Roboto Mono'"
        >{{ addZero(currentActive + 1) }} / {{ addZero(DUMMY_DATA.length) }}</span
      >

      <button
        @click="currentActive--"
        :disabled="currentActive == 0"
        class="flex items-center justify-center p-2 px-1 ml-4 hover:opacity-70 disabled:opacity-35"
        type="button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M5 12L11 6M5 12L11 18"
            stroke="#FF544F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        class="flex items-center justify-center p-2 px-1 rotate-180 hover:opacity-70 disabled:opacity-30"
        :disabled="currentActive == DUMMY_DATA.length - 1"
        @click="currentActive++"
        type="button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M5 12L11 6M5 12L11 18"
            stroke="#FF544F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const DUMMY_DATA = [
  {
    comment:
      'White Horse Labs gives us the confidence to deliver the highest quality products and consistenly keep our promise to our customers.',
    name: 'Dave Calhoun',
    position: 'President and Chief Executive Officer of The Boeing Company'
  },
  {
    comment:
      'White Horse Labs gives us the confidence to deliver the highest quality products and consistenly keep our promise to our customers.',
    name: 'Dave Calhoun',
    position: 'President and Chief Executive Officer of The Boeing Company'
  }
]
const currentActive = ref(0)

const addZero = (n: number) => (n < 10 ? '0' + n : n)
</script>
