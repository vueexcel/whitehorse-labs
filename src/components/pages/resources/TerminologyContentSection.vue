<template>
  <section class="w-full px-6 sm:px-12 bg-white">
    <div class="overflow-x-auto">
      <table class="w-full mt-12 mb-32">
        <thead>
          <tr class="border-b border-[#D8D8D8] px-12">
            <th class="p-2 px-2 pl-6 text-sm uppercase sm:px-4 sm:pl-12 md:pl-20 font-roboto-mono text-start">
              Word
            </th>
            <th class="p-2 px-2 text-sm uppercase sm:px-4 font-roboto-mono text-start">
              Definition
            </th>
            <th class="p-2 px-2 pr-6 text-sm uppercase sm:px-4 sm:pr-12 md:pr-20 font-roboto-mono text-start">
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b last:border-0 border-[#D8D8D8] px-12" v-for="(item, index) in tableData" :key="index">
            <td class="px-2 py-5 pl-6 text-lg align-top sm:px-4 sm:pl-12 md:pl-20 font-roboto">
              {{ item.word }}
            </td>
            <td class="px-2 sm:px-4 align-top py-5 font-roboto text-[#828282]">
              {{ item.definition }}
            </td>
            <td class="px-2 py-5 pr-6 align-top pointer-events-none sm:px-4 sm:pr-12 md:pr-20">
              <ParallaxBackground v-if="item.example" :src="item.example" alt="images"
                class="w-full mx-auto max-w-32 md:max-w-40 lg:max-w-44" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import ParallaxBackground from '@/components/common/ParallaxBackground.vue'

import Image1 from '@/assets/images/terminology/bulk-1.png'
import Image2 from '@/assets/images/terminology/bulk-2.png'
import Image3 from '@/assets/images/terminology/bulk-3.png'
import Image4 from '@/assets/images/terminology/bulk-4.png'
import Image5 from '@/assets/images/terminology/bulk-5.png'
import Image6 from '@/assets/images/terminology/bulk-6.png'
import Image7 from '@/assets/images/terminology/bulk-7.png'
import Image8 from '@/assets/images/terminology/bulk-8.png'
import Image9 from '@/assets/images/terminology/bulk-9.png'
import Image10 from '@/assets/images/terminology/bulk-10.png'
import Image11 from '@/assets/images/terminology/bulk-11.png'
import Image12 from '@/assets/images/terminology/bulk-12.png'
import Image13 from '@/assets/images/terminology/bulk-13.png'

const tableData = [
  {
    word: 'Acceptable',
    definition: 'Components that have some flaws but are still functional.',
    example: null
  },
  {
    word: 'AS6081',
    definition: 'An aerospace quality management system standard developed by SAE International.',
    example: null
  },
  {
    word: 'AS6171',
    definition:
      'This standard provides uniform requirements, practices, and test methods for test facilities.',
    example: null
  },
  {
    word: 'AS6496',
    definition:
      'The AS6496 aerospace standard establishes requirements for the avoidance, detection, mitigation, and disposal of counterfeit products in the authorized distribution supply chain.',
    example: null
  },
  {
    word: 'Bulk',
    definition: 'Bulk packaging of components, without special protection.',
    example: Image1
  },
  {
    word: 'C of C',
    definition:
      'Certificate of Conformity. This document confirms that the components meet the industry-required standards.',
    example: null
  },
  {
    word: 'Carrier tape',
    definition:
      'Carrier tape is the most common form of packaging, which has pockets to contain components, typically used with reels.',
    example: Image2
  },
  {
    word: 'Desiccant',
    definition: 'A substance that absorbs water, used to remove moisture and keep components dry.',
    example: Image3
  },
  {
    word: 'ESD',
    definition:
      'Electrostatic Discharge. This occurs when a static charge transfers between objects with different electrical potentials, and this transfer process is called ESD.',
    example: Image4
  },
  {
    word: 'Falsified',
    definition:
      'Intentional alteration of words or images on a document to change its original meaning.',
    example: null
  },
  {
    word: 'Forged',
    definition:
      'Counterfeit words or images created to fabricate a new set of information for the components.',
    example: null
  },
  {
    word: 'Fraudulent',
    definition:
      "Components whose actual conditions, types, or sizes are inconsistent with the seller's description.",
    example: null
  },
  {
    word: 'HIC',
    definition:
      'Humidity Indicator Card. HICs can estimate the humidity value of a package and the effectiveness of a desiccant through the change in dot color on the card.',
    example: Image5
  },
  {
    word: 'MBB',
    definition:
      'Moisture Barrier Bag, a packaging type that is moisture-resistant, often used with desiccant and humidity indicators.',
    example: Image6
  },
  {
    word: 'MSL',
    definition:
      'The Moisture Sensitivity Level – known in the electronics industry as simply “MSL” – helps identify how long a component can be exposed to 60-85% relative humidity at temperatures less than 86 degrees F before it becomes compromised for the reflow soldering process.',
    example: Image7
  },
  {
    word: 'OCM',
    definition: 'Original Component Manufacturer',
    example: null
  },
  {
    word: 'Preconditioning',
    definition:
      'Preconditioning, recommended within the standard for solderability testing, involves baking or steaming. It serves as an advanced aging simulation that accelerates terminal plating impurities or defects that may affect solderability, ensuring the components will function properly when mounted.',
    example: Image8
  },
  {
    word: 'Reels',
    definition:
      'Instruments that carrier tapes wrap around. This packaging form makes automatic component assembly more efficient.',
    example: Image9
  },
  {
    word: 'Shielding',
    definition: 'Carriers that protect ESD-sensitive devices from damage.',
    example: Image10
  },
  {
    word: 'Tape cover',
    definition:
      'The protective layer that covers the carrier tape, safeguarding the components within.',
    example: Image11
  },
  {
    word: 'Traceability',
    definition: "The ability to trace a component's part number and manufacturer.",
    example: null
  },
  {
    word: 'Trays',
    definition:
      'Containers for components, mainly used for larger-sized components or those with easily-damaged pins.',
    example: Image12
  },
  {
    word: 'Tubes',
    definition:
      'A type of packaging primarily used for rectangular, chip components, small surface-mount devices (SMDs), or uniquely-shaped components.',
    example: Image13
  },
  {
    word: 'Unacceptable',
    definition: 'Components that have features or issues rendering them unusable.',
    example: null
  }
]
</script>
