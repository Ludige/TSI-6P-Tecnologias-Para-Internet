import { createRouter, createWebHistory } from "vue-router";


import Home from "../screens/main.vue";
import Tela1 from "../screens/screen_one.vue";
import Tela2 from "../screens/screen_two.vue";
import Tela3 from "../screens/screen_three.vue";

const routes = [
    { path: "/", name: "ScreenHome", component: Home},
    { path: "/um", name: "ScreenOne", component: Tela1},
    { path: "/dois", name: "ScreenTwo", component: Tela2},
    { path: "/tres", name: "ScreenThree", component: Tela3},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;