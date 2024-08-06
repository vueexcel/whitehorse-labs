<template>
    <main>
        <HeroSection :background-image="HeroImage" title="global guardians of technological integrity">
            Stay up-to date with the <br class="hidden md:block" />
            news and Insights
            <template #description>
                Discover the latest White Horse Laboratories news, stories and cutting-edge industry insights.
            </template>
        </HeroSection>
        <ContentSection />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue';
import ContentSection from '@/components/pages/resources/NewsContentSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';

import HeroImage from '@/assets/images/resources/news-hero.png'
</script>
