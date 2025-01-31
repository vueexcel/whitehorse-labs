import HeroImage from '@/assets/images/locations/hero.png'
import TopImage from '@/assets/images/locations/DE_top.png'
import WiderImage from '@/assets/images/locations/DE_wider.png'
import MapImage from '@/assets/images/locations/map.png'

import CH_HeroImage from '@/assets/images/locations/ch_hero.png'
import CH_TopImage from '@/assets/images/locations/ch_top.png'
import CH_WiderImage from '@/assets/images/locations/ch_wider.png'
import CH_MapImage from '@/assets/images/locations/ch_map.png'

import SP_HeroImage from '@/assets/images/locations/SP_hero.png'
import SP_TopImage from '@/assets/images/locations/SP_top.png'
import SP_WiderImage from '@/assets/images/locations/SP_wider.png'
import SP_MapImage from '@/assets/images/locations/SP_map.png'
import SP_video from '@/assets/images/locations/SP_video.png'

import IN_HeroImage from '@/assets/images/locations/IN_hero.png'
import IN_TopImage from '@/assets/images/locations/IN_top.png'
import IN_WiderImage from '@/assets/images/locations/IN-wider.png'
import IN_MapImage from '@/assets/images/locations/IN_map.png'

import DE_ServiceImage1 from '@/assets/images/locations/service-1.png'
import DE_ServiceImage2 from '@/assets/images/locations/service-2.png'
import DE_ServiceImage3 from '@/assets/images/locations/service-3.png'
import DE_ServiceImage4 from '@/assets/images/locations/DE_service-4.png'
import DE_ServiceImage5 from '@/assets/images/locations/service-5.png'
import DE_ServiceImage6 from '@/assets/images/locations/service-6.png'

import CH_ServiceImage1 from '@/assets/images/locations/ch_service-1.png'
import CH_ServiceImage2 from '@/assets/images/locations/ch_service-2.png'
import CH_ServiceImage3 from '@/assets/images/locations/ch_service-3.png'
import CH_ServiceImage4 from '@/assets/images/locations/ch_service-4.png'
import CH_ServiceImage5 from '@/assets/images/locations/ch_service-5.png'
import CH_ServiceImage6 from '@/assets/images/locations/ch_service-6.png'

import SP_ServiceImage1 from '@/assets/images/locations/SP_service-1.png'
import SP_ServiceImage2 from '@/assets/images/locations/SP_service-2.png'

import IN_ServiceImage1 from '@/assets/images/locations/IN_service-1.png'
import IN_ServiceImage2 from '@/assets/images/locations/IN_service-2.png'

