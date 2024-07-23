<template>
  <section class="w-full px-4 md:px-12">
    <!-- Wrapping the table in a div with overflow-x-auto for responsiveness -->
    <div class="overflow-x-auto">
      <table class="w-full mt-8 mb-8 md:mt-12 md:mb-32">
        <thead>
          <tr class="border-b border-[#D8D8D8]">
            <th
              class="p-2 px-4 text-xs uppercase sm:pl-12 md:pl-20 md:text-sm lg:text-base font-roboto-mono text-start"
            >
              Cover
            </th>
            <th
              class="p-2 px-4 text-xs uppercase md:text-sm lg:text-base font-roboto-mono text-start"
            >
              Description
            </th>
            <th
              class="p-2 px-4 text-xs uppercase sm:pr-12 md:pr-20 md:text-sm lg:text-base font-roboto-mono text-start"
            >
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b last:border-0 border-[#D8D8D8]"
            v-for="(item, index) in tableData"
            :key="index"
          >
            <td class="p-2 py-4 align-top">
              <img
                :src="item.cover"
                alt="images"
                class="w-full mx-auto max-w-32 md:max-w-24 lg:max-w-32"
              />
            </td>
            <td class="p-2 py-4 text-sm align-top md:text-base lg:text-lg">
              <span class="block truncate max-w-[20rem] md:max-w-[26rem]">{{ item.title }}</span>
              <p
                class="text-[#828282] text-xs md:text-sm lg:text-base mt-1 max-w-[20rem] md:max-w-[26rem]"
              >
                {{ item.description }}
              </p>
            </td>
            <td class="p-2 py-4 align-top">
              <router-link
                to="/"
                class="text-sm underline md:text-base hover:opacity-75 decoration-slate-800"
              >
                Downloads
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import Image1 from '@/assets/images/downloads/bulk.png'

const tableData = [
  {
    title: 'Free Guide to Spotting Counterfeit Electronics',
    description:
      'Some text describing the free download and why it’s important for you to download it.',
    cover: Image1
  },
  {
    title: 'Free Guide to Spotting Counterfeit Electronics',
    description:
      'Some text describing the free download and why it’s important for you to download it.',
    cover: Image1
  },
  {
    title: 'Free Guide to Spotting Counterfeit Electronics',
    description:
      'Some text describing the free download and why it’s important for you to download it.',
    cover: Image1
  },
  {
    title: 'Free Guide to Spotting Counterfeit Electronics',
    description:
      'Some text describing the free download and why it’s important for you to download it.',
    cover: Image1
  }
]
</script>
