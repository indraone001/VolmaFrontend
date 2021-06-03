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
            <!-- Router to Tambah Mahasiswa -->
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

            <!-- Search -->
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

          <!-- Table Pemilih -->
          <section class="table-pemilih pb-4">
            <div class="card border-0">
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
                        <th scope="col">Jurusan</th>
                        <th scope="col">Angkatan</th>
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
                            @click="fillFormEdit(student.nim, student.nama, student.jurusan, student.angkatan)"
                          >
                            Edit
                          </button>

                          <!-- Modal Edit -->
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

                                  <div class="container">
                                    <div class="form text-left my-3">
                                      <input
                                        type="text"
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
                                      @click.prevent="
                                        updateMahasiswa(student.id_mhs)
                                      "
                                    >
                                      Ubah Data
                                    </button>
                                  </div>
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

                          <!-- Modal Delete -->
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
                                <div class="modal-header border-0">
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
                                <div class="modal-body border-0">
                                  <p>
                                    Apakah anda yakin ingin menghapus
                                    <b>{{ student.nama }}</b> ?
                                  </p>
                                </div>
                                <div class="modal-footer border-0">
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
  name: "KelolaMahasiswa",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      nim: "",
      nama: "",
      search: "",
      jurusan: "",
      angkatan: "",
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
     * @return Data mahasiswa yang telah diedit
     *
     */
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
            console.log("Update Mahasiswa: ", response.data);
            alert(response.data.message);
            this.getMahasiswa();
          })
          .catch((e) => {
            console.log(e);
            alert(e);
          });
      }
    },
    /**
     * @return Data mahasiswa yang dihapus
     *
     */
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
          alert(e);
        });
    },
    /**
     * Mengisi dengan data kandidat yang dipilih
     *
     */
    fillFormEdit: function(nim, nama, jurusan, angkatan) {
      this.nim = nim;
      this.nama = nama;
      this.jurusan = jurusan;
      this.angkatan = angkatan;
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

<style scoped src="../assets/css/views/kelolaMahasiswa.css"></style>
