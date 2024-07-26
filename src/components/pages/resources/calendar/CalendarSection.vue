<template>
  <section class="w-full max-w-6xl px-6 mx-auto my-24">
    <iframe
      :src="calendarUrl"
      style="border: 0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </section>
</template>

<script setup lang="ts">
const calendarUrl =
  'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
</script>
