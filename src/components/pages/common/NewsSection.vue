<template>
    <SectionHeader :title="title || 'the latest'" :subtitle="subtitle" :cta="cta" :cta-link="constants.resources.path + '/' + constants.resources.newsInsight.path" class="bg-white">
        <template #cta v-if="$slots.default">
            <slot></slot>
        </template>
        
        <ul class="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <li v-for="({ title, image }, index) in items" :key="index" class="w-full">
                <router-link :to="'/resources/news-insight/' + (index + 1)">
                    <ParallaxBackground :src="image" :alt="'news-' + index" class="w-full h-auto" />
                    <h5 class="mt-3 text-sm text-black sm:text-md font-roboto max-">
                        {{ title }}
                    </h5>
                </router-link>
            </li>
        </ul>
    </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue';
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';

import constants from '@/constants/routes.constants'

interface Content {
    title: string;
    image: string;
    link: string;
}

defineProps<{
    title?: string,
    items: Content[],
    subtitle: string,
    cta?: string;
}>()
</script>