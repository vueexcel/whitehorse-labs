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
          path: 'news',
          name: 'news',
          component: () => import('../views/NewsView.vue')
        },
        {
          path: 'terminology',
          name: 'terminology',
          component: () => import('../views/TerminologyView.vue')
        },
        {
          path: 'global-calendar',
          name: 'global-calendar',
          component: () => import('../views/CalendarView.vue')
        },
        {
          path: 'downloads',
          name: 'downloads',
          component: () => import('../views/DownloadView.vue')
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
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
});

export default router;
