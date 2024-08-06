<template>
  <main>
    <EmptyHeaderSection title="Global Calendar" />
    <SectionHeader title="Global Calendar" subtitle="At Your Service">
      <template #top>
        <p class="text-[#828282] font-roboto">
          Trust White Horse Labs for swift, reliable service to maintain a resilient supply chain. Streamline your order
          planning with updated hours from our global locations.
        </p>
      </template>
    </SectionHeader>
    <section class="w-full max-w-6xl px-6 mx-auto my-12 mb-20">
      <iframe :src="calendarUrl" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
    </section>
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
import EmptyHeaderSection from '@/components/pages/common/EmptyHeaderSection.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue';

const calendarUrl =
  'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
</script>
