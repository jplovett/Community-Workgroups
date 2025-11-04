import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MemberList from '../views/MembersView.vue';
import MemberDetail from '../views/MemberItemView.vue';
import WorkgroupList from '../views/WorkgroupsView.vue';
import WorkgroupDetail from '../views/WorkgroupItemView.vue';
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
    component: MemberList
  },
  {
    path: '/member/:id', name: 'MemberDetail',
    component: MemberDetail
  },
  {
    path: '/workgroup/:id', name: 'WorkgroupDetail',
    component: WorkgroupDetail
  },
  {
    path: '/Workgroups', name: 'Workgroups',
    component: WorkgroupList
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router