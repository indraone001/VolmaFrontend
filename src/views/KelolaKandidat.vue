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
              <button type="button" class="btn btn-primary">
                Tambahkan Kandidat
              </button>
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
                <div class="container table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Ketua</th>
                        <th>Wakil</th>
                        <th>Visi</th>
                        <th>Misi</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="kandidat in filteredData"
                        :key="kandidat.id_kandidat"
                      >
                        <th>{{ kandidat.no_urut }}</th>
                        <td>{{ kandidat.nama }}</td>
                        <td>{{ kandidat.nama_wakil }}</td>
                        <td>{{ kandidat.visi }}</td>
                        <td>{{ kandidat.misi }}</td>
                        <td>
                          <button type="button" class="btn btn-info my-3">
                            Detail
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
  height: 50vh;
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
