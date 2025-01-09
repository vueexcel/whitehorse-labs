<template>
  <main>
    <HeroSection title="global guardians of technological integrity" :background-image="BackgroundImage1">
      The global guardians of <br class="hidden md:block" />
      technological integrity

      <template #description>
        Born from a bold initiative to combat counterfeiting, we’ve become a global leader in
        electronic integrity, driven by our commitment to purity and excellence.
      </template>
    </HeroSection>
    <WatchSection />
    <ServicesSection :cta-link="constants.contact.path" :items="SERVICES_LIST" title="Who we are" cta="Let's Talk" />
    <WiderBox :link="constants.about.path + '/' + constants.about.joinOurTeam.path" link-text="Join our team" :background-image="BackgroundImage2">
      <template #title>The White Horse family</template>
      160+ employees enrich the team at White Horse Laboratories with their individual skills,
      knowledge and personality. It is only through the successful interaction of these unique
      characters that the good work consistently appreciated by our customers becomes possible.
    </WiderBox>
    <HistorySection />
    <SolutionSection :items="SOLUTIONS_LIST" title="Keep exploring White Horse Labs" />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue'
import WatchSection from '@/components/pages/about/WatchSection.vue'
import ServicesSection from '@/components/pages/common/ServicesSection.vue'
import HistorySection from '@/components/pages/about/HistorySection.vue'
import SolutionSection from '@/components/pages/common/SolutionSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import WiderBox from '@/components/pages/common/WiderBox.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'

import constants from '@/constants/routes.constants'

import BackgroundImage1 from '@/assets/images/about/who-we-are/hero-1a.png'
import BackgroundImage2 from '@/assets/images/about/who-we-are/hero-2.png'

import About1Image from '@/assets/images/about/who-we-are/DNAIP1799487.jpeg'
import About2Image from '@/assets/images/about/who-we-are/AAAWHC1_2.jpg'
import About2Image2 from '@/assets/images/about/who-we-are/AAAWHC1_3.jpg'
import About2Image3 from '@/assets/images/about/who-we-are/AAAWHC1_4.jpg'
import About3Image from '@/assets/images/about/who-we-are/DNAIP1799250.jpeg'
import About3Image2 from '@/assets/images/about/who-we-are/DNAIAIP1799446.jpeg'
import About4Image from '@/assets/images/about/who-we-are/DNAIP1799259.jpeg'
import About4Image2 from '@/assets/images/about/who-we-are/AAAWHC1_5.jpg'
import About5Image from '@/assets/images/about/who-we-are/AAAWHC1_1.jpg'
import About6Image from '@/assets/images/about/who-we-are/DNAIAIP1799449.jpeg'

import SolutionImage1 from '@/assets/images/about/who-we-are/solution-1.png'
import SolutionImage2 from '@/assets/images/about/who-we-are/solution-2.png'
import SolutionImage3 from '@/assets/images/about/who-we-are/solution-3.png'

const SERVICES_LIST = [
  {
    title: 'Elite engineering team dedicated to your success',
    description:
      'White Horse Laboratories is led by an international group of experienced industry experts. Through very different life stories and career paths we have found our way to the White Horse family.',
    list: 'All employees are educated on the core requirements of a testing laboratory and the electronics industry in general. The quality assurance team additionally receives ongoing training opportunities around international quality assurance practice, related standards and regulations.',
    images: [About1Image, About2Image , About2Image2 , About2Image3]
  },
  {
    title: 'Quality assurance team that stands for absolute integrity',
    description:
      'Our quality assurance team stands for absolute integrity and the best protection of your supply chain: adhering to strict international standards and with ISO9001 certification, employees are committed to meeting if not exceeding the quality expectations of both our company and our customers.',
    list: 'All employees are educated on the core requirements of a testing laboratory and the electronics industry in general. The quality assurance team additionally receives ongoing training opportunities around international quality assurance practice, related standards and regulations.',
    images: [About4Image2 , About3Image2 ,About4Image, About3Image]
  },
  {
    title: 'People-first sales and customer service team',
    description:
      'With extensive industry knowledge, our international sales and support team can competently answer all inquiries related to our testing procedures and complementary services.',
    list: "In-house training ensures the quality of our team's advice to help you make the right decisions and minimize your supply chain risk. Integrated digital communication and transparent workflows provide a successful customer experience from A to Z.",
    images: [About5Image, About6Image]
  }
]

const SOLUTIONS_LIST = [
  {
    title: 'Why White Horse Labs?',
    link: constants.about.path + '/' + constants.about.whyWhiteHorseLabs.path,
    image: SolutionImage1,
    description:
      'Explore our Purpose, Values, Mission and the Promise we keep to our clients around the globe.'
  },
  {
    title: 'Join Our Team',
    link: constants.about.path + '/' + constants.about.joinOurTeam.path,
    image: SolutionImage2,
    description:
      'Join us in making an impact in ensuring the reliability and safety of electronics around the globe.'
  },
  {
    title: 'Our Locations',
    link: constants.about.path + '/' + constants.about.ourLocations.path,
    image: SolutionImage3,
    description:
      'With over 160 employees in six countries, our global presence is the authority of technological integrity.'
  }
]
</script>
