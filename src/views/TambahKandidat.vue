<template>
  <div>
    <sidebar />
    <div class="main-content pb-4">
      <header>
        <navbar-admin />
      </header>
      <main>
        <div class="container main-tambah">
          <div class="card">
            <div class="card-body">
              <div class="container text-center">
                
                  <h4 class="text-center">Input Data Kandidat</h4>
                  <div
                    class="alert alert-warning text-left mb-4 mx-auto"
                    role="alert"
                  >
                    Kandidat calon merupakan mahasiswa yang telah terdaftar.
                  </div>

                  <!-- Data Ketua dan Wakil -->
                  <div class="row">
                    <!-- Data Ketua -->
                    <div class="col-md-6 text-center">
                      <h5 class="text-center py-3">Data Ketua</h5>

                      <!-- Id Ketua -->
                      <div class="form text-left my-3 mx-auto">
                        <input
                          type="text"
                          id="id_ketua"
                          name="id_ketua"
                          v-model="id_ketua"
                          required
                        />
                        <label for="id_ketua" class="label-name">
                          <span class="content-name">Id Ketua</span>
                        </label>
                      </div>

                      <!-- Nama Ketua -->
                      <div class="form text-left mb-4 mx-auto">
                        <input
                          type="text"
                          id="namaKetua"
                          name="namaKetua"
                          v-model="namaKetua"
                          required
                        />
                        <label for="namaKetua" class="label-name">
                          <span class="content-name">Nama Ketua</span>
                        </label>
                      </div>

                      <!-- Foto Ketua -->
                      <div class="form text-left mb-4 mx-auto">
                        <input
                          type="text"
                          id="imgKetua"
                          name="imgKetua"
                          v-model="imgKetua"
                          required
                        />
                        <label for="imgKetua" class="label-name">
                          <span class="content-name">Foto Ketua</span>
                        </label>
                      </div>

                      <!-- Button Clear Data -->
                      <button
                        type="button"
                        class="btn btn-outline-secondary mr-2"
                        @click="delFormKetua"
                      >
                        Clear
                      </button>
                      
                      <!-- Pilih Ketua -->
                      <button
                        type="button"
                        class="btn btn-secondary my-4"
                        data-toggle="modal"
                        data-target="#ketua"
                      >
                        Pilih Ketua
                      </button>
                      <!-- Modal Pilih Ketua -->
                      <div
                        class="modal fade"
                        id="ketua"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header border-0">
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
                              <h5>Pilih Ketua</h5>
                              <div class="container item search-container pb-4">
                                <!-- Search ketua -->
                                <input
                                  type="text"
                                  placeholder="Cari Mahasiswa"
                                  v-model="search"
                                />
                              </div>
                              <div class="container table-mahasiswa">
                                <div v-if="filteredData.length">
                                  <table
                                    class="table table-responsive table-hover mt-4"
                                  >
                                    <thead>
                                      <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nim</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="student in filteredData"
                                        :key="student.id_mhs"
                                      >
                                        <th scope="row">
                                          {{ student.id_mhs }}
                                        </th>
                                        <td>{{ student.nim }}</td>
                                        <td>{{ student.nama }}</td>
                                        <td>
                                          <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal"
                                            @click="addFormKetua(student.id_mhs, student.nama)"
                                          >
                                            Pilih
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div v-else>
                                  <h5 class="text-center not-found">
                                    Data tidak ditemukan
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 text-center">
                      <!-- Data Wakil -->
                      <h5 class="text-center py-3">Data Wakil</h5>
                      
                      <!-- Id Wakil -->
                      <div class="form text-left my-3 mx-auto">
                        <input
                          type="text"
                          id="id_wakil"
                          name="id_wakil"
                          v-model="id_wakil"
                          required
                        />
                        <label for="id_wakil" class="label-name">
                          <span class="content-name">Id Wakil</span>
                        </label>
                      </div>

                      <!-- Nama Wakil -->
                      <div class="form text-left mb-4 mx-auto">
                        <input
                          type="text"
                          id="namaWakil"
                          name="namaWakil"
                          v-model="namaWakil"
                          required
                        />
                        <label for="namaWakil" class="label-name">
                          <span class="content-name">Nama Wakil</span>
                        </label>
                      </div>

                      <!-- Foto Wakil -->
                      <div class="form text-left mb-4 mx-auto">
                        <input
                          type="text"
                          id="imgWakil"
                          name="imgWakil"
                          v-model="imgWakil"
                          required
                        />
                        <label for="imgWakil" class="label-name">
                          <span class="content-name">Foto Wakil</span>
                        </label>
                      </div>

                      <!-- Clear data Wakil -->
                      <button
                        type="button"
                        class="btn btn-outline-secondary mr-2"
                        @click="delFormWakil"
                      >
                        Clear
                      </button>

                      <!-- Pilih Wakil -->
                      <button
                        type="button"
                        class="btn btn-secondary my-4"
                        data-toggle="modal"
                        data-target="#wakil"
                      >
                        Pilih Wakil
                      </button>
                      <!-- Modal Pilih Wakil -->
                      <div
                        class="modal fade"
                        id="wakil"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header border-0">
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
                              <h5>Pilih Wakil</h5>

                              <!-- Search Wakil -->
                              <div class="container item search-container pb-4">
                                <input
                                  type="text"
                                  placeholder="Cari Mahasiswa"
                                  v-model="search"
                                />
                              </div>
                              <div class="container table-mahasiswa">
                                <div v-if="filteredData.length">
                                  <table
                                    class="table table-responsive table-hover mt-4"
                                  >
                                    <thead>
                                      <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nim</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="student in filteredData"
                                        :key="student.id_mhs"
                                      >
                                        <th scope="row">
                                          {{ student.id_mhs }}
                                        </th>
                                        <td>{{ student.nim }}</td>
                                        <td>{{ student.nama }}</td>
                                        <td>
                                          <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal"
                                            @click="addFormWakil(student.id_mhs, student.nama)"
                                          >
                                            Pilih
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div v-else>
                                  <h5 class="text-center not-found">
                                    Data tidak ditemukan
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- No Urut -->
                  <div class="form text-left my-4 mx-auto">
                    <input
                      type="text"
                      id="noUrut"
                      name="noUrut"
                      v-model="noUrut"
                      required
                    />
                    <label for="noUrut" class="label-name">
                      <span class="content-name">Nomor Urut</span>
                    </label>
                  </div>

                  <!-- Visi -->
                  <div class="form text-left mb-4 mx-auto">
                    <input
                      type="text"
                      id="visi"
                      name="visi"
                      v-model="visi"
                      required
                    />
                    <label for="visi" class="label-name">
                      <span class="content-name">Visi</span>
                    </label>
                  </div>

                  <!-- Misi -->
                  <div class="form text-left mb-4 mx-auto">
                    <input
                      type="text"
                      id="misi"
                      name="misi"
                      v-model="misi"
                      required
                    />
                    <label for="misi" class="label-name">
                      <span class="content-name">Misi</span>
                    </label>
                  </div>

                  <!-- Submit -->
                  <button type="button" class="btn btn-primary px-4 mt-4 mb-3" @click.prevent="addKandidat">
                    Submit Data
                  </button>
                
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
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "TambahKandidat",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      visi: "",
      misi: "",
      search: "",
      imgKetua: "",
      imgWakil: "",
      namaKetua: "",
      namaWakil: "",
      noUrut: null,
      id_ketua: null,
      id_wakil: null,
      students: [],
    };
  },
  created() {
    this.getMahasiswa();
  },
  methods: {
    /**
     * @return Daftar Mahasiswa
     *
     */
    getMahasiswa() {
      const options = {
        url: "https://volma01.herokuapp.com/mahasiswa",
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.students = response.data.data;
          console.log("Mahasiswa: ", this.students);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * Menambahkan Kandidat
     *
     */
    addKandidat: function() {
        let id_ketua = this.id_ketua;
        let id_wakil = this.id_wakil;
        let nama_wakil = this.namaWakil;
        let img_ketua = this.imgKetua;
        let img_wakil = this.imgWakil;
        let no_urut = this.noUrut;
        let visi = this.visi;
        let misi = this.misi;

        const options = {
          url: "https://volma01.herokuapp.com/kandidat",
          method: "post",
          data: {
            id_ketua,
            id_wakil,
            nama_wakil,
            img_ketua,
            img_wakil,
            no_urut,
            visi,
            misi
          },
        };
        axios(options)
          .then((response) => {
            console.log(response.data);
            alert("Berhasil menambahkan kandidat");
            this.$router.push({ path: "kandidat" });
          })
          .catch((e) => {
            console.log(e);
            alert(e);
            this.$router.push({ path: "kandidat" });
          });
      
    },
    /**
     * Mengisi form Ketua dengan menekan tombol pilih
     *
     */
    addFormKetua: function(id_ketua, namaKetua) {
      this.id_ketua = id_ketua;
      this.namaKetua = namaKetua;
    },
    /**
     * Mengisi form Wakil dengan menekan tombol pilih
     *
     */
    addFormWakil: function(id_wakil, namaWakil) {
      this.id_wakil = id_wakil;
      this.namaWakil = namaWakil;
    },
    /**
     * Clear form Ketua
     *
     */
    delFormKetua: function() {
      this.id_ketua = null;
      this.namaKetua = "";
    },
    /**
     * Clear form Wakil
     *
     */
    delFormWakil: function() {
      this.id_wakil = null;
      this.namaWakil = "";
    },
  },
  computed: {
    /**
     * @return data mahasiswa yang dicari
     *
     */
    filteredData: function() {
      return this.students.filter((data) => {
        let name = data.nama.toLowerCase();
        return name.match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.main-content {
  margin-left: 16%;
  transition: margin-left 200ms;
  background: #eefafd;
}
.card {
  margin-top: 3rem;
  padding: 1rem 0;
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
h4 {
  margin: 2rem 0;
  font-weight: 600;
}
.search-container input[type="text"] {
  width: 100%;
  padding: 9px 16px;
  outline: none;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  background: #eeeeee;
}

.table-mahasiswa {
  height: 60vh;
  overflow: auto;
}
.not-found {
  margin: 25vh 0;
  color: grey;
}
.alert {
  width: 40vw;
}

form {
  margin: 0 10%;
}
.form {
  width: 70%;
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
  color: #666;
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
.form input:valid + .label-name .content-name {
  transform: translateY(-100%);
  font-size: 14px;
  color: #2f80ed;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after {
  transform: translateX(0%);
}

/* Responsive */
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
