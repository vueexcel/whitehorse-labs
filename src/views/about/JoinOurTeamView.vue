<template>
    <main>
        <HeroSection title="global guardians of technological integrity" :background-image="HeroImage">
            Shape the future of <br class="hidden md:block"> technolgical integrity

            <template #description>
                Contribute to a team that's driving the future of electronics reliability. Explore our current openings
                and apply today to start your journey with White Horse Labs.</template>
        </HeroSection>

        <TopHeading>
            Be a part of our global team of building a strong future with integrity, loyalty and trust. Explore the opportunities at White Horse Laboratories
        </TopHeading>

        <JoinOurTeamContent />

        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import TopHeading from '@/components/pages/about/TopHeading.vue';
import JoinOurTeamContent from '@/components/pages/about/JoinOurTeamContentSection.vue';

import HeroImage from '@/assets/images/about/join-our-team/hero.png'
</script>