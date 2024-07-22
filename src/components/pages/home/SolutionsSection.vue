<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="block w-full py-16 mt-8 mb-12">
    <div class="relative flex items-start justify-center w-full px-12">
      <p
        class="absolute flex items-center mt-1 text-black uppercase left-12 w-max whitespace-nowrap"
      >
        <span class="block bg-[#FF544F] size-3"></span>
        <span class="ml-2 text-xs uppercase font-roboto">What We Do</span>
      </p>

      <div class="w-full max-w-[70%] ml-12">
        <h5 class="mb-12 text-3xl font-roboto">Our Solutions</h5>

        <div class="relative w-[90%] h-[36rem]">
          <div class="absolute top-0 left-0 w-full h-full rounded-lg">
            <div class="relative">
              <img
                src="../../../assets/images/home/about-1.png"
                alt="what-we-do"
                class="object-cover w-full h-full rounded-lg"
              />

              <div
                class="absolute top-0 left-0 flex flex-col justify-between w-full h-full p-10 px-20"
              >
                <span class="absolute text-xs text-white left-5 top-12">04</span>
                <h5 class="text-3xl text-white">Training & Education</h5>

                <div>
                  <p class="block text-lg text-white">
                    Comprehensive training and education programs to enhance your team's expertise
                    and uphold industry standards. Our tailored courses ensure that your personnel
                    are equipped with the latest knowledge and skills to maintain excellence in
                    quality assurance and supply chain management.
                  </p>
                  <BaseButton title="Learn More" class="mt-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex items-start justify-center w-full px-12 my-12">
      <p
        class="absolute flex items-center mt-1 text-black uppercase left-12 w-max whitespace-nowrap"
      >
        <span class="block bg-[#FF544F] size-3"></span>
        <span class="ml-2 text-xs uppercase font-roboto">Who we are</span>
      </p>

      <div class="w-full max-w-[70%] ml-12">
        <h5 class="mb-5 text-3xl font-roboto">About Us</h5>

        <div class="flex items-start">
          <p class="mb-8 font-sans text-[#828282] mr-4">
            White Horse Labs was established to create a world where electronics are always reliable
            and genuine, addressing counterfeit challenges at their source. As the pioneers in Asia,
            we developed innovative testing methods that set industry standards, ensuring
            electronics were tested with rigor, transparency, and integrity.
          </p>
          <p class="mb-8 font-sans text-[#828282] ml-4">
            Our services have expanded beyond counterfeit detection and component testing to a
            holistic approach to quality control. From a modest beginning to a global presence, we
            have remained committed to ensuring the integrity of the electronics supply chain,
            continually leading and innovating to keep the world's electronics trustworthy and
            reliable.
          </p>
        </div>

        <router-link
          to="/about"
          class="flex items-center text-sm text-black rounded-full hover:opacity-70"
        >
          Learn More About Us
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
    </div>

    <div class="relative flex items-start justify-center w-full px-12 mt-24">
      <p
        class="absolute flex items-center mt-1 text-black uppercase left-12 w-max whitespace-nowrap"
      >
        <span class="block bg-[#FF544F] size-3"></span>
        <span class="ml-2 text-xs uppercase font-roboto">Connected and Compliant</span>
      </p>

      <div class="flex items-center justify-between w-full pl-64">
        <router-link target="_blank" to="/">
          <img
            src="../../../assets/images/home/esd.png"
            alt="connected-and-compliant"
            class="h-24"
          />
        </router-link>
        <router-link target="_blank" to="/">
          <img
            src="../../../assets/images/home/ipc.png"
            alt="connected-and-compliant"
            class="h-16"
          />
        </router-link>
        <router-link target="_blank" to="/">
          <img
            src="../../../assets/images/home/anab.png"
            alt="connected-and-compliant"
            class="h-24"
          />
        </router-link>
        <router-link target="_blank" to="/">
          <img
            src="../../../assets/images/home/cogd.png"
            alt="connected-and-compliant"
            class="h-12"
          />
        </router-link>
        <router-link target="_blank" to="/">
          <img
            src="../../../assets/images/home/erai.png"
            alt="connected-and-compliant"
            class="h-24"
          />
        </router-link>
        <router-link target="_blank" to="/">
          <img
            src="../../../assets/images/home/tuv.png"
            alt="connected-and-compliant"
            class="h-24"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>
