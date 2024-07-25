<template>
  <button
    type="button"
    class="px-6 py-2 rounded-full bg-[#FF544F] font-roboto text-black font-medium text-sm flex items-center justify-center"
  >
    <slot>
      <span>{{ title }}</span>
      <ArrowIcon type="top-right" :path-class="'stroke-black'" class="ml-3 size-5" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

defineProps<{
  title?: string
}>()
</script>
