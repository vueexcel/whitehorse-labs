<template>
    <header class="w-full p-12 sm:px-32 sticky top-0 -z-10 bg-[#666666] min-h-80 sm:min-h-96 flex items-end bg-center bg-no-repeat bg-cover"
        :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : ''">
        <h2 class="text-4xl text-white font-roboto">{{ title }}</h2>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    backgroundImage?: string
}>()
</script>