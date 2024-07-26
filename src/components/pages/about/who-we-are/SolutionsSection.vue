<template>
  <SolutionSection :items="SOLUTIONS_LIST" title="Keep exploring White Horse Labs" />
</template>

<script setup lang="ts">
import SolutionSection from '@/components/pages/common/SolutionSection.vue'

import SolutionImage1 from '@/assets/images/about/who-we-are/solution-1.png'
import SolutionImage2 from '@/assets/images/about/who-we-are/solution-2.png'
import SolutionImage3 from '@/assets/images/about/who-we-are/solution-3.png'

const SOLUTIONS_LIST = [
  {
    title: 'Why White Horse Labs?',
    link: '#',
    image: SolutionImage1,
    description:
      'Explore our Purpose, Values, Mission and the Promise we keep to our clients around the globe.'
  },
  {
    title: 'Join Our Team',
    link: '#',
    image: SolutionImage2,
    description:
      'Join us in making an impact in ensuring the reliability and safety of electronics around the globe.'
  },
  {
    title: 'Our Locations',
    link: '#',
    image: SolutionImage3,
    description:
      'With over 160 employees in six countries, our global presence is the authority of technological integrity.'
  }
]
</script>
