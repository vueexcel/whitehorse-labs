<template>
  <button
    type="button"
    class="px-6 py-2 rounded-full bg-[#FF544F] font-roboto text-black font-medium text-sm flex items-center justify-center"
  >
    <slot>
      <span>{{ title }}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 13.484375 13.5"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-3"
      >
        <g id="Group-5">
          <path
            d="M0 0L12.4843 0L12.4843 12.5"
            id="Stroke-1"
            fill="none"
            fill-rule="evenodd"
            stroke="black"
            stroke-width="1"
          />
          <path
            d="M1.17367e-13 12.4999L12.4785 0.00415039"
            id="Stroke-3"
            fill="none"
            fill-rule="evenodd"
            stroke="black"
            stroke-width="1"
          />
        </g>
      </svg>
    </slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
