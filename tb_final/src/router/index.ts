import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import PetShop from '../screens/PetShop.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: PetShop},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router