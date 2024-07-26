<template>
  <main class="w-full min-h-screen">
    <HeaderSection />
    <ContentSection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeaderSection from '@/components/pages/resources/terminology/HeaderSection.vue'
import ContentSection from '@/components/pages/resources/terminology/ContentSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
</script>
