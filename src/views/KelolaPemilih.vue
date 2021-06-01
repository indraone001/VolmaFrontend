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
              <router-link tag="button" to="/tambah-pemilih" class="btn btn-primary" >
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
                      <!-- <th scope="col">Password</th> -->
                      <th scope="col">Status</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="pemilih in filteredData" :key="pemilih.id_pemilih">
                      <th scope="row">{{ pemilih.id_pemilih }}</th>
                      <td>{{ pemilih.nim }}</td>
                      <td>{{ pemilih.nama }}</td>
                      <!-- <td>*****</td> -->
                      <td>{{ pemilih.status | statusVote }}</td>
                      <td>
                        <button type="button" class="btn btn-primary my-1 mr-1">
                          Edit
                        </button>
                        <button type="button" class="btn btn-outline-danger my-1">
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
    Sidebar
  },
  data() {
    return {
      pemilih: [],
      search: ""
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
    statusVote: (status)=> {
      let vote = ""      
      if (status == 1) {
        vote = "Sudah Memilih"
      } else {
        vote = "Belum Memilih"
      }
      return vote
    }
  }
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
