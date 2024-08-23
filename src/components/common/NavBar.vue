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
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95">
            <img src="@/assets/images/nav-bar/search.svg" alt="search" />
          </button>
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
              class="block p-4 px-6 text-white transition-all border border-transparent rounded-lg" :class="[
                !link.link ? '' : 'hover:bg-[#161616] hover:border-[#4F4F4F] hover:opacity-80'
              ]">
              <h5 class="mb-1 text-lg font-bold">{{ link.label }}</h5>
              <p class="">{{ link.sublabel }}</p>
            </router-link>
          </li>
        </ul>
        <div class="size-44"></div>
      </div>
    </div>
  </header>

  <!-- Mobile Navbar -->
  <header v-if="isMobile && !showMenu"
    class="fixed top-0 left-0 right-0 z-50 overflow-x-clip max-w-[100vw] p-4 transition-transform duration-500"
    :class="{ '-translate-y-full': !isNavbarVisible }" @mouseleave="currentActive = null">
    <div class="max-w-[100vw] flex px-4 sm:px-12 py-3 mx-auto bg-black rounded-md">
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

  <!-- Mobile Menu Panel -->
  <div v-if="showMenu" 
    class="fixed top-0 left-0 right-0 z-40 max-w-[100vw] overflow-y-auto min-h-full  bg-black bg-opacity-90 flex justify-center pt-32">
    <div class="text-white">
      <div class="flex items-center">
        <button @click="showMobileMenu" class="absolute top-4 left-4 text-white text-2xl">
          &times;
        </button>
        <div class="absolute top-6 right-4 text-white">
          <button @click="toggleSearchbar">
            <img v-if="!showSearchbar" src="@/assets/images/nav-bar/search.svg" alt="search" />
          </button>
          <input @keyup.enter="showSearchbar = false" type="search" placeholder="Search" v-if="showSearchbar"
            class="w-[85vw] mb-2 px-2 py-2 bg-transparent focus:outl-400 items-center">
        </div>
      </div>
      <ul class="space-y-4 text-center">  
        <li v-for="link in NavbarLinks" :key="link.label" @mouseenter="toggleSubMenu(link.label)" 
          @mouseleave="activeSubMenu = null" class="h-full">
          <router-link  :role="!link.sublinks ? 'button' : 'anchor'" :to="link.sublinks ? '' : link.link"
            class="text-lg block py-2 px-4">
            {{ link.label }}
          </router-link>

          <ul v-if="activeSubMenu === link.label" class="bg-gray-800 rounded-md mt-2">
            <li v-for="subLink in getSubMenuItems(link.label)" :key="subLink.label" class="px-4 py-2 "  @click="showMenu = false">
              <router-link :to="subLink.link" class="text-white hover:bg-gray-700 block rounded">
                <h5 class="mb-1 text-lg font-bold">{{ subLink.label }}</h5>
                <p class="text-sm">{{ subLink.sublabel }}</p>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="relative flex flex-col px-4 mt-4 space-y-4 text-center " >
        <button
          class="flex items-center justify-center p-2 text-sm text-white transition-all hover:opacity-75 active:scale-95">
          <img src="@/assets/images/nav-bar/right-arrow-outlined.svg" alt="right-arrow-outlined" />
          <span class="ml-2">Client Portal</span>
        </button>
        <button 
          @click="toggleSubMenu('languages')" 
          class="flex items-center justify-center p-2 text-sm text-white transition-all hover:opacity-75 active:scale-95">
          <img src="@/assets/images/nav-bar/globe.svg" alt="globe" />
          <span class="ml-2" >Global | English</span>
        </button>

        <ul v-if="activeSubMenu === 'languages'" class="bg-gray-800 absolute left-[-100px] bottom-8 pb-5 rounded-md mt-2 w-max">
          <li v-for="subLink in getSubMenuItems('languages')" :key="subLink.label" class="px-4 py-2" @click="showMenu = false">
            <router-link :to="subLink.link" class="text-white hover:bg-gray-700 block rounded">
              <h5 class="mb-1 text-lg font-bold">{{ subLink.label }}</h5>
              <p class="text-sm">{{ subLink.sublabel }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>



<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import NavbarLinks, { Languages as LanguagesLinks } from '@/constants/headerLinks.constants';
import { useDebounce } from '@/hooks/useDeboune';
import { useAnimateStore } from '@/store/useAnimateStore';

const currentActive = ref<string | null>(null);
const activeSubMenu = ref<string | null>(null);

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

const toggleSearchbar = () => {
  showSearchbar.value = !showSearchbar.value;
};

const showMobileMenu = () => {
  showMenu.value = !showMenu.value;
};

const toggleSubMenu = (label: string) => {
  activeSubMenu.value = activeSubMenu.value === label ? null : label;
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
</script>
