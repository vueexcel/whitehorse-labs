import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/terminology',
      name: 'terminology',
      component: () => import('../views/TerminologyView.vue')
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: () => import('../views/DownloadView.vue')
    },
    {
      path: '/global-calendar',
      name: 'global-calendar',
      component: () => import('../views/CalendarView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
});

export default router;
