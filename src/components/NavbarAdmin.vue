<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand d-block d-sm-block d-md-none" href="#">VOLMA</a>
      <button
        class="navbar-toggler ml-auto text-secondary"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <h5 class="py-2">{{ nama }}</h5>
          </li>
          <li class="nav-item d-block d-sm-block d-md-none">
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
          <li class="nav-item d-block d-sm-block d-md-none">
            <router-link
                to="/mahasiswa"
                active-class="active"
                exact
                class="navigate-link btn text-left"
              >
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'user-graduate']" />
                  </div>
                  <div class="col-8">
                    <span>Mahasiswa</span>
                  </div>
                </div>
              </router-link>
          </li>
          <li class="nav-item d-block d-sm-block d-md-none">
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
          <li class="nav-item d-block d-sm-block d-md-none">
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
          <li class="nav-item d-block d-sm-block d-md-none">
            <a
                class="navigate-link btn text-left"
                data-toggle="modal"
                data-target="#Modal2"
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
                id="Modal2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content ">
                    <div class="modal-header border-0">
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
                    <div class="modal-body text-dark border-0">
                      Apakah anda yakin ingin keluar?
                    </div>
                    <div class="modal-footer border-0">
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
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-admin",
  data() {
    return {
      id_mhs: "",
      nama: ""
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
.navbar {
  background-color: #fff;
}

.navbar-toggler {
  display: none;
}

.navbar-brand {
  font-weight: 600;
}

h5 {
  margin-bottom: 0;
  font-weight: 500;
  color: rgb(39, 39, 39);
}
.navbar-toggler {
    border: none;
}
@media only screen and (max-width: 990px) {
  .navbar-toggler {
    display: inline-block;
  }
}
.navigate-link {
  color: rgb(110, 110, 110);
}
.active {
  color: #2f80ed;
}
.modal-content {
  border: none;
  border-radius: 10px;
}
</style>
