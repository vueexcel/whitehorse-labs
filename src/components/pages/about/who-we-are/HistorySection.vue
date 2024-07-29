<template>
  <SectionHeader
    title="Our History"
    cta-link="#"
    cta="Let's talk"
    subtitle="A history of leadership and innovation"
    class="pb-2"
  >
    <template #top>
      <p class="text-[#828282] font-roboto">
        Imagine a world where electronics are always what they claim to be—no substandard, no
        counterfeit. That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He
        established the company right at the source, tackling the counterfeit challenge head-on at
        its epicenter. But we weren’t just any company; we were the good guys, the white knights
        symbolized by our name and logo—a white horse emerging from the shadows, representing purity
        and safety. By leading with our values, we quickly rose to prominence in the fight against
        counterfeit electronics. We were the first of our kind in Asia, innovating testing methods
        that not only met but also helped define industry standards. It was akin to setting the
        rules of the game where none existed, ensuring electronics were tested with rigor,
        transparency, and integrity.
      </p>

      <p class="text-[#828282] font-roboto sm:pl-12">
        As we evolved, our services expanded well beyond counterfeit detection and component
        testing, reflecting our holistic approach to quality control. And while the global landscape
        shifted, our dedication remained steadfast. We continued to grow, developing tools like
        Pegasus and extending our reach to new markets, wherever in the world our clients needed us.
        From a modest beginning to a global presence, White Horse Labs has remained true to its
        mission—ensuring the integrity of the electronics supply chain. Our story isn’t just about
        growth; it’s about maintaining a steadfast commitment to quality at every step. Looking
        forward, we’re excited to continue leading, innovating, and ensuring that the components
        connecting our world are trustworthy and reliable.
      </p>
    </template>

    <div class="flex items-start w-full px-0 mt-16 sm:px-12 md:px-14 lg:px-16">
      <ul>
        <li
          v-for="({ year }, index) in HISTORY_DATA"
          :key="year"
          class="mb-5 font-roboto text-[#828282] cursor-pointer hover:opacity-60"
          :class="{ 'text-black': index == activeIndex }"
          @click="activeIndex = index"
        >
          {{ year }}
        </li>
      </ul>
      <div class="relative w-full ml-12">
        <div
          class="flex flex-col w-full transition-transform"
          v-if="activeIndex != -1"
          :style="{ transform: 'translateY(' + (activeIndex * 46 - 30) + 'px)' }"
        >
          <span class="inline-block pl-2 mb-2 text-2xl sm:pl-24">{{
            HISTORY_DATA[activeIndex].year
          }}</span>
          <div
            class="border-t border-[#D5D5D5] flex flex-col sm:flex-row pl-2 sm:pl-24 py-6 items-start justify-between"
          >
            <p class="w-full max-w-lg text-[#828282]">
              {{ HISTORY_DATA[activeIndex].description }}
            </p>

            <img
              :src="HISTORY_DATA[activeIndex].image"
              alt="images"
              class="object-cover mt-4 rounded-lg sm:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  </SectionHeader>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'

import HistoryImage1 from '@/assets/images/about/who-we-are/history-1.png'
import HistoryImage2 from '@/assets/images/about/who-we-are/history-2.png'
import HistoryImage3 from '@/assets/images/about/who-we-are/history-3.png'
import HistoryImage4 from '@/assets/images/about/who-we-are/history-4.png'

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
    year: 2010
  },
  {
    year: 2012
  },
  {
    year: 2014
  },
  {
    year: 2015
  },
  {
    year: 2016
  },
  {
    year: 2017
  },
  {
    year: 2018
  },
  {
    year: 2019
  },
  {
    year: 2022
  },
  {
    year: 2023
  }
]

const activeIndex = ref(0)
</script>
