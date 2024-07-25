<template>
  <SectionHeader title="Discover More Solutions" subtitle="" class="pb-10" />
  <ul class="w-full mb-24">
    <li class="w-full h-auto" v-for="(item, index) in SOLUTIONS_LIST" :key="item.title">
      <div class="w-full px-4 sm:px-12">
        <button
          type="button"
          class="flex justify-start items-center hover:bg-slate-50 w-full py-[1.8rem] border-t border-t-[#D8D8D8]"
          @click="toggleAccordion(index)"
        >
          <span class="inline-block w-20 text-start font-roboto-mono sm:w-56">{{
            addZero(index + 1)
          }}</span>
          <router-link :to="item.link" class="flex items-center font-normal font-roboto">
            <span>{{ item.title }}</span>
            <ArrowIcon type="top-right" path-class="stroke-[#FF544F]" class="ml-2 size-6" />
          </router-link>
        </button>
      </div>
      <transition name="accordion">
        <div v-show="activeIndex === index" class="w-full border">
          <img :src="item.image" alt="images" class="object-cover w-full" />
        </div>
      </transition>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import SolutionsImage1 from '@/assets/images/solutions/testing-laboratory/solution-list-1.png'
import SolutionsImage2 from '@/assets/images/solutions/testing-laboratory/solution-list-2.png'
import SolutionsImage3 from '@/assets/images/solutions/testing-laboratory/solution-list-3.png'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const SOLUTIONS_LIST = [
  {
    title: 'Factory Auditing',
    link: '#',
    image: SolutionsImage1
  },
  {
    title: 'Programming, Packaging & Logistics',
    link: '#',
    image: SolutionsImage2
  },
  {
    title: 'Training & Education',
    link: '#',
    image: SolutionsImage3
  }
]

const addZero = (n: number) => (n < 10 ? '0' + n : n)
const activeIndex = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
