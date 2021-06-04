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
              <div class="card py-0 card-dash">
                <div class="card-body card-dashboard">
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
              <div class="card py-0 card-dash">
                <div class="card-body card-dashboard">
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
              <div class="card py-0 card-dash">
                <div class="card-body card-dashboard">
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
              <div class="card py-0 card-dash">
                <div class="card-body card-dashboard">
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

          <section class="py-3">
            <div class="card update-periode">
              <div class="card-body date-picker">
                <div class="row">
                  <div class="col-md-12 col-lg-7">
                    <div class="container">
                      <h3 class="mb-4 pb-3">Update Periode Pemilihan</h3>
                      <div class="d-flex mb-3">
                        <div class="my-auto">
                          <label for="dateFrom">Dari tanggal:</label>
                          <input
                            type="date"
                            name="dateFrom"
                            id="dateFrom"
                            v-model="start"
                          />
                        </div>
                        <div class="divider"></div>
                        <div class="my-auto">
                          <label for="dateTo">Hingga tanggal:</label>
                          <input
                            type="date"
                            name="dateTo"
                            id="dateTo"
                            v-model="end"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary mt-4"
                        @click.prevent="updatePeriode"
                      >
                        Ubah Periode
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md-12 col-lg-5 d-none d-lg-block d-xl-block text-center "
                  >
                    <img
                      src="@/assets/date.svg"
                      class="mt-4 pt-2"
                      alt=""
                      width="80%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Jumlah suara masing masing calon -->
          <section class="mt-1 py-4 result-dashboard">
            

            <div class="card mb-4">
              <div class="card-body">
                <div class="container">
                  <h3 class="py-3 mb-4">Perolehan Masing-masing Calon</h3>
                <!-- Search -->
                <div class="item mb-4 pb-3">
                  <form>
                    <input
                      type="text"
                      class="search"
                      placeholder="Cari Ketua"
                      v-model="search"
                    />
                  </form>
                </div>
                <div v-if="filteredData.length">
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col" class="text-left">Nama Calon</th>
                        <th scope="col">Jumlah Pemilih</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="result in filteredData"
                        :key="result.id_kandidat"
                      >
                        <th scope="row">{{ result.no_urut }}</th>
                        <td style="width:25rem; height:50px;" class="text-left">
                          <!-- Ketua -->
                          <p class="mb-0"><b>Ketua</b></p>
                          <p>{{ result.nama_ketua }}</p>

                          <!-- Wakil -->
                          <p class="mb-0"><b>Wakil</b></p>
                          <p>{{ result.nama_wakil }} Orang</p>
                        </td>
                        <td><p>{{ result.jumlah }} Orang</p></td>
                        <td><p>{{ result.persentase }}%</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-else>
                  <h4 class="text-center not-found">Data tidak ditemukan</h4>
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
      search: "",
      results: [],
      dashboard: [],
      start: new Date().toISOString().substr(0, 10),
      end: new Date().toISOString().substr(0, 10),
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
    getPeriode: function() {
      console.log(this.start);
      console.log(this.end);
    },
    /**
     * @return Data mahasiswa yang telah diedit
     *
     */
    updatePeriode: function() {
      if (this.start && this.end) {
        let start = this.start;
        let end = this.end;

        const options = {
          url: "https://volma01.herokuapp.com/periode",
          method: "put",
          data: {
            start,
            end,
          },
        };
        axios(options)
          .then((response) => {
            console.log("Update Periode: ", response);
            alert("Berhasil Mengubah Periode");
            this.getDashboard();
            this.getResults();
          })
          .catch((e) => {
            console.log(e);
            alert(e);
          });
      }
    },
  },
  computed: {
    /**
     * @return data kandidat yang dicari
     *
     */
    filteredData: function() {
      return this.results.filter((data) => {
        let name = data.nama_ketua.toLowerCase();
        return name.match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped src="../assets/css/views/dashboard.css"></style>
