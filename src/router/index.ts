import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutMeView from '../views/AboutMeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/HomeView',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projectsView',
    name: 'projectsView',
    component: ProjectsView
  },
  {
    path: '/aboutMeView',
    name: 'aboutMeView',
    component: AboutMeView
  },
  {
    path: '/',
    redirect: '/HomeView'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
