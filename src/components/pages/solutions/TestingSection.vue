<template>
  <section class="w-full h-12 bg-white" />
  <section class="w-full px-6 pt-20 pb-32 text-white bg-black sm:px-12" v-bind="$attrs">
    <div class="flex flex-col items-center w-full md:flex-row">
      <div class="flex flex-col items-start w-full mb-20 mr-2 sm:w-auto sm:flex-row md:mb-0">
        <RedTitle title="Testing process" class="mt-2 sm:w-64" />
        <div class="block">
          <h4 class="max-w-sm mt-4 text-2xl text-white sm:text-4xl font-roboto sm:mt-0">
            How our testing process works
          </h4>
          <BaseButton title="Request a Sample Report" class="mt-8" />
        </div>
      </div>
      <div class="flex-1 ml-0 sm:max-w-lg sm:ml-32 md:ml-0 sm:block">
        <div class="block ml-auto max-w-[15rem] sm:max-w-[18rem] lg:max-w-[22rem]">
          <div
            class="bg-[#EEEEEE] rounded-full size-[15rem] sm:size-[18rem] lg:size-[22rem] flex items-center justify-center flex-col"
          >
            <span class="text-[#FF544F] font-roboto-mono">STEP 01</span>
            <span class="mt-4 text-2xl text-center text-black max-w-32 font-roboto"
              >Quotation & Test Plan</span
            >
          </div>
          <p class="mt-10 text-sm text-white border-t border-t-[#979797] pt-2">
            You’ll receive a quote from White Horse Laboratories as well as our comprehensive
            testing plan for your item.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import RedTitle from '@/components/common/RedTitle.vue'

const TESTING_LIST = [
  {
    title: 'Quotation & Test Plan',
    description: 'You’ll receive a quote from White Horse Laboratories as well as our comprehensive testing plan for your item.',
  },
  {
    title: 'Purchase Order',
    description: 'Step 2 : text here changes for each step… ',
  },
  {
    title: 'Delivery',
    description: 'Step 3 : text here changes for each step… ',
  },
  {
    title: 'Testing',
    description: 'Step 4 : text here changes for each step… '
  },
  {
    title: 'Reporting',
    description: 'Step 5 : text here changes for each step… '
  },
  {
    title: 'Product Acceptance',
    description: 'Step 5 : text here changes for each step… '
  },
  {
    title: 'Repackaging',
    description: 'Step 5 : text here changes for each step… '
  },
  {
    title: 'Final Shipment',
    description: 'Step 5 : text here changes for each step… '
  },
  {
    title: 'Buyer Receives Product',
    description: 'Step 5 : text here changes for each step… '
  },
]
</script>

I'm using Vuejs with gsap for animations. I want to add animation to this page. When the page comes into viewport, it should stop