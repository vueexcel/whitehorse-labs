<template>
  <section
    class="relative flex flex-col items-start w-full px-6 py-12 text-white bg-black md:flex-row md:px-12 md:py-24 font-roboto translate-y-[1px]">
    <RedTitle :title="formText.joinUs" class="mt-2 mb-8 md:mb-0 md:w-56" />
    <div class="w-full max-w-4xl">
      <h5 class="text-3xl md:text-5xl font-roboto">
        <span class="inline-block">{{ formText.headline1 }}</span><br />
        <span class="inline-block mt-2 text-4xl italic font-normal md:text-6xl" style="font-family: 'Tiempos Headline'">
          {{ formText.headline2 }}<br/>{{ formText.headline3 }}
        </span>
      </h5>
      <p class="my-6 text-sm md:my-12 md:text-base">
        {{ formText.subHeadline[0] }}
        <br class="hidden md:block" />
        {{ formText.subHeadline[1] }}
      </p>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputView v-model="values.firstName" type="text" required :placeholder="formText.firstName" />
        <InputView v-model="values.lastName" type="text" required :placeholder="formText.lastName" />
        <InputView v-model="values.jobTitle" type="text" :placeholder="formText.jobTitle" />
        <InputView v-model="values.companyName" type="text" :placeholder="formText.companyName" />
        <InputView v-model="values.email" type="email" required :placeholder="formText.email" />
        <InputView v-model="values.phoneNumber" type="text" :placeholder="formText.phoneNumber" />
      </div>

      <p class="flex items-center mt-6 text-sm md:mt-8 md:text-base">
        {{ formText.interestsLabel }}
        <span class="text-[#FF544F] text-xl ml-1.5 mt-1">*</span>
      </p>

      <div class="flex flex-wrap max-w-4xl mt-2">
        <CheckboxInput v-model="values.interests.companyNews" :label="formText.interests.companyNews" />
        <CheckboxInput v-model="values.interests.counterfeitDetection" :label="formText.interests.counterfeitDetection" />
        <CheckboxInput v-model="values.interests.failureAnalysis" :label="formText.interests.failureAnalysis" />
        <CheckboxInput v-model="values.interests.lifecycle" :label="formText.interests.lifecycle" />
        <CheckboxInput v-model="values.interests.logistics" :label="formText.interests.logistics" />
        <CheckboxInput v-model="values.interests.programming" :label="formText.interests.programming" />
        <CheckboxInput v-model="values.interests.factoryAuditing" :label="formText.interests.factoryAuditing" />
        <CheckboxInput v-model="values.interests.training" :label="formText.interests.training" />
      </div>

      <BaseButton :disabled="disabled" @click="handleSubmit" :title="formText.submitButton" class="mt-5" />
    </div>

    <div class="w-full h-[2px] bg-black absolute top-[-1px] left-0"></div>
  </section>
</template>

<script setup lang="ts">
import CheckboxInput from '@/components/common/CheckboxInput.vue'
import InputView from '@/components/common/InputView.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import RedTitle from '@/components/common/RedTitle.vue'
import { useRoute } from 'vue-router'

import { sendEmail } from '@/services/emailService'
import ToastService from '@/services/toastService'

const toast = ToastService();

const route = useRoute()

import { FORM_TEXT } from '@/constants/formsjoinus.constants'
import { useContactForm } from '@/hooks/useContactForm'
import { ref, computed, watch } from 'vue'

const language = ref('en');
// @ts-ignore
const formText = computed(() => FORM_TEXT[language.value]);

const { values, disabled  , resetForm } = useContactForm((values) => {
  const { email, interests, firstName, lastName } = values;
  return !!(firstName.trim() && lastName.trim() && email.trim() && Object.values(interests).some(v => v));
});

watch(
    () => route.path,
    (newPath) => {
        if (newPath.includes('/de')) {
            language.value = 'de';
        } else if (newPath.includes('/cn')) {
            language.value = 'cn';
        } else {
            language.value = 'en';
        }
    },
    { immediate: true }
);

const handleSubmit = async () => {
    console.log("clicled submit")
    const emailData = {
        from_name: values.value.firstName,
        firstName: values.value.firstName,
        lastName: values.value.lastName,
        jobTitle : values.value.jobTitle,
        companyName: values.value.companyName,
        email: values.value.email,
        phoneNumber: values.value.phoneNumber,
        message: values.value.message,
    };

    const selectedInterests = Object.keys(values.value.interests)
    // @ts-ignore
        .filter((key) => values.value.interests[key])
        .map((key) => key.replace(/([A-Z])/g, ' $1').toUpperCase())
        .join(', '); 
        //@ts-ignore
        emailData.selectedInterests = selectedInterests || 'None selected';

    console.log(emailData)
    const result = await sendEmail(emailData);
    console.log(result)
    if (result.success) {
      toast.success('Thanks for contacting us. We\'ll be in touch soon.');
        resetForm();
    } else {
      toast.error('There was an error sending your message. Please try again.');
    }
};

</script>
