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
    <SectionHeader title="Testing Laboratory" class="text-white bg-black py-32" textClass="text-white"
      heading-class="sm:heading-xl !max-w-md">
      <template #subtitle>
        Safeguarding Your <br class="hidden md:block"> Products' Integrity
      </template>
      <template #top>
        <p class="pr-5 font-roboto">
          We’re dedicated to ensuring the reliability and safety of your electronic components. Our
          state-of-the-art testing laboratory leverages advanced engineering expertise and
          cutting-edge technology to provide comprehensive solutions, including counterfeit detection
          and failure analysis. We uphold the highest standards of quality assurance, giving you peace
          of mind and confidence in your products.
        </p>
        <p class="pr-5 font-roboto">
          More than just a testing laboratory, White Horse Labs is your partner in quality assurance.
          Our rigorous electrical, mechanical, and environmental testing ensures your products meet
          stringent industry standards. Trust us to safeguard your supply chain with our unwavering
          commitment to excellence, precision, integrity, and innovation in every service we provide.
        </p>
      </template>
      <template #topBottom>
        <BaseButton title="Request a Sample Report" />
      </template>
    </SectionHeader>
    <ServicesSection cta-link="#" cta="Request a Sample Report" title="test lab services" :items="SERVICES_LIST" />
    <TestingSection />
    <CaseStudySection />
    <TestimonialsSection />
    <SolutionSection :items="SOLUTIONS_LIST" :title="'Discover More Solutions'" />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import TestingSection from '@/components/pages/solutions/TestingSection.vue'
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue'
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
import ServicesSection from '@/components/pages/common/ServicesSection.vue'
import HeroSection from '@/components/pages/common/HeroSection.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import SolutionSection from '@/components/pages/common/SolutionSection.vue'

import constants from '@/constants/routes.constants'

import HeroImage from '@/assets/images/solutions/testing-laboratory/hero.png'
import Service1Image from '@/assets/images/solutions/testing-laboratory/service-1.png'
import Service2Image from '@/assets/images/solutions/testing-laboratory/service-2.png'
import Service3Image from '@/assets/images/solutions/testing-laboratory/service-3.png'
import Service4Image from '@/assets/images/solutions/testing-laboratory/service-4.png'
import Service5Image from '@/assets/images/solutions/testing-laboratory/service-5.png'
import Service6Image from '@/assets/images/solutions/testing-laboratory/service-6.png'
import Service7Image from '@/assets/images/solutions/testing-laboratory/service-7.png'
import Service8Image from '@/assets/images/solutions/testing-laboratory/service-8.png'

import SolutionsImage1 from '@/assets/images/solutions/factory-auditing.png'
import SolutionsImage2 from '@/assets/images/solutions/programming-packaging.png'
import SolutionsImage3 from '@/assets/images/solutions/training-education.png'

const SERVICES_LIST = [
  {
    title: 'Substandard and Counterfeit Detection',
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

const SOLUTIONS_LIST = [
    {
        title: 'Factory Auditing',
        description: 'We provide meticulous factory auditing services to ensure compliance, quality, and efficiency in manufacturing processes.',
        link: constants.solutions.path + '/' + constants.solutions.factoryAuditing.path,
        image: SolutionsImage1
    },
    {
        title: 'Programming, Packaging & Logistics',
        description: 'Integrated packaging and logistics solutions designed to optimize efficiency and ensure the secure delivery of your products.',
        link: constants.solutions.path + '/' + constants.solutions.programmingPackaging.path,
        image: SolutionsImage2
    },
    {
        title: 'Training & Education',
        description: 'Comprehensive training and education programs to enhance your team\'s expertise and uphold industry standards.',
        link: constants.solutions.path + '/' + constants.solutions.trainingEducation.path,
        image: SolutionsImage3
    }
]
</script>
