<template>
  <div>
    <div class="sidebar">
      <div class="sidebar-brand">
        <div class="row">
          <div class="col-2 d-xl-none">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </div>
          <div class="col-6">
            <span>VOLMA</span>
          </div>
        </div>
      </div>

      <div class="sidebar-menu">
        <ul class="align">
          <div class="items">
            <li>
              <router-link
                to="/dashboard"
                active-class="active"
                exact
                class="navigate-link btn text-left"
              >
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'tachometer-alt']" />
                  </div>
                  <div class="col-8">
                    <span>Dashboard</span>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/kandidat"
                active-class="active"
                exact
                class="navigate-link btn text-left"
              >
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'id-card']" />
                  </div>
                  <div class="col-8">
                    <span>Kandidat</span>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/pemilih"
                active-class="active"
                exact
                class="navigate-link btn text-left"
              >
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'user-friends']" />
                  </div>
                  <div class="col-8">
                    <span>Pemilih</span>
                  </div>
                </div>
              </router-link>
            </li>
          </div>

          <div class="items logout">
            <li>
              <a
                class="navigate-link btn text-left"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                  </div>
                  <div class="col-8">
                    <span>Log Out</span>
                  </div>
                </div>
              </a>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content ">
                    <div class="modal-header">
                      <h5 class="modal-title text-secondary" id="exampleModalLabel">
                        Log Out
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
                    <div class="modal-body text-dark">
                      Apakah anda yakin ingin keluar?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Tidak
                      </button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal" @click="logout">
                        Ya, saya yakin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      id_mhs: "",
      nama: "",
    };
  },
  created() {
    this.id_mhs = sessionStorage.getItem("id_mhs");
    this.nama = sessionStorage.getItem("nama");
  },
  methods: {
    logout: function() {
      sessionStorage.clear();
      this.$router.push({ path: '/' })
    },
  }
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
.sidebar-menu ul li .navigate-link {
  color: #fff;
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
}
.sidebar-menu ul li .navigate-link:hover {
  transition: 0.3s;
  /* padding: 1rem 1.7rem; */
  background-color: #7fb4fa;

  margin-left: 0.5rem;
  -webkit-border-top-left-radius: 50px;
  -webkit-border-bottom-left-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-bottomleft: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.align {
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.active {
  /* background-color: #2f80ed; */
  margin-left: 0.5rem;
  background-color: #7fb4fa;
  -webkit-border-top-left-radius: 50px;
  -webkit-border-bottom-left-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-bottomleft: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}



@media only screen and (max-width: 1200px) {
  .sidebar {
    width: 75px;
  }
  .sidebar .sidebar-brand span:last-child,
  .sidebar .sidebar-menu span:last-child {
    display: none;
  }

  /* Hover */
  .sidebar:hover {
    width: 300px;
  }
  .sidebar:hover .sidebar-brand span:last-child,
  .sidebar:hover .sidebar-menu span:last-child {
    display: block;
  }
  .sidebar-menu ul li .navigate-link {
    color: #fff;
    display: block;
    padding: 1rem 2rem;
    text-decoration: none;
  }
}

@media only screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
