<template>
  <div class="relative selection:bg-[#FF544F5B]">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/common/NavBar.vue'
import 'lenis/dist/lenis.css'

import { useAnimateStore } from './store/useAnimateStore';

useAnimateStore(); // initialize store
</script>
