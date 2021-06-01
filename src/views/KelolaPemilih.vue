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
            <div class="item">
              <router-link
                tag="button"
                to="/tambah-pemilih"
                class="btn btn-primary"
              >
                Tambahkan Pemilih
              </router-link>
            </div>

            <div class="item search-container">
              <form>
                <input type="text" placeholder="Cari Nama" v-model="search" />
              </form>
            </div>
          </div>

          <section class="table-pemilih pb-4">
            <div class="card border-0 mb-4">
              <div class="card-body">
                <div class="container table-responsive">
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
                        <!-- <td>*****</td> -->
                        <td>{{ pemilih.status | statusVote }}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-info mb-3 mr-1"
                            data-toggle="modal"
                            :data-target="'#acakpassword' + pemilih.id_mhs"
                          >
                            Acak Password
                          </button>
                          <div
                            class="modal fade"
                            :id="'acakpassword' + pemilih.id_mhs"
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
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body border-0">
                                  <p>{{ pemilih.nama }} ({{ pemilih.nim }})</p>

                                  <div class="form text-left my-4">
                                    <input
                                      type="text"
                                      id="passAcak"
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
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary my-1 mr-1"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger my-1"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";

import axios from "axios";

export default {
  name: "KelolaPemilih",
  components: {
    NavbarAdmin,
    Sidebar,
  },
  data() {
    return {
      pemilih: [],
      search: "",
      passAcak: "",
    };
  },
  created() {
    this.getPemilih();
  },
  methods: {
    getPemilih() {
      const options = {
        url: "https://volma01.herokuapp.com/pemilih",
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.pemilih = response.data.data;
          console.log(this.pemilih);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    randomPass: function(id) {
      const options = {
        url: `https://volma01.herokuapp.com/pemilih/${id}`,
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.passAcak = response.data.data;
          console.log(this.passAcak);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    filteredData: function() {
      return this.pemilih.filter((data) => {
        let name = data.nama.toLowerCase();
        return name.match(this.search.toLowerCase());
      });
    },
  },
  filters: {
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

<style scoped>
.main-content {
  height: 100%;
  margin-left: 16%;
  transition: margin-left 200ms;
  background: #eefafd;
  color: rgb(66, 66, 66);
}
.foo {
  height: 50vh;
  background: #eefafd;
}
.main-pemilih {
  padding-top: 3rem;
}
.main-pemilih h2 {
  font-weight: 600;
}

.main-pemilih input[type="text"] {
  padding: 9px 16px;
  outline-color: #2f80ed;
  font-size: 15px;
  border: none;
  border-radius: 8px;
}

.card {
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

form {
  margin: 0 5%;
}
.form {
  width: 100%;
  height: 50px;
  position: relative;
  overflow: hidden;
}
.form input {
  width: 100%;
  height: 100%;
  color: #666;
  padding-top: 16px;
  padding-bottom: 10px;
  border: none;
  outline: none;
}
.form label {
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #666;
}

.form label::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #2f80ed;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}
.content-name {
  position: absolute;
  bottom: 5px;
  left: 0px;
  transition: all 0.3s ease;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name,
.form input:read-only + .label-name .content-name {
  transform: translateY(-100%);
  font-size: 14px;
  color: #2f80ed;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after,
.form input:read-only + .label-name::after {
  transform: translateX(0%);
}

.modal-content {
  border: none;
  border-radius: 10px;
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
}
</style>
