<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-kandidat">
          <h2 class="mb-1">Dashboard</h2>
          <div class="row">
            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <!-- <i class="fas fa-users"></i> -->
                    <font-awesome-icon :icon="['fas', 'users']" />
                  </h3>
                  <h6 class="card-title">Banyak Pemilih</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ dashboard.jumlah_pemilih }} Orang
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <!-- <i class="fas fa-chart-pie"></i> -->
                    <font-awesome-icon :icon="['fas', 'chart-pie']" />
                  </h3>
                  <h6 class="card-title">Telah Memilih</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ dashboard.voted }}%
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <!-- <i class="fas fa-user-tie"></i> -->
                    <font-awesome-icon :icon="['fas', 'user-tie']" />
                  </h3>
                  <h6 class="card-title">Jumlah Calon</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ dashboard.kandidat }} Orang
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                    <!-- <i class="fas fa-user-clock"></i> -->
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

          <section class="mt-4 pt-4">
            <h3 class="pt-3">Perolehan Masing-masing Calon</h3>

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
                      <div class="row">
                        <div class="col-4 text-right">
                          <img
                            class="card-profile"
                            :src="'/profilePicture/'+result.img_ketua+'.jpg'"
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

                      <div class="row">
                        <div class="col-4 text-right">
                          <img
                            class="card-profile"
                            :src="'/profilePicture/'+result.img_wakil+'.jpg'"
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
                    <div class="row card-count">
                      <div class="col-6">
                        <h5>
                          <!-- <i class="fas fa-user-friends"></i> -->
                          <font-awesome-icon :icon="['fas', 'user-friends']" />
                        </h5>
                        <h6>Jumlah Vote</h6>
                        <p>{{ result.jumlah }} orang</p>
                      </div>
                      <div class="col-6">
                        <h5>
                          <!-- <i class="fas fa-percent"></i> -->
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
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";

import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    NavbarAdmin,
    Sidebar,
  },
  data() {
    return {
      dashboard: [],
      results: [],
    };
  },
  created() {
    this.getDashboard();
    this.getResults();
  },
  methods: {
    /*
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
    /*
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

<style scoped>
.main-content {
  height: 100%;
  margin-left: 16%;
  transition: margin-left 200ms;
  background: #eefafd;
}
.main-kandidat {
  padding-top: 3rem;
}
.main-kandidat h2 {
  font-weight: 600;
}
.card {
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 0;
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.col-6 .card,
.col-lg-4 .card {
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.card-profile {
  border-radius: 50%;
  width: 4rem;
}
.card-kandidat {
  height: 58vh;
}
.name-kandidat {
  margin-top: 1.5rem;
  margin-bottom: 0;
  font-weight: 600;
}
.no-kandidat {
  margin-bottom: 0;
  font-weight: 500;
  color: gray;
}
.card-count h6 {
  margin: 0;
}

/* Media Queries */
@media only screen and (max-width: 1200px) {
  .main-content {
    margin-left: 75px;
  }
  .main-content:hover {
    margin-left: 75px;
  }
}

@media only screen and (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
  .main-content:hover {
    margin-left: 0;
  }
  .navbar-toggler {
    display: inline-block;
  }
}
</style>
