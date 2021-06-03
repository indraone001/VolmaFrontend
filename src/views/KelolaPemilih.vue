<template>
  <div>
    <sidebar />
    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-pemilih">
          <h2 class="mb-4">Kelola Pemilih</h2>
          <div class="d-flex justify-content-between">
            <!-- Route to Tambah Pemilih -->
            <div class="item">
              <router-link
                tag="button"
                to="/tambah-pemilih"
                class="btn btn-primary"
              >
                Tambahkan Pemilih
              </router-link>
            </div>

            <!-- Search -->
            <div class="item search-container">
              <form>
                <input type="text" placeholder="Cari Nama" v-model="search" />
              </form>
            </div>
          </div>

          <!-- Table Pemilih -->
          <section class="table-pemilih pb-4">
            <div class="card border-0 mb-4">
              <div class="card-body">
                <div
                  class="container table-responsive"
                  v-if="filteredData.length"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">NIM</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Status</th>
                        <th scope="col">Password</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="pemilih in filteredData"
                        :key="pemilih.id_pemilih"
                      >
                        <th scope="row">{{ pemilih.id_pemilih }}</th>
                        <td>{{ pemilih.nim }}</td>
                        <td>{{ pemilih.nama }}</td>
                        <td>{{ pemilih.status | statusVote }}</td>
                        <td>
                          <!-- Acak Password -->
                          <button
                            type="button"
                            class="btn btn-primary mt-2 mb-2"
                            data-toggle="modal"
                            :data-target="'#acakpassword' + pemilih.id_pemilih"
                          >
                            Acak Password
                          </button>

                          <!-- Modal Acak Password -->
                          <div
                            class="modal fade"
                            :id="'acakpassword' + pemilih.id_pemilih"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLongTitle"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-header border-0">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLongTitle"
                                  >
                                    Acak Password
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    @click="delFormPass"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body border-0">
                                  <p>{{ pemilih.nama }} ({{ pemilih.nim }})</p>

                                  <div class="form text-left my-4">
                                    <input
                                      type="text"
                                      name="passAcak"
                                      class="pl-0"
                                      v-model="passAcak"
                                      readonly
                                    />
                                    <label for="passAcak" class="label-name">
                                      <span class="content-name">Password</span>
                                    </label>
                                  </div>
                                  <button
                                    type="button"
                                    class="btn btn-primary btn-block mt-4"
                                    @click="randomPass(pemilih.id_mhs)"
                                  >
                                    Acak Password
                                  </button>
                                </div>
                                <div class="modal-footer border-0">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                    @click="delFormPass"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <!-- Button Delete -->
                          <button
                            type="button"
                            class="btn btn-outline-danger my-2"
                            data-toggle="modal"
                            :data-target="'#delete'+pemilih.id_pemilih"
                          >
                            Hapus
                          </button>
                          <!-- Modal Button Delete -->
                          <div
                            class="modal fade"
                            :id="'delete'+pemilih.id_pemilih"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                <div class="modal-header border-0">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Hapus Pemilih
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body border-0">
                                  <p>Apakah anda yakin ingin menghapus <b>{{ pemilih.nama }}</b> ?</p>
                                </div>
                                <div class="modal-footer border-0">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Tidak
                                  </button>
                                  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="delPemilih(pemilih.id_pemilih)">
                                    Ya, saya yakin.
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-else>
                  <h4 class="text-center not-found">Data tidak ditemukan</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    <div class="foo" v-if="filteredData.length <= 3"></div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "KelolaPemilih",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      search: "",
      pemilih: [],
      passAcak: "",
    };
  },
  created() {
    this.getPemilih();
  },
  methods: {
    /**
     * @return Daftar Pemilih
     *
     */
    getPemilih() {
      const options = {
        url: "https://volma01.herokuapp.com/pemilih",
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.pemilih = response.data.data;
          console.log("Pemilih: ", this.pemilih);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * @return 6 digit angka acak
     *
     */
    randomPass: function(id) {
      const options = {
        url: `https://volma01.herokuapp.com/pemilih/${id}`,
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.passAcak = response.data.data;
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    },
    /**
     * @return Data pemilih yang dihapus
     *
     */
    delPemilih: function(id_pemilih) {
      const options = {
        url: `https://volma01.herokuapp.com/pemilih/${id_pemilih}`,
        method: "delete",
      };
      axios(options)
        .then((response) => {
          console.log("delPemilih ", response);
          this.getPemilih();
          this.pemilih.splice(id_pemilih, 1);
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    },
    /**
     * Mengosongkan variable passAcak
     *
     */
    delFormPass: function() {
      this.passAcak = "";
    },
  },
  computed: {
    /**
     * @return Data pemilih yang dicari
     *
     */
    filteredData: function() {
      return this.pemilih.filter((data) => {
        let name = data.nama.toLowerCase();
        return name.match(this.search.toLowerCase());
      });
    },
  },
  filters: {
    /**
     * @return Status vote
     *
     */
    statusVote: (status) => {
      let vote = "";
      if (status == 1) {
        vote = "Sudah Memilih";
      } else {
        vote = "Belum Memilih";
      }
      return vote;
    },
  },
};
</script>

<style scoped src="../assets/css/views/kelolaPemilih.css"></style>
