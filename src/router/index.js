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
import TambahKandidat from "../views/TambahKandidat.vue";
import KelolaMahasiswa from "../views/KelolaMahasiswa.vue";
import TambahMahasiswa from "../views/TambahMahasiswa.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: "Volma | Login"
    }
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
    meta: {
      title: "Volma | Landing"
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: "Volma | Dashboard"
    }
  },
  {
    path: '/peraturan',
    name: 'Peraturan',
    component: Peraturan,
    meta: {
      title: "Volma | Peraturan"
    }
  },
  {
    path: '/statistik-vote',
    name: 'StatistikVote',
    component: StatistikVote,
    meta: {
      title: "Volma | Hasil Vote"
    }
  },
  {
    path: '/pemilih',
    name: 'KelolaPemilih',
    component: KelolaPemilih,
    meta: {
      title: "Volma | Pemilih"
    }
  },
  {
    path: '/tambah-pemilih',
    name: 'TambahPemilih',
    component: TambahPemilih,
    meta: {
      title: "Volma | Tambah Pemilih"
    }
  },
  {
    path: '/kandidat',
    name: 'KelolaKandidat',
    component: KelolaKandidat,
    meta: {
      title: "Volma | Kandidat"
    }
  },
  {
    path: '/tambah-kandidat',
    name: 'TambahKandidat',
    component: TambahKandidat,
    meta: {
      title: "Volma | Tambah Kandidat"
    }
  },
  {
    path: '/mahasiswa',
    name: 'KelolaMahasiswa',
    component: KelolaMahasiswa,
    meta: {
      title: "Volma | Mahasiswa"
    }
  },
  {
    path: '/tambah-mahasiswa',
    name: 'TambahMahasiswa',
    component: TambahMahasiswa,
    meta: {
      title: "Volma | Tambah Mahasiswa"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router
