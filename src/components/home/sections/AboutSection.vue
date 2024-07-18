<template>
  <section
    class="w-full h-screen relative flex items-center bg-[url('../assets/images/home/about-2.png')] bg-cover bg-no-repeat"
  >
    <div class="flex flex-col w-full p-6 px-12 max-w-[35rem] text-white justify-center">
      <h5 class="mb-5 text-4xl font-roboto">
        More than peace of mind.<br />
        It’s our promise to you.
      </h5>
      <p class="my-5 mt-4 text-lg font-roboto">
        We promise to safeguard the integrity of your electronics supply chain with unparalleled
        dedication and expertise. We commit to providing the highest standards of quality assurance
        through state-of-the-art testing, innovative counterfeit detection, and comprehensive
        failure analysis. Leading with transparency, rigor, and integrity, we ensure your products
        are reliable and safe, delivering peace of mind and trust in every transaction.
      </p>

      <router-link
        to="/about"
        class="flex items-center mt-6 text-white rounded-full hover:opacity-70"
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
  </section>
</template>
