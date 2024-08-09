<template>
    <section class="w-full h-auto relative px-6 sm:px-12" :style="{ backgroundImage: `url(${EarthImage})` }">
        <div class="w-full h-screen overflow-y-auto py-16">
            <ul class="w-full h-full">
                <li class="w-full border-t-[#979797] border-t"
                    v-for="({ title, subtitle, description }, index) in items" :key="index">
                    <div class="flex flex-col w-full sm:flex-row max-w-[40rem]">
                        <div class="w-auto mb-2 mr-8 md:w-64 sm:mb-0 py-3">
                            <RedTitle :title="index == 0 ? 'Our values' : `Value ${addzero(index + 1)}`"
                                class="sm:mt-2 text-white" />
                        </div>
                        <div class="flex flex-col w-full">
                            <span v-if="index != 0" class="text-xs font-roboto mb-4 mt-4 uppercase text-white">{{ title }}</span>
                            <h4 class="max-w-sm py-3 text-2xl text-white font-roboto sm:mt-0 text">
                                {{ subtitle }}
                            </h4>

                            <p class="text-white mt-4 font-roboto mb-5">{{ description }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import RedTitle from '@/components/common/RedTitle.vue';
import EarthImage from '@/assets/images/about/why-whl/earth.png'

defineProps<{
    items: {
        title: string,
        subtitle: string,
        description: string
    }[]
}>()

const addzero = (num: number) => {
    return num < 10 ? `0${num}` : num
}
</script>