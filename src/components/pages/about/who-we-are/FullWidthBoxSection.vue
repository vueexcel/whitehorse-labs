<template>
  <FullWIdthBox :background-image="BackgroundImage" :link="'#'" link-text="Join out team">
    <template #title>The White Horse family</template>
    160+ employees enrich the team at White Horse Laboratories with their individual skills,
    knowledge and personality. It is only through the successful interaction of these unique
    characters that the good work consistently appreciated by our customers becomes possible.
  </FullWIdthBox>
</template>

<script setup lang="ts">
import FullWIdthBox from '@/components/pages/common/FullWIdthBox.vue'

import BackgroundImage from '@/assets/images/about/who-we-are/hero-2.png'
</script>
