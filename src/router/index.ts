import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },

    // Resources
    {
      path: '/resources',
      name: 'resources',
      children: [
        {
          path: 'news-insights',
          name: 'news',
          component: () => import('../views/resources/NewsView.vue')
        },
        {
          path: 'news-insight/:id',
          name: 'news-detail',
          component: () => import('../views/resources/NewsDetailsView.vue')
        },
        {
          path: 'terminology',
          name: 'terminology',
          component: () => import('../views/resources/TerminologyView.vue')
        },
        {
          path: 'global-calendar',
          name: 'global-calendar',
          component: () => import('../views/resources/CalendarView.vue')
        },
        {
          path: 'downloads',
          name: 'downloads',
          component: () => import('../views/resources/DownloadView.vue')
        }
      ]
    },

    // Solutions
    {
      path: '/solutions',
      name: 'solutions',
      children: [
        {
          path: 'testing-laboratory',
          name: 'testing-laboratory',
          component: () => import('../views/solutions/TestingLaboratoryView.vue')
        }
      ]
    },

    // ABout
    {
      path: '/about',
      name: 'about',
      children: [
        {
          path: 'who-we-are',
          name: 'who-we-are',
          component: () => import('../views/about/WhoWeAreView.vue')
        }
      ]
    },

    // case study
    {
      path: '/case-studies',
      children: [
        {
          path: '',
          name: 'case-study',
          component: () => import('../views/case-study/CaseStudyView.vue')
        },
        {
          path: ':id',
          name: 'case-study-detail',
          component: () => import('../views/case-study/CaseStudyDetailView.vue')
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
});

export default router;
