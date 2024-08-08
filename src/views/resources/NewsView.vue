<template>
    <main>
        <HeroSection :background-image="HeroImage" title="global guardians of technological integrity">
            Stay up-to date with the <br class="hidden md:block" />
            news and Insights
            <template #description>
                Discover the latest White Horse Laboratories news, stories and cutting-edge industry insights.
            </template>
        </HeroSection>
        <NewsSection subtitle="News & Insights" :items="DUMMY_DATA">
            <select name="Category" id="category" class="text-black ml-auto outline-none border-b-2 py-2 px-12">
                <option value="" selected>View all categories</option>
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

import HeroImage from '@/assets/images/resources/news-hero.png'

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
];
</script>
