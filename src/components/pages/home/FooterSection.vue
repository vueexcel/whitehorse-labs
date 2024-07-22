<template>
  <section class="px-6 py-12 bg-black md:px-12 sm:pb-2" role="footer">
    <div
      class="border-t border-t-[#828282] w-full pt-8 md:pt-16 pb-1 flex flex-col sm:flex-row items-center sm:items-start"
    >
      <router-link
        to="/"
        class="flex items-start justify-center h-auto mt-8 mb-20 sm:mt-0 sm:mb-0 sm:ml-5 w-36 sm:w-44 sm:justify-normal"
      >
        <img src="../../../assets/images/logo.svg" alt="logo" class="h-28 sm:h-24" />
      </router-link>
      <div class="w-full max-w-full md:max-w-6xl">
        <div class="grid w-full grid-cols-1 gap-8 mb-12 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          <div
            class="flex flex-col items-start w-full text-white font-roboto"
            v-for="menu in footerMenuItems"
            :key="menu.title"
          >
            <h6 class="mb-4 text-xl md:text-2xl font-roboto">{{ menu.title }}</h6>
            <router-link
              :to="link.href"
              class="text-[#828282] text-sm mb-3"
              v-for="link in menu.links"
              :key="link.name"
              >{{ link.name }}</router-link
            >
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-between w-full mt-10 mb-3 text-white sm:flex-row md:mt-20"
        >
          <p class="text-[#828282] text-xs md:text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 White Horse Laboratories. All rights reserved.
          </p>
          <div class="flex items-center">
            <router-link
              :to="socialLink.href"
              class="mx-2"
              :title="socialLink.title"
              v-for="socialLink in socialLinks"
              :key="socialLink.name"
            >
              <component :is="socialLink.icon" class="size-5" path-class="fill-slate-400" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'

const footerMenuItems = [
  {
    title: 'Solutions',
    links: [
      { name: 'Testing Laboratory', href: '#' },
      { name: 'Factory Auditing', href: '#' },
      { name: 'Programming, Packaging & Logistics', href: '#' },
      { name: 'Training & Education', href: '#' }
    ]
  },
  {
    title: 'About',
    links: [
      { name: 'Who We Are', href: '#' },
      { name: 'Why White Horse Labs?', href: '#' },
      { name: 'Join Our Team', href: '#' },
      { name: 'Our Locations', href: '#' }
    ]
  },
  {
    title: 'Case Studies',
    links: [
      { name: 'Boeing', href: '#' },
      { name: 'Tesla', href: '#' },
      { name: 'General Motors', href: '#' },
      { name: 'NASA', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'News & Insights', href: '#' },
      { name: 'Terminology', href: '#' },
      { name: 'Global Calendar', href: '#' },
      { name: 'Free Downloads', href: '#' }
    ]
  }
]

const socialLinks = [
  { name: 'linkedin', href: '#', title: 'linkedin', icon: LinkedinIcon },
  { name: 'facebook', href: '#', title: 'facebook', icon: FacebookIcon },
  { name: 'youtube', href: '#', title: 'youtube', icon: YoutubeIcon },
  { name: 'instagram', href: '#', title: 'instagram', icon: InstagramIcon }
]
</script>
