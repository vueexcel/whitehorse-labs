<template>
    <main>
        <DetailsSection />
        <NewsSection :items="blogStore.getRandomBlogPosts(route.params.id as string)" subtitle="Explore More"
            title="News & Insights" cta="View All Stories" />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import DetailsSection from '@/components/pages/resources/NewsDetailsSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import NewsSection from '@/components/pages/common/NewsSection.vue';

import { useBlogStore } from '@/store/useBlogStore';

const route = useRoute();
const blogStore = useBlogStore();
</script>