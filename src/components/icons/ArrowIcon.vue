<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="svgStyle()"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      :class="pathClass"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: number
    className?: string
    pathClass?: string
    type: 'left' | 'right' | 'down' | 'up' | 'top-right'
  }>(),
  {
    size: 24,
    className: '',
    pathClass: '',
    type: 'left'
  }
)

const svgStyle = () => {
  const type = props.type
  const angle =
    type == 'right' ? 180 : type == 'down' ? 90 : type == 'up' ? -90 : type == 'top-right' ? -45 : 0

  return {
    transform: `rotate(${angle}deg)`
  }
}
</script>
