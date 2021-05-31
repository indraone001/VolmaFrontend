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
          <!-- <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <button type="button" class="btn btn-primary">
              Tambahkan Mahasiswa
            </button>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 text-right">
            <div class="search-container">
              <form>
                  <input type="text" placeholder="Cari Mahasiswa" name="search" />
                </form>
            </div>
          </div>
        </div> -->
          <div class="d-flex justify-content-between">
            <div class="item">
              <button type="button" class="btn btn-primary">
                Tambahkan Mahasiswa
              </button>
            </div>

            <div class="item search-container">
              <form>
                <input
                  type="text"
                  placeholder="Cari Mahasiswa"
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
                        <th scope="col">jurusan</th>
                        <th scope="col">angkatan</th>
                        <th scope="col">Password</th>
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
                          <button
                            type="button"
                            class="btn btn-outline-info mb-3 mr-1"
                          >
                            Acak Password
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary mb-3 mr-1"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger mb-3"
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
  name: "KelolaMahasiswa",
  components: {
    NavbarAdmin,
    Sidebar,
  },
  data() {
    return {
      students: [],
      search: "",
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

.main-mahasiswa input[type="text"] {
  padding: 9px 16px;
  outline-color: #2f80ed;
  font-size: 15px;
  border: none;
  border-radius: 8px;
}

/* .main-mahasiswa .search-container button {
  padding: 6px 10px;
  margin-top: 8px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.main-mahasiswa .search-container button:hover {
  background: #ccc;
} */

.card {
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

/* Media Queries */
@media only screen and (max-width: 1200px) {
  /* .navbar-brand img {
    width: 4%;
  } */

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
  /* .navbar-toggler {
    display: inline-block;
  } */
}
</style>
