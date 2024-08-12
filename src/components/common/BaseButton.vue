<template>
  <component :is="to ? (!to.startsWith('mailto') ? 'router-link' : 'a') : 'button'" type="button" :disabled="disabled" :to="to" :href="to"
    class="px-6 py-2 rounded-full bg-[#FF544F] font-roboto max-w-max text-black font-medium text-sm flex items-center justify-center hover:opacity-75 disabled:opacity-55 active:scale-95 transition-all">
    <slot>
      <span>{{ title }}</span>
      <ArrowIcon type="top-right" :path-class="'stroke-black'" class="ml-3 size-5" />
    </slot>
  </component>
</template>

<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

defineProps<{
  title?: string;
  disabled?: boolean;
  to?: string
}>()
</script>
