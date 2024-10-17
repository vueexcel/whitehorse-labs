<template>
    <main>
        <HeroSection title="global guardians of technological integrity" :background-image="HeroImage">
            Discover how we help clients <br class="hidden md:block"> secure their supply chain
            <template #description>
                Learn how we’ve helped thousands of businesses over twenty years gain the confidence in their supply
                chains to drive their vision forward.
            </template>
        </HeroSection>
        <ContentSection />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import ContentSection from '@/components/pages/case-study/ContentSection.vue';
import HeroSection from '@/components/pages/common/HeroSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';

import HeroImage from '@/assets/images/case-studies/case-study-hero-1a.png'
</script>