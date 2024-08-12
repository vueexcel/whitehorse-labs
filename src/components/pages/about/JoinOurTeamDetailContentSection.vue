<template>
    <section class="w-full flex items-start px-6 py-16 sm:px-12 bg-white">
        <div class="w-auto mb-2 mr-8 md:w-64 sm:mb-0">
            <slot name="title">
                <RedTitle :title="DUMMY_DATA.title" class="sm:mt-2 text-black" />
            </slot>
        </div>
        <div class="w-full flex items-start">
            <div class="w-full max-w-6xl">
                <div class="w-full max-w-4xl">
                    <p class="text-[#6C6C6C] text-base w-full">
                       {{ DUMMY_DATA.description }}
                    </p>

                    <template v-for="({ title, description, list }, index) in DUMMY_DATA.info" :key="index">
                        <h4 class="text-4xl font-roboto text-black mt-12 mb-5">{{ title }}</h4>
                        <p v-if="description" class="text-black font-roboto mt-4">{{ description }}</p>
                        <ul class="text-[#828282] font-roboto mt-4 list-disc list-inside" v-if="list">
                            <li v-for="item in list" :key="item" class="mb-2 font-roboto">{{ item }}</li>
                        </ul>
                    </template>
                </div>
            </div>
            <div class="block max-w-72">
                <h5 class="text-2xl font-roboto text-black">To Apply</h5>
                <p class="text-black text-sm mt-4">Please send your resume and cover letter to
                    xiaoying.yang@whitehorselabs.com.<br><br>We will review your
                    application and get back to you as soon as possible. We appreciate your interest in joining our team
                    and look forward to the opportunity to learn more about you.</p>
            </div>
        </div>
    </section>
    <div class="w-full px-6 sm:px-12 pb-32 bg-white">
        <div class="border-t border-t-[#828282] w-full flex">
            <div class="w-auto mb-2 md:w-64 sm:mb-0"></div>
            <router-link :to="constants.about.joinOurTeam.path" class="font-roboto text-lg mt-6 underline hover:opacity-70">
                Back to Opportunies
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import RedTitle from '@/components/common/RedTitle.vue';

import constants from '@/constants/routes.constants';

const DUMMY_DATA = {
    title: 'Accountant',
    description: 'For our global accounting department, we are looking for an Accountant based in Shenzhen. In this role, you will be responsible for managing financial records, preparing financial statements and reports, analyzing financial data, and ensuring compliance with tax laws and regulations. The accountant may also provide financial advice on specific issues, and assist in budgeting and forecasting.',
    info: [
        {
            title: 'Primary responsibilities',
            description: '',
            list: [
                'Manage and maintain financial records, including bookkeeping, invoicing, and payment processing',
                'Prepare financial statements, such as balance sheets, income statements, and cash flow statements, and ensure accuracy and compliance with accounting standards',
                'Analyze financial data and provide insights to inform business decisions, such as budgeting, forecasting, and investment opportunities',
                'Ensure compliance with tax laws and regulations, including filing tax returns and managing tax payments',
                'Manage the company’s fixed assets and inventory, ensuring accurate recording and reporting',
                'Standardize the reimbursement process according to the internal financial system and ensure compliance with company policies and procedures',
                'Provide financial advice and support to individuals or departments within the organization',
                'Coordinate with other departments and external partners, such as auditors and tax consultancy, to ensure smooth financial operations',
                'Complete other financial and accounting tasks as assigned by the company’s leadership.'
            ]
        },
        {
            title: 'Skills and qualifications',
            description: '',
            list: [
                'Bachelor’s degree or above in accounting, finance, or a related field',
	            'At least 3 years of experience as a general tax accountant or in a related accounting role',
	            'Strong English language skills, with the ability to use English as the primary language for handling daily emails and using English accounting software',
	            'Familiarity with accounting terminology and concepts in English, and preferably some experience working in foreign companies or overseas',
	            'Strong analytical skills, attention to detail, and good professional ethics',
	            'Excellent teamwork skills, and the ability to work collaboratively with other departments and external partners',
	            'Proactive, patient, and responsible, with the ability to work under pressure and meet deadlines',
	            'Proficiency in Microsoft Office software products, particularly Excel, with strong skills in using Excel functions and formulas'
            ]
        },
        {
            title: 'What we are offering',
            description: '',
            list: [
                'An experienced, growing company that is backed by integrity and a trustful relationship within the team',
	            'Well-balanced, family-oriented working environment',
	            'An intercultural working environment with flat hierarchies',
	            'Exciting, responsible tasks in a highly motivated team and a long-term perspective',
	            'Personal space to develop management skills',
	            'Position: Accountant',
	            'Department: General & Administration',
	            'Reports to: Accounting Supervisor',
	            'Location: Shenzhen',
	            'Apply now'
            ]
        }
    ]
}
</script>