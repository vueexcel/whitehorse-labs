<template>
  <main class="w-full min-h-screen">
    <HeaderSection />
    <ContentSection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeaderSection from '@/components/pages/terminology/HeaderSection.vue'
import ContentSection from '@/components/pages/terminology/ContentSection.vue'
import JoinusSection from '@/components/common/JoinusSection.vue'
import FooterSection from '@/components/common/FooterSection.vue'
</script>
