<template>
  <header>
    <div class="bg-black absolute top-4 inset-x-3 rounded-lg text-white">
      <div class="w-4/5 mx-auto py-4">
        <div class="flex items-center">
          <div class="logo-image">
            <img src="@/assets/images/nav-bar/logo.svg" alt="logo" />
          </div>
          <div class="flex justify-between w-full text-[#D5D5D5]">
            <div class="flex gap-4 mx-12">
              <div v-for="item in navItems" :key="item.lable">
                <button @click="handleNavItemClick(item)" :class="item.active ? 'text-white' : ''">
                  {{ item.lable }}
                </button>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div class="flex items-center gap-2">
                <img
                  class="h-[14px] w-[14px]"
                  src="@/assets/images/nav-bar/right-arrow-outlined.svg"
                  alt="right-arrow-outlined"
                />
                <span>Client portal</span>
              </div>
              <div class="flex items-center gap-2">
                <img
                  class="h-[14px] w-[14px]"
                  src="@/assets/images/nav-bar/globe.svg"
                  alt="right-arrow-outlined"
                />
                <span>Global | English</span>
              </div>
              <div clas="search-icon">
                <img src="@/assets/images/nav-bar/search.svg" alt="search-icon" />
              </div>
            </div>
          </div>
        </div>
        <component :is="selectedCategory" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, defineAsyncComponent } from 'vue'
const activeNavItem = ref(null)
const navItems = ref([
  {
    lable: 'Solutions',
    active: false
  },
  {
    lable: 'Case Studies',
    active: false
  },
  {
    lable: 'About',
    active: false
  },
  {
    lable: 'Resources',
    active: false
  },
  {
    lable: 'Contact',
    active: false
  }
])

const selectedCategory = computed(() => {
  return defineAsyncComponent(() => import('@/components/navbar/Solution.vue'))
})

const handleNavItemClick = (item) => {
  navItems.value.map((nav) => (nav.active = false))
  item.active = true
  activeNavItem.value = item.lable
}
</script>
