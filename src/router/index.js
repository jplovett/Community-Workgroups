import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MembersView from '../views/MembersView.vue';
import WorkgroupsView from '../views/WorkgroupsView.vue';
const routes = [
  {
    path: '/', name: 'Home',
    component: HomeView
  },
  {
    path: '/about', name: 'About',
    component: AboutView
  },
  {
    path: '/members', name: 'Members',
    component: MembersView
  },
  {
    path: '/workgroups', name: 'Workgroups',
    component: WorkgroupsView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router