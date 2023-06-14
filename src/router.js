import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/404.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
//   {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: Dashboard,
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: About,
//   },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
