<template>
    <main>
        <HeroSection :background-image="HeroImage" title="global guardians of technological integrity" subtitle="">
            Empower Your Team <br class="hidden md:block" /> with Industry-Leading <br class="hidden md:block" /> <span
                class="font-Tiempos-Headline"> Training & Education</span>
            Seamless
            <template #description>
                At White Horse Labs, we offer comprehensive training and education services designed to enhance your
                team's skills and knowledge in the electronics industry.
            </template>
        </HeroSection>
        <SectionHeader title="Training & Education"
            class="text-white bg-black py-36" textClass="text-white" heading-class="sm:heading-xl !max-w-md">
            <template #subtitle>
                Enhance Your Team’s <br class="hidden md:block" /> Expertise
            </template>
            <template #top>
                <p class="pr-5 font-roboto">
                    Strengthen your team's capabilities with White Horse Labs’ specialized training and education
                    services. Our tailored programs cover critical topics like counterfeit detection, quality assurance,
                    and failure analysis, offering hands-on learning to advance your team's knowledge.
                </p>
                <p class="pr-5 font-roboto">
                    Stay ahead in the evolving electronics industry with our continuous education programs. We help your
                    team adapt to new technologies and methodologies, ensuring sustained excellence and high standards
                    of product reliability and safety. Partner with White Horse Labs to invest in your team’s growth and
                    your business’s future.
                </p>
            </template>
            <template #topBottom>
                <BaseButton title="Contact a Quality Consultant" to="mailto:solutions@whitehorselabs.com" />
            </template>
        </SectionHeader>
        <ServicesSection cta-link="mailto:solutions@whitehorselabs.com" :items="SERVICES_LIST" title="Training & Education" cta="Contact a Quality Consultant" />
        <CaseStudySection />
        <TestimonialsSection />
        <SolutionSection :items="SOLUTIONS_LIST" :title="'Discover More Solutions'" />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import ServicesSection from '@/components/pages/common/ServicesSection.vue'
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue'
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
import SolutionSection from '@/components/pages/common/SolutionSection.vue'

import constants from '@/constants/routes.constants'

import HeroImage from '@/assets/images/solutions/training-education/hero.png'
import ServiceImage1 from '@/assets/images/solutions/training-education/service-1.png'
import ServiceImage2 from '@/assets/images/solutions/training-education/service-2.png'

import SolutionsImage1 from '@/assets/images/solutions/testing-laboratory.png'
import SolutionsImage2 from '@/assets/images/solutions/factory-auditing.png'
import SolutionsImage3 from '@/assets/images/solutions/programming-packaging.png'

const SERVICES_LIST = [
    {
        title: 'Expert-Led Course Structure',
        description: [
            'Our training courses, crafted in collaboration with professional educators, are delivered by subject matter experts. We offer a wide range of specialized courses available regularly and online for your convenience. Additionally, we provide customized training tailored to your specific processes, products, and participant needs.',
            'Schedule an appointment to discuss your goals with our training staff. Together, we\'ll develop a program and schedule that meets your unique requirements. Invest in your team\'s growth with White Horse Labs\' expert training solutions.'
        ],
        list: [
            'Multilayer Ceramic Chip Capacitors',
            'Active Discrete Devices',
            'Failure Analysis',
            'General Component Information',
            'Counterfeit Awareness',
            'Industry Structure, Standards, and Terminology',
            'How Components Are Made',
            'Package Styles and Device Types',
            'Electrostatic Discharge (ESD)',
            'The Yin and Yang of ESD and MSL',
            'Quality Management Systems and ISO 9001',
            'How to Read a Test Report'
        ],
        images: [ServiceImage1, ServiceImage2]
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
        title: 'Programming, Packaging & Logistics',
        description: 'Integrated packaging and logistics solutions designed to optimize efficiency and ensure the secure delivery of your products.',
        link: constants.solutions.path + '/' + constants.solutions.programmingPackaging.path,
        image: SolutionsImage3
    }
]
</script>