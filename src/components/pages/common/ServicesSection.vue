<template>
  <SectionHeader v-for="{ title: title1, description, list, link, images } in items" :key="title1" :title="title"
    :subtitle="title1" :cta="cta" :ctaLink="link" class="pb-8">
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

    <div :class="['w-full mt-5', images.length == 1 ? '' : 'grid w-full grid-cols-1 gap-8 sm:grid-cols-2']">
      <div class="w-full pointer-events-none" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'service-' + index" class="w-full object-cover" />
      </div>
    </div>
  </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue'

interface ServicesList {
  title: string
  description: string | string[]
  list: string[] | string
  link: string
  images: string[]
}

defineProps<{
  items: ServicesList[]
  title: string
  cta: string
}>()
</script>
