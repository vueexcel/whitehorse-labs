<template>
  <div class="relative selection:bg-[#FF544F5B]">
    <NavBar />
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import Lenis from 'lenis'
import NavBar from '@/components/common/NavBar.vue'

import 'lenis/dist/lenis.css'
import ScrollTrigger from 'gsap/ScrollTrigger'

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
</script>
