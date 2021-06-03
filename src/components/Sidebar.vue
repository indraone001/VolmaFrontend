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
            <!-- Route to Dashboard -->
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

            <!-- Route to Kelola Mahasiswa -->
            <li>
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

            <!-- Route to Kelola Kandidat -->
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

            <!-- Route to Kelola Pemilih -->
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

          <!-- LogOut -->
          <div class="items logout">
            <li>
              <a
                class="navigate-link btn text-left"
                data-toggle="modal"
                data-target="#Modal"
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

              <!-- Dropdown LogOut -->
              <div
                class="modal fade"
                id="Modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header border-0">
                      <h5
                        class="modal-title text-secondary"
                        id="exampleModalLabel"
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
                      <p class="py-2 text-center">
                        Apakah anda yakin ingin keluar?
                      </p>
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

<style scoped src="../assets/css/components/sidebar.css">
</style>
