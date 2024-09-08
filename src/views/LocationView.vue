<template>
    <main>
        <HeroSection :title="content.heroSection.subtitle" :background-image="content.heroSection.backgroundImage">
            <span v-html="content.heroSection.title.slice(0, 1).join(`<br class='hidden md:block'></span>`)"></span>
            <span class="font-Tiempos-Headline">{{ content.heroSection.title.slice(-1)[0] }}</span>

            <template #description>
                {{ content.heroSection.paragraph }}
            </template>
        </HeroSection>

        <SectionHeader :title="content.sectionHeader.subtitle" class="bg-white" :header-shown="false" top-bottom-class="w-full max-w-6xl">
            <template #header></template>
            <template #top>
                <div class="w-full flex-1">
                    <h4 class="mb-5 max-w-sm mt-4 text-2xl text-black sm:text-3xl font-roboto sm:mt-0" v-html="content.sectionHeader.title.join(`<br class='hidden md:block'></h4>`)"></h4>
                    <p class="text-[#828282] font-roboto max-w-md" v-html="content.sectionHeader.paragraph"></p>
                </div>

                <img :src="content.sectionHeader.image" alt="top" class="h-full object-cover pointer-events-none max-w-sm sm:ml-auto" />
            </template>
        </SectionHeader>

        <CompanySection />
        <ServicesSection cta="" :cta-link="content.serviceSection.link" :title="content.serviceSection.title" :items="content.serviceSection.content" />
        <WiderBox :background-image="content.widerBox.image"  class="bg-white">
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

        <SectionHeader :title="content.calendarSection.title" :subtitle="content.calendarSection.subtitle" class="bg-white">
            <template #top>
                <p class="text-[#828282] font-roboto">
                    {{ content.calendarSection.paragraph }}
                </p>
            </template>
        </SectionHeader>
        <section class="w-full px-6 mx-auto bg-white pt-12 pb-20 flex items-center justify-center">
            <iframe class="w-full max-w-6xl" :src="content.calendarSection.calendarUrl" style="border: 0" width="100%" height="600"
                frameborder="0" scrolling="no"></iframe>
        </section>

        <SectionHeader :title="content.contactSection.title" :header-shown="false" class="bg-white" top-bottom-class="w-full max-w-7xl">
            <template #header></template>
            <template #top>
                <div class="w-full flex-1 max-w-lg">
                    <h4 class="mb-5 max-w-sm mt-4 text-2xl text-black sm:text-3xl font-roboto sm:mt-0" v-html="content.contactSection.subtitle.join(`<br class='hidden md:block'>`)"></h4>
                    <p class="font-roboto text-[#828282] sm:text-lg">
                        <span v-html="content.contactSection.paragraph.join('<br>')"></span>
                        <a :href="content.contactSection.directionLink" class="text-[#FF544F] underline hover:opacity-75">
                            Directions
                        </a>
                    </p>
                </div>

                <img :src="content.contactSection.image" alt="top" class="w-full object-cover pointer-events-none max-w-3xl sm:ml-auto" />
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

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ContentData, { type Language, type LocationView } from '@/constants/locationview.constants'

const route = useRoute();
const language = route.params.id as Language
const content = ref((ContentData[language as Language] || ContentData.en) as LocationView)

watch(() => route.params.id, () => {
    content.value = (ContentData[language as Language] || ContentData.en) as LocationView
})
</script>