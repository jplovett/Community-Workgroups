import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Todos from "../views/Todos.vue";
import FetchDemo from "../views/FetchDemo.vue";
import About from "../views/About.vue";
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