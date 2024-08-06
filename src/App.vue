<template>
  <div class="relative">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import Lenis from 'lenis'
import { RouterView } from 'vue-router'
import NavBar from '@/components/navbar/NavBar.vue'

import 'lenis/dist/lenis.css'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import { onMounted } from 'vue'

const lenis = new Lenis({
  lerp: 0.04
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

lenis.on('scroll', ScrollTrigger.update)
gsap.registerPlugin(ScrollTrigger)
requestAnimationFrame(raf)

// onMounted(() => {
//   setTimeout(() => {
//     document.querySelector('.initial-video-loading')?.remove();
//     document.body.classList.remove('overflow-hidden');
//   }, 1000)
// })
</script>
