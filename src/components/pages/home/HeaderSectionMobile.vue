<template>
    <HeroSection title="global guardians of technological integrity" :background-image="MainImage">
        <div class="w-full mx-auto md:mt-auto max-w-[1350px] px-4 mb-8 text-left">
                    <h2 class="mb-16 text-5xl md:text-6xl text-white" ref="heroTitleRef">
                        <span class="inline-block mb-2">Elevating confidence</span><br />
                        <span class="italic text-5xl md:text-7xl font-Tiempos-Headline">to drive your vision</span>
                    </h2>
                    </div>
        <template #description>
            <p class="text-white text-center text-md max-w-xl sm:text-3xl px-6 sm:px-12">  We safeguard supply chains with specialized testing, inspection, and logistics solutions,
                strategically integrated to ensure product integrity and reduce risk.</p>
        </template>
    </HeroSection>
</template>

<script setup>
import HeroSection from '../common/HeroSection.vue';
import MainImage from '@/assets/images/home/landingImage.png';
</script>