const DE_LANG = {
    heroSection: {
        subtitle: 'Globale Wächter der technologischen Integrität',
        title: ['Das Oskar von', 'Miller Testzentrum', 'in München, Deutschland'],
        paragraph: 'Das Oskar von Miller Testzentrum verpflichtet sich, den ISO17025-Standard aufrechtzuerhalten, wie in unseren etablierten akkreditierten Testeinrichtungen in Shenzhen, China, und Cleveland, USA.',
        backgroundImage: HeroImage
    },
    sectionHeader: {
        subtitle: 'München, Deutschland',
        title: ['Präzisionstests für Europas fortschrittliche', 'Sektoren'],
        paragraph: `White Horse Laboratories, ein globaler Marktführer in der Sicherstellung der Elektronik-Integrität, bietet stolz sein hochmodernes europäisches Testlabor in München an. Seit über einem Jahr geöffnet, integriert diese Einrichtung nahtlos unser anerkanntes Branchenwissen mit einem Fokus auf schnelle, präzise Tests und bietet ein außergewöhnliches Serviceerlebnis für unsere Kunden.
            <br><br> <q>Integrität und Fachwissen sind die Grundlage unserer Dienstleistungen,</q> sagt Mark Rinehart, Gründer und Geschäftsführer. Das Münchener Labor steht für unser Engagement, schnelle und nahtlose Testprozesse mit klaren, umsetzbaren Ergebnissen zu bieten und unser Versprechen der Kundenzufriedenheit zu erfüllen.`,
        image: TopImage
    },
    serviceSection: {
        link: '#',
        title: 'Unsere Fähigkeiten',
        content: [
            {
                title: 'Komponententests und Fälschungserkennung',
                list: 'Wir verstehen die kritische Bedeutung der Zeit in der Elektronikbranche und garantieren eine schnelle und dennoch gründliche Analyse. Unsere detaillierten, leicht verständlichen Testberichte liefern präzise Einblicke in den Zustand Ihrer Komponenten und identifizieren mögliche Fälschungen mit höchster Effizienz.',
                description:
                    'Unser Expertenteam führt rigorose Komponententests durch, einschließlich visueller Inspektionen, mechanischer Tests, Röntgenanalysen und mehr. Wir stellen die Qualität und Funktionalität Ihrer elektronischen Komponenten sicher und erkennen zuverlässig Fälschungen oder minderwertige Teile. Unsere Tests entsprechen den Industriestandards wie AS6081/AS6171 und liefern stets zuverlässige und qualitativ hochwertige Ergebnisse.',
                images: [DE_ServiceImage1, DE_ServiceImage2]
            },
            {
                title: 'Fehleranalyse',
                description: 'Unsere gründliche Fehleranalyse deckt potenzielle Probleme in Ihren elektronischen Komponenten auf und bietet gezielte Lösungen zur effektiven Behebung. Dank modernster Technologie und der Expertise erfahrener Fachleute aus der Branche sind wir in der Lage, interne Fehler zu erkennen, Verarbeitungsmaterialien zu bewerten und Qualitätskontrollen im Prozess durchzuführen, um höchste Zuverlässigkeit zu gewährleisten.',
                list: 'Bei White Horse Laboratories ist unsere umfassende Fehleranalyse darauf ausgelegt, Probleme schnell zu identifizieren und Lösungen zu bieten, die auf Ihre speziellen Bedürfnisse zugeschnitten sind. Als stolze Mitglieder von FED, COGD und ERAI sind wir bestrebt, in jeder Hinsicht höchste Standards für Exzellenz und Integrität zu gewährleisten.',
                images: [DE_ServiceImage3, DE_ServiceImage4]
            },
            {
                title: 'Komponentenprogrammierung, Verpackung und Logistik',
                description: 'Unser Service beginnt mit einer detaillierten Prüfung des aktuellen Zustands Ihrer Produkte, gefolgt von einer vollständigen Bearbeitung und Verpackung Ihrer elektronischen Komponenten, die auf Ihre Produktionsbedürfnisse abgestimmt ist. Vom Umpacken bis zur kundenspezifischen Kennzeichnung sorgen wir dafür, dass Ihre Lieferkette reibungslos und effizient läuft.',
                list: 'Um die Leistung Ihrer Komponenten zu optimieren, bieten wir maßgeschneiderte Programmierdienste an, die auf Ihre spezifischen Anforderungen abgestimmt sind. Unsere Experten liefern präzise Programmierungen, die sicherstellen, dass Ihre Komponenten vollständig auf ihre vorgesehene Anwendung vorbereitet sind und ihre Funktionalität und Zuverlässigkeit steigern.',
                images: [DE_ServiceImage5, DE_ServiceImage6]
            }
        ]
    },
    widerBox: {
        title: 'Qualität ist unser Engagement',
        paragraph: `Bei White Horse Laboratories setzen wir uns dafür ein, globale Lieferketten zu schützen, indem wir modernste Prüftechnik und sowohl industrieübliche als auch proprietäre Prüfmethoden verwenden.
            <br><br>Was uns wirklich auszeichnet, sind zwei Grundsätze: ein kompromissloses Bekenntnis zur Integrität und ein kollaborativer Ansatz mit unseren Kunden. Diese Leitwerte ermöglichen es uns, maßgeschneiderte Lösungen zu entwickeln, die auf Ihre speziellen Bedürfnisse abgestimmt sind und Ihren Erfolg in jedem Schritt sicherstellen.`,
        image: WiderImage
    },
    calendarSection: {
        title: 'Kalender',
        subtitle: 'Bleiben Sie verbunden: Kommende Veranstaltungen & wichtige Termine',
        paragraph: `Vertrauen Sie auf White Horse Labs für schnellen, zuverlässigen Service zur Aufrechterhaltung einer widerstandsfähigen Lieferkette. Vereinfachen Sie Ihre Bestellplanung mit den aktualisierten Öffnungszeiten unseres Münchener Büros.`,
        calendarUrl: 'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
    },
    contactSection: {
        title: 'Kontakt',
        subtitle: [' White Horse Laboratories', 'GmbH'],
        paragraph: [
            'Lindberghstr 12',
            '82178 Puchheim',
            'Deutschland',
            'Telefon: +49 89 54197312',
            'E-Mail: <a href="mailto:info@whitehorselabs.com" class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a>',
        ],
        directionLink: '#',
        image: MapImage
    }
}

