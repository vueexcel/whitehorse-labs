<template>
    <main>
        <HeroSection title="global guardians of technological integrity" :background-image="HeroImage">
            Shape the future of <br class="hidden md:block"> technolgical integrity

            <template #description>
                Contribute to a team that's driving the future of electronics reliability. Explore our current openings
                and apply today to start your journey with White Horse Labs.</template>
        </HeroSection>

        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import FooterSection from '@/components/pages/common/FooterSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import HeroSection from '@/components/pages/common/HeroSection.vue';

import HeroImage from '@/assets/images/about/join-our-team/hero.png'
</script>