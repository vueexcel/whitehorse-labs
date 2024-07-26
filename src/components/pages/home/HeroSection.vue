<template>
  <section
    class="flex items-end w-full h-screen bg-center bg-no-repeat bg-cover"
    :style="'background-image: url(' + BackgroundImage + ')'"
  >
    <div class="w-full mx-auto max-w-[1350px] px-4 mb-8">
      <h2 class="mb-32 text-6xl text-white">
        <span class="inline-block mb-2">Elevating confidence</span><br />
        <span class="italic text-7xl" style="font-family: Tiempos Headline"
          >to drive your vision</span
        >
      </h2>

      <div
        class="flex items-center flex-col md:flex-row md:justify-between w-full text-[12px] uppercase"
      >
        <RedTitle
          title="global guardians of technological integrity"
          text-class="text-white"
          class="mb-5 ml-0 w-max"
        />

        <p
          class="flex items-center text-xs text-white cursor-pointer w-max hover:opacity-75 font-roboto-mono"
        >
          scroll to explores
          <ArrowIcon class-name="ml-1 size-4 ml-2" type="down" path-class="stroke-white" />
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BackgroundImage from '@/assets/images/home/landingImage.png'

import RedTitle from '@/components/common/RedTitle.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
</script>
