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
import axios from "axios";
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
     * Menambahkan Mahasiswa
     *
     */
    addPemilih: function() {
      if (this.nim && this.nama) {
        let nim = this.nim;
        let nama = this.nama;

        const options = {
          url: "https://volma01.herokuapp.com/pemilih",
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

<style scoped>
.main-content {
  height: 100vh;
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

form {
  margin: 0 10%;
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
