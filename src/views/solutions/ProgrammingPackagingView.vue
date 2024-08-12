<template>
    <HeroSection :background-image="HeroImage" title="global guardians of technological integrity" subtitle="">
        Seamless
        <span class="font-Tiempos-Headline">Programming, <br class="hidden md:block" />
            Packaging & Logistics <br class="hidden md:block" />
            Solutions</span>
        <template #description>
            We provide advanced programming, packaging, and logistics solutions for the electronics
            industry, ensuring your products are ready for market with efficiency and reliability.
        </template>
    </HeroSection>
    <SectionHeader title="Programming, Packaging & Logistics" subtitle="Elevating efficiency and reliability"
        class="text-white bg-black py-36" textClass="text-white" heading-class="sm:heading-xl !max-w-md">
        <template #subtitle>
            Elevating efficiency <br class="hidden md:block" /> and reliability
        </template>
        <template #top>
            <p class="pr-5 font-roboto">
                We deliver comprehensive programming, packaging, and logistics solutions tailored to
                streamline your supply chain. Our climate-controlled warehousing and rigorous inspections
                ensure the utmost protection of your inventory. With JEDEC and EIA compliant packaging and
                labeling, including tape and reel, dry-pack, and custom options, we present your products in
                the best possible light.
            </p>
            <p class="pr-5 font-roboto">
                Our automated component programming guarantees precision and efficiency, enhancing your
                operational effectiveness. Partner with White Horse Labs to elevate your supply chain,
                ensuring your electronics reach the market securely, promptly, and market-ready.
            </p>
        </template>
        <template #topBottom>
            <BaseButton title="Contact a Quality Consultant" to="mailto:solutions@whitehorselabs.com" />
        </template>
    </SectionHeader>
    <ServicesSection cta-link="mailto:solutions@whitehorselabs.com" :items="SERVICES_LIST" title="Programming, Packaging & Logistics"
        cta="Contact a Quality Consultant" />
    <FullWidthBox :background-image="BackgroundImage" :link="constants.contact.path" link-text="Contact today">
        Trust White Horse Labs as your on-site 3PL and fulfillment center, simplifying and expediting your packaging,
        storage, and consolidated shipping needs. We ensure the integrity of your supply chain, providing a seamless
        connection between your suppliers and customers. Our comprehensive services guarantee efficiency and
        reliability,
        streamlining your operations and giving you peace of mind. Partner with us for a robust and secure supply chain
        solution.

        <template #title>
            We’re Your Secure Link Between Suppliers and Customers
        </template>
    </FullWidthBox>
    <CaseStudySection />
    <TestimonialsSection />
    <SolutionSection 
        :items="SOLUTIONS_LIST"
        :title="'Discover More Solutions'"
    />
    <JoinusSection />
    <FooterSection />
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import ServicesSection from '@/components/pages/common/ServicesSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
import FullWidthBox from '@/components/pages/common/WiderBox.vue'

import constants from '@/constants/routes.constants'

import HeroImage from '@/assets/images/solutions/programming-packaging/hero.png'
import BackgroundImage from '@/assets/images/solutions/programming-packaging/full-width.png'

import ServiceImage1 from '@/assets/images/solutions/programming-packaging/service-1.png'
import ServiceImage2 from '@/assets/images/solutions/programming-packaging/service-2.png'
import ServiceImage3 from '@/assets/images/solutions/programming-packaging/service-3.png'
import ServiceImage4 from '@/assets/images/solutions/programming-packaging/service-4.png'
import ServiceImage5 from '@/assets/images/solutions/programming-packaging/service-5.png'
import ServiceImage6 from '@/assets/images/solutions/programming-packaging/service-6.png'
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue'
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue'
import SolutionSection from '@/components/pages/common/SolutionSection.vue'

import SolutionsImage1 from '@/assets/images/solutions/testing-laboratory.png'
import SolutionsImage2 from '@/assets/images/solutions/factory-auditing.png'
import SolutionsImage3 from '@/assets/images/solutions/training-education.png'

const SERVICES_LIST = [
    {
        title: 'Electronics Specialist 3PL Solutions',
        description:
            'We offer 3PL services tailored to electronics distributors and manufacturers. Our 1,100+ square meter Hong Kong facility, with direct access to Shenzhen and Futian Free Trade Zone test labs, streamlines your supply chain. This strategic setup saves time and money while ensuring top-tier quality at every stage. Partner with us for efficient and reliable logistics solutions designed specifically for the electronics industry.',
        list: [
            'Warehousing',
            'Kitting',
            'Drop-shipment',
            'Consolidation',
            'Inspection',
            'Packaging',
            'International Shipping Documentation'
        ],
        images: [ServiceImage1, ServiceImage2]
    },
    {
        title: 'Comprehensive Component Packaging',
        description: 'We ensure your electronics are meticulously handled and packaged to prevent damage. Our ESD-controlled facilities adhere to JEDEC and EIA standards, with products stored in climate-controlled warehouses and safeguarded with MSL and ESD protective packaging. Our commitment is to deliver your components to the production site in perfect condition, ready for immediate use. Trust us to maintain the integrity of your products with industry-leading care and expertise.',
        list: [
            'Tape and Reel',
            'Transfer Carriers',
            'Baking',
            'Dry-pack',
            'Re-boxing',
            'Custom Labelling',
            'Solderability Testing',
            'External Visual Inspection'
        ],
        images: [ServiceImage3, ServiceImage4]
    },
    {
        title: 'Expert Programming Services',
        description:
            'Streamline your manufacturing with White Horse Labs\' programming services. By outsourcing your component programming to us, you eliminate complexity and save significant time during testing, boosting production efficiency and reducing costs. Our automated systems program, check co-planarity in 3D, mark, tape, and rewind up to 3,000 pieces per hour.',
        list: 'Enjoy faster delivery, lower costs, and higher productivity with our comprehensive programming services. Ensure you meet production deadlines while benefiting from a seamless, integrated supply chain solution designed to enhance your manufacturing process. Partner with White Horse Labs for unparalleled efficiency and reliability.',
        images: [ServiceImage5, ServiceImage6]
    }
]

const SOLUTIONS_LIST = [
    {
        title: 'Test Lab Services',
        description: 'Advanced testing services include counterfeit detection and failure analysis, maintain the highest quality standards.',
        link: constants.solutions.path + '/' + constants.solutions.testingLaboratory.path,
        image: SolutionsImage1
    },
    {
        title: 'Factory Auditing',
        description: 'We provide meticulous factory auditing services to ensure compliance, quality, and efficiency in manufacturing processes.',
        link: constants.solutions.path + '/' + constants.solutions.factoryAuditing.path,
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
