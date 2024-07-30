<template>
    <HeroSection title="global guardians of technological integrity" :background-image="HeroImage">
        Discover how we help clients <br class="hidden md:block"> secure their supply chain
        <template #description>
            Learn how we’ve helped thousands of businesses over twenty years gain the confidence in their supply chains to drive their vision forward.
        </template>
    </HeroSection>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue'

import HeroImage from '@/assets/images/common/case-study/case-study-1.png'
</script>