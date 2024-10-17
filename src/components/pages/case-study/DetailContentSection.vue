<template>
    <SectionHeader class="pb-4 bg-white" :title="item.title" :subtitle="item.subtitle" v-for="item in filteredData"
        :key="item.title">
        <template #topBottom>
            <p>{{ item.description }}</p>
        </template>

        <template v-if="item.images1 && item.images1.length" #DuoImage>
            <div class="grid grid-cols-1 mt-20  lg:grid-cols-2 gap-4 max-w-4xl">
                <img v-for="(img, index) in item.images1" :key="index" :src="img" alt=""
                    class="object-cover w-full h-auto" />
            </div>
        </template>

        <template v-if="item.images && item.images.length" #MultipleImage>
            <div class="grid grid-cols-1 mt-20   gap-4 max-w-4xl"
                :class="item.images.length == 2 ? 'grid-cols-1 gap-14' : 'lg:grid-cols-2'">
                <img v-for="(img, index) in item.images" :key="index" :src="img" alt=""
                    class="object-cover w-full h-auto">
            </div>
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/layout/SectionHeader.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import caseStudySolution1 from '@/assets/images/common/case-study/case-study-solution-1a.png'
import caseStudySolution2 from '@/assets/images/common/case-study/case-study-solution-1b.png'
import caseStudySolution3 from '@/assets/images/common/case-study/case-study-solution-1c.png'
import caseStudySolution4 from '@/assets/images/common/case-study/case-study-solution-1d.png'

import caseStudySolution5 from '@/assets/images/common/case-study/case-study-solution-2a.png'
import caseStudySolution6 from '@/assets/images/common/case-study/case-study-solution-2b.png'

import caseStudySolution7 from '@/assets/images/common/case-study/case-study-solution-3a.png'
import caseStudySolution8 from '@/assets/images/common/case-study/case-study-solution-3b.png'
import caseStudySolution9 from '@/assets/images/common/case-study/case-study-solution-3c.png'
import caseStudySolution10 from '@/assets/images/common/case-study/case-study-solution-3d.png'

const route = useRoute();

const DUMMY_DATA = [
    {
        id: 1,
        title: 'The Challenge',
        subtitle: 'Faulty ICs Threaten Production Quality and Customer Trust',
        description: 'A special equipment manufacturing company encountered a serious issue when a batch of power switch ICs failed to perform as expected, causing multiple circuit boards to malfunction during testing. With their production line at risk and potential delivery delays looming, the company sought White Horse Lab\'s expertise to investigate the problem and avoid larger losses.'
    },
    {
        id: 1,
        title: 'The Solution',
        subtitle: 'Comprehensive Testing Reveals Counterfeit Components',
        description: 'White Horse Labs launched a thorough investigation, starting with External Visual Inspection (EVI) to identify surface-level anomalies, followed by X-ray analysis to examine internal structures. After conducting decapsulation and die analysis, we discovered that the ICs were not only used and remarked, but some didn\'t contain a functional die at all—confirming they were counterfeit.',
        images: [caseStudySolution1, caseStudySolution2, caseStudySolution3, caseStudySolution4],
    },
    {
        id: 1,
        title: 'The Benefit',
        subtitle: 'Successful Product Recall and Prevention of Long-term Losses',
        description: 'Equipped with White Horse Lab\'s detailed failure analysis report, the customer quickly returned the faulty components and secured compensation from their supplier. More importantly, by identifying the issue early, the company prevented counterfeit parts from entering the production line, avoiding potential damage to their brand reputation, operational downtime, and future financial losses.'
    },
    {
        id: 2,
        title: 'The Challenge',
        subtitle: 'Allegations of Counterfeit Goods Threaten Business Relationships',
        description: 'A trading company found themselves in a challenging position when a purchaser suspected a batch of supplied goods to be counterfeit. This allegation not only threatened their immediate deal but also posed a significant risk to the trader\'s reputation and future business relationships. To protect their credibility and uncover the truth, the trader sought White Horse Lab\'s expertise to carry out in-depth testing and analysis.',
    },
    {
        id: 2,
        title: 'The Solution',
        subtitle: 'Tailored Testing Strategy Uncovers Evidence of Counterfeiting',
        description: 'White Horse Labs designed a custom testing plan based on the customer’s specific needs. Our analysis involved External Visual Inspection (EVI), X-ray imaging, decapsulation, die analysis, and Energy Dispersive X-ray (EDX) testing. We also compared the results to a golden sample provided by the customer. The tests revealed significant discrepancies, confirming the high likelihood of counterfeit parts in the batch.',
        images: [caseStudySolution5, caseStudySolution6]
    },
    {
        id: 2,
        title: 'The Benefit',
        subtitle: 'Defending Reputation and Securing Legal Victory',
        description: 'Armed with the detailed test report from White Horse Labs, the customer used the findings as compelling evidence in trade litigation. This led to a successful lawsuit outcome, enabling the trader to receive full compensation. More importantly, the thorough analysis helped them protect their reputation, allowing them to continue operating with the trust and confidence of their business partners intact.'
    },
    {
        id: 3,
        title: 'The Challenge',
        subtitle: 'Unexpected Component Failure Disrupts Production',
        description: 'An energy industry integrated service provider experienced a significant production issue when several film resistors encountered open circuit failures, halting their manufacturing process. This disruption posed a risk to both timelines and product quality, and the customer needed to quickly identify the root cause to restore smooth operations.',
    },
    {
        id: 3,
        title: 'The Solution',
        subtitle: 'In-Depth Failure Analysis Pinpoints Electrical Overstress (EOS)',
        description: 'White Horse Labs conducted a comprehensive failure analysis to diagnose the issue. Our tests included External Visual Inspection (EVI), X-ray imaging, electrical testing, and cross-section analysis. The results revealed that the resistors were damaged due to burning and melting of the resistance material, which pointed to Electrical Overstress (EOS)—a condition where the resistors were subjected to excessive voltage or current, causing thermal damage.',
        images1: [caseStudySolution7, caseStudySolution8],
        images: [caseStudySolution9, caseStudySolution10],
    },
    {
        id: 3,
        title: 'The Benefit',
        subtitle: 'Improved Production Reliability and Supply Chain Protection',
        description: 'Thanks to White Horse Lab\'s precise failure analysis, the customer was able to trace the root cause of the resistor failures. This insight allowed them to prevent further defective components from being used in production, safeguarding the integrity of their supply chain. As a result, they not only resumed smooth operations but also strengthened the overall reliability of their products, protecting their reputation and ensuring future production success.'
    }
]
const filteredData = computed(() => {
    const id = Number(route.params.id);
    return DUMMY_DATA.filter(item => item.id === id);
});


</script>