const CH_LANG = {
    heroSection: {
        subtitle: '全球技术诚信的守护者',
        title: ['无与伦比的质量', '和可靠性', '在亚洲的中心'],
        paragraph: '威廉·肖克利测试中心和泰德·霍夫测试和物流中心是全球领先的测试和运营设施，ISO 17025:2015 认证确保亚洲的技术可靠性。',
        backgroundImage: CH_HeroImage
    },
    sectionHeader: {
        subtitle: '亚洲的中心',
        title: ['位于香港和深圳，服务更近一步'],
        paragraph: `白马实验室成立于2004年，我们将深圳作为我们的第一个家。近二十年后，它已成长为我们的全球总部。拥有超过120名员工，其中一半以上致力于运营工作。我们的深圳设施是测试、运营和客户服务的卓越中心。
            <br><br> <q>实验室总面积超过4000平方米，提供全面的AS6081测试和先进的电气测试，以满足最高的行业标准。2023年，深圳设施的威廉·肖克利测试中心获得了ISO 17025:2015认证，再次证明了我们对质量、精确度和供应链可靠性的承诺。</q>`,
        image: CH_TopImage
    },
    serviceSection: {
        link: '#',
        title: '我们的能力',
        content: [
            {
                title: '威廉·肖克利测试中心：推进创新',
                list : '在深圳的ISO 17025:2015认证的威廉·肖克利测试中心，我们提供全面的AS6081测试、先进的电气测试和失效分析。我们的服务包括包装检查、X射线荧光（XRF）、去壳和晶片分析、可焊性测试等。我们的质检团队还提供工厂审计，帮助客户降低供应链风险，确保从始至终的可靠性。',
                description:
                    '威廉·肖克利是诺贝尔奖获得者，他通过对半导体和晶体管效应的开创性工作改变了电子行业。为纪念他的贡献，白马实验室创始人马克·莱因哈特将我们的第一个实验室以他命名，激励我们在每一项工作中秉持同样的科学卓越和创新精神。',
                images: [CH_ServiceImage1, CH_ServiceImage2]
            },
            {
                title : '泰德·霍夫测试和物流中心：质量控制与物流',
                description : `位于香港的泰德·霍夫测试和物流中心是白马实验室全球网络中的关键设施，通过ISO/IEC 17025:2017认证。它作为3PL物流中心，提供无缝的处理、存储和分销服务，确保高效的产品流转。该中心专注于维护最高的质量和可靠性标准，在支持客户供应链方面发挥着至关重要的作用，提供简化的物流解决方案。`,
                list : '除了物流能力外，该中心还具备执行完整的AS6081和AS6171测试协议的能力，这对于检测假冒和劣质元件至关重要。确保所有电子元件符合行业标准，安全可靠。该设施还提供先进的电气测试，确保电子元件的性能和可靠性。这些服务确保泰德·霍夫测试和物流中心向全球客户提供精确和信任。',
                images : [CH_ServiceImage5, CH_ServiceImage6]
            },
            {
                title: '我们的亚洲团队：积累专业知识，推动增长',
                description :'白马实验室的亚洲团队将实验室技术人员、行政、销售和客户服务汇聚在一个家庭导向的文化中。我们的许多团队成员在我们这里工作超过十年，反映了我们对长期发展的承诺和支持性的工作环境。',
                list : '我们在亚洲的运营团队由近100名高技能技术人员和经验丰富的工程师组成，引领质量和精确度方面的卓越表现。多年来，该团队还在新加坡和克利夫兰的新实验室培训和支持方面发挥了关键作用，分享他们的专业知识，确保所有地点的成功。',
                images: [CH_ServiceImage3, CH_ServiceImage4]
            },
        ]
    },
    widerBox: {
        title: '质量是我们的承诺',
        paragraph: `在白马实验室，我们致力于通过最先进的测试设备和符合行业标准及专有测试方法，保护全球供应链。
            <br><br>真正使我们与众不同的是两个核心原则：坚定不移的诚信承诺和与客户的协作方式。这些指导价值观使我们能够根据您的具体需求定制解决方案，确保您在每一步都取得成功。`,
        image: CH_WiderImage
    },
    calendarSection: {
        title: '日历',
        subtitle: '保持联系：即将到来的活动和重要日期',
        paragraph: `相信白马实验室为您的供应链提供快速可靠的服务。通过我们深圳办公室的更新工作时间优化您的订单计划。`,
        calendarUrl: 'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
    },
    contactSection: {
        title: '联系我们',
        subtitle: ['白马实验室', '深圳'],
        paragraph: [
            '4A , H栋',
            '港之龙科技园',
            '青龙路6号，清华社区',
            '龙华区',
            '深圳市，广东省，中国',
            '电话: +86-755-8374-1887',
            '电子邮件: <a href="mailto:info@whitehorselabs.com" class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a>',
        ],
        directionLink: '#',
        image: CH_MapImage
    }
}



