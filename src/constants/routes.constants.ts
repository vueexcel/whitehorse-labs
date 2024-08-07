export const SITE_NAME = 'White Horse Labs'; // WHL

export const title = (name: string) => `${name} | ${SITE_NAME}`

export const getTitle = (name: string) => {
    for (const value of Object.values(ROUTES)) {
        if (typeof value === 'object') {
            for (const subValue of Object.values(value)) {
                // @ts-ignore
                if (subValue.name && subValue.name === name) {
                    // @ts-ignore
                    return subValue.title;
                }
            }
        }

        // @ts-ignore
        if (value.name && value.name === name) {
            // @ts-ignore
            return value.title;
        }
    }

    return title('404 Not Found')
}

const ROUTES = {
    landingpage: {
        path: '/',
        name: 'home',
        title: title('Home')
    },
    solutions: {
        path: '/solutions',
        testingLaboratory: {
            path: 'testing-laboratory',
            name: 'testing-laboratory',
            title: title('Testing Laboratory')
        },
        factoryAuditing: {
            path: 'factory-auditing',
            name: 'factory-auditing',
            title: title('Factory Auditing')
        },
        programmingPackaging: {
            path: 'programming-packaging',
            name: 'programming-packaging',
            title: title('Programming, Packaging & Logitics')
        },
        trainingEducation: {
            path: 'training-education',
            name: 'training-education',
            title: title('Training & Education')
        }
    },
    caseStudies: {
        path: '/case-studies',
        caseStudy: {
            name: 'case-study',
            title: title('Case Studies')
        },
        caseStudyDetail: {
            path: ':id',
            name: 'case-study-detail',
            title: title('Case Study')
        }
    },
    about: {
        path: '/about',
        whoWeAre: {
            path: 'who-we-are',
            name: 'who-we-are',
            title: title('Who We Are')
        },
        whyWhiteHorseLabs: {
            path: 'why-white-horse-labs',
            name: 'why-white-horse-labs',
            title: title('Why White Horse')
        },
        joinOurTeam: {
            path: 'join-our-team',
            name: 'join-our-team',
            title: title('Join Our Team')
        },
        ourLocations: {
            path: 'our-locations',
            name: 'our-locations',
            title: title('Our Locations')
        }
    },
    resources: {
        path: '/resources',
        newsInsight: {
            path: 'news-insights',
            name: 'news-insights',
            title: title('News & Insights'),

            newsInsightDetail: {
                path: 'news-insight/:id',
                name: 'news-insight',
                title: title('News & Insights')
            }
        },
        downloads: {
            path: 'downloads',
            name: 'downloads',
            title: title('Downloads')
        },
        terminology: {
            path: 'terminology',
            name: 'terminology',
            title: title('Terminology')
        },
        globalCalendar: {
            path: 'global-calendar',
            name: 'global-calendar',
            title: title('Global Calendar')
        }
    },
    contact: {
        path: '/contact',
        name: 'contact',
        title: title('Contact')
    }
}

export default ROUTES