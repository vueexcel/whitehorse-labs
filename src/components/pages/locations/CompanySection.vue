<template>
    <SectionHeader title="Certifications" subtitle="" class="pb-0 bg-white">
      <template #topBottom>
        <ul class="grid w-full grid-cols-2 gap-8 -translate-y-8 md:grid-cols-3 lg:grid-cols-6">
          <li
            v-for="{ link, image, name, class: cls } in COMPANYS"
            :key="link"
            class="flex items-center justify-center transition hover:opacity-80 flex-1"
          >
            <div class="flex items-center justify-center">
              <img :src="image" :alt="name" :class="cls" class="w-auto" />
            </div>
          </li>
        </ul>
      </template>
    </SectionHeader>
  </template>
  
  <script setup lang="ts">
  import SectionHeader from '@/components/layout/SectionHeader.vue'
  
  import Company1 from '@/assets/images/home/esd.svg'
  import Company2 from '@/assets/images/home/ipc.svg'
  import Company3 from '@/assets/images/home/anab.svg'
  import Company4 from '@/assets/images/home/cogd.svg'
  import Company5 from '@/assets/images/home/erai.svg'
  import Company6 from '@/assets/images/home/tuv.svg'
  
  const COMPANYS = [
    {
      link: '#',
      image: Company1,
      name: 'Esd',
      class: 'h-24'
    },
    {
      link: '#',
      image: Company2,
      name: 'Ipc',
      class: 'h-16'
    },
    {
      link: '#',
      image: Company6,
      name: 'Tuv',
      class: 'h-24'
    },
    {
      link: '#',
      image: Company4,
      name: 'Cogd',
      class: 'h-12'
    },
    {
      link: '#',
      image: Company5,
      name: 'Erai',
      class: 'h-24'
    },
    {
      link: '#',
      image: Company3,
      name: 'Anab',
      class: 'h-24'
    },
  ]
  </script>
  