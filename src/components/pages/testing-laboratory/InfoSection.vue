<template>
  <SectionHeader
    title="Testing Laboratory"
    subtitle="Safeguarding Your Products' Integrity"
    class="text-white bg-black"
    textClass="text-white"
  >
    <template #top>
      <p class="pr-5 font-roboto">
        We’re dedicated to ensuring the reliability and safety of your electronic components. Our
        state-of-the-art testing laboratory leverages advanced engineering expertise and
        cutting-edge technology to provide comprehensive solutions, including counterfeit detection
        and failure analysis. We uphold the highest standards of quality assurance, giving you peace
        of mind and confidence in your products.
      </p>
      <p class="pr-5 font-roboto">
        More than just a testing laboratory, White Horse Labs is your partner in quality assurance.
        Our rigorous electrical, mechanical, and environmental testing ensures your products meet
        stringent industry standards. Trust us to safeguard your supply chain with our unwavering
        commitment to excellence, precision, integrity, and innovation in every service we provide.
      </p>
    </template>
    <template #topBottom>
      <BaseButton title="Request a Sample Report" />
    </template>
  </SectionHeader>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
</script>
