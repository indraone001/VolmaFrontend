<template>
  <div>
    <sidebar />
    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-dashboard">
          <h2 class="mb-1">Dashboard</h2>

          <div class="row" v-if="dashboard.jumlah_pemilih">
            <!-- Banyak Pemilih -->
            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <font-awesome-icon :icon="['fas', 'users']" />
                  </h3>
                  <h6 class="card-title">Banyak Pemilih</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ dashboard.jumlah_pemilih }} Orang
                  </h6>
                </div>
              </div>
            </div>

            <!-- Orang yang telah memilih -->
            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <font-awesome-icon :icon="['fas', 'chart-pie']" />
                  </h3>
                  <h6 class="card-title">Telah Memilih</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ dashboard.voted }}%
                  </h6>
                </div>
              </div>
            </div>

            <!-- Jumlah calon -->
            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <font-awesome-icon :icon="['fas', 'user-tie']" />
                  </h3>
                  <h6 class="card-title">Jumlah Calon</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ dashboard.kandidat }} Orang
                  </h6>
                </div>
              </div>
            </div>

            <!-- Periode pemilihan -->
            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <font-awesome-icon :icon="['fas', 'user-clock']" />
                  </h3>
                  <h6 class="card-title">Periode</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ dashboard.periode }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h4 class="text-center not-found">Harap Tunggu...</h4>
          </div>

          <!-- Jumlah suara masing masing calon -->
          <section class="mt-4 py-4">
            <h3 class="pt-3">Perolehan Masing-masing Calon</h3>

            <div class="row card-groups" v-if="results.length">
              <div
                class="col-sm-12 col-md-12 col-lg-4 mb-4"
                v-for="result in results"
                :key="result.id_kandidat"
              >
                <div class="card card-kandidat">
                  <div class="card-body text-center">
                    <h5 class="name-kandidat">{{ result.nama_ketua }}</h5>
                    <h6 class="no-kandidat pb-4">
                      Nomor Urut {{ result.no_urut }}
                    </h6>

                    <div class="container pt-4">
                      <!-- Profile Ketua -->
                      <div class="row">
                        <div class="col-4 text-right">
                          <img
                            class="card-profile"
                            :src="
                              '/profilePicture/' + result.img_ketua + '.jpg'
                            "
                            alt=""
                            width="100%"
                          />
                        </div>
                        <div class="col-8 text-left my-auto">
                          <h5 class="mb-0">Ketua</h5>
                          <p class="mb-0">{{ result.nama_ketua }}</p>
                        </div>
                      </div>

                      <br />

                      <!-- Profile Wakil -->
                      <div class="row">
                        <div class="col-4 text-right">
                          <img
                            class="card-profile"
                            :src="
                              '/profilePicture/' + result.img_wakil + '.jpg'
                            "
                            alt=""
                            width="100%"
                          />
                        </div>
                        <div class="col-8 text-left my-auto">
                          <h5 class="mb-0">Wakil</h5>
                          <p class="mb-0">{{ result.nama_wakil }}</p>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <!-- Hasil -->
                    <div class="row card-count">
                      <div class="col-6">
                        <h5>
                          <font-awesome-icon :icon="['fas', 'user-friends']" />
                        </h5>
                        <h6>Jumlah Vote</h6>
                        <p>{{ result.jumlah }} orang</p>
                      </div>
                      <div class="col-6">
                        <h5>
                          <font-awesome-icon :icon="['fas', 'percent']" />
                        </h5>
                        <h6>Persentase</h6>
                        <p>{{ result.persentase }}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <h4 class="text-center not-found2 my-4">Harap Tunggu...</h4>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      results: [],
      dashboard: [],
    };
  },
  created() {
    this.getDashboard();
    this.getResults();
  },
  methods: {
    /**
     * @return Hasil perolehan vote
     *
     */
    getDashboard() {
      const options = {
        url: "https://volma01.herokuapp.com/dashboard",
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.dashboard = response.data.data;
          console.log("Dashboard: ", this.dashboard);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * @return Hasil perolehan setiap kandidat
     *
     */
    getResults() {
      const options = {
        url: "https://volma01.herokuapp.com/result",
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.results = response.data.data.kandidat;
          console.log("Result: ", this.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped src="../assets/css/views/dashboard.css">
</style>
