import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../state/Store'
import { inject } from 'vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pulse-survey',
      name: 'pulse-survey',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PulseSurvey.vue'),
      meta: {
        requiresAuth: true // this route requires authentication
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue'),
      meta: {
        requiresAuth: true // this route requires authentication
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/UnavailableView.vue'),
      meta: {
        requiresAuth: true // this route requires authentication
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.loggedIn;
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    // if route requires authentication and user is not logged in, redirect to login page
    next('/');
  } else {
    next();
  }
});


export default router
