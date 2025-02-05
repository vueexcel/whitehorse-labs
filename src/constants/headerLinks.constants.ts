import constants from '@/constants/routes.constants'

export const { landingpage, resources, contact, caseStudies, solutions, about, locations } = constants

export default {
    en: [
        {
            label: 'Solutions',
            sublinks: [
                {
                    label: 'Testing Laboratory',
                    sublabel: 'State-of-the-art testing services designed to ensure product reliability and safety.',
                    link: `${solutions.path}/${solutions.testingLaboratory.path}`
                },
                {
                    label: 'Factory Auditing',
                    sublabel: 'Meticulous auditing services to ensure compliance, quality, and efficiency.',
                    link: `${solutions.path}/${solutions.factoryAuditing.path}`
                },
                {
                    label: 'Programming, Packaging & Logistics',
                    sublabel: 'Integrated solutions designed to optimize efficiency and ensure secure delivery.',
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
                    sublabel: 'Explore our Purpose, Values and the Promise we keep to our clients around the globe.',
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
                    sublabel: 'In the spirit of transparency, learn all the industry terminology here.',
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
    ],
    de: [
        {
            label: 'Lösungen',
            sublinks: [
                {
                    label: 'Prüflabor',
                    sublabel: 'Hochmoderne Prüfdienste zur Sicherstellung der Produktzuverlässigkeit und -sicherheit.',
                    link: `${solutions.path}/${solutions.testingLaboratory.path}`
                },
                {
                    label: 'Fabrik-Audits',
                    sublabel: 'Gründliche Audits zur Sicherstellung von Konformität, Qualität und Effizienz.',
                    link: `${solutions.path}/${solutions.factoryAuditing.path}`
                },
                {
                    label: 'Programmierung, Verpackung & Logistik',
                    sublabel: 'Integrierte Lösungen zur Optimierung der Effizienz und sicheren Lieferung.',
                    link: `${solutions.path}/${solutions.programmingPackaging.path}`
                },
                {
                    label: 'Schulung & Ausbildung',
                    sublabel: 'Umfassende Programme zur Erweiterung des Fachwissens und zur Einhaltung von Branchenstandards.',
                    link: `${solutions.path}/${solutions.trainingEducation.path}`
                }
            ]
        },
        {
            label: 'Fallstudien',
            link: caseStudies.path
        },
        {
            label: 'Über uns',
            sublinks: [
                {
                    label: 'Wer wir sind',
                    sublabel: 'Erfahren Sie mehr über uns und warum wir die globalen Hüter der technologischen Integrität sind.',
                    link: `${about.path}/${about.whoWeAre.path}`
                },
                {
                    label: 'Warum White Horse',
                    sublabel: 'Entdecken Sie unseren Zweck, unsere Werte und unser Versprechen an Kunden weltweit.',
                    link: `${about.path}/${about.whyWhiteHorseLabs.path}`
                },
                {
                    label: 'Werden Sie Teil unseres Teams',
                    sublabel: 'Helfen Sie mit, die Zuverlässigkeit und Sicherheit von Elektronik weltweit zu gewährleisten.',
                    link: `${about.path}/${about.joinOurTeam.path}`
                },
                {
                    label: 'Unsere Standorte',
                    sublabel: 'Unsere Mission kennt keine Grenzen – von Cleveland bis Bangalore.',
                    link: `${about.path}/${about.ourLocations.path}`
                }
            ]
        },
        {
            label: 'Ressourcen',
            sublinks: [
                {
                    label: 'Neuigkeiten & Einblicke',
                    sublabel: 'Entdecken Sie die neuesten Unternehmensnachrichten und Brancheneinblicke.',
                    link: `${resources.path}/${resources.newsInsight.path}`
                },
                {
                    label: 'Terminologie',
                    sublabel: 'Im Sinne der Transparenz lernen Sie hier alle branchenspezifischen Begriffe kennen.',
                    link: `${resources.path}/${resources.terminology.path}`
                },
                {
                    label: 'Globaler Kalender',
                    sublabel: "Planen Sie Ihre Bestellungen effizient mit den aktualisierten Öffnungszeiten unserer Standorte.",
                    link: `${resources.path}/${resources.globalCalendar.path}`
                },
                {
                    label: 'Downloads',
                    sublabel: 'Entdecken Sie unsere kostenlosen Download-Inhalte mit wertvollen Einblicken und Ressourcen.',
                    link: `${resources.path}/${resources.downloads.path}`
                }
            ]
        },
        {
            label: 'Kontakt',
            link: contact.path
        }
    ],
    cn: [
        {
            label: '解决方案',
            sublinks: [
                {
                    label: '测试实验室',
                    sublabel: '先进的测试服务，确保产品的可靠性和安全性。',
                    link: `${solutions.path}/${solutions.testingLaboratory.path}`
                },
                {
                    label: '工厂审核',
                    sublabel: '严格的审核服务，确保合规性、质量和效率。',
                    link: `${solutions.path}/${solutions.factoryAuditing.path}`
                },
                {
                    label: '编程、包装与物流',
                    sublabel: '一体化解决方案，优化效率并确保安全交付。',
                    link: `${solutions.path}/${solutions.programmingPackaging.path}`
                },
                {
                    label: '培训与教育',
                    sublabel: '全面的培训项目，提升专业知识，确保行业标准的执行。',
                    link: `${solutions.path}/${solutions.trainingEducation.path}`
                }
            ]
        },
        {
            label: '案例研究',
            link: caseStudies.path
        },
        {
            label: '关于我们',
            sublinks: [
                {
                    label: '公司介绍',
                    sublabel: '了解我们是谁，以及为何我们是全球技术诚信的守护者。',
                    link: `${about.path}/${about.whoWeAre.path}`
                },
                {
                    label: '为什么选择White Horse',
                    sublabel: '探索我们的使命、价值观以及我们对全球客户的承诺。',
                    link: `${about.path}/${about.whyWhiteHorseLabs.path}`
                },
                {
                    label: '加入我们',
                    sublabel: '加入我们，共同确保全球电子产品的可靠性和安全性。',
                    link: `${about.path}/${about.joinOurTeam.path}`
                },
                {
                    label: '我们的地点',
                    sublabel: '我们的使命跨越国界，从克利夫兰到班加罗尔。',
                    link: `${about.path}/${about.ourLocations.path}`
                }
            ]
        },
        {
            label: '资源中心',
            sublinks: [
                {
                    label: '新闻与见解',
                    sublabel: '了解最新的公司动态和行业见解。',
                    link: `${resources.path}/${resources.newsInsight.path}`
                },
                {
                    label: '术语解释',
                    sublabel: '本着透明的原则，在这里学习所有行业术语。',
                    link: `${resources.path}/${resources.terminology.path}`
                },
                {
                    label: '全球日历',
                    sublabel: '查看我们全球各地办事处的最新工作时间，方便您的订单规划。',
                    link: `${resources.path}/${resources.globalCalendar.path}`
                },
                {
                    label: '下载中心',
                    sublabel: '获取免费的下载资源，获取有价值的行业见解和信息。',
                    link: `${resources.path}/${resources.downloads.path}`
                }
            ]
        },
        {
            label: '联系我们',
            link: contact.path
        }
    ],
    sg: [
        {
            label: '解决方案',
            sublinks: [
                {
                    label: '测试实验室',
                    sublabel: '先进的测试服务，确保产品的可靠性和安全性。',
                    link: `${solutions.path}/${solutions.testingLaboratory.path}`
                },
                {
                    label: '工厂审核',
                    sublabel: '严格的审核服务，确保合规性、质量和效率。',
                    link: `${solutions.path}/${solutions.factoryAuditing.path}`
                },
                {
                    label: '编程、包装与物流',
                    sublabel: '一体化解决方案，优化效率并确保安全交付。',
                    link: `${solutions.path}/${solutions.programmingPackaging.path}`
                },
                {
                    label: '培训与教育',
                    sublabel: '全面的培训项目，提升专业知识，确保行业标准的执行。',
                    link: `${solutions.path}/${solutions.trainingEducation.path}`
                }
            ]
        },
        {
            label: '案例研究',
            link: caseStudies.path
        },
        {
            label: '关于我们',
            sublinks: [
                {
                    label: '公司介绍',
                    sublabel: '了解我们是谁，以及为何我们是全球技术诚信的守护者。',
                    link: `${about.path}/${about.whoWeAre.path}`
                },
                {
                    label: '为什么选择White Horse',
                    sublabel: '探索我们的使命、价值观以及我们对全球客户的承诺。',
                    link: `${about.path}/${about.whyWhiteHorseLabs.path}`
                },
                {
                    label: '加入我们',
                    sublabel: '加入我们，共同确保全球电子产品的可靠性和安全性。',
                    link: `${about.path}/${about.joinOurTeam.path}`
                },
                {
                    label: '我们的地点',
                    sublabel: '我们的使命跨越国界，从克利夫兰到班加罗尔。',
                    link: `${about.path}/${about.ourLocations.path}`
                }
            ]
        },
        {
            label: '资源中心',
            sublinks: [
                {
                    label: '新闻与见解',
                    sublabel: '了解最新的公司动态和行业见解。',
                    link: `${resources.path}/${resources.newsInsight.path}`
                },
                {
                    label: '术语解释',
                    sublabel: '本着透明的原则，在这里学习所有行业术语。',
                    link: `${resources.path}/${resources.terminology.path}`
                },
                {
                    label: '全球日历',
                    sublabel: '查看我们全球各地办事处的最新工作时间，方便您的订单规划。',
                    link: `${resources.path}/${resources.globalCalendar.path}`
                },
                {
                    label: '下载中心',
                    sublabel: '获取免费的下载资源，获取有价值的行业见解和信息。',
                    link: `${resources.path}/${resources.downloads.path}`
                }
            ]
        },
        {
            label: '联系我们',
            link: contact.path
        }
    ],
}

const locationPath = locations.path.split("/").slice(0, 2).join("/")

export const Languages = [
    {
        heading: 'Please select your region and language'
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