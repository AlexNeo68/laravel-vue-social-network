import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/index",
        component: () => import("../pages/Index.vue"),
    },
    {
        path: "/page",
        component: () => import("../pages/Page.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
