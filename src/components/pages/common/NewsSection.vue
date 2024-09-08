<template>
    <SectionHeader :title="title || 'the latest'" :subtitle="subtitle" :cta="cta" :cta-link="constants.resources.path + '/' + constants.resources.newsInsight.path" class="bg-white">
        <template #cta v-if="$slots.default">
            <slot></slot>
        </template>
        
        <ul class="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <li v-for="({ title, image, link }, index) in items" :key="index" class="w-full">
                <router-link :to="'/resources/news-insight/' + link
                    " class="block h-full">
                    <div class="w-full h-72 bg-center bg-no-repeat bg-cover overflow-hidden bg-gray-300">
                        <img :src="image" :alt="'news-' + index" class="w-full h-full object-cover hover:scale-105 duration-500" />
                    </div>
                    <!-- <ParallaxBackground :src="image" :alt="'news-' + index" class="w-full h-auto" /> -->
                    <h5 class="mt-3 text-sm text-black sm:text-md font-roboto max-">
                        {{ title }}
                    </h5>
                </router-link>
            </li>
        </ul>

        <div v-if="blogStore.loading" class="mt-20">
            <div class="w-full h-48 bg-gray-300 animate-pulse"></div>
        </div>

        <div v-if="!blogStore.initial && loadMore" :class="{'disabled:opacity-70': blogStore.loading}" class="mt-20 flex justify-center">
            <BaseButton
                class="w-full" 
                @click="blogStore.getBlogPosts()" 
                remove-icon 
            >
                Load more
            </BaseButton>
        </div>
    </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue';
// import ParallaxBackground from '@/components/common/ParallaxBackground.vue';

import { useBlogStore } from '@/store/useBlogStore';

import constants from '@/constants/routes.constants'
import BaseButton from '@/components/common/BaseButton.vue';

const blogStore = useBlogStore()

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
    loadMore?: boolean
}>()
</script>