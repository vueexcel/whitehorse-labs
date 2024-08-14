<template>
  <div class="relative selection:bg-[#FF544F5B]">
    <NavBar />
    <router-view />

    <transition name="fade-slide">
      <div v-if="pageLoaderStore.loading"
        class="text-white fixed top-0 left-0 h-full w-full bg-black flex justify-center items-center"
        style="z-index: 100;">
        <Vue3Lottie @on-loop-complete="pageLoaderStore.stopLoading()" autoPlay :animation-link="'/wh_loading2.json'"
          :width="(windowWidth * 0.3)" :height="(windowWidth * 0.3)" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { Vue3Lottie } from 'vue3-lottie'
import ScrollTrigger from 'gsap/ScrollTrigger';

import 'lenis/dist/lenis.css'

import NavBar from '@/components/common/NavBar.vue'

import { useAnimateStore } from '@/store/useAnimateStore';
import { usePageLoader } from '@/store/usePageLoader';

useAnimateStore(); // initialize store

const pageLoaderStore = usePageLoader();

watch(pageLoaderStore, (value) => {
  if (value.imageLoaded && !value.loading) {
    ScrollTrigger.refresh();
  }
})

const windowWidth = window.innerWidth
</script>
