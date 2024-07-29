<template>
    <HeroSection 
        :background-image="HeroImage"
        title="global guardians of technological integrity"
    >
        Stay up-to date with the <br class="hidden md:block" />
        news and Insights
        <template #description>
            Discover the latest White Horse Laboratories news, stories and cutting-edge industry insights.
        </template>
    </HeroSection>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue';

import HeroImage from '@/assets/images/resources/hero.png'
</script>