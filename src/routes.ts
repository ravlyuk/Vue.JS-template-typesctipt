import {createRouter, createWebHashHistory} from "vue-router"; // createWebHistory,

const routerHistory = createWebHashHistory();

import HomePage from "@/pages/home.vue";
import AboutPage from "@/pages/about.vue";
import NotFound from "@/pages/notFound.vue";

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/:CatchAll(.*)',
            name: "404",
            component: NotFound,
        }
    ]
});

export default routers;