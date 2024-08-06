<template>
  <main>
    <EmptyHeaderSection title="Free Downloads" />
    <SectionHeader title="Free Downloads" subtitle="Resources for your success" class="bg-white">
      <template #top>
        <p class="text-[#828282] font-roboto">
          Explore our free downloadable content for valuable industry insights and resources.
        </p>
      </template>
    </SectionHeader>
    <ContentSection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import EmptyHeaderSection from '@/components/pages/common/EmptyHeaderSection.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import ContentSection from '@/components/pages/resources/DownloadContentSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
</script>
