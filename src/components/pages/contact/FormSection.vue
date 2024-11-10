<template>
    <SectionHeader :title="formText.title" :subtitle="formText.subtitle" class="pt-8 bg-white">
        <template #top>
            <p class="text-[#828282] font-roboto -translate-y-4">
                {{ formText.description }}
            </p>
        </template>
        <template #topBottom>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.firstName" type="text"
                    required :placeholder="formText.firstName" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.lastName" type="text"
                    required :placeholder="formText.lastName" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.jobTitle" type="text"
                    :placeholder="formText.jobTitle" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.companyName" type="text"
                    :placeholder="formText.companyName" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.email" type="email" required
                    :placeholder="formText.email" />
                <InputView class="bg-white border-[#828282] text-[#828282]" v-model="values.phoneNumber" type="text"
                    :placeholder="formText.phoneNumber" />
                <InputView class="bg-white border-[#828282] text-[#828282] md:col-span-2" v-model="values.message"
                    required type="textarea" :placeholder="formText.message" />
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

            <BaseButton :disabled="disabled" type="submit" @click="handleSubmit" :title="formText.submitButton" class="mt-5" />
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import { ref, computed , watch} from 'vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import InputView from '@/components/common/InputView.vue'
import { useRoute } from 'vue-router'
import CheckboxInput from '@/components/common/CheckboxInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { FORM_TEXT } from '@/constants/formsjoinus.constants'
import { useContactForm } from '@/hooks/useContactForm'

const route = useRoute();
const language = ref('en'); 
// @ts-ignore
const formText = computed(() => FORM_TEXT[language.value]);

const { values, disabled, handleSubmit } = useContactForm((values) => {
    const { email, interests, firstName, lastName, message } = values;
    return !!(firstName.trim() && lastName.trim() && email.trim() && message.trim() && Object.values(interests).some(v => v));
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
</script>
