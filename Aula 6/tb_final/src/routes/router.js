import { createRouter, createWebHistory } from "vue-router";


import Home from "../screens/main.vue";
import Tela1 from "../screens/Tela1.vue";
import Tela2 from "../screens/Tela2.vue";
import Tela3 from "../screens/Tela3.vue";

const routes = [
    { path: "/", name: "home", component: Home},
    { path: "/um", name: "tela1", component: Tela1},
    { path: "/dois", name: "tela2", component: Tela2},
    { path: "/tres", name: "tela3", component: Tela3},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;