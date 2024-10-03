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

import SP_ServiceImage1 from '@/assets/images/locations/SP_service-1.png'
import SP_ServiceImage2 from '@/assets/images/locations/SP_service-2.png'

const DE_LANG = {
    heroSection: {
        subtitle: 'global guardians of technological integrity',
        title: ['The Oskar von', 'Miller Test Centre', 'in Munich, Germany'],
        paragraph: 'The Oskar von Miller Test Centre is committed to upholding the ISO17025 standard, following our established accredited testing facilities in Shenzhen, China, and Cleveland, USA.',
        backgroundImage: HeroImage
    },
    sectionHeader: {
        subtitle: 'Munich, Germany',
        title: ['Precision Testing for Europe’s Advanced', 'Sectors'],
        paragraph: `White Horse Laboratories, a global leader in ensuring the integrity of electronics, proudly
            offers its cutting-edge European test lab in Munich, Germany. Open for over a year, this
            facility seamlessly integrates our renowned industry expertise with a focus on rapid, precise
            testing, delivering an exceptional service experience to our customers.
            <br><br> <q>Integrity and expertise are the foundation of our services,</q> says Mark Rinehart,
            Founder and Managing Director. The Munich lab exemplifies our commitment to providing fast,
            seamless testing processes with clear, actionable results, upholding our promise of customer
            satisfaction.`,
        image: TopImage
    },
    serviceSection: {
        link: '#',
        title: 'Our capabilites',
        content: [
            {
                title: 'Component Testing and Counterfeit Detection',
                list: 'Understanding the critical importance of time in the electronics industry, we guarantee swift yet thorough analysis. Our detailed, easy-to-understand test reports provide precise insights into the condition of your components, identifying potential counterfeits with the utmost efficiency.',
                description:
                    'Our expert team performs rigorous component testing using advanced visual inspection, mechanical testing, X-ray analysis, and more. We ensure the quality and functionality of your electronic components, reliably detecting counterfeit or substandard parts. Our testing services strictly adhere to industry standards like AS6081/AS6171, delivering consistently reliable and high-quality results.',
                images: [DE_ServiceImage1, DE_ServiceImage2]
            },
            {
                title: 'Failure Analysis',
                description: 'Our thorough failure analysis uncovers potential issues within your electronic components, providing targeted solutions to address them effectively. Leveraging cutting-edge technology and the expertise of seasoned industry professionals, we excel in detecting internal failures, assessing processing materials, and conducting in-process quality controls to ensure the highest level of reliability.',
                list: 'At White Horse Laboratories, our comprehensive failure analysis is designed to quickly identify problems and deliver solutions tailored to your unique needs. As proud members of FED, COGD, and ERAI, we are committed to upholding the highest standards of excellence and integrity in every aspect of our failure analysis services.',
                images: [DE_ServiceImage3, DE_ServiceImage4]
            },
            {
                title: 'Component Programming, Packaging, and Logistics',
                description: 'Our service begins with a detailed review of your products’ current state, followed by complete processing and packaging of your electronic components tailored to your production needs. From repackaging to custom labeling, we ensure your supply chain runs smoothly and efficiently.',
                list: 'To optimize your components\' performance, we offer customized programming services aligned with your specific requirements. Our experts deliver precise programming that ensures your components are fully prepared for their intended application, enhancing functionality and reliability.',
                images: [DE_ServiceImage5, DE_ServiceImage6]
            }
        ]
    },
    widerBox: {
        title: 'Quality is Our Commitment',
        paragraph: `At White Horse Laboratories, we are dedicated to safeguarding global supply chains by utilizing state-of-the-art
            testing equipment and both industry-standard and proprietary testing methods.
            <br><br>What truly sets us apart are two core principles: an unyielding commitment to integrity and a collaborative
            approach with our clients. These guiding values enable us to craft bespoke solutions tailored to your specific
            needs, ensuring your success every step of the way.`,
        image: WiderImage
    },
    calendarSection: {
        title: 'Calendar',
        subtitle: 'Stay Connected: Upcoming Events & Key Dates',
        paragraph: `Trust White Horse Labs for swift, reliable service to maintain a resilient supply chain. Streamline
            your order planning with updated hours from our Munich office.`,
        calendarUrl: 'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
    },
    contactSection: {
        title: 'Contact',
        subtitle: [' White Horse Laboratories', 'GmbH'],
        paragraph: [
            'Lindberghstr 12',
            '82178 Puchheim',
            'Germany',
            'Phone: +49 89 54197312',
            'Email: <a href="mailto:info@whitehorselabs.com" class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a>',
        ],
        directionLink: '#',
        image: MapImage
    }
}

