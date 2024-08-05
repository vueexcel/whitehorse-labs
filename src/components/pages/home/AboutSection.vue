<template>
  <SectionHeader title="Who we are" subtitle="About Us" class="bg-white">
    <template #top>
      <p class="pr-5 font-roboto text-[#828282]">
        White Horse Labs was established to create a world where electronics are always reliable and
        genuine, addressing counterfeit challenges at their source. As the pioneers in Asia, we
        developed innovative testing methods that set industry standards, ensuring electronics were
        tested with rigor, transparency, and integrity.
      </p>
      <p class="pr-5 font-roboto text-[#828282]">
        Our services have expanded beyond counterfeit detection and component testing to a holistic
        approach to quality control. From a modest beginning to a global presence, we have remained
        committed to ensuring the integrity of the electronics supply chain, continually leading and
        innovating to keep the world's electronics trustworthy and reliable.
      </p>
    </template>
    <template #topBottom>
      <router-link to="#" class="flex items-center text-sm hover:opacity-70">
        <span>Learn More About Us</span>
        <ArrowIcon type="top-right" class="ml-2 size-5" path-class="stroke-[#FF544F]" />
      </router-link>
    </template>
  </SectionHeader>
</template>

<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
</script>
