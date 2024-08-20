<template>
    <main>
        <HeroSection title="global guardians of technological integrity" :background-image="HeroImage">
            The Oskar von <br class="hidden md:block"> Miller Test Centre<br class="hidden md:block"> <span
                class="font-Tiempos-Headline">in Munich, Germany</span>
            <template #description>
                The Oskar von Miller Test Centre is committed to upholding the ISO17025 standard, following our
                established accredited testing facilities in Shenzhen, China, and Cleveland, USA.
            </template>
        </HeroSection>

        <SectionHeader title="Munich, Germany" class="bg-white" :header-shown="false" top-bottom-class="w-full max-w-6xl">
            <template #header></template>
            <template #top>
                <div class="w-full flex-1">
                    <h4 class="mb-5 max-w-sm mt-4 text-2xl text-black sm:text-3xl font-roboto sm:mt-0"> Precision
                        Testing for Europe’s Advanced <br class="hidden md:block"> Sectors </h4>
                    <p class="text-[#828282] font-roboto max-w-md">
                        White Horse Laboratories, a global leader in ensuring the integrity of electronics, proudly
                        offers its cutting-edge European test lab in Munich, Germany. Open for over a year, this
                        facility seamlessly integrates our renowned industry expertise with a focus on rapid, precise
                        testing, delivering an exceptional service experience to our customers.
                        <br><br> <q>Integrity and expertise are the foundation of our services,</q> says Mark Rinehart,
                        Founder and Managing Director. The Munich lab exemplifies our commitment to providing fast,
                        seamless testing processes with clear, actionable results, upholding our promise of customer
                        satisfaction.
                    </p>
                </div>

                <img :src="TopImage" alt="top" class="h-full object-cover pointer-events-none max-w-sm sm:ml-auto" />
            </template>
        </SectionHeader>

        <CompanySection />
        <ServicesSection cta="" cta-link="#" title="Our capabilites" :items="SERVICES_LIST" />
        <WiderBox :background-image="WiderImage" link="" link-text="" class="bg-white">
            <template #title>
                Quality is Our Commitment
            </template>

            At White Horse Laboratories, we are dedicated to safeguarding global supply chains by utilizing
            state-of-the-art
            testing equipment and both industry-standard and proprietary testing methods.
            <br><br>What truly sets us apart are two core principles: an unyielding commitment to integrity and a
            collaborative
            approach with our clients. These guiding values enable us to craft bespoke solutions tailored to your
            specific
            needs, ensuring your success every step of the way.
        </WiderBox>

        <SectionHeader title="Calendar" subtitle="Stay Connected: Upcoming Events & Key Dates" class="bg-white">
            <template #top>
                <p class="text-[#828282] font-roboto">
                    Trust White Horse Labs for swift, reliable service to maintain a resilient supply chain. Streamline
                    your order planning with updated hours from our Munich office.
                </p>
            </template>
        </SectionHeader>
        <section class="w-full px-6 mx-auto bg-white pt-12 pb-20 flex items-center justify-center">
            <iframe class="w-full max-w-6xl" :src="calendarUrl" style="border: 0" width="100%" height="600"
                frameborder="0" scrolling="no"></iframe>
        </section>

        <SectionHeader title="Contact" :header-shown="false" class="bg-white" top-bottom-class="w-full max-w-7xl">
            <template #header></template>
            <template #top>
                <div class="w-full flex-1 max-w-lg">
                    <h4 class="mb-5 max-w-sm mt-4 text-2xl text-black sm:text-3xl font-roboto sm:mt-0">
                        White Horse Laboratories <br class="hidden md:block"> GmbH </h4>
                    <p class="font-roboto text-[#828282] sm:text-lg">
                        Lindberghstraße 12 <br>
                        82178 Puchheim <br>
                        Germany<br><br>
                        Telephone: +49 89 541 973 12<br>
                        Email: <a href="mailto:info@whitehorselabs.com"
                            class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a><br>
                        <br>
                        <a href="#" class="text-[#FF544F] underline hover:opacity-75">
                            Directions
                        </a>
                    </p>
                </div>

                <img :src="MapImage" alt="top" class="w-full object-cover pointer-events-none max-w-3xl sm:ml-auto" />
            </template>
        </SectionHeader>

        <FormSection>
            <template #title>
                <span></span>
            </template>
        </FormSection>
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue';
import SectionHeader from '@/components/layout/SectionHeader.vue';
import CompanySection from '@/components/pages/locations/CompanySection.vue';
import ServicesSection from '@/components/pages/common/ServicesSection.vue';
import WiderBox from '@/components/pages/common/WiderBox.vue';
import FormSection from '@/components/pages/contact/FormSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';

import HeroImage from '@/assets/images/locations/hero.png'
import TopImage from '@/assets/images/locations/top.png'
import WiderImage from '@/assets/images/locations/wider.png'
import MapImage from '@/assets/images/locations/map.png'

import ServiceImage1 from '@/assets/images/locations/service-1.png'
import ServiceImage2 from '@/assets/images/locations/service-2.png'
import ServiceImage3 from '@/assets/images/locations/service-3.png'
import ServiceImage4 from '@/assets/images/locations/service-4.png'
import ServiceImage5 from '@/assets/images/locations/service-5.png'
import ServiceImage6 from '@/assets/images/locations/service-6.png'

const SERVICES_LIST = [
    {
        title: 'Component Testing and Counterfeit Detection',
        list: 'Understanding the critical importance of time in the electronics industry, we guarantee swift yet thorough analysis. Our detailed, easy-to-understand test reports provide precise insights into the condition of your components, identifying potential counterfeits with the utmost efficiency.',
        description:
            'Our expert team performs rigorous component testing using advanced visual inspection, mechanical testing, X-ray analysis, and more. We ensure the quality and functionality of your electronic components, reliably detecting counterfeit or substandard parts. Our testing services strictly adhere to industry standards like AS6081/AS6171, delivering consistently reliable and high-quality results.',
        images: [ServiceImage1, ServiceImage2]
    },
    {
        title: 'Failure Analysis',
        description: 'Our thorough failure analysis uncovers potential issues within your electronic components, providing targeted solutions to address them effectively. Leveraging cutting-edge technology and the expertise of seasoned industry professionals, we excel in detecting internal failures, assessing processing materials, and conducting in-process quality controls to ensure the highest level of reliability.',
        list: 'At White Horse Laboratories, our comprehensive failure analysis is designed to quickly identify problems and deliver solutions tailored to your unique needs. As proud members of FED, COGD, and ERAI, we are committed to upholding the highest standards of excellence and integrity in every aspect of our failure analysis services.',
        images: [ServiceImage3, ServiceImage4]
    },
    {
        title: 'Component Programming, Packaging, and Logistics',
        description: 'Our service begins with a detailed review of your products’ current state, followed by complete processing and packaging of your electronic components tailored to your production needs. From repackaging to custom labeling, we ensure your supply chain runs smoothly and efficiently.',
        list: 'To optimize your components\' performance, we offer customized programming services aligned with your specific requirements. Our experts deliver precise programming that ensures your components are fully prepared for their intended application, enhancing functionality and reliability.',
        images: [ServiceImage5, ServiceImage6]
    }
]

const calendarUrl =
    'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
</script>