<template>
  <main>
    <HeroSection />
    <FeatureSection />
    <SolutionsSection />
    <FullWIdthBox
      :background-image="BackgroundImage"
      :link="'#'"
      :link-text="'Learn More About Us'"
    >
      <template #title>
        More than peace of mind.<br />
        It’s our promise to you.
      </template>
      We promise to safeguard the integrity of your electronics supply chain with unparalleled
      dedication and expertise. We commit to providing the highest standards of quality assurance
      through state-of-the-art testing, innovative counterfeit detection, and comprehensive failure
      analysis. Leading with transparency, rigor, and integrity, we ensure your products are
      reliable and safe, delivering peace of mind and trust in every transaction.
    </FullWIdthBox>
    <CaseStudySection />
    <TestimonialsSection />
    <NewsSection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/home/HeroSection.vue'
import NewsSection from '@/components/pages/home/NewsSection.vue'
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue'
import FeatureSection from '@/components/pages/home/FeatureSection.vue'
import SolutionsSection from '@/components/pages/home/SolutionsSection.vue'
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue'
import FullWIdthBox from '@/components/pages/common/FullWIdthBox.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'

import BackgroundImage from '@/assets/images/home/about-2.png'
</script>
