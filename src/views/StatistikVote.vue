<template>
  <div>
    <div class="main-content">
      <header>
        <navbar-user />
      </header>

      <main>
        <div class="head-content">
          <div class="container">
            <h5>Hasil</h5>
            <h3 class="pb-4">Pemilihan Umum Ketua</h3>

            <div class="row counting text-center">
              <!-- Jumlah Pemilih -->
              <div class="col-6 col-md-6 col-lg-3 mb-3">
                <h2><font-awesome-icon :icon="['fas', 'users']" /></h2>
                <h6>Banyak Pemilih</h6>
                <p>{{ dashboard.jumlah_pemilih }} Orang</p>
              </div>

              <!-- Telah Memilih -->
              <div class="col-6 col-md-6 col-lg-3 mb-3">
                <h2><font-awesome-icon :icon="['fas', 'chart-pie']" /></h2>
                <h6>Telah Memilih</h6>
                <p>{{ dashboard.voted }}%</p>
              </div>

              <!-- Jumlah Kandidat -->
              <div class="col-6 col-md-6 col-lg-3 mb-3">
                <h2><font-awesome-icon :icon="['fas', 'user-tie']" /></h2>
                <h6>Jumlah Calon</h6>
                <p>{{ dashboard.kandidat }} Orang</p>
              </div>

              <!-- Periode -->
              <div class="col-6 col-md-6 col-lg-3 mb-3">
                <h2><font-awesome-icon :icon="['fas', 'user-clock']" /></h2>
                <h6>Periode</h6>
                <p>{{ dashboard.periode }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="body-content pt-4">
          <div class="container">
            <h3 class="pt-4">Perolehan Masing-masing Calon</h3>

            <div class="row card-groups">
              <div class="row card-groups">
                <div
                  class="col-sm-12 col-md-12 col-lg-4 mb-4"
                  v-for="result in results"
                  :key="result.id_kandidat"
                >
                  <div class="card card-kandidat">
                    <div class="card-body text-center">
                      <h5 class="name-kandidat">{{ result.nama_ketua }}</h5>
                      <h6 class="no-kandidat pb-4">
                        Nomor Urut {{ result.id_kandidat }}
                      </h6>

                      <div class="container pt-4">
                        <!-- Ketua -->
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

                        <!-- Wakil -->
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

                      <!-- Hasil vote masing-masing kandidat -->
                      <div class="row card-count">
                        <div class="col-6">
                          <h5>
                            <font-awesome-icon
                              :icon="['fas', 'user-friends']"
                            />
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
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarUser from "@/components/NavbarUser.vue";

export default {
  name: "StatistikVote",
  components: {
    NavbarUser,
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
     * @return dataset dashboard yang telah didaftarkan oleh admin.
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
          console.log(this.dashboard);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * @return dataset result yang telah didaftarkan oleh admin.
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
          console.log(this.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped src="../assets/css/views/statistikVote.css">
</style>