const SP_LANG = {
    heroSection: {
        subtitle: 'global guardians of technological integrity',
        title: ['The Gordon E. ', 'Moore Test Centre ', 'in Singapore'],
        paragraph : 'The Gordon E. Moore Test Centre: Elevating Supply Chain Security and Streamlining Efficiency Across Asia’s Electronics Manufacturing Industry.',  
        backgroundImage: SP_HeroImage
    },
    sectionHeader: {
        subtitle: 'Singapore',
        title: ['Securing Your Supply Chain, Driving Efficiency',' in Asia'],
        paragraph: `At White Horse Labs, our testing facilities across Asia ensure your supply chain remains secure and reliable. Our seamless logistics network, connecting Singapore, Hong Kong, and China, accelerates your operations for optimal efficiency.
            <br><br> <q>While global industries face inflation, rising energy costs, and geopolitical tensions, Singapore's electronics sector has thrived over the past two years. <br><br><q> With unmatched expertise in electronics manufacturing, on-site testing, and a powerful global network, we bring a new standard of service to Singapore—one that drives quality, security, and business growth.`,
        image: SP_TopImage
    },
    serviceSection: {
        link: '#',
        title: 'Our capabilites',
        content: [
            {
                title: 'The Gordon E. Moore Testing Centre: Advancing with Innovation',
                list : 'At the Gordon E. Moore Testing Centre, we provide a full suite of services, including EVI, X-Ray/XRF, electrical testing, and automated programming/taping. With ISO 9001 certification, we are dedicated to optimizing our processes and delivering top-tier support to clients across Southeast Asia and beyond.',
                description:
                    'Gordon E. Moore, co-founder of Intel, famously observed in 1965 that the number of transistors on a microchip doubles every two years—a prediction known as Moore’s Law, which transformed the electronics industry. Our Singapore facility honors this legacy by matching the pace of technological advancement with cutting-edge testing capabilities.',
                images: SP_video
            },
        ]
    },
    OurTeamSection: {
        link: '#',
        title: 'Our team',
        content: [
            {
                title: 'Our Team: Driving Growth and Excellence',
                list : 'At White Horse Laboratories, our comprehensive failure analysis is designed to quickly identify problems and deliver solutions tailored to your unique needs. As proud members of FED, COGD, and ERAI, we are committed to upholding the highest standards of excellence and integrity in every aspect of our failure analysis services.',
                description:
                    'Our thorough failure analysis uncovers potential issues within your electronic components, providing targeted solutions to address them effectively. Leveraging cutting-edge technology and the expertise of seasoned industry professionals, we excel in detecting internal failures, assessing processing materials, and conducting in-process quality controls to ensure the highest level of reliability.',
                images: [SP_ServiceImage1, SP_ServiceImage2]
            },
        ]
    },
    widerBox: {
        title: 'Quality is Our Commitment',
        paragraph: `At White Horse Laboratories, we are dedicated to safeguarding global supply chains by utilizing state-of-the-art testing equipment and both industry-standard and proprietary testing methods.
            <br><br>What truly sets us apart are two core principles: an unyielding commitment to integrity and a collaborative approach with our clients. These guiding values enable us to craft bespoke solutions tailored to your specific needs, ensuring your success every step of the way.`,
        image: SP_WiderImage
    },
    calendarSection: {
        title: 'Calendar',
        subtitle: 'Stay Connected: Upcoming Events & Key Dates',
        paragraph: `Trust White Horse Labs for swift, reliable service to maintain a resilient supply chain. Streamline your order planning with updated hours from our Singapore office.`,
        calendarUrl: 'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
    },
    contactSection: {
        title: 'Contact',
        subtitle: [' White Horse Laboratories', 'Singapore'],
        paragraph: [
            '#05-00 Jay Gee Melwani House',
            '10, Genting Lane',
            'Singapore, 349583',
            'Phone: +65 6539 9638',
            'Email: <a href="mailto:info@whitehorselabs.com" class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a>',
        ],
        directionLink: '#',
        image: SP_MapImage
    }
}

