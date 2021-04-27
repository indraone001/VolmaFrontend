<template>
  <div>
    <input type="checkbox" id="nav-toggle" />

    <div class="sidebar">
      <div class="sidebar-brand">
        <label for="nav-toggle" class="bars">
          <!-- <i class="fas fa-bars"></i> -->
          <font-awesome-icon :icon="['fas', 'bars']" />
        </label>
        <span>VOLMA</span>
      </div>

      <div class="sidebar-menu">
        <ul class="align">
          <div class="items">
            <li>
              <a href="#" class="navigate-link">
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'tachometer-alt']" />
                  </div>
                  <div class="col-10">
                    <span>Dashboard</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="navigate-link">
                <div class="row">
                  <div class="col-2">
                    <!-- <i class="fas fa-user-tie"></i> -->
                    <font-awesome-icon :icon="['fas', 'user-tie']" />
                  </div>
                  <div class="col-10">
                    <span>Kandidat</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="navigate-link">
                <div class="row">
                  <div class="col-2">
                    <!-- <i class="fas fa-user-friends"></i> -->
                    <font-awesome-icon :icon="['fas', 'user-friends']" />
                  </div>
                  <div class="col-10">
                    <span>Pemilih</span>
                  </div>
                </div>
              </a>
            </li>
          </div>

          <div class="items logout">
            <li>
              <a href="#">
                <div class="row">
                  <div class="col-2">
                    <!-- <i class="fas fa-sign-out-alt"></i> -->
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                  </div>
                  <div class="col-10">
                    <span>Log Out</span>
                  </div>
                </div>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>

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
                        <tr v-for="kandidat in kandidats" :key="kandidat.id_kandidat">
                          <th>{{ kandidat.id_kandidat }}</th>
                          <td>{{ kandidat.id_ketua }}</td>
                          <td>{{ kandidat.id_wakil }}</td>
                          <td>{{ kandidat.visi }}</td>
                          <td>{{ kandidat.misi }}</td>
                          <td>
                            <button type="button" class="btn btn-info mb-3">
                              Detail
                            </button> <br>
                            <button type="button" class="btn btn-primary mb-3">
                              Edit
                            </button>
                            <button type="button" class="btn btn-outline-primary mb-3">
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

import axios from "axios";

export default {
  name: "KelolaKandidat",
  components: {
    NavbarAdmin,
  },
  data() {
    return {
      kandidats: []
    };
  },
  created() {
    this.getKandidat()
  },
  methods: {
    getKandidat() {
      const options = {
        url: "https://volma01.herokuapp.com/kandidat",
        method: "get"
      };
      axios(options)
        .then(response => {
          this.kandidats = response.data.data;
          console.log(this.kandidats)
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};
</script>

<style scoped>
.sidebar {
  color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 16%;
  transition: width 300ms;
  z-index: 999999;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
}

.sidebar-brand {
  display: flex;
  padding: 2rem;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
}
.sidebar-brand span {
  font-weight: 600;
}

.sidebar-menu {
  margin-top: 1rem;
  width: 100%;
}
.sidebar-menu ul {
  list-style: none;
}
.sidebar-menu ul li a {
  color: #fff;
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
}
.sidebar-menu ul li a:hover {
  transition: 0.3s;
  padding: 1rem 1.7rem;
  background-color: #7bb4ff;
}
/* .sidebar-menu ul li a i {
  margin-left: 0.5rem;
} */

.align {
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


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

.active {
  background-color: #2f80ed;
}
.bars {
  cursor: pointer;
}

/* responsive */
#nav-toggle {
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
}

/* Media Queries */
@media only screen and (max-width: 1200px) {
  .navbar-brand img {
    width: 4%;
  }
  .sidebar {
    width: 75px;
  }
  .main-content {
    margin-left: 75px;
  }

  .sidebar .sidebar-brand span:last-child,
  .sidebar .sidebar-menu span:last-child {
    display: none;
  }

  /* Hover */
  .sidebar:hover {
    width: 300px;
  }
  .main-content:hover {
    margin-left: 75px;
  }

  .sidebar:hover .sidebar-brand span:last-child,
  .sidebar:hover .sidebar-menu span:last-child {
    display: block;
  }
  .sidebar-menu ul li a {
    color: #fff;
    display: block;
    padding: 1rem 2rem;
    text-decoration: none;
  }
}

@media only screen and (max-width: 1024px) {
  .navbar-brand img {
    width: 4%;
  }
}

@media only screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
  .main-content {
    margin-left: 0;
  }
  .main-content:hover {
    margin-left: 0;
  }
  .navbar-toggler {
    display: inline-block;
  }
  .navbar .navbar-brand {
    display: none;
  }
}
</style>
