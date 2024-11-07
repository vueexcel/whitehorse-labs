<template>
  <main>
    <div>
      <HeaderSection v-if="showScreen" />
      <div v-else>
        <HeaderSectionMobile />
      </div>
    </div>
    <SolutionsSection />
    <AboutSection />
    <CompanySection />
    <WiderBox :background-image="BackgroundImage"
      :link="constants.about.path + '/' + constants.about.whyWhiteHorseLabs.path" :link-text="'Why White Horse Labs'">
      <template #title>
        More than peace of mind.<br />
        It’s our promise to you.
      </template>
      We promise to safeguard the integrity of your electronics supply chain with unparalleled
      dedication and expertise. We commit to providing the highest standards of quality assurance
      through state-of-the-art testing, innovative counterfeit detection, and comprehensive failure
      analysis. Leading with transparency, rigor, and integrity, we ensure your products are reliable
      and safe, delivering peace of mind and trust in every transaction.
    </WiderBox>
    <!-- @vue-expect-error -->
    <CaseStudySection :showcategory="false" :subtitle="'Case Studies'" />
    <TestimonialszzSection />
    <NewsSection subtitle="News & Insights" cta="View All News and Insights"
      :items="blogStore.getSimpleBlogPosts.slice(0, 3)" class="pt-0 sm:pt-8 bg-white" :load-more="false" />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import HeaderSection from '@/components/pages/home/HeaderSection.vue'
import NewsSection from '@/components/pages/common/NewsSection.vue'
import TestimonialsSection from '@/components/pages/common/TestimonialsSection.vue'
import SolutionsSection from '@/components/pages/home/SolutionsSection.vue'
import CaseStudySection from '@/components/pages/case-study/ContentSection.vue'
import WiderBox from '@/components/pages/common/WiderBox.vue'
import JoinusSection from '@/components/pages/common/JoinusSection.vue'
import FooterSection from '@/components/pages/common/FooterSection.vue'
import CompanySection from '@/components/pages/home/CompanySection.vue'
import AboutSection from '@/components/pages/home/AboutSection.vue'
import HeroSection from '@/components/pages/common/HeroSection.vue';
// @ts-expect-error
import HeaderSectionMobile from '@/components/pages/home/HeaderSectionMobile.vue'


const showScreen = ref(window.innerWidth >= 768);

const updateScreenWidth = () => {
  showScreen.value = window.innerWidth >= 768;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});



import constants from '@/constants/routes.constants'

import BackgroundImage from '@/assets/images/home/hero-2.png'

import { useBlogStore } from '@/store/useBlogStore';

const blogStore = useBlogStore()
blogStore.getInitialBlogPosts() // fetch blogs
</script>
