<template>
  <div class="flex items-center w-full h-auto">
    <span class="block bg-[#FF544F] size-3 sm:size-4"></span>
    <span class="ml-2 text-xs uppercase font-roboto-mono" :class="textClass">
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  textClass?: string
}>()
</script>
