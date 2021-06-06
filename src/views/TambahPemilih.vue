<template>
  <div>
    <sidebar />
    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-tambah">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 text-center  my-auto">
                  <form @click.prevent="addPemilih">
                    <h4 class="text-center">Input Data Pemilih</h4>
                    <div
                      class="alert alert-warning text-left mb-4"
                      role="alert"
                    >
                      Pemilih adalah mahasiswa yang terdaftar.
                    </div>
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
                    <div class="form text-left mb-4">
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

                    <button
                      type="button"
                      class="btn btn-outline-primary mr-2"
                      @click="delFormPemilih"
                    >
                      Clear
                    </button>
                    <button type="button" class="btn btn-primary my-4 ">
                      Submit
                    </button>
                  </form>
                  <br />
                </div>
                <div class="col-md-6  my-auto">
                  <div class="container item search-container pb-4">
                    <input
                      type="text"
                      placeholder="Cari Mahasiswa"
                      v-model="search"
                    />
                  </div>
                  <div class="container table-mahasiswa">
                    <div v-if="filteredData.length">
                      <table class="table table-responsive table-hover mt-4">
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
                            <th scope="row">{{ student.id_mhs }}</th>
                            <td>{{ student.nim }}</td>
                            <td>{{ student.nama }}</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-secondary"
                                @click="
                                  addFormPemilih(student.nim, student.nama)
                                "
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
      </main>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "TambahPemilih",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      nim: "",
      nama: "",
      search: "",
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
        url: "mahasiswa",
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
     * Menambahkan Mahasiswa
     *
     */
    addPemilih: function() {
      if (this.nim && this.nama) {
        let nim = this.nim;
        let nama = this.nama;

        const options = {
          url: "pemilih",
          method: "post",
          data: {
            nim,
            nama,
          },
        };
        axios(options)
          .then((response) => {
            console.log(response.data);
            alert(response.data.message);
            this.$router.push({ path: "pemilih" });
          })
          .catch((e) => {
            console.log(e);
            alert(e);
            this.$router.push({ path: "pemilih" });
          });
      }
    },
    /**
     * Mengisi form pemilih dengan menekan tombol pilih
     *
     */
    addFormPemilih: function(nim, nama) {
      this.nim = nim;
      this.nama = nama;
    },
    /**
     * Mengisi form pemilih dengan menekan tombol pilih
     *
     */
    delFormPemilih: function() {
      this.nim = "";
      this.nama = "";
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

<style scoped src="../assets/css/views/tambahPemilih.css">
</style>
