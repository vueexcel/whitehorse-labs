<template>
  <section class="px-6 py-12 bg-black md:px-12 sm:pb-2" role="footer">
    <div class="border-t border-t-[#828282] w-full pt-8 md:pt-16 pb-1 flex flex-col sm:flex-row items-center sm:items-start">
      <router-link to="/" class="flex items-start justify-center h-auto mt-8 mb-20 sm:mt-0 sm:mb-0 sm:ml-5 w-36 sm:w-44 sm:justify-normal">
        <img :src="Logo" alt="logo" class="h-28 sm:h-24" />
      </router-link>
      <div class="w-full max-w-full md:max-w-6xl">
        <div class="grid w-full grid-cols-1 gap-8 mb-12 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          <div class="flex flex-col items-start w-full text-white font-roboto" v-for="menu in FooterLinks"
            :key="menu.title">
            <h6 class="mb-4 text-xl md:text-2xl font-roboto">{{ menu.title }}</h6>
            <router-link :to="`${menu.href}/${link.href}`" class="text-[#828282] text-sm mb-3"
              v-for="link in menu.links" :key="link.name">{{ link.name }}</router-link>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between w-full mt-10 mb-3 text-white sm:flex-row md:mt-20">
          <p class="text-[#828282] text-xs md:text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 White Horse Laboratories. All rights reserved : Website by <a href="http://www.wiseandhype.com/"
              class="text-red-500 hover:opacity-75" target="_blank"> Wise+Hype </a>
          </p>
          <div class="flex items-center">
            <a :href="socialLink.href" target="_blank" class="mx-2" :title="socialLink.title" v-for="socialLink in socialLinks"
              :key="socialLink.name">
              <component :is="socialLink.icon" class="size-5" path-class="fill-[#828282]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Logo from '@/assets/images/common/logo.svg'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'

import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import { enMenu, cnMenu, deMenu } from '@/constants/footerlinks.constants'

const language = ref('en')

const FooterLinks = computed(() => {
  switch (language.value) {
    case 'cn':
      return cnMenu;
    case 'de':
      return deMenu;
    default:
      return enMenu;
  }
});

const route = useRoute()

watch(
  () => route.path,
  (newPath) => {
    if (newPath.includes('/de')) {
      language.value = 'de';
    } else if (newPath.includes('/cn')) {
      language.value = 'cn';
    } else {
      language.value = 'en';
    }
  },
  { immediate: true }
)

const socialLinks = [
  { name: 'linkedin', href: 'https://www.linkedin.com/company/white-horse-laboratories/', title: 'linkedin', icon: LinkedinIcon },
  { name: 'facebook', href: 'https://www.facebook.com/whitehorselabs', title: 'facebook', icon: FacebookIcon },
  { name: 'youtube', href: 'https://www.youtube.com/channel/UCBpDbB3weRkpX-NF7HIyoFA', title: 'youtube', icon: YoutubeIcon },
  { name: 'instagram', href: 'https://www.instagram.com/whitehorselabs/', title: 'instagram', icon: InstagramIcon }
]
</script>
