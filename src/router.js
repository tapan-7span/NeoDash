import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/404.vue';
import Login from './views/Login.vue';
import Info from './views/info.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
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
