<template>
  <header class="fixed top-0 left-0 right-0 z-50 w-full p-4" @mouseleave="currentActive = null">
    <div class="w-full p-4 py-3 mx-auto bg-black rounded-md">
      <div class="flex items-center w-full max-w-[1350px] mx-auto">
        <router-link to="/" class="flex">
          <img src="@/assets/images/nav-bar/logo.svg" alt="logo" class="h-8" />
        </router-link>

        <ul class="flex items-center ml-12">
          <li
            v-for="link in NAVBAR_LINKS"
            :key="link.label"
            @mouseenter="currentActive = link.label"
          >
            <router-link
              :role="!link.sublinks ? 'button' : 'anchor'"
              :to="link.sublinks ? '#' : link.link"
              class="p-2 mx-1 text-sm text-white hover:opacity-80 whitespace-nowrap"
              >{{ link.label }}</router-link
            >
          </li>
        </ul>

        <div class="flex items-center ml-auto">
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95"
          >
            <img
              src="@/assets/images/nav-bar/right-arrow-outlined.svg"
              alt="right-arrow-outlined"
            />
            <span class="block ml-2 whitespace-nowrap">Client Portal</span>
          </button>
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95"
            @mouseenter="currentActive = 'languages'"
          >
            <img src="@/assets/images/nav-bar/globe.svg" alt="right-arrow-outlined" />
            <span class="block ml-2 whitespace-nowrap">Global | English</span>
          </button>
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95"
          >
            <img src="@/assets/images/nav-bar/search.svg" alt="right-arrow-outlined" />
          </button>
        </div>
      </div>
      <div
        v-if="currentActive && subMenuItems?.length"
        class="flex items-center w-full max-w-[1350px] mx-auto"
      >
        <ul class="flex items-start py-10 pb-4">
          <li v-for="link in subMenuItems" :key="link.label" class="mx-4">
            <h5 v-if="!link.link" class="block p-4 px-6 text-lg font-bold text-white max-w-[18rem]">
              {{ link.label }}
            </h5>
            <router-link
              v-else
              :to="link.link"
              active-class="bg-[#161616] border-[#4F4F4F]"
              class="block p-4 px-6 text-white transition-all border border-transparent rounded-lg"
              :class="[
                !link.link ? '' : 'hover:bg-[#161616] hover:border-[#4F4F4F] hover:opacity-80'
              ]"
            >
              <h5 class="mb-1 text-lg font-bold">{{ link.label }}</h5>
              <p class="">{{ link.sublabel }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const NAVBAR_LINKS = [
  {
    label: 'Solutions',
    sublinks: [
      {
        label: 'Testing Laboratory',
        sublabel:
          'State-of-the-art testing services designed to ensure product reliability and safety.',
        link: '/solutions/testing-laboratory'
      },
      {
        label: 'Factory Auditing',
        sublabel: 'Meticulous auditing services to ensure compliance, quality, and efficiency.',
        link: '/solutions/factory-auditing'
      },
      {
        label: 'Programming, Packaging &istics',
        sublabel:
          'Integrated solutions designed to optimize efficiency and ensure secure delivery.',
        link: '/solutions/programming-packaging-istics'
      },
      {
        label: 'Training & Education',
        sublabel: 'Comprehensive programs to enhance expertise and uphold industry standards.',
        link: '/solutions/training-education'
      }
    ]
  },
  {
    label: 'Case Studies',
    link: '/case-studies'
  },
  {
    label: 'About',
    sublinks: [
      {
        label: 'Who We Are',
        sublabel: 'Get to know us and why we’re the Global Guardians of Technological Integrity.',
        link: '/about/who-we-are'
      },
      {
        label: 'Why White Horse',
        sublabel:
          'Explore our Purpose, Values and the Promise we keep to our clients around the globe.',
        link: '/about/why-white-horse'
      },
      {
        label: 'Join Our Team',
        sublabel: 'Make an impact in ensuring the reliability and safety of electronics worldwide.',
        link: '/about/join-our-team'
      },
      {
        label: 'Our Locations',
        sublabel: 'Our mission transcends borders, from Cleveland to Bangalore.',
        link: '/about/our-locations'
      }
    ]
  },
  {
    label: 'Resources',
    sublinks: [
      {
        label: 'News & Insights',
        sublabel: 'Discover the latest company news and industry insights.',
        link: '/resources/news'
      },
      {
        label: 'Terminology',
        sublabel: 'In the spirit of transparency, learn all the industry termology here.',
        link: '/resources/terminology'
      },
      {
        label: 'Global Calendar',
        sublabel: "Streamline order planning with our global locations' updated hours here.",
        link: '/resources/global-calendar'
      },
      {
        label: 'Downloads',
        sublabel: 'Explore our free downloadable content for valuable insights and resources.',
        link: '/resources/downloads'
      }
    ]
  },
  {
    label: 'Contact',
    link: '/contact'
  }
]

const currentActive = ref<string | null>(null)
const subMenuItems = computed(() => {
  return {
    ...(NAVBAR_LINKS.filter((link) => link.sublinks).reduce((prev, link) => {
      // @ts-ignore
      prev[link.label] = link.sublinks
      return prev
    }, {}) as any),
    languages: [
      {
        label: 'Please select your region and language'
      },
      {
        label: 'Global',
        sublabel: '(English)',
        icon: '',
        link: '/global'
      },
      {
        label: 'Germany',
        sublabel: '(Deutsch)',
        icon: '',
        link: '/germany'
      },
      {
        label: 'China',
        sublabel: '(中文版)',
        icon: '',
        link: '/china'
      },
      {
        label: 'Singapore',
        sublabel: '(中文版)',
        icon: '',
        link: '/singapore'
      },
      {
        label: 'India',
        sublabel: '(हिन्दी)',
        icon: '',
        link: '/india'
      }
    ]
  }[currentActive.value as string]
})
</script>
