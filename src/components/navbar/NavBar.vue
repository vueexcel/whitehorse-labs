<template>
  <header class="fixed top-0 left-0 right-0 z-50 w-full p-4 transition-transform duration-500"
    :class="{ '-translate-y-full': !isNavbarVisible }" @mouseleave="currentActive = null">
    <div class="w-full p-4 py-3 mx-auto bg-black rounded-md">
      <div class="flex items-center w-full max-w-[1350px] mx-auto">
       <div class="w-auto block">
          <router-link to="/" class="flex">
            <img src="@/assets/images/nav-bar/logo.svg" alt="logo" class="h-8 min-h-6" />
          </router-link>
       </div>

        <ul class="flex items-center ml-12">
          <li v-for="link in NAVBAR_LINKS" :key="link.label" @mouseenter="currentActive = link.label">
            <router-link :role="!link.sublinks ? 'button' : 'anchor'" :to="link.sublinks ? '#' : link.link"
              class="p-2 mx-1 text-sm text-white hover:opacity-80 whitespace-nowrap">
              {{ link.label }}
            </router-link>
          </li>
        </ul>

        <div class="flex items-center ml-auto">
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95">
            <img src="@/assets/images/nav-bar/right-arrow-outlined.svg" alt="right-arrow-outlined" />
            <span class="ml-2 whitespace-nowrap hidden lg:block">Client Portal</span>
          </button>
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95"
            @mouseenter="currentActive = 'languages'">
            <img src="@/assets/images/nav-bar/globe.svg" alt="right-arrow-outlined" />
            <span class="ml-2 whitespace-nowrap hidden lg:block">Global | English</span>
          </button>
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95">
            <img src="@/assets/images/nav-bar/search.svg" alt="right-arrow-outlined" />
          </button>
        </div>
      </div>
      <div v-if="currentActive && subMenuItems?.length" class="flex items-center w-full max-w-[1350px] mx-auto">
        <ul class="flex items-start py-10 pb-4">
          <li v-for="link in subMenuItems" :key="link.label" class="mx-4">
            <h5 v-if="!link.link" class="block p-4 px-6 text-lg font-bold text-white max-w-[18rem]">
              {{ link.label }}
            </h5>
            <router-link v-else :to="link.link" active-class="bg-[#161616] border-[#4F4F4F]"
              class="block p-4 px-6 text-white transition-all border border-transparent rounded-lg" :class="[
                !link.link ? '' : 'hover:bg-[#161616] hover:border-[#4F4F4F] hover:opacity-80'
              ]">
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import constants from '@/constants/routes.constants'

const {
  solutions,
  caseStudies,
  about,
  resources
} = constants

const NAVBAR_LINKS = [
  {
    label: 'Solutions',
    sublinks: [
      {
        label: 'Testing Laboratory',
        sublabel:
          'State-of-the-art testing services designed to ensure product reliability and safety.',
        link: `${solutions.path}/${solutions.testingLaboratory.path}`
      },
      {
        label: 'Factory Auditing',
        sublabel: 'Meticulous auditing services to ensure compliance, quality, and efficiency.',
        link: `${solutions.path}/${solutions.factoryAuditing.path}`
      },
      {
        label: 'Programming, Packaging &istics',
        sublabel:
          'Integrated solutions designed to optimize efficiency and ensure secure delivery.',
        link: `${solutions.path}/${solutions.programmingPackaging.path}`
      },
      {
        label: 'Training & Education',
        sublabel: 'Comprehensive programs to enhance expertise and uphold industry standards.',
        link: `${solutions.path}/${solutions.trainingEducation.path}`
      }
    ]
  },
  {
    label: 'Case Studies',
    link: caseStudies.path
  },
  {
    label: 'About',
    sublinks: [
      {
        label: 'Who We Are',
        sublabel: 'Get to know us and why we’re the Global Guardians of Technological Integrity.',
        link: `${about.path}/${about.whoWeAre.path}`
      },
      {
        label: 'Why White Horse',
        sublabel:
          'Explore our Purpose, Values and the Promise we keep to our clients around the globe.',
        link: `${about.path}/${about.whyWhiteHorseLabs.path}`
      },
      {
        label: 'Join Our Team',
        sublabel: 'Make an impact in ensuring the reliability and safety of electronics worldwide.',
        link: `${about.path}/${about.joinOurTeam.path}`
      },
      {
        label: 'Our Locations',
        sublabel: 'Our mission transcends borders, from Cleveland to Bangalore.',
        link: `${about.path}/${about.ourLocations.path}`
      }
    ]
  },
  {
    label: 'Resources',
    sublinks: [
      {
        label: 'News & Insights',
        sublabel: 'Discover the latest company news and industry insights.',
        link: `${resources.path}/${resources.newsInsight.path}`
      },
      {
        label: 'Terminology',
        sublabel: 'In the spirit of transparency, learn all the industry termology here.',
        link: `${resources.path}/${resources.terminology.path}`
      },
      {
        label: 'Global Calendar',
        sublabel: "Streamline order planning with our global locations' updated hours here.",
        link: `${resources.path}/${resources.globalCalendar.path}`
      },
      {
        label: 'Downloads',
        sublabel: 'Explore our free downloadable content for valuable insights and resources.',
        link: `${resources.path}/${resources.downloads.path}`
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
        link: '/global'
      },
      {
        label: 'Germany',
        sublabel: '(Deutsch)',
        link: '/germany'
      },
      {
        label: 'China',
        sublabel: '(中文版)',
        link: '/china'
      },
      {
        label: 'Singapore',
        sublabel: '(中文版)',
        link: '/singapore'
      },
      {
        label: 'India',
        sublabel: '(हिन्दी)',
        link: '/india'
      }
    ]
  }[currentActive.value as string]
})

const isNavbarVisible = ref(true);
const lastScrollTop = ref(0);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop.value && scrollTop > 100) {
    isNavbarVisible.value = false;
  } else {
    isNavbarVisible.value = true;
  }

  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>