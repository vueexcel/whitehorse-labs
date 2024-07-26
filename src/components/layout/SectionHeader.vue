<template>
  <section class="relative w-full px-6 py-16 sm:px-12">
    <div class="flex flex-col w-full sm:flex-row">
      <div class="w-auto mb-2 mr-8 md:w-64 sm:mb-0">
        <RedTitle :title="title!" :text-class="textClass" class="sm:mt-2" />
      </div>
      <div class="flex flex-col w-full">
        <div class="flex flex-col items-start w-full mb-8 lg:flex-row max-h-max">
          <h4
            class="max-w-sm mt-4 text-2xl text-black sm:text-3xl font-roboto sm:mt-0"
            :class="textClass"
          >
            {{ subtitle }}
          </h4>
          <slot name="cta">
            <router-link
              v-if="cta"
              class="flex items-center mt-4 ml-auto text-xs uppercase sm:ml-0 sm:mb-2 lg:mt-0 lg:ml-auto hover:opacity-70 font-roboto"
              :class="textClass"
              :to="ctaLink!"
            >
              {{ cta }}
              <ArrowIcon :path-class="'stroke-[#FF544F]'" class="ml-1" type="top-right" />
            </router-link>
          </slot>
        </div>
        <div class="max-w-full sm:max-w-5xl" v-if="$slots.top || $slots.topBottom">
          <div
            class="grid w-full grid-cols-1 gap-10 mt-2 mb-8 sm:gap-4 md:grid-cols-2"
            v-if="$slots.top"
          >
            <slot name="top"></slot>
          </div>
          <slot name="topBottom"></slot>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full" v-if="$slots.default">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import RedTitle from '@/components/common/RedTitle.vue'

defineProps<{
  title?: string
  cta?: string
  ctaLink?: string
  subtitle: string
  textClass?: string
}>()
</script>
