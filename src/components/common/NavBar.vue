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
            <img src="@/assets/images/nav-bar/globe.svg" alt="right-arrow-outlined" />
            <span class="ml-2 whitespace-nowrap hidden lg:block">Global | English</span>
          </button>
          <button
            class="flex items-center justify-center p-2 mx-1 text-sm text-white transition-all hover:opacity-75 active:scale-95">
            <img src="@/assets/images/nav-bar/search.svg" alt="right-arrow-outlined" />
          </button>
        </div>
      </div>
      <transition name="fade" mode="out-in">
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
      </transition>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import NavbarLinks, { Languages as LanguagesLinks } from '@/constants/headerLinks.constants'

const currentActive = ref<string | null>(null)
const subMenuItems = computed(() => {
  return {
    ...(NavbarLinks.filter((link) => link.sublinks).reduce((prev, link) => {
      // @ts-ignore
      prev[link.label] = link.sublinks
      return prev
    }, {}) as any),
    languages: LanguagesLinks
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  max-height: 0;
  overflow: hidden;
}
</style>
