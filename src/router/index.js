import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../views/Login.vue";
import Landing from "../views/Landing.vue";
import Dashboard from "../views/Dashboard.vue";
import Peraturan from "../views/Peraturan.vue";
import StatistikVote from "../views/StatistikVote.vue";
import KelolaPemilih from "../views/KelolaPemilih.vue";
import TambahPemilih from "../views/TambahPemilih.vue";
import KelolaKandidat from "../views/KelolaKandidat.vue";
import KelolaMahasiswa from "../views/KelolaMahasiswa.vue";
import TambahMahasiswa from "../views/TambahMahasiswa.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/peraturan',
    name: 'Peraturan',
    component: Peraturan
  },
  {
    path: '/statistik-vote',
    name: 'StatistikVote',
    component: StatistikVote
  },
  {
    path: '/pemilih',
    name: 'KelolaPemilih',
    component: KelolaPemilih
  },
  {
    path: '/tambah-pemilih',
    name: 'TambahPemilih',
    component: TambahPemilih
  },
  {
    path: '/kandidat',
    name: 'KelolaKandidat',
    component: KelolaKandidat
  },
  {
    path: '/mahasiswa',
    name: 'KelolaMahasiswa',
    component: KelolaMahasiswa
  },
  {
    path: '/tambah-mahasiswa',
    name: 'TambahMahasiswa',
    component: TambahMahasiswa
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
