<template>
    <main>
        <HeroSection :background-image="HeroImage" title="global guardians of technological integrity">
            Stay up-to date with the <br class="hidden md:block" />
            news and Insights
            <template #description>
                Discover the latest White Horse Laboratories news, stories and cutting-edge industry insights.
            </template>
        </HeroSection>
        <NewsSection subtitle="News & Insights" :items="blogStore.getSimpleBlogPosts" load-more>
            <select name="Category" id="category" class="text-black ml-auto outline-none border-b-2 py-2 px-12">
                <option v-for="category in CATEGORIES" :key="category.value">{{ category.label }}</option>
            </select>
        </NewsSection>
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue';
import NewsSection from '@/components/pages/common/NewsSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';

import HeroImage from '@/assets/images/resources/news-hero.jpg'

import { useBlogStore } from '@/store/useBlogStore';

const blogStore = useBlogStore()
blogStore.getInitialBlogPosts() // fetch blogs

const CATEGORIES = [
    {
        label: 'All Categories',
        value: ''
    },
    {
        label: 'Testing Laboratory',
        value: 'testing-laboratory'
    },
    {
        label: 'Factory Auditing',
        value: 'factory-auditing'
    },
    {
        label: 'Programming, Packaging & Logistics',
        value: 'programming-packaging-logistics'
    },
    {
        label: 'Training & Education',
        value: 'training-education'
    }
]
</script>
