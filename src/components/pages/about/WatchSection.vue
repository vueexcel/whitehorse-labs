<template>
  <section class="w-full px-6 py-24 sm:px-12 bg-white">
    <h3 class="max-w-3xl text-2xl sm:text-3xl">
      For over 20 years we’ve been the global leaders of ensuring electronic reliability and safety
      for businesses around the world.
    </h3>

    <div class="w-full mt-12 sm:mt-24">
      <div class="relative flex h-full ml-auto max-h-[30rem] aspect-video">
        <iframe v-if="isPlaying" class="w-full aspect-video border-0" :src="videoUrl" :poster="PosterImage"></iframe>

        <template v-else>
          <ParallaxBackground image-class="!h-full" :src="''" alt="video-thumbnail" class="h-full w-full absolute top-0 left-0">
            <template #image>
              <img :src="PosterImage" alt="About us" class="h-full w-full aspect-video" />
            </template>
          </ParallaxBackground>
          <div
            @click="playVideo"
            class="absolute flex items-center cursor-pointer bottom-4 sm:bottom-12 left-4 sm:left-12 hover:opacity-75">
            <img alt="play" class="pointer-events-none size-8 sm:size-10 md:size-12 lg:size-[3.5rem]"
              :src="PlayButton" />
            <span class="ml-4 text-2xl text-white pointer-events-none sm:ml-6 sm:text-4xl">Watch</span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';
import PosterImage from '@/assets/images/about/who-we-are/thumbnail.png'
import PlayButton from '@/assets/images/about/who-we-are/play.svg'

const isPlaying = ref(false)
const videoUrl = ref('https://www.youtube.com/embed/fjr88BZyJB8?enablejsapi=1');

const playVideo = () => {
  isPlaying.value = true;
  videoUrl.value += '&autoplay=1';
}
</script>
