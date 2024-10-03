<template>
  <SectionHeader v-for="{ title: title1, description, list, images } in items" :key="title1" :title="title"
    :subtitle="title1" :cta="cta" :ctaLink="ctaLink" class="pb-8 bg-white">
    <template #top>
      <p v-if="!Array.isArray(description)" class="text-[#828282] font-roboto">
        {{ description }}
      </p>

      <p v-else class="text-[#828282] font-roboto">
        <span v-for="(item, index) in description" :key="index">{{ item }}<br /></span>
      </p>

      <p v-if="!Array.isArray(list)" class="text-[#828282] font-roboto">
        {{ list }}
      </p>

      <ul v-else class="md:ml-8 lg:ml-20 text-[#828282] font-roboto">
        <li v-for="item in list" :key="item">
          <span class="inline-block bg-[#FF544F] size-3"></span>
          <span class="ml-2 font-roboto">{{ item }}</span>
        </li>
      </ul>
    </template>

    <template #topBottom v-if="!Array.isArray(images)">
      <ParallaxBackground class="w-full h-full flex !justify-center !items-center" :src="images"
        :alt="'service-1'" />
    </template>

    <template v-else #default>
      <div :class="['w-full mt-5 flex !justify-center !items-center ', images?.length == 1 ? 'max-w-3xl flex justify-center items-center ' : 'grid w-full grid-cols-1 gap-8 sm:grid-cols-2 !justify-center !items-center']">
        <ParallaxBackground class="w-full h-full flex !justify-center !items-center" v-for="(image, index) in images" :key="index" :src="image"
          :alt="'service-' + index" />
      </div>
    </template>
  </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue'
import ParallaxBackground from '@/components/common/ParallaxBackground.vue';

interface ServicesList {
  title: string
  description: string | string[]
  list: string[] | string
  images: string[]
}

defineProps<{
  items: ServicesList[]
  title: string
  cta: string,
  ctaLink: string
}>()
</script>
