<template>
  <main>
    <EmptyHeaderSection title="Industry Terminology" />
    <ContentSection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import EmptyHeaderSection from '@/components/pages/common/EmptyHeaderSection.vue';
import ContentSection from '@/components/pages/resources/TerminologyContentSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
</script>
