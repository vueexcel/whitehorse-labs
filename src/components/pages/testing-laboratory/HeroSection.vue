<template>
  <section
    class="relative w-full h-screen bg-no-repeat bg-cover"
    :style="'background-image: url(' + HeroImage + ')'"
  >
    <div
      class="w-full h-full mx-auto max-w-[1350px] px-4 sm:px-6 md:px-8 lg:px-10 mb-8 flex flex-col justify-center sm:justify-end py-8"
    >
      <h5
        class="text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-white font-roboto text-center sm:text-left"
      >
        Ensuring Product <br class="hidden md:block" />
        Reliability and Safety <br />
        <span class="font-Tiempos-Headline">Through Expert Testing</span>
      </h5>

      <div class="flex justify-center w-full my-10 md:my-20">
        <p class="max-w-sm text-center text-white sm:max-w-md sm:text-left">
          Advanced testing services ensure product reliability and safety. Our comprehensive
          solutions, including counterfeit detection and failure analysis, maintain the highest
          quality standards.
        </p>
      </div>

      <div
        class="absolute flex flex-col items-center w-full text-white sm:static bottom-5 sm:justify-between sm:flex-row"
      >
        <RedTitle title="global guardians of technological integrity" class="mb-5 ml-0 w-max" />

        <p
          class="flex items-center text-xs text-white cursor-pointer w-max hover:opacity-75 font-roboto-mono"
        >
          scroll to explore
          <img :src="ArrowDown" class="mt-1 ml-2 rotate-90 size-3" alt="arrow-down" />
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroImage from '@/assets/images/solutions/testing-laboratory/hero.png'
import ArrowDown from '@/assets/images/home/arrow-down.svg'
import RedTitle from '@/components/common/RedTitle.vue'
</script>
