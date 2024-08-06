<template>
  <section
    class="flex flex-col items-start w-full px-6 py-12 text-white bg-black md:flex-row md:px-12 md:py-24 font-roboto translate-y-[1px]">
    <RedTitle title="Join Us" class="mt-2 mb-8 md:mb-0 md:w-56" />
    <div class="w-full max-w-4xl">
      <h5 class="text-3xl md:text-5xl font-roboto">
        <span class="inline-block">Discover a world</span><br />
        <span class="inline-block mt-2 text-4xl italic font-normal md:text-6xl" style="font-family: 'Tiempos Headline'">
          where technology is <br />
          synonymous with trust
        </span>
      </h5>
      <p class="my-6 text-sm md:my-12 md:text-base">
        Fill out the form below to receive our newsletter, important updates,
        <br class="hidden md:block" />
        and information about our services directly in your inbox.
      </p>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputView v-model="values.firstName" type="text" required placeholder="First Name" />
        <InputView v-model="values.lastName" type="text" required placeholder="Last Name" />
        <InputView v-model="values.jobTitle" type="text" placeholder="Job Title" />
        <InputView v-model="values.companyName" type="text" placeholder="Company Name" />
        <InputView v-model="values.email" type="email" required placeholder="Email" />
        <InputView v-model="values.phoneNumber" type="text" placeholder="Phone Number" />
      </div>

      <p class="flex items-center mt-6 text-sm md:mt-8 md:text-base">
        Please select your interests
        <span class="text-[#FF544F] text-xl ml-1.5 mt-1">*</span>
      </p>

      <div class="flex flex-wrap max-w-4xl mt-2">
        <span></span>
        <CheckboxInput v-model="values.interests.companyNews" label="Company News" />
        <CheckboxInput v-model="values.interests.counterfeitDetection" label="Counterfeit Detection" />
        <CheckboxInput v-model="values.interests.failureAnalysis" label="Failure Analysis" />
        <CheckboxInput v-model="values.interests.lifecycle" label="Lifecycle & Reliability" />
        <CheckboxInput v-model="values.interests.logistics" label="Logistics" />
        <CheckboxInput v-model="values.interests.programming" label="Programming" />
        <CheckboxInput v-model="values.interests.factoryAuditing" label="Factory Auditing" />
        <CheckboxInput v-model="values.interests.training" label="Training" />
      </div>

      <BaseButton :disabled="disabled" @click="handleSubmit" title="Submit" class="mt-5" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CheckboxInput from '@/components/common/CheckboxInput.vue'
import InputView from '@/components/common/InputView.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import RedTitle from '@/components/common/RedTitle.vue'

import { useContactForm } from '@/hooks/useContactForm'

const { values, disabled, handleSubmit } = useContactForm((values) => {
  const { email, interests, firstName, lastName } = values;

  return !!(firstName.trim() && lastName.trim() && email.trim() && Object.values(interests).filter(value => value).length > 0);
})
</script>
