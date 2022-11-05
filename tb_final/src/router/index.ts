import { createRouter, createWebHashHistory } from "vue-router";

var PetShop = require('../screens/PetShop.vue');
var Login = require('../screens/LoginScreen.vue');


// const routes: Array<RouteRecordRaw> = [
//     { path: '/', component: PetShop},
// ]

const routes = [{
    path: '/',
    component: PetShop,
    children: [{ path: '', name: 'index', component: PetShop}]
},
{
    path: '/login',
    component: Login,
    children: [{ path: '', name: 'login', component: Login}]
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router