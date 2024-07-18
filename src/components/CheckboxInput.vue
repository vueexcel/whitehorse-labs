<template>
  <div class="relative flex items-center mb-3 mr-5">
    <input
      v-model="checked"
      type="checkbox"
      class="appearance-none bg-transparent w-4 h-4 border-2 border-[#4F4F4F] rounded-sm checked:bg-[#FF544F] focus:outline-neutral-400"
      :required="required"
      ref="checkbox"
      :id="'checkbox' + randomId"
    />
    <label
      :for="'checkbox' + randomId"
      class="ml-3 uppercase select-none flex items-center font-roboto text-sm text-[#828282]"
      style="font-family: 'Roboto Mono', monospace"
    >
      {{ label }}<span v-if="required" class="text-[#FF544F] text-xl ml-1.5">*</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const randomId = Math.random().toString(36).slice(2)

defineProps<{
  label: string
  required?: boolean
}>()

const checked = defineModel<boolean>()
const checkbox = ref<HTMLInputElement | null>(null)
</script>
