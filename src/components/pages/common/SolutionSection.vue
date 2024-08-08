<template>
  <SectionHeader :title="title" subtitle="" class="pb-10 pt-12 bg-white" />
  <div class="h-screen w-full overflow-y-hidden relative" ref="container">
    <div class="h-full w-full overflow-y-auto solution-container pointer-events-none" ref="scrollContent">
      <template v-for="(item, index) in items" :key="item.title">
        <div class="w-full h-20 px-4 sm:px-12 sticky bg-white"
          :style="`top: ${index * 5}rem; bottom: ${(items.length - index - 1) * 5}rem; z-index: ${(items.length * 2) - index}`">
          <button type="button"
            class="flex justify-start items-center hover:bg-slate-50 w-full py-[1.8rem] border-t border-t-[#D8D8D8]">
            <span class="inline-block w-20 text-start font-roboto-mono sm:w-56">{{ addZero(index + 1) }}</span>
            <router-link :to="item.link" class="flex items-center font-normal font-roboto">
              <span>{{ item.title }}</span>
              <ArrowIcon type="top-right" path-class="stroke-[#FF544F]" class="ml-2 size-6" />
            </router-link>
          </button>
        </div>
        <div :class="`w-full sticky bg-no-repeat bg-center bg-cover`"
          :style="`top: ${(index + 1) * 5}rem; height: calc(100vh - ${5 * items.length}rem); background-image: url(${item.image});z-index:${index + 1}`">
          <p v-if="item.description" class="absolute left-0 max-w-lg p-4 text-white top-12 font-roboto sm:ml-64">{{ item.description }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/layout/SectionHeader.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';

gsap.registerPlugin(ScrollTrigger);

interface SolutionsList {
  title: string;
  link: string;
  image: string;
  description?: string;
}

export default {
  name: 'SolutionSection',
  components: {
    SectionHeader,
    ArrowIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array as () => SolutionsList[],
      required: true,
    },
  },
  methods: {
    addZero(n: number) {
      return n < 10 ? '0' + n : n;
    },
  },
  setup() {
    const container = ref<HTMLElement | null>(null);
    const scrollContent = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (container.value && scrollContent.value) {
        ScrollTrigger.create({
          trigger: container.value,
          start: 'top top',
          end: () => `+=${scrollContent.value!.scrollHeight}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            scrollContent.value!.scrollTop = self.progress * (scrollContent.value!.scrollHeight - scrollContent.value!.offsetHeight);
          },
        });
      }
    });

    return {
      container,
      scrollContent,
    };
  },
};
</script>

<style>
/* Hide the scrollbar for the container */
.solution-container::-webkit-scrollbar {
  display: none;
}

.solution-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
