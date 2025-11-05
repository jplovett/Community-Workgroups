import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import MemberList from './views/MembersView.vue';
import MemberItem from './views/MemberView.vue';
import WorkgroupList from './views/WorkgroupsView.vue';
import WorkgroupItem from './views/WorkgroupView.vue';
import Colors from './views/ColorsView.vue';
import './assets/scss/main.scss';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '/brand', name: 'brand', component: HomeView },
        { path: '/members', name: 'Members', component: MemberList },
        { path: '/member/:id', name: 'Member', component: MemberItem },
        { path: '/workgroup/:id', name: 'Workgroup', component: WorkgroupItem },
        { path: '/Workgroups', name: 'Workgroups', component: WorkgroupList },
        { path: '/colors', name: 'Colors', component: Colors },
    ],
});

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')