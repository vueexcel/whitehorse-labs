<template>
  <main>
    <HeroSection />
    <!--`px-4` padding issue in small screen -->
    <InfoSection />
    <ServicesSection />
    <TestingSection />
    <CaseStudySection />
    <TestimonialsSection />
    <SolutionsSection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/testing-laboratory/HeroSection.vue'
import InfoSection from '@/components/pages/testing-laboratory/InfoSection.vue'
import ServicesSection from '@/components/pages/testing-laboratory/ServicesSection.vue'
import TestingSection from '@/components/pages/testing-laboratory/TestingSection.vue'
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue'
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
import SolutionsSection from '@/components/pages/testing-laboratory/SolutionsSection.vue'
</script>
