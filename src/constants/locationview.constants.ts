import HeroImage from '@/assets/images/locations/hero.png'
import TopImage from '@/assets/images/locations/top.png'
import WiderImage from '@/assets/images/locations/wider.png'
import MapImage from '@/assets/images/locations/map.png'

import DE_ServiceImage1 from '@/assets/images/locations/service-1.png'
import DE_ServiceImage2 from '@/assets/images/locations/service-2.png'
import DE_ServiceImage3 from '@/assets/images/locations/service-3.png'
import DE_ServiceImage4 from '@/assets/images/locations/service-4.png'
import DE_ServiceImage5 from '@/assets/images/locations/service-5.png'
import DE_ServiceImage6 from '@/assets/images/locations/service-6.png'

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
            'Lindberghstraße 12',
            '82178 Puchheim',
            'Germany',
            'Telephone: +49 89 541 973 12',
            'Email: <a href="mailto:info@whitehorselabs.com" class="text-[#FF544F] underline hover:opacity-75">info@whitehorselabs.com</a>',
        ],
        directionLink: '#',
        image: MapImage
    }
}

export type Language = 'en' | 'de' | 'in' | 'cn' | 'sg';
export type LocationView = typeof DE_LANG;

export default {
    en: DE_LANG,
    de: DE_LANG,
    in: DE_LANG,
    cn: DE_LANG,
    sg: DE_LANG
}