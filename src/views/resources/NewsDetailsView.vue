<template>
    <main>
        <DetailsSection />
        <NewsSection :items="DUMMY_DATA" subtitle="Explore More" title="News & Insights" cta="View All Stories" />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import DetailsSection from '@/components/pages/resources/NewsDetailsSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import NewsSection from '@/components/pages/common/NewsSection.vue';

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
    }
]
</script>