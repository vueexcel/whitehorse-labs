import constants from '@/constants/routes.constants'

export const {
    landingpage,
    resources,
    contact,
    caseStudies,
    solutions,
    about
} = constants

export const enMenu = [
    {
        title: 'Solutions',
        href: solutions.path,
        links: [
            { name: 'Testing Laboratory', href: solutions.testingLaboratory.path },
            { name: 'Factory Auditing', href: solutions.factoryAuditing.path },
            { name: 'Programming, Packaging & Logistics', href: solutions.programmingPackaging.path },
            { name: 'Training & Education', href: solutions.trainingEducation.path }
        ]
    },
    {
        title: 'About',
        href: about.path,
        links: [
            { name: 'Who We Are', href: about.whoWeAre.path },
            { name: 'Why White Horse Labs?', href: about.whyWhiteHorseLabs.path },
            { name: 'Join Our Team', href: about.joinOurTeam.path },
            { name: 'Our Locations', href: about.ourLocations.path }
        ]
    },
    {
        title: 'Case Studies',
        href: caseStudies.path,
        links: [
            { name: 'Boeing', href: 'boeing' },
            { name: 'Tesla', href: 'tesla' },
            { name: 'General Motors', href: 'general-motors' },
            { name: 'NASA', href: 'nasa' }
        ]
    },
    {
        title: 'Resources',
        href: resources.path,
        links: [
            { name: 'News & Insights', href: resources.newsInsight.path },
            { name: 'Downloads', href: resources.downloads.path },
            { name: 'Terminology', href: resources.terminology.path },
            { name: 'Global Calendar', href: resources.globalCalendar.path }
        ]
    }
]

export const cnMenu = [
    {
        title: '解决方案',
        href: solutions.path,
        links: [
            { name: '测试实验室', href: solutions.testingLaboratory.path },
            { name: '工厂审核', href: solutions.factoryAuditing.path },
            { name: '编程、包装和物流', href: solutions.programmingPackaging.path },
            { name: '培训与教育', href: solutions.trainingEducation.path }
        ]
    },
    {
        title: '关于我们',
        href: about.path,
        links: [
            { name: '我们是谁', href: about.whoWeAre.path },
            { name: '为什么选择White Horse Labs？', href: about.whyWhiteHorseLabs.path },
            { name: '加入我们的团队', href: about.joinOurTeam.path },
            { name: '我们的地点', href: about.ourLocations.path }
        ]
    },
    {
        title: '案例研究',
        href: caseStudies.path,
        links: [
            { name: '波音', href: 'boeing' },
            { name: '特斯拉', href: 'tesla' },
            { name: '通用汽车', href: 'general-motors' },
            { name: '美国国家航空航天局', href: 'nasa' }
        ]
    },
    {
        title: '资源',
        href: resources.path,
        links: [
            { name: '新闻与见解', href: resources.newsInsight.path },
            { name: '下载', href: resources.downloads.path },
            { name: '术语', href: resources.terminology.path },
            { name: '全球日历', href: resources.globalCalendar.path }
        ]
    }
]

export const deMenu = [
    {
        title: 'Lösungen',
        href: solutions.path,
        links: [
            { name: 'Testlabor', href: solutions.testingLaboratory.path },
            { name: 'Fabrikprüfung', href: solutions.factoryAuditing.path },
            { name: 'Programmierung, Verpackung & Logistik', href: solutions.programmingPackaging.path },
            { name: 'Schulung und Ausbildung', href: solutions.trainingEducation.path }
        ]
    },
    {
        title: 'Über uns',
        href: about.path,
        links: [
            { name: 'Wer wir sind', href: about.whoWeAre.path },
            { name: 'Warum White Horse Labs?', href: about.whyWhiteHorseLabs.path },
            { name: 'Werde Teil unseres Teams', href: about.joinOurTeam.path },
            { name: 'Unsere Standorte', href: about.ourLocations.path }
        ]
    },
    {
        title: 'Fallstudien',
        href: caseStudies.path,
        links: [
            { name: 'Boeing', href: 'boeing' },
            { name: 'Tesla', href: 'tesla' },
            { name: 'General Motors', href: 'general-motors' },
            { name: 'NASA', href: 'nasa' }
        ]
    },
    {
        title: 'Ressourcen',
        href: resources.path,
        links: [
            { name: 'Nachrichten und Einblicke', href: resources.newsInsight.path },
            { name: 'Downloads', href: resources.downloads.path },
            { name: 'Terminologie', href: resources.terminology.path },
            { name: 'Globaler Kalender', href: resources.globalCalendar.path }
        ]
    }
]
