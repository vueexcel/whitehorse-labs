<template>
  <SectionHeader title="Our History" cta-link="#" cta="Let's talk" subtitle="A history of leadership and innovation"
    class="pb-0 bg-white">
    <template #top>
      <p class="text-[#828282] font-roboto">
        Since its founding in 2004, White Horse Labs has been a leader in safeguarding the global supply chain through
        innovation and expertise. We began by setting new industry standards for quality control and counterfeit
        detection, quickly earning a reputation for reliability and integrity. Driven by a commitment to excellence, we
        expanded our services to include advanced failure analysis, inspection, and educational programs, pioneering new
        methods to ensure product safety and reliability.
      </p>

      <p class="text-[#828282] font-roboto sm:pl-12">
        As industry needs evolved, we introduced comprehensive solutions in programming, packaging, and logistics,
        always staying ahead of market demands and anticipating future challenges. Today, White Horse Labs remains at
        the forefront of quality assurance, continually innovating and adapting to provide unmatched expertise and
        guidance, trusted worldwide for our dedication to protecting products, processes, and reputations.
      </p>
    </template>

    <div class="flex items-start w-full px-0 pt-16 sm:px-12 md:px-14 lg:px-16 h-screen overflow-hidden" ref="container">
      <ul>
        <li v-for="({ year }, index) in HISTORY_DATA" :key="year"
          class="h-[2.6rem] font-roboto text-[#828282] cursor-pointer hover:opacity-60"
          :class="{ 'text-black font-bold': index == activeIndex }" @click="activeIndex = index">
          {{ year }}
        </li>
      </ul>
      <div class="relative w-full ml-12">
        <div class="flex flex-col w-full" v-if="activeIndex != -1"
          :style="{ transform: 'translateY(' + (activeIndex * 41.6 - 30) + 'px)', transition: 'transform 0.5s' }">
          <span class="inline-block pl-2 mb-2 text-2xl sm:pl-24">{{ HISTORY_DATA[activeIndex].year }}</span>
          <div
            class="border-t border-[#D5D5D5] flex flex-col sm:flex-row pl-2 sm:pl-24 py-4 items-start justify-between">
            <p class="w-full max-w-lg text-[#828282]">
              {{ HISTORY_DATA[activeIndex].description }}
            </p>

            <img :src="HISTORY_DATA[activeIndex].image" alt="images" class="object-cover mt-4 rounded-lg sm:mt-0" />
          </div>
        </div>
      </div>
    </div>
  </SectionHeader>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'

import { useAnimate } from '@/hooks/useAnimate'

import HistoryImage1 from '@/assets/images/about/who-we-are/history-1.png'
import HistoryImage2 from '@/assets/images/about/who-we-are/history-2.png'
import HistoryImage3 from '@/assets/images/about/who-we-are/history-3.png'
import HistoryImage4 from '@/assets/images/about/who-we-are/history-4.png'
import HistoryImage5 from '@/assets/images/about/who-we-are/history-5.png'
import HistoryImage6 from '@/assets/images/about/who-we-are/history-6.png'
import HistoryImage7 from '@/assets/images/about/who-we-are/history-7.png'
import HistoryImage8 from '@/assets/images/about/who-we-are/history-8.png'
import HistoryImage9 from '@/assets/images/about/who-we-are/history-9.png'
import HistoryImage10 from '@/assets/images/about/who-we-are/history-10.png'
import HistoryImage11 from '@/assets/images/about/who-we-are/history-11.png'
import HistoryImage12 from '@/assets/images/about/who-we-are/history-12.png'
import HistoryImage13 from '@/assets/images/about/who-we-are/history-13.png'
import HistoryImage14 from '@/assets/images/about/who-we-are/history-14.png'

const HISTORY_DATA = [
  {
    year: 2004,
    image: HistoryImage1,
    description:
      'White Horse Laboratories is founded at the source, tackling the counterfeit challenge head-on at its epicenter in Hong Kong SAR.'
  },
  {
    year: 2006,
    image: HistoryImage2,
    description:
      'White Horse Laboratories opens an office in Huaqiang Bei district of Shenzhen, China securing the counterfeir region.'
  },
  {
    year: 2008,
    image: HistoryImage3,
    description:
      'White Horse Laboratories expans the test lab area, technical equipment, and personnel for enabling growth into the future.'
  },
  {
    year: 2009,
    image: HistoryImage4,
    description:
      'White Horse Laboratories receives ISO 9001 and ANSI/ESD S20.20 certifications, IDEA-STD-1010B Standard Committee, AS6171 Committee.'
  },
  {
    year: 2010,
    image: HistoryImage5,
    description: 'Approval by Plexus for counterfeit prevention program. Factory auditor certification'
  },
  {
    year: 2012,
    image: HistoryImage6,
    description: 'Hong Kong facility evolves into 3PL provider for the electronics industry'
  },
  {
    year: 2014,
    image: HistoryImage7,
    description: '10th anniversary of the company. Approval by Thales.'
  },
  {
    year: 2015,
    image: HistoryImage8,
    description: 'Global approval by Jabil. IPC member'
  },
  {
    year: 2016,
    image: HistoryImage9,
    description: 'Expansion of capacities for failure analysis, life cycle and reliability testing'
  },
  {
    year: 2017,
    image: HistoryImage10,
    description: 'Approval by Flex for MedAccred certification program'
  },
  {
    year: 2018,
    image: HistoryImage11,
    description: 'Site expansion with European branch office in Munich, Germany'
  },
  {
    year: 2019,
    image: HistoryImage12,
    description: '15th anniversary of the company. Approval by Molex and UTC for expanded testing. COGD member'
  },
  {
    year: 2022,
    image: HistoryImage13,
    description: 'Approval by several automotive and medical manufacturers, expansion to Singapore, Bangalore and Cleveland'
  },
  {
    year: 2023,
    image: HistoryImage14,
    description: 'DIN EN ISO/IEC 17025:2017 accreditation of Test Labs in Shenzhen and Cleveland, expansion to Germany'
  }
]

const activeIndex = ref(0)
const container = ref<HTMLElement | null>(null)

useAnimate(({ to }) => {
  const windowHeight = window.innerHeight

  if (container.value) {
    to(container.value, {
      scrollTrigger: {
        trigger: container.value,
        start: 'top top',
        end: () => `+=${windowHeight * 3}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (HISTORY_DATA.length - 1));
          activeIndex.value = self.progress <= 0 && activeIndex.value !== 0
            ? 0 : index;
        }
      },
    })
  }
})
</script>
