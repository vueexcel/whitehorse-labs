<template>
  <SectionHeader title="Testimonials" subtitle="" class="pt-8 bg-white">
    <template #cta>
      <div
        class="flex items-center mt-4 ml-auto text-sm uppercase font-roboto-mono sm:mb-2 sm:mt-0 sm:ml-auto"
      >
        <span>{{ addZero(currentActive + 1) }} / {{ addZero(DUMMY_DATA.length) }}</span>

        <button
          :disabled="currentActive == 0"
          @click="currentActive--"
          type="button"
          class="flex items-center justify-center ml-8 transition hover:opacity-70 disabled:opacity-50"
        >
          <ArrowIcon type="left" :path-class="'stroke-[#FF544F]'" class="size-6" />
        </button>
        <button
          :disabled="currentActive == DUMMY_DATA.length - 1"
          @click="currentActive++"
          type="button"
          class="flex items-center justify-center ml-1 transition hover:opacity-70 disabled:opacity-50"
        >
          <ArrowIcon type="right" :path-class="'stroke-[#FF544F]'" class="size-6" />
        </button>
      </div>
    </template>

    <template #topBottom>
      <ul
        ref="testimonials"
        class="flex items-start w-full overflow-hidden overflow-x-auto pointer-events-none sm:-translate-y-14 sm:pr-5"
      >
        <li
          class="relative w-full h-auto max-w-full pl-5 shrink-0"
          v-for="item in DUMMY_DATA"
          :key="item.name"
        >
          <h6 class="max-w-[45rem] text-2xl font-normal text-black sm:text-4xl font-roboto sm:mt-0">
            "{{ item.comment }}"
          </h6>

          <div class="flex flex-col items-end mt-8 ml-auto">
            <h5>{{ item.name }}</h5>
            <span class="text-xs text-[#828282] text-end max-w-[13rem]">{{ item.position }}</span>
          </div>
        </li>
      </ul>
    </template>
  </SectionHeader>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'

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
const testimonials = ref<HTMLElement | null>(null)

const addZero = (n: number) => (n < 10 ? '0' + n : n)

watch(
  currentActive,
  (value) => {
    if (testimonials.value) {
      testimonials.value.scrollTo({
        top: 0,
        left: testimonials.value.clientWidth * value,
        behavior: 'smooth'
      })
    }
  },
  { immediate: true }
)

const handleResize = () => {
  if (testimonials.value) {
    testimonials.value.scrollLeft = testimonials.value.clientWidth * currentActive.value
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
ul::-webkit-scrollbar {
  display: none;
  opacity: 0;
}
</style>
