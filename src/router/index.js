import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Todos from "../components/Todos.vue";
import FetchDemo from "../components/FetchDemo.vue";
import About from "../components/About.vue";
import DefaultFooter from "../components/DefaultFooter.vue";
import TodosFooter from "../components/TodosFooter.vue";

const routes = [
    {
        path: "/",
        components: { default: Home, footer: DefaultFooter }
    },
    {
        path: "/todos",
        components: { default: Todos, footer: TodosFooter }
    },
    {
        path: "/fetch",
        components: { default: FetchDemo, footer: DefaultFooter }
    },
    {
        path: "/about",
        components: { default: About, footer: DefaultFooter }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;