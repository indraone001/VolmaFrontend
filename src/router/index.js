import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue";
import KelolaKandidat from "../views/KelolaKandidat.vue";
import KelolaPemilih from "../views/KelolaPemilih.vue";

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
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
