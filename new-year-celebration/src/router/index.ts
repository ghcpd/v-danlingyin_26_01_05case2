import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/pages/HistoryPage.vue'),
    meta: { title: 'History' }
  },
  {
    path: '/traditions',
    name: 'traditions',
    component: () => import('@/pages/TraditionsPage.vue'),
    meta: { title: 'Traditions' }
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('@/pages/EventsPage.vue'),
    meta: { title: 'Events' }
  },
  {
    path: '/events/:id',
    name: 'event-detail',
    component: () => import('@/pages/EventDetailPage.vue'),
    meta: { title: 'Event Details' },
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: { title: 'Page Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string | undefined
  document.title = title 
    ? `${title} | New Year Cultural Celebration` 
    : 'New Year Cultural Celebration'
  next()
})

export default router
