<template>
    <SectionHeader title="Our locations" subtitle="Global Reach with Local Expertise" class="text-black bg-white">
        <template #top>
            <p class="text-[#828282] font-roboto">
                White Horse Labs operates from key locations across Asia, Europe, and the Americas, ensuring seamless
                support for your global supply chain needs. Our headquarters in Hong Kong, with additional facilities in
                Shenzhen and the Futian Free Trade Zone, offer direct access to major testing labs and logistical hubs,
                saving you time and money.
            </p>
            <p class="text-[#828282] font-roboto">
                With offices and partners in Germany, the United States, and beyond, we combine global reach with local
                expertise. This strategic presence enables us to deliver the highest quality services and support,
                wherever you are. Trust White Horse Labs to be your reliable partner in maintaining the integrity and
                efficiency of your supply chain.
            </p>
        </template>

        <template #topBottom>
            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-28">
                <div class="w-full" v-for="(item, index) in DUMMY_DATA" :key="index">
                    <h6 class="mb-4 text-2xl font-roboto font-normal">{{ item.location }}</h6>
                    <p class="text-[#828282] font-roboto text-sm max-w-sm">{{ item.address }}</p>
                    <p class="text-[#828282] font-roboto text-sm">{{ item.phone }}</p>
                    <router-link to="" target="_blank"
                        class="text-[#828282] hover:opacity-75 font-roboto text-sm block my-3">{{ item.email
                        }}</router-link>
                    <router-link to="" target="_blank"
                        class="text-[#828282] hover:opacity-75 font-roboto text-sm block my-3 underline">{{ item.website
                        }}</router-link>
                </div>
            </div>

            <img :src="WorldMapImage" alt="world-map" class="w-full mt-0 sm:mt-20 max-w-5xl mb-12 sm:mb-32" />
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue'

import WorldMapImage from '@/assets/images/contact/world-map.png'

const DUMMY_DATA = [
    {
        location: 'USA',
        address: '29260 Clemens Rd Suite B, Westlake, OH 44145, United States',
        phone: '+1 833-856-2360',
        email: 'Email',
        website: 'Visit website'
    },
    {
        location: 'Shenzhen',
        address: '4A Technology Building H, Heping East Road, Gang Zhi Long Science Park, Qinghu, Longhua District, Shenzhen, CN',
        phone: '+86 755 668 6688',
        email: 'Email',
        website: 'Visit website'
    },
    {
        location: 'Singapore',
        address: '10 Genting Lane, #05-00 Jay Gee Melwani House, Singapore 349583',
        phone: '+65 6539 9658',
        email: 'Email',
        website: 'Visit website'
    },
    {
        location: 'Munich',
        address: 'Lindberghstraße 12, 82178 Puchheim, Germany',
        phone: '+49 89 541 973 12',
        email: 'Email',
        website: 'Visit website'
    },
    {
        location: 'Hong Kong',
        address: '220-248 Texaco Road, Suite 905, Hong Kong, Tsuen Wan 00000, HK',
        phone: '+852 6539 9658',
        email: 'Email',
        website: 'Visit website'
    },
    {
        location: 'Bangalore',
        address: '4A Technology Building H, Heping East Road, Gang Zhi Long Science Park, Qinghu, Longhua District, Shenzhen, CN',
        phone: '+86 755 668 6688',
        email: 'Email',
        website: 'Visit website'
    }
]
</script>