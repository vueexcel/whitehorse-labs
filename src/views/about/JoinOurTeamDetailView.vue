<template>
    <main>
        <EmptyHeaderSection :title="item.name">
            <ul class="uppercase ml-auto font-roboto-mono mt-4 text-sm text-white max-w-96">
                <li v-for="(info, index) in item.info" :key="index" class="mb-1.5">
                    <span>{{ info[0] }}: </span>&nbsp;&nbsp;<span class="text-white font-roboto">
                        {{ info[1] }}
                    </span>
                </li>
            </ul>
        </EmptyHeaderSection>
        <JoinOurTeamDetailContentSection />
        <JoinusSection />
        <FooterSection />
    </main>
</template>

<script setup lang="ts">
import EmptyHeaderSection from '@/components/pages/common/EmptyHeaderSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import JoinOurTeamDetailContentSection from '@/components/pages/about/JoinOurTeamDetailContentSection.vue';

const item = {
    name: 'Accountant',
    info: [
        ['Position', 'Accountant'],
        ['Department', 'General & Administration'],
        ['Location', 'Shenzhen'],
        ['Reports to', 'Accounting Supervisor']
    ]
}
</script>