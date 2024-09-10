<template>
  <div class="relative selection:bg-[#FF544F5B]">
    <NavBar />
    <router-view />

    <transition name="fade-slide">
      <div v-if="pageLoaderStore.loading"
        class="text-white fixed top-0 left-0 h-full w-full bg-black flex justify-center items-center"
        style="z-index: 100;">
        <Vue3Lottie ref="lottie" @on-enter-frame="handleEnterFrame" autoPlay :loop="false" :animation-link="'/wh_loading2.json'"
          :width="Math.max((windowWidth * 0.3), 200)" :height="Math.max((windowWidth * 0.3), 200)" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Vue3Lottie } from 'vue3-lottie'
import ScrollTrigger from 'gsap/ScrollTrigger';

import 'lenis/dist/lenis.css'
import 'leaflet/dist/leaflet.css'; // leaflet css

import NavBar from '@/components/common/NavBar.vue'

import { useAnimateStore } from '@/store/useAnimateStore';
import { usePageLoader } from '@/store/usePageLoader';

useAnimateStore(); // initialize store

const pageLoaderStore = usePageLoader();

watch(pageLoaderStore, (value) => {
  if (value.imageLoaded && !value.loading) {
    lottie.value.stop();
    ScrollTrigger.refresh();
  }
})

const windowWidth = window.innerWidth
const lottie = ref<typeof Vue3Lottie>(null!)

let i = 0;
const handleEnterFrame = () => {
  i++;
  if (i === 80) {
    pageLoaderStore.imageLoaded && lottie.value.stop();
    pageLoaderStore.stopLoading();
    i = 0;
  }
}
</script>
