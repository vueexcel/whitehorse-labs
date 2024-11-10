<template>
  <header v-if="!isMobile" class="fixed top-0 left-0 right-0 z-50 max-w-full p-4 transition-transform duration-500"
    :class="{ '-translate-y-full': !isNavbarVisible }" @mouseleave="currentActive = null">
    <div class="w-full px-4 sm:px-12 py-3 mx-auto bg-black rounded-md">
      <div class="flex items-center w-full mx-auto z-40">
        <div class="w-auto block">
          <router-link to="/" class="flex">
            <img src="@/assets/images/nav-bar/logo.svg" alt="logo" class="h-8 min-h-6" />
          </router-link>
        </div>

        <ul class="flex items-center ml-12">
          <li v-for="link in NavbarLinks" :key="link.label" @mouseenter="currentActive = link.label">
            <router-link :role="!link.sublinks ? 'button' : 'anchor'" :to="link.sublinks ? '' : link.link"
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
            <img src="@/assets/images/nav-bar/globe.svg" alt="globe" />
            <span class="ml-2 whitespace-nowrap hidden lg:block">Global | English</span>
          </button>
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95"
            @click="toggleSearchbar">
            <img v-if="!showSearchbar" src="@/assets/images/nav-bar/search.svg" alt="search" />
          </button>
          <div v-if="showSearchbar" class="relative">
            <div class="flex items-center gap-0.5">
              <input v-model="searchQuery" @keyup.enter="showSearchbar = false" @input="filterSuggestions"
                placeholder="Search"
                class="w-fit p-2 text-sm bg-transparent border-b-2 border-orange-300 text-white focus:outline-none" />
              <img :src="corssIcon" alt="cross" @click="toggleSearchbar" class="cursor-pointer" />
            </div>
            <ul v-if="searchSuggestions.length" class="absolute bg-white text-black w-full rounded shadow mt-1">
              <li v-for="suggestion in searchSuggestions" :key="suggestion.label">
                <router-link :to="suggestion.link" class="block px-4 py-2 hover:bg-gray-100" @click="closeSearch">
                  {{ suggestion.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex items-center w-full mx-auto z-30" v-if="currentActive"
        :style="{ height: subMenuItems.length ? '200px' : '0', transition: `height ${subMenuItems.length ? 250 : 50}ms ease` }">
        <ul class="flex items-start py-10 pb-4" v-show="showSubmenuItems.length">
          <li v-for="link in subMenuItems" :key="link.label" class="mx-4">
            <h5 v-if="!link.link" class="block p-4 px-6 text-lg font-bold text-white max-w-[18rem]">
              {{ link.label }}
            </h5>
            <router-link v-else :to="link.link" active-class="bg-[#161616] border-[#4F4F4F]"
              class="block p-4 px-6 text-white transition-all border border-transparent rounded-lg"
              :class="[!link.link ? '' : 'hover:bg-[#161616] hover:border-[#4F4F4F] hover:opacity-80']">
              <h5 class="mb-1 text-lg font-bold">{{ link.label }}</h5>
              <p class="">{{ link.sublabel }}</p>
            </router-link>
          </li>
        </ul>
        <div class="size-44"></div>

      </div>
    </div>
  </header>

  <header v-if="isMobile && !showMenu"
    class="fixed top-0 left-0 right-0 z-50 overflow-x-clip max-w-[100vw] p-4 transition-transform duration-500"
    :class="{ '-translate-y-full': !isNavbarVisible }" @mouseleave="currentActive = null">
    <div class="max-w-[100vw] flex px-4 sm:px-12 p-3 mx-auto bg-black rounded-md">
      <div class="w-fit block">
        <router-link to="/" class="flex">
          <img src="@/assets/images/common/mobileLogo.svg" alt="logo" class="h-8 min-h-6" />
        </router-link>
      </div>
      <div class="flex items-center ml-auto">
        <button @click="showMobileMenu"
          class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95">
          <img src="@/assets/icons/menu.svg" alt="menu" />
        </button>
      </div>
    </div>
  </header>

  <div v-if="showMenu"
    class="fixed top-0 left-0 right-0 z-40 max-w-[100vw] overflow-y-auto min-h-full bg-black bg-opacity-90 flex pt-32">
    <div class="text-white w-full">
      <div class="flex items-center">
        <img :src="corssIcon" alt="cross" @click="showMobileMenu"
          class="absolute top-6 right-7 text-white text-2xl cursor-pointer hover:opacity-75">
      </div>
      <ul class="px-4">
        <li v-for="link in NavbarLinks" :key="link.label" @click="toggleAccordion(link.label)">
          <div class="pb-3 flex justify-between items-center cursor-pointer">
            <router-link @click="!link.sublinks && (showMenu = false)" :role="!link.sublinks ? 'button' : 'anchor'"
              :to="link.sublinks ? '' : link.link" class="text-xl pl-2 w-full">
              {{ link.label }}
            </router-link>

            <img v-if="link.sublinks" :src="dropDownIcon" alt="dropdown" class="pr-2"
              :class="{ 'rotate-180 pl-2': isAccordionOpen(link.label) }">
          </div>
          <!-- @vue-ignore -->
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-if="isAccordionOpen(link.label)" class="overflow-hidden">
              <ul class="ml-4 py-1 rounded-md">
                <li v-for="subLink in getSubMenuItems(link.label)" :key="subLink.label"
                  class="px-4 py-2 hover:bg-gray-700 rounded-md" @click="showMenu = false">
                  <router-link :to="subLink.link" class="text-white block rounded">
                    <h5 class="mb-1 text-md font-bold">{{ subLink.label }}</h5>
                    <p class="text-sm text-gray-200">{{ subLink.sublabel }}</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </transition>


        </li>
      </ul>
      <div class="relative flex flex-col px-4 mt-4 ">
        <button class="flex items-center p-2 text-md text-white transition-all hover:opacity-75 active:scale-95">
          <img src="@/assets/images/nav-bar/right-arrow-outlined.svg" alt="right-arrow-outlined" />
          <span class="ml-2">Client Portal</span>
        </button>
        <button @click="toggleAccordion('languages')"
          class="flex items-center justify-between p-2 text-md text-white transition-all hover:opacity-75 active:scale-95 w-full">
          <div class="flex items-center">
            <img src="@/assets/images/nav-bar/globe.svg" alt="globe" />
            <span class="ml-2">Global | English</span>
          </div>
          <img :src="dropDownIcon" class="pl-2" :class="{ 'rotate-180': isAccordionOpen('languages') }"
            alt="dropdown" />
        </button>
        <!-- @vue-ignore -->
        <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div v-if="isAccordionOpen('languages')" class="pl-5 overflow-hidden">
            <ul class="rounded-md py-1">
              <li v-for="subLink in getSubMenuItems('languages')" :key="subLink.label"
                class="px-4 py-0.5 hover:bg-gray-700 rounded-md" @click="showMenu = false">
                <h5 class="mb-1 text-[13px] text-gray-200">{{ subLink.heading }}</h5>
                <router-link :to="subLink.link" class="text-white block rounded">
                  <div class="flex items-center">
                    <h5 class="text-md">{{ subLink.label }}</h5>
                    <p class="text-md">{{ subLink.sublabel }}</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </transition>

        <div class="relative flex flex-col">
          <button @click="toggleSearchbar" class="w-full">
            <div class="flex gap-2 items-center p-2 text-md text-white transition-all hover:opacity-75 active:scale-95">
              <img src="@/assets/images/nav-bar/search.svg" alt="search" /><span>Search</span>
            </div>
          </button>

          <div class="flex item-center" v-if="showSearchbar">
            <input v-model="searchQuery" @keyup.enter="closeSearch" @input="filterSuggestions" placeholder="Search"
              class="w-[85vw] mb-2 px-2 py-2 bg-transparent focus:outline-none border-b-2 border-orange-300 text-white">
            <img :src="corssIcon" alt="cross" @click="toggleSearchbar" class="cursor-pointer ml-2" />
          </div>

          <ul v-if="searchSuggestions.length && showSearchbar" class="bg-white text-black w-full rounded shadow mt-1 max-h-36  overflow-auto">
            <li v-for="suggestion in searchSuggestions" :key="suggestion.label">
              <router-link :to="suggestion.link" class="block px-4 py-2 hover:bg-gray-100" @click="closeSearch">
                {{ suggestion.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import NavbarLinks, { Languages as LanguagesLinks } from '@/constants/headerLinks.constants';
import { useDebounce } from '@/hooks/useDeboune';
import dropDownIcon from '@/assets/icons/dropdown.svg'
import corssIcon from '@/assets/icons/cross.svg'
import { useAnimateStore } from '@/store/useAnimateStore';

const currentActive = ref<string | null>(null);
const activeSubMenu = ref<string | null>(null);
const searchQuery = ref<string>('');
const searchSuggestions = ref<Array<{ label: string; link: string }>>([]);

const subMenuItems = computed(() => {
  return {
    ...(NavbarLinks.filter((link) => link.sublinks).reduce((prev, link) => {
      // @ts-ignore
      prev[link.label] = link.sublinks;
      return prev;
    }, {}) as any),
    languages: LanguagesLinks
  }[currentActive.value as string] || [];
});

const showSubmenuItems = useDebounce(subMenuItems, 150);

const isNavbarVisible = ref(true);
const lastScrollTop = ref(0);
const showMenu = ref(false);
const showSearchbar = ref(false);

const openedAccordion = ref<string | null>(null);

const isAccordionOpen = (label: string) => {
  return openedAccordion.value === label;
};

const toggleAccordion = (label: string) => {
  if (openedAccordion.value === label) {
    openedAccordion.value = null;
  } else {
    openedAccordion.value = label;
  }
};

const showMobileMenu = () => {
  showMenu.value = !showMenu.value;
};

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop.value && scrollTop > 100) {
    isNavbarVisible.value = false;
  } else {
    isNavbarVisible.value = true;
  }

  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 1024;
  if (!isMobile.value) {
    showMenu.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});

const isMobile = ref(window.innerWidth < 1024);
const store = useAnimateStore()

watch(isMobile, (newVal) => {
  if (!newVal) {
    showMenu.value = false;
  }
});

watch(showMenu, (newVal) => {
  if (newVal) {
    store.lenis.stop()
    document.body.style.overflow = 'hidden';
  } else {
    store.lenis.start()
    document.body.style.overflow = 'auto';
  }
});

const getSubMenuItems = (label: string) => {
  return {
    ...(NavbarLinks.filter((link) => link.sublinks).reduce((prev, link) => {
      // @ts-ignore
      prev[link.label] = link.sublinks;
      return prev;
    }, {}) as any),
    languages: LanguagesLinks
  }[label] || [];
};
function beforeEnter(el: HTMLElement) {
  el.style.height = '0';
}

function enter(el: HTMLElement) {
  el.style.transition = 'height 0.3s ease';
  el.style.height = `${el.scrollHeight}px`;
}

function leave(el: HTMLElement) {
  el.style.transition = 'height 0.3s ease';
  el.style.height = '0';
}

const toggleSearchbar = () => {
  showSearchbar.value = !showSearchbar.value;
  openedAccordion.value = null;
  if (!showSearchbar.value) searchQuery.value = '';
};
const closeSearch = () => {
  showSearchbar.value = false;
  searchSuggestions.value = [];
  searchQuery.value = '';
  showMenu.value = false;
};

const filterSuggestions = () => {
  const query = searchQuery.value.toLowerCase();

  if (query) {
    // @ts-ignore
    searchSuggestions.value = NavbarLinks.flatMap((link) => {
      const sublinks = link.sublinks || [];
      const allLinks = [{ label: link.label, link: link.link }].concat(sublinks);
      return allLinks.filter(({ label }) => label.toLowerCase().includes(query));
    });
  } else {
    searchSuggestions.value = [];
  }
};
</script>