const CH_LANG = {
    heroSection: {
        subtitle: 'global guardians of technological integrity',
        title: ['The William', 'Shockley Testing', 'Centre in Shenzhen'],
        paragraph : 'The William Shockley Testing Centre: A Global Leader in Testing and Operations, ISO 17025:2015 Accredited for Unmatched Quality and Reliability in Asia',  
        backgroundImage: CH_HeroImage
    },
    sectionHeader: {
        subtitle: 'Shenzhen, China',
        title: ['Unmatched Quality and Reliability in the',' heart of Asia'],
        paragraph: `Founded in 2004, White Horse Labs made Shenzhen our first home, and nearly two decades later, it has grown into our global headquarters. With over 120 employees—more than half dedicated to operations—our Shenzhen facility is a hub of excellence in testing, operations, and customer service.
            <br><br> <q>Spanning over 2,000 square meters, the lab offers comprehensive AS6081 testing and advanced electrical tests to meet the highest industry standards. In 2023, the William Shockley Testing Centre at this facility earned ISO 17025:2015 accreditation, reaffirming our commitment to quality, precision, and reliability across the supply chain.`,
        image: CH_TopImage
    },
    serviceSection: {
        link: '#',
        title: 'Our capabilites',
        content: [
            {
                title: 'The William Shockley Testing Centre: Advancing Innovation',
                list : 'At the ISO 17025:2015 accredited William Shockley Testing Centre in Shenzhen, we offer a full range of AS6081 testing, advanced electrical testing, and failure analysis. Our services include packaging inspections, x-ray fluorescence (XRF), decapsulation and die analysis, solderability testing, and more. Our QA team also provides factory audits to help clients reduce supply chain risks, ensuring reliability from start to finish.',
                description:
                    'William Shockley, Nobel Prize-winning physicist, transformed the electronics industry with his groundbreaking work on semiconductors and the transistor effect. To honor his legacy, White Horse Labs founder Mark Rinehart named our first lab after him, inspiring us to uphold the same commitment to scientific excellence and innovation in everything we do.',
                images: [CH_ServiceImage1, CH_ServiceImage2]
            },
            {
                title: 'Our Shenzhen Team: Building Expertise, Driving Growth',
                description :'Established in 2004, the White Horse Labs Shenzhen team brings together lab technicians, administration, sales, and customer service under a family-oriented culture. Many of our team members have been with us for over a decade, reflecting our commitment to long-term growth and a supportive work environment.',
                list : 'With more than 60 highly skilled technicians and experienced engineers, our Shenzhen operations team leads the way in quality and precision. Over the years, this team has also played a key role in training and supporting our new labs in Singapore and Cleveland, sharing their expertise to ensure success across all our locations.',
                images: [CH_ServiceImage3, CH_ServiceImage4]
            },
        ]
    },
    widerBox: {
        title: 'Quality is Our Commitment',
        paragraph: `At White Horse Laboratories, we are dedicated to safeguarding global supply chains by utilizing state-of-the-art testing equipment and both industry-standard and proprietary testing methods.
            <br><br>What truly sets us apart are two core principles: an unyielding commitment to integrity and a collaborative approach with our clients. These guiding values enable us to craft bespoke solutions tailored to your specific needs, ensuring your success every step of the way.`,
        image: CH_WiderImage
    },
    calendarSection: {
        title: 'Calendar',
        subtitle: 'Stay Connected: Upcoming Events & Key Dates',
        paragraph: `Trust White Horse Labs for swift, reliable service to maintain a resilient supply chain. Streamline your order planning with updated hours from our Shenzhen office.`,
        calendarUrl: 'https://outlook.office.com/calendar/published/4c9c7d58703e49c99f663824d6e3bdba@whitehorselabs.com/533e7bda0315429d922e8e9bd3122e015689917153247656081/calendar.html'
    },
    contactSection: {
        title: 'Contact',
        subtitle: [' White Horse Laboratories', 'Shenzhen'],
        paragraph: [
            '4A , Building H',
            'Gang Zhi Long Science Park',
            'No6. Qinglong Road, Qinghua Community',
            'Long hua District',
            'Shenzhen, Guangdong, China',
            'Phone: +86-755-8374-1887',
            'Email: <a href="mailto:info@whitehorselabs.com" class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a>',
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
    // Singapore:
// Address: 10 Genting Lane #05-00 Jay Gee Melwani Singapore 349583
// Phone:+65 6539 9638
}

export type Language = 'en' | 'de' | 'in' | 'cn' | 'sg';
export type LocationView = typeof DE_LANG

export default {
    // en: CH_LANG,
    // en: DE_LANG,
    en:DE_LANG,
    de: DE_LANG,
    in: DE_LANG,
    cn: CH_LANG,
    sg: SP_LANG
}