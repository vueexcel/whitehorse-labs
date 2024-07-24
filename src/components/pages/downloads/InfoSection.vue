<template>
  <section class="w-full px-4 mt-8 mb-8 md:px-12 md:mt-20 md:mb-16">
    <div class="flex flex-col w-full align-items-md-center md:flex-row">
      <div class="flex items-center h-auto mb-3 md:mb-0 md:w-52">
        <span class="block bg-[#FF544F] w-3 h-3 md:w-4 md:h-4"></span>
        <span class="ml-2 text-xs uppercase md:text-sm font-roboto">{{
          title || 'Free Downloads'
        }}</span>
      </div>

      <h5 class="text-2xl text-black md:text-4xl font-roboto">
        {{ subline || 'Resources for your success' }}
      </h5>
    </div>

    <div class="w-full mt-3 md:mt-4 max-w-[24.5rem] md:ml-52">
      <p class="text-[#828282] font-roboto">
        {{
          description ||
          'Explore our free downloadable content for valuable industry insights and resources.'
        }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subline?: string
  description?: string
}>()
</script>
