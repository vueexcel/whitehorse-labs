<template>
  <FullWidthBox :background-image="BackgroundImage" :link="'#'" :link-text="'Learn More About Us'" class="bg-white">
    <template #title>
      More than peace of mind.<br />
      It’s our promise to you.
    </template>
    We promise to safeguard the integrity of your electronics supply chain with unparalleled
    dedication and expertise. We commit to providing the highest standards of quality assurance
    through state-of-the-art testing, innovative counterfeit detection, and comprehensive failure
    analysis. Leading with transparency, rigor, and integrity, we ensure your products are reliable
    and safe, delivering peace of mind and trust in every transaction.
  </FullWidthBox>
</template>

<script setup lang="ts">
import FullWidthBox from '@/components/pages/common/FullWIdthBox.vue'

import BackgroundImage from '@/assets/images/home/hero-2.png'
</script>
