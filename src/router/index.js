import Vue from "vue";
import VueRouter from "vue-router";
import HeroView from "../views/HeroView"
import OurCoffeeView from "../views/OurCoffeeView"
import Goods from "../views/Goods"
import Contacts from "../views/Contacts"
import ThanksPage from "../views/ThanksPage"

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HeroView},
    { path: '/our-coffee', component: OurCoffeeView},
    { path: '/goods', component: Goods},
    { path: '/contacts', component: Contacts},
    { path: '/thanks-page', component: ThanksPage},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router