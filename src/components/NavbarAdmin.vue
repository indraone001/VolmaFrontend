<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand d-block d-sm-block d-md-none" href="#">VOLMA</a>
      <button
        type="button"
        class="navbar-toggler ml-auto text-secondary"
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

          <!-- Router to Dashboard -->
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

          <!-- Router to Kelola Mahasiswa -->
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

          <!-- Router to Kelola Kandidat -->
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

          <!-- Router to Kelola Pemilih -->
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

          <!-- LogOut -->
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

            <!-- Modal for LogOut -->
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
                    <h5
                      id="exampleModalLabel"
                      class="modal-title text-secondary"
                    >
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      @click="logout"
                    >
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
      nama: "",
      id_mhs: null,
    };
  },
  created() {
    this.nama = sessionStorage.getItem("nama");
    this.id_mhs = sessionStorage.getItem("id_mhs");
  },
  methods: {
    logout: function() {
      sessionStorage.clear();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped src="../assets/css/components/navbarAdmin.css"></style>
