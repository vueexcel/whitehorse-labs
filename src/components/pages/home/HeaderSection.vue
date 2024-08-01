<template>
    <section class="w-full h-[200vh] bg-black" ref="heroSection">
        <div class="h-screen w-full">
            <div class="flex flex-end flex-col w-full h-full bg-center bg-no-repeat bg-cover z-20"
                :style="{ backgroundImage: `url(${heroImage})` }" ref="heroImage" />
        </div>

        <div class="w-full" ref="triggerBox" />
        <div class="fixed top-0 w-full h-screen flex flex-col flex-end z-30">
            <div class="w-full mx-auto mt-auto max-w-[1350px] px-4 mb-8">
                <h2 class="mb-32 text-6xl text-white" ref="heroTitle">
                    <span class="inline-block mb-2">Elevating confidence</span><br />
                    <span class="italic text-7xl font-Tiempos-Headline">to drive your vision</span>
                </h2>

                <div ref="ctaTitle"
                    class="flex items-center flex-col md:flex-row md:justify-between w-full text-[12px] uppercase transition-colors">
                    <RedTitle title="global guardians of technological integrity" text-class="text-white"
                        class="mb-5 ml-0 w-max" />
                    <p
                        class="flex items-center text-xs text-white cursor-pointer w-max hover:opacity-75 font-roboto-mono">
                        scroll to explores
                        <ArrowIcon class-name="ml-1 size-4 ml-2" type="down" path-class="stroke-white" />
                    </p>
                </div>
            </div>
        </div>

        <div class="w-full h-screen z-10" style="transform: translateY(-100vh)" ref="featureSection">
            <div class="w-full relative h-full bottom-0 flex items-center justify-between border">
                <img :src="src.Image1" alt="images" class="absolute top-0 left-0 pointer-events-none" />
                <img :src="src.Image2" alt="images" class="absolute top-0 right-0 pointer-events-none" />
                <img :src="src.Image3" alt="images"
                    class="absolute pointer-events-none top-[50%] h-52 left-0 translate-y-[-20%]" />
                <img :src="src.Image5" alt="images"
                    class="absolute pointer-events-none h-52 right-0 top-[50%] translate-y-[-20%]" />
                <img :src="src.Image6" alt="images" class="absolute bottom-0 pointer-events-none left-[20%]" />
                <img :src="src.Image7" alt="images" class="absolute bottom-0 pointer-events-none right-[20%]" />
            </div>
        </div>

        <!-- <p class="text-white mx-auto text-center text-sm max-w-md sm:text-3xl px-6 sm:px-12 opacity-0"
            ref="featureTitle">
            We safeguard supply chains with specialized testing, inspection, and logistics solutions,
            strategically integrated to ensure product integrity and reduce risk.
        </p> -->
    </section>
</template>

<script lang="ts">
import gsap from 'gsap';
import RedTitle from '@/components/common/RedTitle.vue';
import MainImage from '@/assets/images/home/landingImage.png';

import Image1 from '@/assets/images/home/Image-1.png'
import Image2 from '@/assets/images/home/Image-2.png'
import Image3 from '@/assets/images/home/Image-3.png'
import Image5 from '@/assets/images/home/Image-5.png'
import Image6 from '@/assets/images/home/Image-6.png'
import Image7 from '@/assets/images/home/Image-7.png'

export default {
    name: 'HeaderSection',
    data() {
        return {
            heroImage: MainImage,
            src: {
                Image1,
                Image2,
                Image3,
                Image5,
                Image6,
                Image7
            }
        }
    },
    components: {
        RedTitle
    },
    mounted() {
        const {
            heroImage,
            ctaTitle,
            triggerBox,
            heroTitle,
            featureTitle,
            featureSection
        } = this.$refs as any;

        gsap.to(heroImage, {
            scale: 0.3,
            transformOrigin: 'top center',
            scrollTrigger: {
                trigger: heroImage,
                scrub: true,
                pinSpacing: false,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        gsap.to(ctaTitle, {
            opacity: 0,
            scrollTrigger: {
                trigger: triggerBox,
                scrub: true,
                start: 'top bottom',
                end: '+=60',
                invalidateOnRefresh: true,
            }
        });

        gsap.to(heroTitle, {
            opacity: 0,
            scrollTrigger: {
                trigger: triggerBox,
                scrub: true,
                start: 'top bottom',
                end: '+=250',
                invalidateOnRefresh: true,
            }
        });

        gsap.to(featureTitle, {
            opacity: 1,
            scrollTrigger: {
                trigger: triggerBox,
                scrub: true,
                start: 'top bottom',
                end: '+=500',
                invalidateOnRefresh: true,
            }
        })

        gsap.to(featureSection, {
            // 
        })
    }
}
</script>
