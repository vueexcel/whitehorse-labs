<template>
  <section class="flex items-start w-full px-12 py-24 text-white bg-black font-roboto">
    <div class="flex items-center w-56 h-auto">
      <span class="block bg-[#FF544F] size-3"></span>
      <span class="ml-2 text-xs uppercase font-roboto">Join US</span>
    </div>
    <div class="w-full">
      <h5 class="text-5xl font-roboto">
        <span class="inline-block">Discover a world</span><br />
        <span
          class="inline-block mt-2 text-6xl italic font-normal font-roboto"
          style="font-family: Tiempos Headline"
          >where technology is <br />
          synonymous with trust</span
        >
      </h5>
      <p class="my-12 font-roboto">
        Fill out the form below to receive our newsletter, important updates, <br />
        and information about our services directly in your inbox.
      </p>

      <div class="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
        <InputView v-model="formValues.firstName" type="text" required placeholder="First Name" />
        <InputView v-model="formValues.lastName" type="text" required placeholder="Last Name" />
        <InputView v-model="formValues.jobTitle" type="text" placeholder="Job Title" />
        <InputView v-model="formValues.companyName" type="text" placeholder="Company Name" />
        <InputView v-model="formValues.email" type="text" placeholder="Email" required />
        <InputView v-model="formValues.phoneNumber" type="text" placeholder="Phone number" />
      </div>

      <p class="flex items-center mt-8">
        Please select your interests<span class="text-[#FF544F] text-xl ml-1.5 mt-2">*</span>
      </p>

      <div class="flex flex-wrap max-w-3xl mt-2">
        <CheckboxInput v-model="formValues.interests.companyNews" label="Company News" />
        <CheckboxInput
          v-model="formValues.interests.counterfeitDetection"
          label="Counterfeit Deterction"
        />
        <CheckboxInput v-model="formValues.interests.failureAnalysis" label="Failure Analysis" />
        <CheckboxInput v-model="formValues.interests.lifecycle" label="Lifecycle & Reliability" />
        <CheckboxInput v-model="formValues.interests.logistics" label="Logistics" />
        <CheckboxInput v-model="formValues.interests.programming" label="Programming" />
        <CheckboxInput v-model="formValues.interests.factoryAuditing" label="Factory Auditing" />
        <CheckboxInput v-model="formValues.interests.training" label="Training" />
      </div>

      <BaseButton title="Submit" class="mt-5" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import InputView from '@/components/InputView.vue'
import BaseButton from '@/components/BaseButton.vue'

const formValues = ref({
  firstName: '',
  lastName: '',
  jobTitle: '',
  companyName: '',
  email: '',
  phoneNumber: '',
  interests: {
    companyNews: false,
    newsletter: false,
    counterfeitDetection: false,
    failureAnalysis: false,
    lifecycle: false,
    logistics: false,
    programming: false,
    factoryAuditing: false,
    training: false
  }
})
</script>
