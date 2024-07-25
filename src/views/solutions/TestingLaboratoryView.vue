<template>
  <main>
    <HeroSection :background-image="HeroImage" title="global guardians of technological integrity">
      <template #description>
        Advanced testing services ensure product reliability and safety. Our comprehensive
        solutions, including counterfeit detection and failure analysis, maintain the highest
        quality standards.
      </template>

      Ensuring Product <br class="hidden md:block" />
      Reliability and Safety <br />
      <span class="font-Tiempos-Headline">Through Expert Testing</span>
    </HeroSection>
    <InfoSection />
    <ServicesSection
      cta="Request a Sample Report"
      title="test lab services"
      :items="SERVICES_LIST"
    />
    <TestingSection />
    <CaseStudySection />
    <TestimonialsSection />
    <SolutionsSection />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue'
import InfoSection from '@/components/pages/testing-laboratory/InfoSection.vue'
import ServicesSection from '@/components/pages/common/ServicesSection.vue'
import TestingSection from '@/components/pages/testing-laboratory/TestingSection.vue'
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue'
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
import SolutionsSection from '@/components/pages/testing-laboratory/SolutionsSection.vue'

import HeroImage from '@/assets/images/solutions/testing-laboratory/hero.png'

import Service1Image from '@/assets/images/solutions/testing-laboratory/service-1.png'
import Service2Image from '@/assets/images/solutions/testing-laboratory/service-2.png'
import Service3Image from '@/assets/images/solutions/testing-laboratory/service-3.png'
import Service4Image from '@/assets/images/solutions/testing-laboratory/service-4.png'
import Service5Image from '@/assets/images/solutions/testing-laboratory/service-5.png'
import Service6Image from '@/assets/images/solutions/testing-laboratory/service-6.png'
import Service7Image from '@/assets/images/solutions/testing-laboratory/service-7.png'
import Service8Image from '@/assets/images/solutions/testing-laboratory/service-8.png'

const SERVICES_LIST = [
  {
    title: 'Substandard and Counterfeit Detection',
    link: '#',
    description:
      'Early detection and prevention of counterfeits are crucial to maintaining the quality of the entire supply chain. At White Horse Labs, we develop customized risk mitigation plans tailored to your needs. Our services range from screening third-party samples to creating a comprehensive database of "known good parts," all performed to the highest inspection standards, including AS6081, AS6171, AS5553, CCAP-101, and IDEA-1010.',
    list: [
      'Documentation and Packaging Inspection',
      'External Visual Inspection',
      'X-ray Fluorescence (XRF)',
      'X-ray Analysis',
      'Heated Solvent Test',
      'Decapsulation and Die Analysis',
      'Electrical Test'
    ],
    images: [Service1Image, Service2Image]
  },
  {
    title: 'Failure Analysis',
    link: '#',
    description:
      "Failure analysis of electronic parts and components provides crucial insights into why they don't meet performance expectations and their potential performance in their intended end use. Conducting an unbiased failure analysis through White Horse Labs, an independent testing laboratory, enables the production of higher quality products.",
    list: [
      'Scanning Electron Microscopy (SEM)',
      'Energy Dispersive X-ray Spectrometry (EDX)',
      'Scanning Accoustic Microscopy (SAM)',
      'Cross-section (Microsection)',
      'Parallel Lap',
      'Hot Spot Test',
      'Electrical Test'
    ],
    images: [Service3Image, Service4Image]
  },
  {
    title: 'Lifecycle and Reliability Testing',
    link: '#',
    description:
      "Lifecycle testing at White Horse Labs evaluates a product's longevity by analyzing its performance under normal use conditions. To ensure comprehensive reliability, we also conduct reliability testing, exposing products to extreme conditions that exceed normal operating requirements. This dual approach helps predict product durability and guarantees robust performance, ensuring your products meet the highest standards of quality and reliability.",
    list: [
      'Thermal Cycle',
      'Thermal Shock',
      'Burn-in',
      'Drop Test',
      'Vibration Test',
      'Environmental Exposure (Temperature And Humidity)',
      'Salt Spray Test',
      'Electrical Overstress Testing',
      'Mechanical Stress Testing'
    ],
    images: [Service5Image, Service6Image]
  },
  {
    title: 'Electrical Testing',
    link: '#',
    description:
      'At White Horse Labs, our electrical testing services encompass six rigorous levels tailored to the device and customer requirements. We verify performance, speed, durability, and reliability of components, while also detecting defects and faults. Trust our expertise to ensure your components meet the highest standards of quality and functionality.',
    list: [
      'Curve Trace',
      'Pin Verification Test',
      'Functional Test (Primary)',
      'DC Characteristics',
      'AC Characteristics',
      'Temperature Range Testing',
      'Electrical Overstress Testing',
      'Mechanical Stress Testing'
    ],
    images: [Service7Image, Service8Image]
  }
]
</script>
