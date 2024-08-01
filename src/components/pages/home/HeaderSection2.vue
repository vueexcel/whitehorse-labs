<template>
    <section class="relative flex flex-col min-h-[400vh] bg-black justify-center items-center" ref="topSection">
        <div class="fixed top-32 left-32 bg-black text-white z-50">
            Top: {{ offsetTop }} - Bottom: {{ offsetBottom }}
        </div>
        <div class="fixed will-change-transform w-full h-screen bg-center bg-no-repeat bg-cover"
            :style="position.heroImageStyle" />

        <div class="w-full mx-auto max-w-[1350px] px-4 mb-8 fixed" :style="position.heroTextStyle">
            <h2 class="mb-32 text-6xl text-white">
                <span class="inline-block mb-2">Elevating confidence</span><br />
                <span class="italic text-7xl font-Tiempos-Headline">to drive your vision</span>
            </h2>

            <div class="flex items-center flex-col md:flex-row md:justify-between w-full text-[12px] uppercase transition-colors" :style="position.heroCtaStyle">
                <RedTitle title="global guardians of technological integrity" text-class="text-white"
                    class="mb-5 ml-0 w-max" />

                <p class="flex items-center text-xs text-white cursor-pointer w-max hover:opacity-75 font-roboto-mono">
                    scroll to explores
                    <ArrowIcon class-name="ml-1 size-4 ml-2" type="down" path-class="stroke-white" />
                </p>
            </div>
        </div>

        <p class="text-white text-center text-sm max-w-md sm:text-3xl px-6 sm:px-12 fixed" :style="position.secondTitleStyle">
            We safeguard supply chains with specialized testing, inspection, and logistics solutions,
            strategically integrated to ensure product integrity and reduce risk.
        </p>

        <img :style="position.image1Style" :src="Image1" alt="images" class="fixed pointer-events-none" />
        <img :style="position.image2Style" :src="Image2" alt="images" class="fixed top-0 right-0 pointer-events-none" />
        <img :style="position.image3Style" :src="Image3" alt="images" class="fixed pointer-events-none top-[50%] h-52 left-0 translate-y-[-20%]" />
        <img :style="position.image4Style" :src="Image5" alt="images"
            class="fixed pointer-events-none h-52 right-0 top-[50%] translate-y-[-20%]" />
        <img :style="position.image5Style" :src="Image6" alt="images" class="fixed bottom-0 pointer-events-none left-[20%]" />
        <img :style="position.image6Style" :src="Image7" alt="images" class="fixed bottom-0 pointer-events-none right-[20%]" />
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { adjustScrollSpeed, inRangeFromEnd, inRangeFromStart, max, min } from '@/utils/range'

import RedTitle from '@/components/common/RedTitle.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

import MainImage from '@/assets/images/home/landingImage.png'
import Image1 from '@/assets/images/home/Image-1.png'
import Image2 from '@/assets/images/home/Image-2.png'
import Image3 from '@/assets/images/home/Image-3.png'
import Image5 from '@/assets/images/home/Image-5.png'
import Image6 from '@/assets/images/home/Image-6.png'
import Image7 from '@/assets/images/home/Image-7.png'

import { useObserveOffset } from '@/hooks/useObserveOffset'

const viewPortHeight = window.innerHeight;
const topSection = ref<HTMLElement>();
const { observe, offsetTop, offsetBottom } = useObserveOffset();

const position = computed(() => {
    const top = Math.abs(offsetTop.value);
    const bottom = offsetBottom.value;

    if (offsetTop.value < -800) {
        return {
            heroImageStyle: {
                // 
            },
            heroTextStyle: {
                // 
            },
            heroCtaStyle: {
                //
            },
            secondTitleStyle: {
                //
            },
            image1Style: {
                
            }
        }
    }

    const heroImageStyle = {
        transform: `scale(${max(inRangeFromEnd(top, viewPortHeight, 0, 1), 0.3)})`,
        transformOrigin: 'top center',
        top: bottom >= viewPortHeight ? adjustScrollSpeed(top, 1.2) : '0px',
        backgroundImage: `url(${MainImage})`,
        zIndex: 1
    }

    const heroTextStyle = {
        opacity: inRangeFromEnd(top, viewPortHeight * 0.4, 0, 1),
        zIndex: 2,
        bottom: 0
    }

    const heroCtaStyle = {
        opacity: inRangeFromEnd(top, viewPortHeight * 0.01, 0, 1),
    }

    const secondTitleStyle = {
        top: `${max(inRangeFromEnd(adjustScrollSpeed(top, top > viewPortHeight ? 1.2 : 1), viewPortHeight, 50, 90, viewPortHeight * 0.04), 52)}%`,
        left: '50%',
        transform: `translate(-50%, -50%)`,
        opacity: inRangeFromStart(top, 300, 0, 1, 300),
        zIndex: 3
    }

    const image1Style = {
        top: 0,
        left: 0,
        transformOrigin: 'top left',
        transform: `scale(${min(inRangeFromStart(top, viewPortHeight * 0.4, 0, 1), 1)})`,
    }

    const image2Style = {
        top: 0,
        right: 0,
        transformOrigin: 'top right',
        transform: `scale(${min(inRangeFromStart(top, viewPortHeight * 0.4, 0, 1), 1)})`,
    }

    const image3Style = {
        top: '50%',
        right: 0,
        transformOrigin: 'left',
        transform: `scale(${min(inRangeFromStart(top, viewPortHeight * 0.4, 0, 1), 1)})`,
    }

    const image4Style = {
        top: '40%',
        right: 0,
        transformOrigin: 'right',
        transform: `scale(${min(inRangeFromStart(top, viewPortHeight * 0.4, 0, 1), 1)})`,
    }

    const image5Style = {
        bottom: 0,
        left: '20%',
        transformOrigin: 'bottom',
        transform: `scale(${min(inRangeFromStart(top, viewPortHeight * 0.4, 0, 1), 1)})`,
    }

    const image6Style = {
        bottom: 0,
        right: '20%',
        transformOrigin: 'bottom',
        transform: `scale(${min(inRangeFromStart(top, viewPortHeight * 0.4, 0, 1), 1)})`,
    }

    return {
        heroImageStyle,
        heroTextStyle,
        heroCtaStyle,
        secondTitleStyle,
        image1Style,
        image2Style,
        image3Style,
        image4Style,
        image5Style,
        image6Style
    }
})

onMounted(() => {
    observe(topSection.value!);
})
</script>