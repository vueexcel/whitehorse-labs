<template>
  <main>
    <HeroSection
      title="global guardians of technological integrity"
      :background-image="BackgroundImage"
    >
      The global guardians of <br class="hidden md:block" />
      technological integrity

      <template #description>
        Born from a bold initiative to combat counterfeiting, we’ve become a global leader in
        electronic integrity, driven by our commitment to purity and excellence.
      </template>
    </HeroSection>
    <WatchSection />
    <ServicesSection title="Who we are" cta="Let's Talk" :items="SERVICES_LIST">
      <template #list="{ list }">
        <p class="text-[#828282] font-roboto sm:pl-10">
          {{ list }}
        </p>
      </template>
    </ServicesSection>
    <FullWIdthBox :background-image="BackgroundImage2" :link="'#'" link-text="Join out team">
      <template #title>The White Horse family</template>
      160+ employees enrich the team at White Horse Laboratories with their individual skills,
      knowledge and personality. It is only through the successful interaction of these unique
      characters that the good work consistently appreciated by our customers becomes possible.
    </FullWIdthBox>

    <SolutionSection :items="SERVICE_LIST2" title="Keep exploring White HOrse Labs" />
    <HistorySection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue'

import WatchSection from '@/components/pages/about/who-we-are/WatchSection.vue'
import ServicesSection from '@/components/pages/common/ServicesSection.vue'
import FullWIdthBox from '@/components/pages/common/FullWIdthBox.vue'
import HistorySection from '@/components/pages/about/who-we-are/HistorySection.vue'
import SolutionSection from '@/components/pages/common/SolutionSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'

import BackgroundImage from '@/assets/images/about/who-we-are/hero.png'
import BackgroundImage2 from '@/assets/images/about/who-we-are/hero-2.png'

import About1Image from '@/assets/images/about/who-we-are/about-1.png'
import About2Image from '@/assets/images/about/who-we-are/about-2.png'
import About3Image from '@/assets/images/about/who-we-are/about-3.png'
import About4Image from '@/assets/images/about/who-we-are/about-4.png'
import About5Image from '@/assets/images/about/who-we-are/about-5.png'
import About6Image from '@/assets/images/about/who-we-are/about-6.png'

// import SolutionImage1 from '@/assets/images/about/who-we-are/about-1.png'

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

const SERVICE_LIST2 = [
  {
    title: 'Why White Horse Labs?',
    caption:
      'Explore our Purpose, Values, Mission and the Promise we keep to our clients around the globe.',
    link: '#',
    image: About6Image
  }
]
</script>
