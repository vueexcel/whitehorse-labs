<template>
    <SectionHeader title="How we do it" subtitle="Case Studies" class="bg-white" v-if="showcategory">
        <template #cta>
            <select name="Category" id="category" class="text-black ml-auto outline-none border-b-2 py-2 px-12">
                <option :value="category.value" v-for="category in CATEGORIES" :key="category.value">{{ category.label }}</option>
            </select>
        </template>

        <div class="grid w-full grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
            <router-link :to="`/case-studies/${data.link}`" class="w-full" v-for="(data, index) in DUMMY_DATA" :key="data.title">
                <ParallaxBackground :src="data.image" :alt="'service-' + index" class="w-full h-auto" />

                <h5 class="max-w-xl mt-3 text-sm text-black font-roboto sm:text-md lg:text-lg">
                    {{ data.title }}
                </h5>
            </router-link>
        </div>
    </SectionHeader>
    <SectionHeader v-else subtitle="Explore More" title="How we do it" cta="View All Case Studies"
    :cta-link="constants.caseStudies.path" class="sm:py-20 bg-white">
    <div class="grid w-full grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
        <router-link :to="`/case-studies/${data.link}`" class="w-full" v-for="(data, index) in filteredData" :key="data.title">
                <ParallaxBackground :src="data.image" :alt="'service-' + index" class="w-full h-auto" />

                <h5 class="max-w-xl mt-3 text-sm text-black font-roboto sm:text-md lg:text-lg">
                    {{ data.title }}
                </h5>
            </router-link>
    </div>
  </SectionHeader>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';
import SectionHeader from '@/components/layout/SectionHeader.vue';

import NewsImage1 from '@/assets/images/common/case-study/case-study-1a.png'
import NewsImage2 from '@/assets/images/common/case-study/case-study-2a.png'
import NewsImage3 from '@/assets/images/common/case-study/case-study-3a.png'

const route = useRoute();

import constants from '@/constants/routes.constants'

defineProps<{
    showcategory: {
        type: boolean
        default: true
    }
}>()

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
            "Uncovering Counterfeit Power Switch ICs to Protect Production Integrity",
        image: NewsImage1,
        link: 1
    },
    {
        title: "Safeguarding a Trader's Reputation by Detecting Counterfeit Components",
        image: NewsImage2,
        link: 2
    },
    {
        title:
            "Resolving Open Circuit Failures in Film Resistors for Smooth Production",
        image: NewsImage3,
        link: 3
    },
]

const filteredData = computed(() => {
// @ts-expect-error
  const availableData = DUMMY_DATA.filter(data => data.link !== parseInt(route.params.id))
  return availableData.sort(() => 0.5 - Math.random()).slice(0, 2)
})


</script>