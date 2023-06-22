import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home.vue';
import NotFound from '@/view/404.vue';
import Login from '@/view/Login.vue';
import Info from '@/view/Info.vue';
import Users from '@/view/Users.vue';
import Tasks from '@/view/Tasks.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
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
