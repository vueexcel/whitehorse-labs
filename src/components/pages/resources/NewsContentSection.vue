<template>
    <SectionHeader title="The latest" subtitle="News & Insights" class="bg-white">
        <template #cta>
            <select name="Category" id="category" class="text-black ml-auto outline-none border-b-2 py-2 px-12">
                <option value="" selected>View all categories</option>
            </select>
        </template>

        <ul class="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <li v-for="({ title, image }, index) in DUMMY_DATA" :key="index" class="w-full">
                <router-link :to="'/resources/news-insight/' + (index + 1)">
                    <ParallaxBackground class="w-full h-full" :src="image" :alt="'news-' + index" />
                    <h5 class="mt-3 text-sm text-black sm:text-md font-roboto max-">
                        {{ title }}
                    </h5>
                </router-link>
            </li>
        </ul>
    </SectionHeader>
</template>

<script setup lang="ts">
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';
import SectionHeader from '@/components/layout/SectionHeader.vue';

import NewsImage1 from '@/assets/images/home/news-1.png'
import NewsImage2 from '@/assets/images/home/news-2.png'
import NewsImage3 from '@/assets/images/home/news-3.png'

const DUMMY_DATA = [
    {
        title:
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    },
    {
        title:
            'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
        image: NewsImage3,
        link: '#'
    },
    {
        title:
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    },
    {
        title:
            'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
        image: NewsImage3,
        link: '#'
    },
    {
        title:
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    },
    {
        title:
            'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
        image: NewsImage3,
        link: '#'
    },
    {
        title:
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    },
    {
        title:
            'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
        image: NewsImage3,
        link: '#'
    },
    {
        title:
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    },
    {
        title:
            'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
        image: NewsImage3,
        link: '#'
    },
    {
        title:
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    },
    {
        title:
            'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
        image: NewsImage3,
        link: '#'
    },
    {
        title:
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    },
    {
        title:
            'May 2023 Quality Report: Electronic Component Quality Insights from White Horse Laboratories',
        image: NewsImage3,
        link: '#'
    }
]
</script>