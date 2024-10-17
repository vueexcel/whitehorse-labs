<template>
    <main v-if="currentHeroSection">
        <HeroSection :title="currentHeroSection.subtitle" :background-image="currentHeroSection.backgroundImage">
            <span v-html="currentHeroSection.title[0]"></span>
            <br class="hidden md:block" />
            <span v-html="currentHeroSection.title[1]"></span>
            <br class="hidden md:block" />
            <span>{{ currentHeroSection.title[2] }}</span>
        </HeroSection>
        <ContentSection />
        <CaseStudySection />
        <JoinusSection />
        <FooterSection />
    </main>
    <div v-else>
        <p>Hero Section data not found.</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';  
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import ContentSection from '@/components/pages/case-study/DetailContentSection.vue';
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import HeroSection from '@/components/pages/common/HeroSection.vue';

import NewsImageHero1 from '@/assets/images/common/case-study/case-study-1a.png'
import NewsImageHero2 from '@/assets/images/common/case-study/case-study-2a.png'
import NewsImageHero3 from '@/assets/images/common/case-study/case-study-3a.png'

const heroSections = [
    {
        id: 1,
        subtitle: 'Global Guardians of Technological Integrity',
        title: ['Uncovering Counterfeit Power', 'Switch ICs to Protect ', 'Production Integrity'],
        backgroundImage: NewsImageHero1
    },
    {
        id: 2,
        subtitle: 'Global Guardians of Technological Integrity',
        title: ['Safeguarding a Trader\'s ', 'Reputation by Detecting', 'Counterfeit Components'],
        backgroundImage: NewsImageHero2,
    },
    {
        id: 3,
        subtitle: 'Global Guardians of Technological Integrity',
        title: ['Resolving Open Circuit', 'Failures in Film Resistors for', 'Smooth Production'],
        backgroundImage: NewsImageHero3
    }
];

const route = useRoute();
const heroId = Number(route.params.id);  
// Find the corresponding hero section based on the ID
const currentHeroSection = heroSections.find(section => section.id === heroId);

</script>
