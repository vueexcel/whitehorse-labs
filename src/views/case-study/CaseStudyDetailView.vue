<template>
    <main>
        <HeroSection title="global guardians of technological integrity" :background-image="HeroImage">
            How White Horse Labs saved <br class="hidden md:block"> Boeing billons of dollars in revenue <br
                class="hidden md:block"> by detecting counterfeit parts
        </HeroSection>
        <ContentSection />
        <CaseStudySection />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import ContentSection from '@/components/pages/case-study/DetailContentSection.vue';
import CaseStudySection from '@/components/pages/common/CaseStudySection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import HeroSection from '@/components/pages/common/HeroSection.vue';

import HeroImage from '@/assets/images/case-studies/case-study-hero-2.png'
</script>