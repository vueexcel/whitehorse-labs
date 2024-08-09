import { createRouter, createWebHistory } from 'vue-router';
import constants, { getTitle } from '@/constants/routes.constants'

import ScrollTrigger from 'gsap/ScrollTrigger';

const {
  landingpage,
  resources,
  contact,
  caseStudies,
  solutions,
  about
} = constants;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing Page
    {
      path: landingpage.path,
      name: landingpage.name,
      component: () => import('../views/HomeView.vue')
    },

    // Solutions
    {
      path: solutions.path,
      children: [
        {
          path: solutions.testingLaboratory.path,
          name: solutions.testingLaboratory.name,
          component: () => import('../views/solutions/TestingLaboratoryView.vue')
        },
        {
          path: solutions.factoryAuditing.path,
          name: solutions.factoryAuditing.name,
          component: () => import('../views/solutions/FactoryAuditingView.vue')
        },
        {
          path: solutions.programmingPackaging.path,
          name: solutions.programmingPackaging.name,
          component: () => import('../views/solutions/ProgrammingPackagingView.vue')
        },
        {
          path: solutions.trainingEducation.path,
          name: solutions.trainingEducation.name,
          component: () => import('../views/solutions/TrainingEducationView.vue')
        }
      ]
    },

    // CaseStudy
    {
      path: caseStudies.path,
      children: [
        {
          path: '',
          name: caseStudies.caseStudy.name,
          component: () => import('../views/case-study/CaseStudyView.vue')
        },
        {
          path: caseStudies.caseStudyDetail.path,
          name: caseStudies.caseStudyDetail.name,
          component: () => import('../views/case-study/CaseStudyDetailView.vue')
        }
      ]
    },

    // About
    {
      path: about.path,
      children: [
        {
          path: about.whoWeAre.path,
          name: about.whoWeAre.name,
          component: () => import('../views/about/WhoWeAreView.vue')
        },
        {
          path: about.whyWhiteHorseLabs.path,
          name: about.whyWhiteHorseLabs.name,
          component: () => import('../views/about/WhyWHLView.vue')
        },
        {
          path: about.joinOurTeam.path,
          name: about.joinOurTeam.name,
          component: () => import('../views/about/JoinOurTeamView.vue')
        },
        {
          path: about.ourLocations.path,
          name: about.ourLocations.name,
          component: () => import('../views/about/OurLocationView.vue')
        }
      ]
    },

    // Resources
    {
      path: resources.path,
      children: [
        {
          path: resources.newsInsight.path,
          name: resources.newsInsight.name,
          component: () => import('../views/resources/NewsView.vue')
        },
        {
          path: resources.newsInsight.newsInsightDetail.path,
          name: resources.newsInsight.newsInsightDetail.name,
          component: () => import('../views/resources/NewsDetailsView.vue')
        },
        {
          path: resources.terminology.path,
          name: resources.terminology.name,
          component: () => import('../views/resources/TerminologyView.vue')
        },
        {
          path: resources.globalCalendar.path,
          name: resources.globalCalendar.name,
          component: () => import('../views/resources/CalendarView.vue')
        },
        {
          path: resources.downloads.path,
          name: resources.downloads.name,
          component: () => import('../views/resources/DownloadView.vue')
        }
      ]
    },

    // Contact
    {
      path: contact.path,
      name: contact.name,
      component: () => import('../views/ContactView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

router.afterEach(() => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 80)
});

router.beforeEach((_to, _from, next) => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  document.title = getTitle(_to.name as string);
  next();
});

export default router;
