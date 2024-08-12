<template>
    <section class="w-full px-6 sm:px-12 py-16 pb-32 bg-white">
        <div class="overflow-x-auto">
            <table class="w-full mt-8 mb-8 md:mt-12 md:mb-32">
                <thead>
                    <tr class="border-b border-[#D8D8D8]">
                        <th
                            class="p-2 px-4 text-xs uppercase sm:pl-12 md:pl-20 md:text-sm lg:text-base font-roboto-mono text-start">
                            Position
                        </th>
                        <th class="p-2 px-4 text-xs uppercase md:text-sm lg:text-base font-roboto-mono text-start">
                            Description
                        </th>
                        <th
                            class="p-2 px-4 text-xs uppercase sm:pr-12 md:pr-20 md:text-sm lg:text-base font-roboto-mono text-start">
                            More
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index"
                        class="border-b last:border-0 border-[#D8D8D8] px-12">
                        <td class="sm:pl-12 py-4 max-w-[26rem]">
                            <strong class="font-roboto lg:text-2xl font-normal block max-w-96">
                                {{ item.position }}
                            </strong>
                            <ul v-if="item.info?.length"
                                class="uppercase font-roboto-mono mt-4 text-sm text-[#828282] max-w-96">
                                <li v-for="(info, index) in item.info" :key="index" class="mb-1.5">
                                    <span>{{ info[0] }}: </span>&nbsp;&nbsp;<span class="text-[#828282] font-roboto">{{
                                        info[1]
                                        }}</span>
                                </li>
                            </ul>
                        </td>
                        <td class="flex-1">
                            <p class="text-[#828282] text-xs md:text-sm lg:text-base mt-1 max-w-[26rem]">
                                {{ item.description }}
                            </p>
                        </td>
                        <td class="sm:pr-12">
                            <router-link :to="constants.about.joinOurTeam.path + '/' + item.id"
                                class="text-sm underline md:text-base hover:opacity-75 decoration-slate-800">
                                Learn More
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script setup lang="ts">
import constants from '@/constants/routes.constants'

const tableData = [
    {
        id: 1,
        position: 'Laboratory Technician',
        description: 'The laboratory technician carries out mechanical and electronic test procedures precisely and efficiently and supports the test engineers during series tests.',
        info: [
            ['Department', 'Oprations'],
            ['Location', 'Banglore'],
            ['Reports to', 'Site Manager']
        ]
    },
    {
        id: 2,
        position: 'Accountant',
        description: 'In this role, you will be responsible for managing financial records, preparing financial statements and reports, analyzing financial data, and ensuring compliance with tax laws and regulations. The accountant may also provide financial advice on specific issues, and assist in budgeting and forecasting.',
        info: [
            ['Department', 'General & Administration'],
            ['Location', 'Shenzhen'],
            ['Reports to', 'Accounting Supervisor']
        ]
    },
    {
        id: 3,
        position: 'Test Engineer',
        description: 'The Test Engineer is responsible for developing and executing test plans, maintaining test instruments, and ensuring environmental and safety compliance. The Test Engineer also optimizes testing methods, updates documents, and ensures adherence to industry standards.',
        info: [
            ['Department', 'Operations'],
            ['Location', 'Shenzhen, Singapore, Hong Kong, Bangalore, Cleveland or Munich'],
            ['Reports to', 'Accounting Supervisor']
        ]
    },
    {
        id: 4,
        position: 'Training Coordinator',
        description: 'As a global Training Coordinator, you will be responsible for designing and delivering training programs to employees worldwide, with a focus on aligning training needs with business goals and objectives. You will also be responsible for developing and implementing training policies and procedures, as well as assessing the effectiveness of training programs.',
        info: [
            ['Department', 'General & Administration'],
            ['Location', 'Shenzhen, Singapore, Hong Kong, Bangalore, Cleveland or Munich'],
            ['Reports to', 'Managing Director']
        ]
    },
    {
        id: 5,
        position: 'Quality Test Technician / Electronics Technician',
        description: 'In this role, you will be responsible for performing various tests and completing mechanical inspection processes on electronic components and assemblies with precision and efficiency.',
        info: [
            ['Department', 'Oprations'],
            ['Location', 'Singapore'],
            ['Reports to', 'Operations Manager']
        ]
    },
    {
        id: 6,
        position: 'Customer Service Specialist',
        description: 'In this role, you will be responsible for providing superior customer care to our clients and working closely with account managers to handle day-to-day customer needs. If you have experience in customer service, a detail-oriented mindset, and thrive in a fast-paced environment, we would love to hear from you.',
        info: [
            ['Department', 'Sales'],
            ['Location', 'Singapore'],
            ['Reports to', 'Regional Key Account Manager']
        ]
    },
    {
        id: 7,
        position: 'Chemical Technician / Laboratory Assistant / Material Tester (m/f/d)',
        description: 'If you are looking to contribute your expertise in a future-oriented industry, you are the person we are looking for.',
        info: [
            ['Department', 'Operations'],
            ['Location', 'Shenzhen, Singapore, Hong Kong, Bangalore, Cleveland or Munich'],
            ['Reports to', 'General Manager']
        ]
    }
]
</script>