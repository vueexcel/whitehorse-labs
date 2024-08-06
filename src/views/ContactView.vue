<template>
    <EmptyHeaderSection title="Let’s Connect" />
    <FormSection />
    <LocationsSection />
    <JoinusSection />
    <FooterSection />
</template>

<script setup lang="ts">
import FormSection from '@/components/pages/contact/FormSection.vue';
import LocationsSection from '@/components/pages/contact/LocationsSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import EmptyHeaderSection from '@/components/pages/common/EmptyHeaderSection.vue';
</script>