const IN_LANG = {
    heroSection: {
        subtitle: 'global guardians of technological integrity',
        title: ['Driving Growth ', 'and Excellence ', 'in India'],
        paragraph : 'The White Horse Labs India facility drives business growth and delivers exceptional customer service, ensuring strong global partnerships and seamless support.',  
        backgroundImage: IN_HeroImage
    },
    sectionHeader: {
        subtitle: 'india',
        title: ['Customer Focus and Growth: White Horse Labs , India'],
        paragraph: `The White Horse Labs India facility is a cornerstone for our business development and customer service efforts, strategically positioned to support both local and international clients. This location is dedicated to building strong client relationships and ensuring smooth communication across the entire supply chain. Our team in India excels in delivering exceptional customer service while driving growth and expanding White Horse Labs' presence in the region.
            <br><br> <q>Certified with the Indian Graphic Trademark Certificate, IPC Membership Certificate, COGD Membership Certification, and ERAI Member Certificate, the India facility upholds our commitment to quality and ethical practices. These certifications reflect our unwavering dedication to providing trusted, industry-leading services for our clients across the globe.`,
        image: IN_TopImage
    },
    serviceSection: {
        link: '#',
        title: 'Our capabilites',
        content: [
            {
                title: 'The Gordon E. Moore Testing Centre: Advancing with Innovation',
                list : 'Alongside this, we ensure top-tier customer service, providing responsive and reliable support to maintain seamless operations and long-term client satisfaction. This combination of strategic development and dedicated service makes the India facility a vital part of our global operations.',
                description:
                    'The White Horse Labs India facility focuses on two primary capabilities: business development and customer service. Our team actively supports clients by identifying growth opportunities, fostering partnerships, and expanding our reach in the region. ',
                images: [IN_ServiceImage1, IN_ServiceImage2]
            },
        ]
    },
    widerBox: {
        title: 'Quality is Our Commitment',
        paragraph: `At White Horse Laboratories, we are dedicated to safeguarding global supply chains by utilizing state-of-the-art testing equipment and both industry-standard and proprietary testing methods.
            <br><br>What truly sets us apart are two core principles: an unyielding commitment to integrity and a collaborative approach with our clients. These guiding values enable us to craft bespoke solutions tailored to your specific needs, ensuring your success every step of the way.`,
        image: IN_WiderImage
    },
    calendarSection: {
        title: 'Calendar',
        subtitle: 'Stay Connected: Upcoming Events & Key Dates',
        paragraph: `Trust White Horse Labs for swift, reliable service to maintain a resilient supply chain. Streamline your order planning with updated hours from our India office.`,
        calendarUrl: 'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
    },
    contactSection: {
        title: 'Contact',
        subtitle: [' White Horse Laboratories', 'India'],
        paragraph: [
            '#1315 Ardente Office One ',
            'Tower A, 3rd Floor, Hoody Circle,',
            'Bangalore 560048, Karnataka, India',
            'Email: <a href="mailto:info@whitehorselabs.com" class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a>',
        ],
        directionLink: '#',
        image: IN_MapImage
    }
}

export type Language = 'en' | 'de' | 'in' | 'cn' | 'sg';
export type LocationView = typeof DE_LANG

export default {
    en:DE_LANG,
    de: DE_LANG,
    in: IN_LANG,
    cn: CH_LANG,
    sg: SP_LANG
}