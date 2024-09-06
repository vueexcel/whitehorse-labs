<template>
    <div class="h-screen w-full overflow-y-hidden relative px-6 sm:px-12" :style="{ backgroundImage: `url(${EarthImage})` }" ref="container">
        <div class="w-full h-screen overflow-y-auto py-16 sticky">
        <div class="sticky h-full w-full top-0 overflow-y-auto hide-scrollbar " ref="scrollContent">
            <template v-for="({ title, subtitle, description }, index) in items" :key="index" class="w-full ">
                <div class="flex sticky  border-t-[#979797] border-t "
                    :style="` bottom: ${(items.length - index - 1 ) * 3.15}rem; z-index: ${(items.length * 2) - index}`">
                    <div class="w-auto mb-2 mr-8 md:w-64 sm:mb-0 py-3">
                        <RedTitle :title="index == 0 ? 'Our values' : `Value ${addzero(index + 1)}`"
                            class="sm:mt-2 text-white" />
                    </div>
                    <span v-if="index != 0" class="text-xs font-roboto mb-4 mt-4 uppercase text-white">{{
                       title || 'title' }}</span>


                </div>
                <div class="flex flex-col w-full h-full xl:ml-72"
                    :style="` height: calc(100vh - ${3 * items.length}rem); z-index:${index + 1}`">
                    <h4 class="max-w-sm py-3 my-3 text-2xl text-white font-roboto sm:mt-0">
                        {{ subtitle }}
                    </h4>

                    <p v-if="description" class=" left-0 max-w-lg text-white top-12 font-roboto">{{
                        description }}</p>
                </div>
            </template>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
            },
        });
    }
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
</style>