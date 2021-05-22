<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-kandidat">
          <h2 class="mb-4">Dashboard</h2>
          <div class="row">
            <div class="col-6 col-sm-6 col-md-3 ">
              <div class="card py-0">
                <div class="card-body">
                  <h3>
                      <!-- <i class="fas fa-users"></i> -->
                      <font-awesome-icon :icon="['fas', 'users']" />
                  </h3>
                  <h6 class="card-title">Banyak Pemilih</h6>
                  <h6 class="card-subtitle mb-2 text-muted">50 Orang</h6>
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
                  <h6 class="card-subtitle mb-2 text-muted">50%</h6>
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
                  <h6 class="card-subtitle mb-2 text-muted">3 Orang</h6>
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
                  <h6 class="card-title">Batas Waktu</h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Kamis, 21 April 2021
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <section class="mt-4 pt-4">
            <h3 class="pb-4">Perolehan Masing-masing Calon</h3>

            <div class="row card-groups">
              <div class="col-sm-12 col-md-12 col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body text-center">
                    <h4 class="name-kandidat">Belva Sitompul</h4>
                    <h6 class="no-kandidat pb-4">Nomor Urut 1</h6>

                    <div class="container pt-4">
                      <div class="row">
                        <div class="col-4 text-right">
                          <img
                            class="card-profile"
                            src="man.jpg"
                            alt=""
                            width="100%"
                          />
                        </div>

                        <div class="col-8 text-left my-auto">
                          <h5 class="mb-0">Ketua</h5>
                          <p class="mb-0">Belva</p>
                        </div>
                      </div>

                      <br />

                      <div class="row">
                        <div class="col-4 text-right">
                          <img
                            class="card-profile"
                            src="profile.jpg"
                            alt=""
                            width="100%"
                          />
                        </div>

                        <div class="col-8 text-left my-auto">
                          <h5 class="mb-0">Wakil</h5>
                          <p class="mb-0">Codet muhammad syahrul</p>
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
                        <p>10 orang</p>
                      </div>
                      <div class="col-6">
                        <h5>
                            <i class="fas fa-percent"></i>
                            <font-awesome-icon :icon="['fas', 'percent']" />
                        </h5>
                        <h6>Persentase</h6>
                        <p>10%</p>
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

// import axios from "axios";

export default {
  name: "KelolaKandidat",
  components: {
    NavbarAdmin,
    Sidebar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    /*
     * @return dataset kandidat yang telah didaftarkan oleh admin.
     *
     */
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
  margin-top: 3rem;
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
