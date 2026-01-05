import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/pages/HistoryPage.vue')
    },
    {
      path: '/traditions',
      name: 'traditions',
      component: () => import('@/pages/TraditionsPage.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/pages/EventsPage.vue')
    },
    {
      path: '/events/:id',
      name: 'event-detail',
      component: () => import('@/pages/EventDetailPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
