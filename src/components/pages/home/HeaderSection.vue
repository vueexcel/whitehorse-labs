<template>
    <section class="w-full h-[300vh] bg-black sticky top-[-200vh] z-[-1]" ref="heroSection"
        :class="{ 'opacity-0': scrollY > (windowHeight * 3) }">
        <div class="h-screen w-full">
            <div class="flex flex-end flex-col w-full h-full bg-center bg-no-repeat bg-cover z-20"
                :style="{ backgroundImage: `url(${heroImage})` }" ref="heroImage" />
        </div>

        <div class="w-full" ref="triggerBox" />
        <div class="top-0 w-full h-screen flex flex-col flex-end z-30"
            :style="{ position: scrollY > (windowHeight * 0.5) ? 'static' : 'fixed' }">
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
                        scroll to explore
                        <ArrowIcon class-name="ml-1 size-4 ml-2" type="down" path-class="stroke-white" />
                    </p>
                </div>
            </div>
        </div>

        <div class="w-full h-screen z-10 transition-none max-w-[100] overflow-hidden" :class="postionFromTop">
            <div ref="imageSection" class="w-full relative h-full bottom-0 flex items-center justify-between">
                <img :src="src.Image1" alt="images" class="absolute top-0 left-0 pointer-events-none" />
                <img :src="src.Image2" alt="images" class="absolute top-0 right-0 pointer-events-none" />
                <img :src="src.Image3" alt="images"
                    class="absolute pointer-events-none top-[50%] h-52 left-0 translate-y-[-20%]" />
                <img :src="src.Image5" alt="images"
                    class="absolute pointer-events-none h-52 right-0 top-[50%] translate-y-[-20%]" />
                <img :src="src.Image6" alt="images" class="absolute bottom-8 pointer-events-none left-[20%]" />
                <img :src="src.Image7" alt="images" class="absolute bottom-5 pointer-events-none right-[20%]" />
                <p ref="heroText"
                    class="text-white opacity-0 mt-56 absolute left-[50%] translate-x-[-50%] text-center text-sm max-w-md sm:text-3xl px-6 sm:px-12">
                    We safeguard supply chains with specialized testing, inspection, and logistics solutions,
                    strategically integrated to ensure product integrity and reduce risk.
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import gsap from 'gsap';
import RedTitle from '@/components/common/RedTitle.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import MainImage from '@/assets/images/home/landingImage.png';

import Image1 from '@/assets/images/home/Image-1.png';
import Image2 from '@/assets/images/home/Image-2.png';
import Image3 from '@/assets/images/home/Image-3.png';
import Image5 from '@/assets/images/home/Image-5.png';
import Image6 from '@/assets/images/home/Image-6.png';
import Image7 from '@/assets/images/home/Image-7.png';

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
            },
            scrollY: 0,
            windowHeight: window.innerHeight
        };
    },
    components: {
        RedTitle,
        ArrowIcon
    },
    computed: {
        postionFromTop() {
            if (this.scrollY > this.windowHeight * 3) {
                return '';
            }

            if (this.scrollY <= this.windowHeight * 2) {
                return 'feature-image-1';
            }

            return ``;
        },
        positions() {
            return [
                { fromX: '-100%', fromY: '-40%', toX: '0%', toY: '0%', transformOrigin: 'bottom right', end: this.windowHeight * 0.9 },
                { fromX: '100%', fromY: '-40%', toX: '0%', toY: '0%', transformOrigin: 'bottom left', end: this.windowHeight * 0.9 },
                { fromX: '-100%', fromY: '0%', toX: '0%', toY: '0%', transformOrigin: 'top center', end: this.windowHeight * 1.5 },
                { fromX: '100%', fromY: '0%', toX: '0%', toY: '0%', transformOrigin: 'top center', end: this.windowHeight * 1.5 },
                { fromX: '-220%', fromY: '90%', toX: '0%', toY: '0%', transformOrigin: 'top right', end: this.windowHeight * 2 },
                { fromX: '220%', fromY: '90%', toX: '0%', toY: '0%', transformOrigin: 'top left', end: this.windowHeight * 2 }
            ]
        }
    },
    methods: {
        onScroll() {
            this.scrollY = window.scrollY;
        },
        addEffect() {
            // ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            const {
                heroImage,
                ctaTitle,
                triggerBox,
                heroTitle,
                imageSection,
                heroText
            } = this.$refs as any;

            const imgs = imageSection.querySelectorAll('img') as NodeListOf<HTMLImageElement>;

            gsap.to(heroImage, {
                scale: 0.25,
                transformOrigin: 'top center',
                scrollTrigger: {
                    trigger: heroImage,
                    scrub: true,
                    pinSpacing: false,
                    pin: true,
                    end: `+=${this.windowHeight * 2}`,
                    invalidateOnRefresh: true,
                }
            });

            gsap.to(ctaTitle, {
                opacity: 0,
                scrollTrigger: {
                    trigger: triggerBox,
                    scrub: true,
                    start: 'top bottom',
                    end: `+=${this.windowHeight * 0.1}`,
                    invalidateOnRefresh: true,
                }
            });

            gsap.to(heroTitle, {
                opacity: 0,
                scrollTrigger: {
                    trigger: triggerBox,
                    scrub: true,
                    start: 'top bottom',
                    end: `+=${this.windowHeight * 0.4}`,
                    invalidateOnRefresh: true,
                }
            });

            this.positions.forEach((anim, index) => {
                gsap.fromTo(
                    imgs[index],
                    { x: anim.fromX, y: anim.fromY || '0%', scale: 1 },
                    {
                        x: anim.toX,
                        y: anim.toY,
                        scale: 1.2,
                        transformOrigin: anim.transformOrigin,
                        scrollTrigger: {
                            trigger: triggerBox,
                            scrub: true,
                            start: 'top bottom',
                            end: `+=${anim.end}`,
                            invalidateOnRefresh: true,
                        }
                    }
                );
            });

            gsap.fromTo(heroText, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: -100,
                scrollTrigger: {
                    trigger: triggerBox,
                    scrub: true,
                    start: `+=${this.windowHeight * 0.8} bottom`,
                    end: `+=${this.windowHeight * 1.5}`,
                    invalidateOnRefresh: true,
                }
            })
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
    },
    mounted() {
        this.addEffect(); // for the first time
        window.addEventListener('scroll', this.onScroll);
    }
};
</script>

<style scoped>
.feature-image-1 {
    position: fixed;
    top: 0;
    left: 0;
}
</style>