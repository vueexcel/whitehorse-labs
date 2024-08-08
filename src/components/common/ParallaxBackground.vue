<template>
    <div class="size-44 group" ref="container">
        <div class="block overflow-hidden w-full">
            <div ref="imageWrapper" class="w-full cursor-pointer">
                <img :src="src" :alt="alt || 'Image'" class="w-full object-cover pointer-events-none" />
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const props = defineProps<{
    src: string;
    alt?: string;
    parallaxEffect?: boolean;
}>()

const container = ref<HTMLElement | null>(null)
const imageWrapper = ref<HTMLElement | null>(null)
const image = ref<HTMLImageElement | null>(null)

onMounted(() => {
    if (props.parallaxEffect) {
        gsap.fromTo(image.value, {
            y: 50
        }, {
            y: -50,
            scrollTrigger: {
                trigger: image.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })
    }

    // gsap.fromTo(
    //     imageWrapper.value,
    //     { scale: 1 },
    //     {
    //         scale: 1.05,
    //         ease: 'power2.out',
    //         duration: 0.7,
    //         paused: true,
    //         reversed: true,
    //         onEnter: function () {
    //             this.play();
    //         },
    //         onLeave: function () {
    //             this.reverse();
    //         }
    //     }
    // );

    container.value?.addEventListener('mouseenter', () => {
        gsap.to(imageWrapper.value, { scale: 1.05, duration: 0.7, ease: 'power2.out' });
    });

    container.value?.addEventListener('mouseleave', () => {
        gsap.to(imageWrapper.value, { scale: 1, duration: 0.7, ease: 'power2.out' });
    });
});
</script>