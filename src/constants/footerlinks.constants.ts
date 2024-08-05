import constants from '@/constants/routes.constants'

export const {
    landingpage,
    resources,
    contact,
    caseStudies,
    solutions,
    about
} = constants

export default [
    {
        title: 'Solutions',
        href: solutions.path,
        links: [
            {
                name: 'Testing Laboratory',
                href: solutions.testingLaboratory.path
            },
            {
                name: 'Factory Auditing',
                href: solutions.factoryAuditing.path
            },
            {
                name: 'Programming, Packaging & Logistics',
                href: solutions.programmingPackaging.path
            },
            {
                name: 'Training & Education',
                href: solutions.trainingEducation.path
            }
        ]
    },
    {
        title: 'About',
        href: about.path,
        links: [
            {
                name: 'Who We Are',
                href: about.whoWeAre.path
            },
            {
                name: 'Why White Horse Labs?',
                href: about.whyWhiteHorseLabs.path
            },
            {
                name: 'Join Our Team',
                href: about.joinOurTeam.path
            },
            {
                name: 'Our Locations',
                href: about.ourLocations.path
            }
        ]
    },
    {
        title: 'Case Studies',
        href: caseStudies.path,
        links: [
            {
                name: 'Boeing',
                href: 'boeing'
            },
            {
                name: 'Tesla',
                href: 'tesla'
            },
            {
                name: 'General Motors',
                href: 'general-motors'
            },
            {
                name: 'NASA',
                href: 'nasa'
            }
        ]
    },
    {
        title: 'Resources',
        href: resources.path,
        links: [
            {
                name: 'News & Insights',
                href: resources.newsInsight.path
            },
            {
                name: 'Downloads',
                href: resources.downloads.path
            },
            {
                name: 'Terminology',
                href: resources.terminology.path
            },
            {
                name: 'Global Calendar',
                href: resources.globalCalendar.path
            }
        ]
    }
]