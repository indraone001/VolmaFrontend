import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue";
import KelolaKandidat from "../views/KelolaKandidat.vue";
import KelolaPemilih from "../views/KelolaPemilih.vue";
import Dashboard from "../views/Dashboard.vue";
import Landing from "../views/Landing.vue";
import StatistikVote from "../views/StatistikVote.vue";
import Peraturan from "../views/Peraturan.vue";
/**
* 
* File untuk mengetur path.
* 
*/
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/kandidat',
    name: 'KelolaKandidat',
    component: KelolaKandidat
  },
  {
    path: '/pemilih',
    name: 'KelolaPemilih',
    component: KelolaPemilih
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/statistik-vote',
    name: 'StatistikVote',
    component: StatistikVote
  },
  {
    path: '/peraturan',
    name: 'Peraturan',
    component: Peraturan
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
