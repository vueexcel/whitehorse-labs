<template>
    <section class="sm:px-12 px-6 w-full sm:pt-28 pt-24">
        <img :src="NewsImage" alt="News Image" class="w-full max-w-4xl mx-auto aspect-video pointer-events-none">

        <h2 class="sm:mt-16 mt-10 text-3xl sm:text-4xl font-roboto max-w-2xl">
            Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories' Expansion in Europe
        </h2>
    </section>
    <SectionHeader subtitle="">
        <template #title>
            <span class="text-sm font-roboto-mono text-neutral-500">
                February 26th, 2024 <br /> Company news <br /> Munich</span>
        </template>

        <template #topBottom>
            <h5 class="text-2xl text-black sm:text-3xl font-roboto -translate-y-8 max-w-sm">
                Boeing needed help securing their supply chain
            </h5>

            <p class="text-[#828282] font-roboto max-w-5xl">
                Imagine a world where electronics are always what they claim to be—no substandard, no counterfeit. That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He established the company right at the source, tackling the counterfeit challenge head-on at its epicenter. But we weren’t just any company; we were the good guys, the white knights symbolized by our name and logo—a white horse emerging from the shadows, representing purity and safety. By leading with our values, we quickly rose to prominence in the fight against counterfeit electronics. We were the first of our kind in Asia, innovating testing methods that not only met but also helped define industry standards. It was akin to setting the rules of the game where none existed, ensuring electronics were tested with rigor, transparency, and integrity.
            </p>

            <h5 class="text-2xl text-black sm:text-3xl font-roboto mt-12 max-w-sm">
                White Horse Labs identified counterfeit parts
            </h5>

            <p class="text-[#828282] font-roboto max-w-5xl mt-4">
                Imagine a world where electronics are always what they claim to be—no substandard, no counterfeit. That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He established the company right at the source, tackling the counterfeit challenge head-on at its epicenter. But we weren’t just any company; we were the good guys, the white knights symbolized by our name and logo—a white horse emerging from the shadows, representing purity and safety. By leading with our values, we quickly rose to prominence in the fight against counterfeit electronics. We were the first of our kind in Asia, innovating testing methods that not only met but also helped define industry standards. It was akin to setting the rules of the game where none existed, ensuring electronics were tested with rigor, transparency, and integrity.
            </p>

            <h5 class="text-2xl text-black sm:text-3xl font-roboto mt-12 max-w-sm">
                Boeing was able to save billions of dollars
            </h5>

            <p class="text-[#828282] font-roboto max-w-5xl mt-4">
                Imagine a world where electronics are always what they claim to be—no substandard, no counterfeit. That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He established the company right at the source, tackling the counterfeit challenge head-on at its epicenter. But we weren’t just any company; we were the good guys, the white knights symbolized by our name and logo—a white horse emerging from the shadows, representing purity and safety. By leading with our values, we quickly rose to prominence in the fight against counterfeit electronics. We were the first of our kind in Asia, innovating testing methods that not only met but also helped define industry standards. It was akin to setting the rules of the game where none existed, ensuring electronics were tested with rigor, transparency, and integrity.
            </p>
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import NewsImage from '@/assets/images/resources/news-detail.png'
import SectionHeader from '@/components/layout/SectionHeader.vue';
</script>