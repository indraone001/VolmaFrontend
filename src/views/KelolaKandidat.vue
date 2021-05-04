<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-kandidat">
          <h2 class="mb-4">Kelola Kandidat</h2>
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
              <button type="button" class="btn btn-primary">
                Tambahkan Kandidat
              </button>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="search-container">
                <form>
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit">
                    <!-- <i class="fa fa-search"></i> -->
                    <font-awesome-icon :icon="['fas', 'search']" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <section class="table-pemilih">
            <div class="card border-0 rounded">
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
                        v-for="kandidat in kandidats"
                        :key="kandidat.id_kandidat"
                      >
                        <th>{{ kandidat.id_kandidat }}</th>
                        <td>{{ kandidat.id_ketua }}</td>
                        <td>{{ kandidat.id_wakil }}</td>
                        <td>{{ kandidat.visi }}</td>
                        <td>{{ kandidat.misi }}</td>
                        <td>
                          <button type="button" class="btn btn-info mb-3">
                            Detail
                          </button>
                          <br />
                          <button type="button" class="btn btn-primary mb-3">
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-primary mb-3"
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
  </div>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";

import axios from "axios";

export default {
  name: "KelolaKandidat",
  components: {
    NavbarAdmin,
    Sidebar
  },
  data() {
    return {
      kandidats: [],
    };
  },
  created() {
    this.getKandidat();
  },
  methods: {
    /*
    * @return dataset kandidat yang telah didaftarkan oleh admin.
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
          console.log(this.kandidats);
        })
        .catch((e) => {
          console.log(e);
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
.main-kandidat {
  padding-top: 6rem;
}
.main-kandidat h2 {
  font-weight: 600;
}
/* .main-kandidat .search-container {
  float: right;
} */

.main-kandidat input[type="text"] {
  width: 75%;
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  border-radius: 4px;
}

.main-kandidat .search-container button {
  /* float: right; */
  /* margin-right: 16px; */
  padding: 6px 10px;
  margin-top: 8px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.main-kandidat .search-container button:hover {
  background: #ccc;
}

.card {
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
}


/* .bars {
  cursor: pointer;
} */

/* responsive */
/* #nav-toggle {
  display: none;
}
#nav-toggle:checked + .sidebar {
  width: 75px;
}
#nav-toggle:checked ~ .main-content {
  margin-left: 75px;
}

#nav-toggle:checked + .sidebar .sidebar-brand span:last-child,
#nav-toggle:checked + .sidebar .sidebar-menu span:last-child {
  display: none;
} */

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

/* @media only screen and (max-width: 1024px) {
  .navbar-brand img {
    width: 4%;
  }
} */

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
  /* .navbar .navbar-brand {
    display: none;
  } */
}
</style>
