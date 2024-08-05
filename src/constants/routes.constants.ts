export default {
    landingpage: {
        path: '/',
        name: 'home'
    },
    solutions: {
        path: '/solutions',
        testingLaboratory: {
            path: 'testing-laboratory',
            name: 'testing-laboratory'
        },
        factoryAuditing: {
            path: 'factory-auditing',
            name: 'factory-auditing'
        },
        programmingPackaging: {
            path: 'programming-packaging',
            name: 'programming-packaging'
        },
        trainingEducation: {
            path: 'training-education',
            name: 'training-education'
        }
    },
    caseStudies: {
        path: '/case-studies',
        caseStudy: {
            name: 'case-study',
        },
        caseStudyDetail: {
            path: ':id',
            name: 'case-study-detail'
        }
    },
    about: {
        path: '/about',
        whoWeAre: {
            path: 'who-we-are',
            name: 'who-we-are'
        },
        whyWhiteHorseLabs: {
            path: 'why-white-horse-labs',
            name: 'why-white-horse-labs'
        },
        joinOurTeam: {
            path: 'join-our-team',
            name: 'join-our-team'
        },
        ourLocations: {
            path: 'our-locations',
            name: 'our-locations'
        }
    },
    resources: {
        path: '/resources',
        newsInsight: {
            path: 'news-insights',
            name: 'news-insights',

            newsInsightDetail: {
                path: 'news-insight/:id',
                name: 'news-insight'
            }
        },
        downloads: {
            path: 'downloads',
            name: 'downloads'
        },
        terminology: {
            path: 'terminology',
            name: 'terminology'
        },
        globalCalendar: {
            path: 'global-calendar',
            name: 'global-calendar'
        }
    },
    contact: {
        path: '/contact',
        name: 'contact'
    }
}