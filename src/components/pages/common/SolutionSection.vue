<template>
  <SectionHeader :title="title" subtitle="" class="pb-10 bg-white" />
  <ul class="w-full pb-24 bg-white">
    <li class="w-full h-auto" v-for="(item, index) in items" :key="item.title">
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
        <div v-show="activeIndex === index" class="relative w-full">
          <img :src="item.image" alt="images" class="object-cover w-full" />
          <p
            v-if="item.description"
            class="absolute left-0 max-w-lg p-4 text-white top-12 font-roboto sm:ml-64"
          >
            {{ item.description }}
          </p>
        </div>
      </transition>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

interface SolutionsList {
  title: string
  link: string
  image: string
  description?: string
}

defineProps<{
  title: string
  items: SolutionsList[]
}>()

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
