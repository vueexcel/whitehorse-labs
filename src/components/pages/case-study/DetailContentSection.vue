<template>
    <SectionHeader class="pb-4 bg-white" :title="item.title" :subtitle="item.subtitle" v-for="item in DUMMY_DATA" :key="item.title">
        <template #topBottom>
            <p>{{ item.description }}</p>
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue';

const DUMMY_DATA = [
    {
        title: 'The Challenge',
        subtitle: 'Boeing needed help securing their supply chain',
        description: 'Imagine a world where electronics are always what they claim to be—no substandard, no counterfeit. That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He established the company right at the source, tackling the counterfeit challenge head-on at its epicenter. But we weren’t just any company; we were the good guys, the white knights symbolized by our name and logo—a white horse emerging from the shadows, representing purity and safety. By leading with our values, we quickly rose to prominence in the fight against counterfeit electronics. We were the first of our kind in Asia, innovating testing methods that not only met but also helped define industry standards. It was akin to setting the rules of the game where none existed, ensuring electronics were tested with rigor, transparency, and integrity.'
    },
    {
        title: 'The Solution',
        subtitle: 'White Horse Labs identified counterfeit parts',
        description: 'Imagine a world where electronics are always what they claim to be—no substandard, no counterfeit. That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He established the company right at the source, tackling the counterfeit challenge head-on at its epicenter. But we weren’t just any company; we were the good guys, the white knights symbolized by our name and logo—a white horse emerging from the shadows, representing purity and safety. By leading with our values, we quickly rose to prominence in the fight against counterfeit electronics. We were the first of our kind in Asia, innovating testing methods that not only met but also helped define industry standards. It was akin to setting the rules of the game where none existed, ensuring electronics were tested with rigor, transparency, and integrity.'
    },
    {
        title: 'The Benefit',
        subtitle: 'Boeing was able to save billions of dollars',
        description: 'Imagine a world where electronics are always what they claim to be—no substandard, no counterfeit. That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He established the company right at the source, tackling the counterfeit challenge head-on at its epicenter. But we weren’t just any company; we were the good guys, the white knights symbolized by our name and logo—a white horse emerging from the shadows, representing purity and safety. By leading with our values, we quickly rose to prominence in the fight against counterfeit electronics. We were the first of our kind in Asia, innovating testing methods that not only met but also helped define industry standards. It was akin to setting the rules of the game where none existed, ensuring electronics were tested with rigor, transparency, and integrity.'
    }
]
</script>