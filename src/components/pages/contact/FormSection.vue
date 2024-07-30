<template>
    <SectionHeader title="Contact Us" subtitle="Send us a message" class="pt-6 my-2">
        <template #top>
            <p class="text-[#828282] font-roboto -translate-y-4">
                Have questions? Answers are just a message away.
                Complete the form below to contact our global headquarters.
            </p>
        </template>
        <template #topBottom>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="formValues.firstName" type="text" required
                    placeholder="First Name" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="formValues.lastName" type="text" required
                    placeholder="Last Name" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="formValues.jobTitle" type="text" placeholder="Job Title" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="formValues.companyName" type="text" placeholder="Company Name" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="formValues.email" type="email" required placeholder="Email" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="formValues.phoneNumber" type="text" placeholder="Phone Number" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="formValues.phoneNumber" required type="textarea" placeholder="Message" />
            </div>

            <p class="flex items-center mt-6 text-sm md:mt-8 md:text-base">
                Please select your interests
                <span class="text-[#FF544F] text-xl ml-1.5 mt-1">*</span>
            </p>

            <div class="flex flex-wrap max-w-4xl mt-2">
                <span></span>
                <CheckboxInput v-model="formValues.interests.companyNews" label="Company News" />
                <CheckboxInput v-model="formValues.interests.counterfeitDetection" label="Counterfeit Detection" />
                <CheckboxInput v-model="formValues.interests.failureAnalysis" label="Failure Analysis" />
                <CheckboxInput v-model="formValues.interests.lifecycle" label="Lifecycle & Reliability" />
                <CheckboxInput v-model="formValues.interests.logistics" label="Logistics" />
                <CheckboxInput v-model="formValues.interests.programming" label="Programming" />
                <CheckboxInput v-model="formValues.interests.factoryAuditing" label="Factory Auditing" />
                <CheckboxInput v-model="formValues.interests.training" label="Training" />
            </div>

            <BaseButton title="Submit" class="mt-5" />
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionHeader from '@/components/layout/SectionHeader.vue'
import InputView from '@/components/common/InputView.vue'
import CheckboxInput from '@/components/common/CheckboxInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'

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