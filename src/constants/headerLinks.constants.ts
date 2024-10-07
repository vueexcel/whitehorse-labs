import constants from '@/constants/routes.constants'

export const { landingpage, resources, contact, caseStudies, solutions, about, locations } = constants

export default [
    {
        label: 'Solutions',
        sublinks: [
            {
                label: 'Testing Laboratory',
                sublabel:
                    'State-of-the-art testing services designed to ensure product reliability and safety.',
                link: `${solutions.path}/${solutions.testingLaboratory.path}`
            },
            {
                label: 'Factory Auditing',
                sublabel: 'Meticulous auditing services to ensure compliance, quality, and efficiency.',
                link: `${solutions.path}/${solutions.factoryAuditing.path}`
            },
            {
                label: 'Programming, Packaging & Logistics',
                sublabel:
                    'Integrated solutions designed to optimize efficiency and ensure secure delivery.',
                link: `${solutions.path}/${solutions.programmingPackaging.path}`
            },
            {
                label: 'Training & Education',
                sublabel: 'Comprehensive programs to enhance expertise and uphold industry standards.',
                link: `${solutions.path}/${solutions.trainingEducation.path}`
            }
        ]
    },
    {
        label: 'Case Studies',
        link: caseStudies.path
    },
    {
        label: 'About',
        sublinks: [
            {
                label: 'Who We Are',
                sublabel: 'Get to know us and why we’re the Global Guardians of Technological Integrity.',
                link: `${about.path}/${about.whoWeAre.path}`
            },
            {
                label: 'Why White Horse',
                sublabel:
                    'Explore our Purpose, Values and the Promise we keep to our clients around the globe.',
                link: `${about.path}/${about.whyWhiteHorseLabs.path}`
            },
            {
                label: 'Join Our Team',
                sublabel: 'Make an impact in ensuring the reliability and safety of electronics worldwide.',
                link: `${about.path}/${about.joinOurTeam.path}`
            },
            {
                label: 'Our Locations',
                sublabel: 'Our mission transcends borders, from Cleveland to Bangalore.',
                link: `${about.path}/${about.ourLocations.path}`
            }
        ]
    },
    {
        label: 'Resources',
        sublinks: [
            {
                label: 'News & Insights',
                sublabel: 'Discover the latest company news and industry insights.',
                link: `${resources.path}/${resources.newsInsight.path}`
            },
            {
                label: 'Terminology',
                sublabel: 'In the spirit of transparency, learn all the industry termology here.',
                link: `${resources.path}/${resources.terminology.path}`
            },
            {
                label: 'Global Calendar',
                sublabel: "Streamline order planning with our global locations' updated hours here.",
                link: `${resources.path}/${resources.globalCalendar.path}`
            },
            {
                label: 'Downloads',
                sublabel: 'Explore our free downloadable content for valuable insights and resources.',
                link: `${resources.path}/${resources.downloads.path}`
            }
        ]
    },
    {
        label: 'Contact',
        link: contact.path
    }
]

const locationPath = locations.path.split("/").slice(0, 2).join("/")

export const Languages = [
    {
        label: 'Please select your region and language'
    },
    {
        label: 'Global',
        sublabel: '(English)',
        link: '/'
    },
    {
        label: 'Germany',
        sublabel: '(Deutsch)',
        link: locationPath + '/de'
    },
    {
        label: 'China',
        sublabel: '(中文版)',
        link: locationPath + '/cn'
    },
    {
        label: 'Singapore',
        sublabel: '(中文版)',
        link: locationPath + '/sg'
    },
    {
        label: 'India',
        sublabel: '(हिन्दी)',
        link: locationPath + '/in'
    }
]