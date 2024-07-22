<template>
  <section class="w-full px-12 mb-24">
    <div class="flex items-start w-full">
      <div class="flex items-center h-auto mt-1 w-52">
        <span class="block bg-[#FF544F] size-3"></span>
        <span class="ml-2 text-xs uppercase font-roboto">The Latest</span>
      </div>

      <h5 class="text-4xl text-black font-roboto">News & Insights</h5>

      <router-link
        to="/about"
        class="flex items-center mt-1 ml-auto text-xs uppercase rounded-full hover:opacity-70"
      >
        View All News and Insights
        <svg
          width="12"
          height="12"
          viewBox="0 0 13.484375 13.5"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-[2px] ml-3"
        >
          <g id="Group-5">
            <path
              d="M0 0L12.4843 0L12.4843 12.5"
              id="Stroke-1"
              fill="none"
              fill-rule="evenodd"
              stroke="#FF544F"
              stroke-width="1"
            />
            <path
              d="M1.17367e-13 12.4999L12.4785 0.00415039"
              id="Stroke-3"
              fill="none"
              fill-rule="evenodd"
              stroke="#FF544F"
              stroke-width="1"
            />
          </g>
        </svg>
      </router-link>
    </div>

    <div class="grid items-start w-full grid-cols-3 gap-6 mt-10">
      <router-link to="/">
        <img
          class="w-full h-auto pointer-events-none"
          src="../../../assets/images/home/news-1.png"
        />
        <h5 class="mt-3 text-black font-roboto">
          Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories'
          Expansion in Europe
        </h5>
      </router-link>
      <router-link to="/">
        <img
          class="w-full h-auto pointer-events-none"
          src="../../../assets/images/home/news-2.png"
        />
        <h5 class="mt-3 text-black font-roboto">
          Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories'
          Expansion in Europe
        </h5>
      </router-link>
      <router-link to="/">
        <img
          class="w-full h-auto pointer-events-none"
          src="../../../assets/images/home/news-3.png"
        />
        <h5 class="mt-3 text-black font-roboto">
          Thomas Mayr Appointed as New Sales Director to Spearhead White Horse Laboratories'
          Expansion in Europe
        </h5>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
