<template>
  <section class="w-full px-6 py-24 sm:px-12">
    <h3 class="max-w-3xl text-2xl sm:text-3xl">
      For over 20 years we’ve been the global leaders of ensuring electronic reliability and safety
      for businesses around the world.
    </h3>

    <div class="w-full mt-12 sm:mt-24">
      <div class="relative flex h-full ml-auto max-h-[30rem] aspect-video">
        <video class="w-full aspect-video" src="" :poster="PosterImage"></video>

        <div
          class="absolute flex items-center cursor-pointer bottom-4 sm:bottom-12 left-4 sm:left-12 hover:opacity-75"
        >
          <img alt="play" class="pointer-events-none" :src="PlayButton" />
          <span class="ml-4 text-2xl text-white pointer-events-none sm:ml-6 sm:text-4xl"
            >Watch</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PosterImage from '@/assets/images/about/who-we-are/thumbnail.png'
import PlayButton from '@/assets/images/about/who-we-are/play.svg'
</script>
