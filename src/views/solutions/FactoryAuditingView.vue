<template>
    <main>
        <HeroSection :background-image="HeroImage" title="global guardians of technological integrity">
            Ensure Quality from <br class="hidden md:block"> the Source <span class="font-Tiempos-Headline">with Expert
                <br class="hidden md:block"> Factory Auditing</span>

            <template #description>
                Our comprehensive Factory Auditing Services provides in-depth, meticulous inspections using the latest
                technology, ensuring accurate and reliable evaluations.
            </template>
        </HeroSection>
        <SectionHeader title="Factory Auditing" class="text-white bg-black py-32" textClass="text-white"
            headingClass="sm:heading-xl !max-w-md">
            <template #subtitle>
                Ensuring Excellence <br class="hidden md:block"> from the Source
            </template>
            <template #top>
                <p class="pr-5 font-roboto">
                    At White Horse Laboratories, we offer comprehensive factory auditing services to ensure your
                    suppliers meet
                    industry standards and mitigate risks before production begins. Our team of certified auditors
                    utilizes advanced
                    technology and in-depth knowledge of IPC standards and ISO compliance to provide detailed, accurate
                    reports.
                </p>
                <p class="pr-5 font-roboto">
                    Tailored to various industries, our services include supplier qualification, annual quality
                    assessments, and
                    social compliance audits. Committed to integrity and quality, we deliver unbiased, reliable reports
                    that support
                    informed decision-making, enhancing the reliability and safety of your supply chain from the start.
                </p>
            </template>
            <template #topBottom>
                <BaseButton title="Contact a Quality Consultant" to="mailto:solutions@whitehorselabs.com" />
            </template>
        </SectionHeader>
        <ServiceSection cta-link="mailto:solutions@whitehorselabs.com" :items="SERVICES_LIST" title="Factory Auditing"
            cta="Contact a Quality Consultant" />

        <ParallaxBackground :src="Service7Image" class="!pb-0 h-full w-full" />
        <CaseStudySection />
        <TestimonialsSection />
        <SolutionSection :items="SOLUTIONS_LIST" :title="'Discover More Solutions'" />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import ServiceSection from '@/components/pages/common/ServicesSection.vue';
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue';
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue';
import SolutionSection from '@/components/pages/common/SolutionSection.vue';
import HeroSection from '@/components/pages/common/HeroSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import SectionHeader from '@/components/layout/SectionHeader.vue';
import BaseButton from '@/components/common/BaseButton.vue';

import constants from '@/constants/routes.constants'

import HeroImage from '@/assets/images/solutions/factory-auditing/hero.png';
import Service1Image from '@/assets/images/solutions/factory-auditing/service-1.png'
import Service2Image from '@/assets/images/solutions/factory-auditing/service-2.png'
import Service3Image from '@/assets/images/solutions/factory-auditing/service-3.png'
import Service4Image from '@/assets/images/solutions/factory-auditing/service-4.png'
import Service5Image from '@/assets/images/solutions/factory-auditing/service-5.png'
import Service6Image from '@/assets/images/solutions/factory-auditing/service-6.png'
import Service7Image from '@/assets/images/solutions/factory-auditing/service-7a.png'

import SolutionsImage1 from '@/assets/images/solutions/testing-laboratory.png'
import SolutionsImage2 from '@/assets/images/solutions/programming-packaging.png'
import SolutionsImage3 from '@/assets/images/solutions/training-education.png'
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';

const SERVICES_LIST = [
    {
        title: 'Two Decades of Mastery in Electronics Expertise',
        description:
            'With years of experience and a commitment to industry standards, we meticulously examine every detail, reflecting our dedication to quality. Our audits are thorough investigations that identify major issues and mitigate risks from the outset. This comprehensive approach is ingrained in our company DNA, ensuring your supply chain\'s reliability and safety.',
        list: [
            '5 Laboratories',
            '100+ Technicians and Engineers',
            '10+ Certified Auditors'
        ],
        images: [Service1Image, Service2Image]
    },
    {
        title: 'Unwavering Integrity and Expertise',
        description:
            "At White Horse Laboratories, quality is incorruptible, and integrity is our bedrock value, setting us apart. Every audit report we prepare is 100% impartial and neutral, ensuring the highest standards of accuracy. Our excellent quality assurance team comprises certified factory auditors and inspectors, committed to providing reliable and thorough evaluations.",
        list: [
            'IPC-A-600 (PCB) Inspector',
            'IPC-A-610 (PCBA) Inspector',
            'IPC-A-620 (Cable and Wire Harness) Inspector',
            'ISO 9001:2015 Internal Auditor',
            'FDA 21 CFR 820 (QSR) Auditor',
            'Electrostatic Discharge (ESD)',
            'FMEA'
        ],
        images: [Service3Image, Service4Image]
    },
    {
        title: 'Comprehensive and Unmatched Auditing',
        description:
            "At White Horse Laboratories, our certified auditors and inspectors diligently manage the entire audit process, from proposal preparation to immediate reporting. They leverage our advanced testing laboratory and extended testing team to eliminate potential product quality risks from the outset.",
        list: 'Our expertise extends beyond electronics; we also offer factory auditing services for textiles, metals, household goods, kitchen appliances, and more. Contact us to discuss your specific needs and benefit from our thorough and reliable auditing services.',
        images: [Service5Image, Service6Image]
    },
    {
        title: 'Tailor-Made Audit Solutions',
        description: [
            'At White Horse Laboratories, we craft specific audit solutions tailored to your unique inspection and standards requirements. Our certified auditors conduct thorough on-site audits and assessments, acting as your extended arm to rigorously evaluate your suppliers. By designing customized auditing strategies, we ensure that your suppliers meet the highest standards of quality and reliability.',
            'We meticulously design audit solutions based on your flexible inspection needs and standards. Our team conducts comprehensive on-site audits and assessments, putting your suppliers through their paces to guarantee they adhere to the highest quality and reliability standards.'
        ],
        list: [
            'Factory / Supplier Qualification Auditing',
            'Factory / Supplier Annual Quality Auditing',
            'Factory / Supplier cGMP Auditing',
            'Social Compliance Auditing',
            'IPC – Incoming Quality Control',
            'IPQC - In-process Quality Control',
            'ESDT - ESD Testing',
            'CLS - Container Loading Supervision',
            'CAL - Corrective Action Implementation',
            'II - Incoming Inspection',
            'FAI - First Article Inspection',
            'SI - Semi-FG Inspection',
            'PSI - Pre-shipment Inspection',
            'IMC - Inventory Material Counting'
        ],
        images: []
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