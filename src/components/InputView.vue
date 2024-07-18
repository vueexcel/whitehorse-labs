<template>
  <div class="relative flex items-center w-full border bg-[#161616] border-[#4F4F4F] rounded-md">
    <input
      v-model="value"
      :type="type"
      class="w-full h-full px-4 py-3.5 bg-transparent focus:outline-neutral-400"
      :required="required"
      ref="input"
    />
    <span
      @click="input?.focus()"
      v-if="!value && placeholder"
      class="absolute select-none flex items-center top-[50%] uppercase translate-y-[-50%] font-medium left-4 font-roboto text-xs text-[#828282]"
      >{{ placeholder
      }}<span v-if="required" class="text-[#FF544F] text-xl ml-1.5 mt-2">*</span></span
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  placeholder: string
  type: string
  required?: boolean
}>()

const value = defineModel<string>()
const input = ref<HTMLInputElement | null>(null)
</script>
