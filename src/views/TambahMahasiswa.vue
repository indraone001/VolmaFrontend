<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>
      <main>
        <!-- Form -->
        <div class="container">
          <div class="card text-center mx-auto">
            <div class="card-body">
              <h4 class="card-title mb-4">Input Data Mahasiswa</h4>
              <form @submit.prevent="addMahasiswa()">
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
                    <span class="content-name">Jurusan</span>
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
                    <span class="content-name">Angkatan</span>
                  </label>
                </div>

                <button class="btn btn-primary mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <!-- Form -->
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "TambahMahasiswa",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      nim: "",
      nama: "",
      jurusan: "",
      angkatan: "",
    };
  },
  methods: {
    /**
     * Menambahkan Mahasiswa
     *
     */
    addMahasiswa: function() {
      if (this.nim && this.nama && this.jurusan && this.angkatan) {
        let nim = this.nim;
        let nama = this.nama;
        let jurusan = this.jurusan;
        let angkatan = this.angkatan;

        const options = {
          url: "https://volma01.herokuapp.com/mahasiswa",
          method: "post",
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
            this.$router.push({ path: "mahasiswa" });
          })
          .catch((e) => {
            console.log(e);
            alert(e);
            this.$router.push({ path: "mahasiswa" });
          });
      }
    },
  },
};
</script>

<style scoped src="../assets/css/views/tambahMahasiswa.css">
</style>
