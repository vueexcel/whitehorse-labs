<template>
  <div class="relative">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/navbar/NavBar.vue'
</script>
