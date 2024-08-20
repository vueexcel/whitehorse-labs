<template>
    <SectionHeader title="Contact Us" subtitle="Send us a message" class="pt-8 bg-white">
        <template #title v-if="$slots.title">
            <slot name="title"></slot>
        </template>
        <template #top>
            <p class="text-[#828282] font-roboto -translate-y-4">
                Have questions? Answers are just a message away.
                Complete the form below to contact our global headquarters.
            </p>
        </template>
        <template #topBottom>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.firstName" type="text"
                    required placeholder="First Name" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.lastName" type="text"
                    required placeholder="Last Name" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.jobTitle" type="text"
                    placeholder="Job Title" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.companyName" type="text"
                    placeholder="Company Name" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.email" type="email" required
                    placeholder="Email" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.phoneNumber" type="text"
                    placeholder="Phone Number" />
                <InputView class="bg-white border-[#828282] text-[#828282] md:col-span-2" v-model="values.message"
                    required type="textarea" placeholder="Message" />
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

            <BaseButton :disabled="disabled" type="submit" @click="handleSubmit" title="Submit" class="mt-5" />
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue'
import InputView from '@/components/common/InputView.vue'
import CheckboxInput from '@/components/common/CheckboxInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'

import { useContactForm } from '@/hooks/useContactForm'

const { values, disabled, handleSubmit } = useContactForm((values) => {
    const { email, interests, firstName, lastName, message } = values;

    return !!(firstName.trim() && lastName.trim() && email.trim() && message.trim()  && Object.values(interests).filter(value => value).length > 0);
})
</script>