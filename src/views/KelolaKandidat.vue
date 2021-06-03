<template>
  <div id="kandidat">
    <sidebar />
    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-kandidat">
          <h2 class="mb-4">Kelola Kandidat</h2>
          <div class="d-flex justify-content-between">
            <!-- Router to Tambah Kandidat -->
            <div class="item">
              <router-link
                tag="button"
                to="/tambah-kandidat"
                class="btn btn-primary"
              >
                Tambahkan Kandidat
              </router-link>
            </div>

            <!-- Search -->
            <div class="item search-container">
              <form>
                <input type="text" placeholder="Cari Ketua" v-model="search" />
              </form>
            </div>
          </div>

          <!-- Table Kandidat -->
          <section class="table-kandidat pb-4">
            <div class="card border-0 mb-4">
              <div class="card-body">
                <div
                  class="container table-responsive"
                  v-if="filteredData.length"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Foto</th>
                        <th>Ketua dan Wakil</th>
                        <th>Visi dan Misi</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="kandidat in filteredData"
                        :key="kandidat.no_urut"
                      >
                        <th>{{ kandidat.no_urut }}</th>
                        <td>
                          <img
                            class="card-profile"
                            :src="
                              '/profilePicture/' + kandidat.img_ketua + '.jpg'
                            "
                            alt=""
                            width="100%"
                          />
                          <br />
                          <img
                            class="card-profile"
                            :src="
                              '/profilePicture/' + kandidat.img_wakil + '.jpg'
                            "
                            alt=""
                            width="100%"
                          />
                        </td>
                        <td style="width:250px; height:50px;">
                          <!-- Ketua -->
                          <p class="mb-0"><b>Ketua</b></p>
                          <p>{{ kandidat.nama }}</p>

                          <!-- Wakil -->
                          <p class="mb-0"><b>Wakil</b></p>
                          <p>{{ kandidat.nama_wakil }}</p>
                        </td>
                        <td style="width:400px;">
                          <!-- Visi -->
                          <p class="mb-0"><b>Visi</b></p>
                          <p style="width:400px;">{{ kandidat.visi }}</p>

                          <!-- Misi -->
                          <p class="mb-0"><b>Misi</b></p>
                          <p style="width:400px;">{{ kandidat.misi }}</p>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary my-4 mr-1"
                          >
                            Edit
                          </button>

                          <!-- Button Hapus Kandidat -->
                          <button
                            type="button"
                            class="btn btn-outline-danger my-4"
                            data-toggle="modal"
                            :data-target="'#hapus'+kandidat.no_urut"
                          >
                            Hapus
                          </button>
                          <!-- Modal -->
                          <div
                            class="modal fade"
                            :id="'hapus'+kandidat.no_urut"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Hapus Kandidat
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
                                <div class="modal-body">
                                  <p>Apakan anda yakin ingin menghapus pasangan calon nomor {{ kandidat.no_urut }}?</p>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    tidak
                                  </button>
                                  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="delKandidat(kandidat.no_urut)">
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
  name: "KelolaKandidat",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      search: "",
      kandidats: [],
    };
  },
  created() {
    this.getKandidat();
  },
  methods: {
    /**
     * @return daftar mahasiswa
     *
     */
    getKandidat() {
      const options = {
        url: "https://volma01.herokuapp.com/kandidat",
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.kandidats = response.data.data;
          console.log("Kandidat: ", this.kandidats);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * @return Data mahasiswa yang dihapus
     *
     */
    delKandidat: function(id_kandidat) {
      const options = {
        url: `https://volma01.herokuapp.com/kandidat/${id_kandidat}`,
        method: "delete",
      };
      axios(options)
        .then((response) => {
          console.log("delKandidat: ", response);
          alert("Berhasil menghapus data")
          this.getKandidat();
          this.kandidats.splice(id_kandidat, 1);
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    },
  },
  computed: {
    /**
     * @return data kandidat yang dicari
     *
     */
    filteredData: function() {
      return this.kandidats.filter((data) => {
        let name = data.nama.toLowerCase();
        return name.match(this.search.toLowerCase());
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
  color: rgb(66, 66, 66);
}
.foo {
  height: 30vh;
  background: #eefafd;
}
.main-kandidat {
  padding-top: 3rem;
}
.main-kandidat h2 {
  font-weight: 600;
}
.main-kandidat input[type="text"] {
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
.not-found {
  margin: 25vh 0;
  color: grey;
}
.card-profile {
  border-radius: 50%;
  width: 3.5rem;
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
