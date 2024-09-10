<template>
    <div class="h-screen w-full overflow-y-hidden relative px-6 sm:px-12 bg-right"
        :style="{ backgroundImage: `url(${EarthImage})` }" ref="container">
        <div class="w-full h-screen py-16">
            <div class="h-full w-full overflow-y-auto hide-scrollbar relative" ref="scrollContent">
                <template v-for="({ title, subtitle, description }, index) in items" :key="index">
                    <div class="c-header flex sticky items-center sm:items-center border-t-[#979797] border-t top-0 h-[3.2rem] content"
                        :style="`bottom: ${(items.length - index - 1) * 3.15}rem; z-index: ${(items.length * 2) - index};${headerStyle(index)}`">
                        <div class="w-auto mb-3 mr-8 md:w-56 sm:mb-0 py-3">
                            <RedTitle :title="index == 0 ? 'Our values' : `Value ${addzero(index + 1)}`"
                                class="text-transparent" />
                        </div>
                        <span class="text-xs font-roboto mb-4 mt-4 uppercase text-transparent">
                            {{ title || 'title' }}
                        </span>
                    </div>
                    <div class="c-body flex flex-col w-full h-full md:ml-64 sticky top-12 content"
                        :style="`height: calc(100vh - ${2 * items.length}rem - 12.7rem);z-index:${index + 1};${contentStyle(index)}`">
                        <h4 class="max-w-sm py-3 mb-3 text-2xl text-transparent font-roboto sm:mt-0">
                            {{ subtitle }}
                        </h4>

                        <p class="left-0 max-w-lg text-transparent top-12 font-roboto">
                            {{ description }}
                        </p>
                    </div>
                </template>
                <div class="h-40 w-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RedTitle from '@/components/common/RedTitle.vue';
import EarthImage from '@/assets/images/about/why-whl/earth.png';

defineProps<{
    items: {
        title: string;
        subtitle: string;
        description: string;
    }[];
}>();

const addzero = (num: number) => {
    return num < 10 ? `0${num}` : num;
};

const contentStyle = (index: number) => {
    if (scrollY.value <= 0) {
        return `background-size: 100% ${index == 0 ? '100' : '0'}%;`;
    }

    const nextHeader = childNodes.value[0][index + 1];
    if (!nextHeader) {
        return 'background-size: 100% 100%;';
    }

    const { bottom: currentElementBottom, height } = childNodes.value[1][index].getBoundingClientRect();
    const nextHeaderTop = nextHeader.getBoundingClientRect().top;
    const parentTop = scrollContent.value!.getBoundingClientRect().top;

    const top = 100 - Math.max(Math.min((((currentElementBottom - parentTop) - (nextHeaderTop - parentTop)) * 100) / height, 100), 0)
    return `background-size: 100% ${top}%;${top == 0 ? 'user-select: none' : ''}`;
}

const headerStyle = (index: number) => {
    if (scrollY.value <= 0) {
        return 'background-size: 100% 100%;';
    }

    const nextElement = childNodes.value[0][index + 1];
    if (!nextElement) {
        return 'background-size: 100% 100%;';
    }

    const { top: currentTop, height } = nextElement.getBoundingClientRect();
    const { top: parentTop } = scrollContent.value!.getBoundingClientRect();
    const top = Math.max(Math.min(((currentTop - parentTop) * 100) / height, 100),0)

    return `background-size: 100% ${top}%;${top == 0 ? 'user-select: none' : ''}`;
};

const scrollY = ref(0);
const childNodes = ref<HTMLElement[][]>([]);
const container = ref<HTMLElement | null>(null);
const scrollContent = ref<HTMLElement | null>(null);

onMounted(() => {
    if (container.value && scrollContent.value) {
        ScrollTrigger.create({
            trigger: container.value,
            start: 'top top',
            end: () => `+=${scrollContent.value!.scrollHeight}`,
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
                scrollContent.value!.scrollTop = self.progress * (scrollContent.value!.scrollHeight - scrollContent.value!.offsetHeight);
                scrollY.value = self.progress;
            },
        });
    }

    const contentHeaderNodes = scrollContent.value!.querySelectorAll('.c-header') as unknown as HTMLElement[];
    const contentBodyNodes = scrollContent.value!.querySelectorAll('.c-body') as unknown as HTMLElement[];
    childNodes.value = [contentHeaderNodes, contentBodyNodes];
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.content {
    background: linear-gradient(white, white);
    background-clip: text;
    background-size: 100% 0%;
    background-position: cover;
    background-repeat: no-repeat;
    background-origin: bottom;
}
</style>
