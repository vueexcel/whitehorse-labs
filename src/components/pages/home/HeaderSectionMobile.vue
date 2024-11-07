<template>
  <HeroSection title="global guardians of technological integrity" :background-image="MainImage">
    <div class="w-full md:mt-auto max-w-[1350px] px-4 text-left flex">
      <h2 class="text-5xl md:text-6xl mt-52 text-white" ref="heroTitleRef">
        <span class="inline-block">Elevating confidence</span><br />
        <span class="italic text-5xl md:text-7xl font-Tiempos-Headline">to drive your vision</span>
      </h2>
    </div>
  </HeroSection>

  <div class="bg-black h-[60vh] flex items-center justify-center overflow-hidden" :showScroll="false">
    <p class="parallax-text text-white text-center text-xl sm:text-3xl px-6 sm:px-12 max-w-[1200px] mx-auto">
      We safeguard supply chains with specialized testing, inspection, and logistics solutions,
      strategically integrated to ensure product integrity and reduce risk.
    </p>
  </div>
</template>

<script setup>
import HeroSection from '../common/HeroSection.vue';
import MainImage from '@/assets/images/home/landingImage.png';
</script>
