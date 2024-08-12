<template>
    <div class="size-44 group" ref="container">
        <div class="block overflow-hidden w-full">
            <div ref="imageWrapper" class="w-full">
                <slot name="image">
                    <img :src="src" :alt="alt || 'Image'" class="w-full object-cover pointer-events-none" />
                </slot>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts"> 
import gsap from 'gsap';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    src: string;
    alt?: string;
    parallaxEffect?: boolean;
}>()

const container = ref<HTMLElement | null>(null)
const imageWrapper = ref<HTMLElement | null>(null)
const image = ref<HTMLImageElement | null>(null)

const onMouseEnter = () => {
    gsap.to(imageWrapper.value, { scale: 1.05, duration: 0.7, ease: 'power2.out' });
}

const onMouseLeave = () => {
    gsap.to(imageWrapper.value, { scale: 1, duration: 0.7, ease: 'power2.out' });
}

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

    container.value?.addEventListener('mouseenter', onMouseEnter);
    container.value?.addEventListener('mouseleave', onMouseLeave);
});

onUnmounted(() => {
    container.value?.removeEventListener('mouseenter', onMouseEnter);
    container.value?.removeEventListener('mouseleave', onMouseLeave);
})
</script>