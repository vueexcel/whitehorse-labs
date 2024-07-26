<template>
  <HeroSection
    title="global guardians of technological integrity"
    :background-image="BackgroundImage"
  >
    The global guardians of <br class="hidden md:block" />
    technological integrity

    <template #description>
      Born from a bold initiative to combat counterfeiting, we’ve become a global leader in
      electronic integrity, driven by our commitment to purity and excellence.
    </template>
  </HeroSection>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue'

import BackgroundImage from '@/assets/images/about/who-we-are/hero-1.png'
</script>
