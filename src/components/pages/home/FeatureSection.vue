<template>
  <section class="relative flex items-center justify-center w-full h-screen bg-black">
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="relative z-10 flex w-full h-full select-none">
        <img :src="Image1" alt="images" class="absolute top-0 left-0 pointer-events-none" />
        <img :src="Image2" alt="images" class="absolute top-0 right-0 pointer-events-none" />
        <img
          :src="Image3"
          alt="images"
          class="absolute pointer-events-none top-[50%] h-52 left-0 translate-y-[-20%]"
        />
        <img
          :src="Image5"
          alt="images"
          class="absolute pointer-events-none h-52 right-0 top-[50%] translate-y-[-20%]"
        />
        <img :src="Image6" alt="images" class="absolute bottom-0 pointer-events-none left-[20%]" />
        <img :src="Image7" alt="images" class="absolute bottom-0 pointer-events-none right-[20%]" />
      </div>
    </div>
    <p class="text-white text-center max-w-[470px] text-3xl z-20 px-6 sm:px-12">
      We safeguard supply chains with specialized testing, inspection, and logistics solutions,
      strategically integrated to ensure product integrity and reduce risk.
    </p>
  </section>
</template>

<script setup lang="ts">
import Image1 from '@/assets/images/home/Image-1.png'
import Image2 from '@/assets/images/home/Image-2.png'
import Image3 from '@/assets/images/home/Image-3.png'
import Image5 from '@/assets/images/home/Image-5.png'
import Image6 from '@/assets/images/home/Image-6.png'
import Image7 from '@/assets/images/home/Image-7.png'
</script>
