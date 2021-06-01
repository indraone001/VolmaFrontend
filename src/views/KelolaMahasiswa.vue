<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-mahasiswa">
          <h2 class="mb-4">Kelola Mahasiswa</h2>
          <div class="d-flex justify-content-between">
            <div class="item">
              <router-link
                tag="button"
                to="/tambah-mahasiswa"
                type="button"
                class="btn btn-primary"
              >
                Tambahkan Mahasiswa
              </router-link>
            </div>

            <div class="item search-container">
              <form>
                <input
                  type="text"
                  class="search"
                  placeholder="Cari Nama"
                  v-model="search"
                />
              </form>
            </div>
          </div>

          <section class="table-pemilih pb-4">
            <div class="card border-0">
              <div class="card-body">
                <div class="container table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">NIM</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Jurusan</th>
                        <th scope="col">Angkatan</th>
                        <!-- <th scope="col">Password</th> -->
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="student in filteredData" :key="student.id_mhs">
                        <th scope="row">{{ student.id_mhs }}</th>
                        <td>{{ student.nim }}</td>
                        <td>{{ student.nama }}</td>
                        <td>{{ student.jurusan }}</td>
                        <td>{{ student.angkatan }}</td>

                        <td>
                          <!-- Button Edit Mahasiswa -->
                          <button
                            type="button"
                            class="btn btn-primary mb-3 mr-1"
                            data-toggle="modal"
                            :data-target="'#edit' + student.id_mhs"
                          >
                            Edit
                          </button>
                          <div
                            class="modal fade"
                            :id="'edit' + student.id_mhs"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalCenterTitle"
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
                                    Edit
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
                                <div class="modal-body text-center border-0">
                                  <h5>
                                    Ubah data Milik <b>{{ student.nama }}</b>
                                  </h5>
                                  <p>{{ student.nim }}</p>

                                  <form
                                    @click.prevent="
                                      updateMahasiswa(student.id_mhs)
                                    "
                                  >
                                    <div class="form text-left my-3">
                                      <input
                                        type="text"
                                        id="nim"
                                        name="nim"
                                        v-model="nim"
                                        required
                                      />
                                      <label for="nim" class="label-name">
                                        <span class="content-name">Nim</span>
                                      </label>
                                    </div>
                                    <div class="form text-left my-3">
                                      <input
                                        type="text"
                                        id="nama"
                                        name="nama"
                                        v-model="nama"
                                        required
                                      />
                                      <label for="nama" class="label-name">
                                        <span class="content-name">Nama</span>
                                      </label>
                                    </div>
                                    <div class="form text-left my-3">
                                      <input
                                        type="text"
                                        id="jurusan"
                                        name="jurusan"
                                        v-model="jurusan"
                                        required
                                      />
                                      <label for="jurusan" class="label-name">
                                        <span class="content-name"
                                          >Jurusan</span
                                        >
                                      </label>
                                    </div>
                                    <div class="form text-left my-3">
                                      <input
                                        type="text"
                                        id="angkatan"
                                        name="angkatan"
                                        v-model="angkatan"
                                        required
                                      />
                                      <label for="angkatan" class="label-name">
                                        <span class="content-name"
                                          >Angkatan</span
                                        >
                                      </label>
                                    </div>

                                    <button
                                      class="btn btn-primary my-4"
                                      data-dismiss="modal"
                                    >
                                      Ubah Data
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Button Delete Mahasiswa -->
                          <button
                            type="button"
                            class="btn btn-outline-danger mb-3"
                            data-toggle="modal"
                            :data-target="'#delete' + student.id_mhs"
                          >
                            Hapus
                          </button>
                          <div
                            class="modal fade"
                            :id="'delete' + student.id_mhs"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Hapus mahasiswa
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
                                  <p>
                                    Apakah anda yakin ingin menghapus
                                    <b>{{ student.nama }}</b> ?
                                  </p>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Tidak
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-dismiss="modal"
                                    @click="delMahasiswa(student.id_mhs)"
                                  >
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
  name: "KelolaMahasiswa",
  components: {
    NavbarAdmin,
    Sidebar,
  },
  data() {
    return {
      students: [],
      search: "",
      nim: "",
      nama: "",
      jurusan: "",
      angkatan: "",
    };
  },
  created() {
    this.getMahasiswa();
  },
  methods: {
    /*
     * @return dataset kandidat yang telah didaftarkan oleh admin.
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
          console.log(this.students);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateMahasiswa: function(id_mhs) {
      if (this.nim && this.nama && this.jurusan && this.angkatan) {
        let nim = this.nim;
        let nama = this.nama;
        let jurusan = this.jurusan;
        let angkatan = this.angkatan;

        const options = {
          url: `https://volma01.herokuapp.com/mahasiswa/${id_mhs}`,
          method: "put",
          data: {
            nim,
            nama,
            jurusan,
            angkatan,
          },
        };
        axios(options)
          .then((response) => {
            console.log(response.data);
            alert(response.data.message);
            this.getMahasiswa();
          })
          .catch((e) => {
            console.log(e);
            alert(e);
          });
      }
    },

    delMahasiswa: function(id_mhs) {
      const options = {
        url: `https://volma01.herokuapp.com/mahasiswa/${id_mhs}`,
        method: "delete",
      };
      axios(options)
        .then((response) => {
          console.log("delMahasiswa ", response.data);
          this.getMahasiswa();
          this.students.splice(id_mhs, 1);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
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
.main-mahasiswa {
  padding-top: 3rem;
}
.main-mahasiswa h2 {
  font-weight: 600;
}

.main-mahasiswa input[type="text"].search {
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

.modal-content {
  border: none;
  border-radius: 10px;
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
  padding-left: 0;
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
