<template>
  <ServicesSection title="Who we are" cta="Let's Talk" :items="SERVICES_LIST">
    <template #list="{ list }">
      <p class="text-[#828282] font-roboto sm:pl-10">
        {{ list }}
      </p>
    </template>
  </ServicesSection>
</template>

<script setup lang="ts">
import ServicesSection from '@/components/pages/common/ServicesSection.vue'

import About1Image from '@/assets/images/about/who-we-are/about-1.png'
import About2Image from '@/assets/images/about/who-we-are/about-2.png'
import About3Image from '@/assets/images/about/who-we-are/about-3.png'
import About4Image from '@/assets/images/about/who-we-are/about-4.png'
import About5Image from '@/assets/images/about/who-we-are/about-5.png'
import About6Image from '@/assets/images/about/who-we-are/about-6.png'

const SERVICES_LIST = [
  {
    title: 'Elite engineering team dedicated to your success',
    description:
      'White Horse Laboratories is led by an international group of experienced industry experts. Through very different life stories and career paths we have found our way to the White Horse family.',
    list: 'All employees are educated on the core requirements of a testing laboratory and the electronics industry in general. The quality assurance team additionally receives ongoing training opportunities around international quality assurance practice, related standards and regulations.',
    link: '#',
    images: [About1Image, About2Image]
  },
  {
    title: 'Quality assurance team that stands for absolute integrity',
    description:
      'Our quality assurance team stands for absolute integrity and the best protection of your supply chain: adhering to strict international standards and with ISO9001 certification, employees are committed to meeting if not exceeding the quality expectations of both our company and our customers.',
    list: 'All employees are educated on the core requirements of a testing laboratory and the electronics industry in general. The quality assurance team additionally receives ongoing training opportunities around international quality assurance practice, related standards and regulations.',
    link: '#',
    images: [About3Image, About4Image]
  },
  {
    title: 'People-first sales and customer service team',
    description:
      'With extensive industry knowledge, our international sales and support team can competently answer all inquiries related to our testing procedures and complementary services.',
    list: "In-house training ensures the quality of our team's advice to help you make the right decisions and minimize your supply chain risk. Integrated digital communication and transparent workflows provide a successful customer experience from A to Z.",
    link: '#',
    images: [About5Image, About6Image]
  }
]
</script>
