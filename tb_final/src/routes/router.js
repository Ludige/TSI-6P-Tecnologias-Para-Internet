import { createRouter, createWebHistory } from "vue-router";

import LoginScreen from "../screens/LoginScreen.vue";
import PetShop from "../screens/PetShopScreen.vue";

const routes = [
    { path: "/", name: "home", component: PetShop},
    { path: "/login", name: "login", component: LoginScreen},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;