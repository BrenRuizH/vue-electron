import { createRouter, createWebHistory } from "vue-router";

import ListComponent from "./pages/ListComponent.vue";
import ContactComponent from "./pages/ContactComponent.vue";

const routes = [
    {
        name: 'list',
        path: '/',
        component: ListComponent
    },
    {
        name: 'contact',
        path: '/contact',
        component: ContactComponent
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
);

export default router;