<template>
  <SectionHeader subtitle="Case Studies" title="How we do it" cta="View All Case Studies" :cta-link="constants.caseStudies.path"
    class="sm:py-20 bg-white">
    <div class="grid w-full grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
      <ParallaxBackground class="w-full h-full" v-for="(data, index) in DUMMY_DATA" :key="data.id" :src="data.image"
        :alt="'case-study-' + index">
        <h5 class="max-w-xl mt-3 text-sm text-black font-roboto sm:text-md lg:text-lg">
          {{ data.title }}
        </h5>
      </ParallaxBackground>
    </div>
  </SectionHeader>
</template>

<script setup lang="ts">
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';
import SectionHeader from '@/components/layout/SectionHeader.vue'

import constants from '@/constants/routes.constants'

import CaseStudyImage1 from '@/assets/images/common/case-study/case-study-1.png'
import CaseStudyImage2 from '@/assets/images/common/case-study/case-study-2.png'

const DUMMY_DATA = [
  {
    id: 1,
    title:
      'How White Horse Labs saved Boeing billons of dollars in revenue by detecting counterfeit parts',
    image: CaseStudyImage1
  },
  {
    id: 2,
    title:
      'How White Horse Labs saved Tesla billons of dollars in revenue by detecting counterfeit parts',
    image: CaseStudyImage2
  }
]
</script>
