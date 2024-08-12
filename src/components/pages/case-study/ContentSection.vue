<template>
    <SectionHeader title="How we do it" subtitle="Case Studies" class="bg-white">
        <template #cta>
            <select name="Category" id="category" class="text-black ml-auto outline-none border-b-2 py-2 px-12">
                <option :value="category.value" v-for="category in CATEGORIES" :key="category.value">{{ category.label }}</option>
            </select>
        </template>

        <div class="grid w-full grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
            <router-link to="/case-studies/1" class="w-full" v-for="(data, index) in DUMMY_DATA" :key="data.title">
                <ParallaxBackground :src="data.image" :alt="'service-' + index" class="w-full h-auto" />

                <h5 class="max-w-xl mt-3 text-sm text-black font-roboto sm:text-md lg:text-lg">
                    {{ data.title }}
                </h5>
            </router-link>
        </div>
    </SectionHeader>
</template>

<script setup lang="ts">
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';
import SectionHeader from '@/components/layout/SectionHeader.vue';

import NewsImage1 from '@/assets/images/common/case-study/case-study-1.png'
import NewsImage2 from '@/assets/images/common/case-study/case-study-2.png'

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
            "Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe",
        image: NewsImage1,
        link: '#'
    },
    {
        title: "Efficient Testing Meets Expertise at White Horse Laboratories' New German Test Lab",
        image: NewsImage2,
        link: '#'
    }
]
</script>