<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light py-1">
      <div class="container">
        <a class="navbar-brand pr-2" href="#">Volma</a>
        <button
          class="navbar-toggler text-secondary"
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
          <ul class="navbar-nav mr-auto">
            <!-- Jika pemilih belum melakukan vote -->
            <li class="nav-item  px-2" v-if="status == 0">
              <router-link
                to="/landing"
                tag="a"
                active-class="active"
                exact
                class="nav-link nav-outline"
              >
                <font-awesome-icon :icon="['fas', 'home']" />
                Home
              </router-link>
            </li>

            <!-- Jika pemilih sudah melakukan vote -->
            <li class="nav-item  px-2" v-else-if="status == 1">
              <router-link
                to="/statistik-vote"
                tag="a"
                active-class="active"
                exact
                class="nav-link nav-outline"
              >
                <font-awesome-icon :icon="['fas', 'home']" />
                Hasil Vote
              </router-link>
            </li>

            <!-- Peraturan -->
            <li class="nav-item pr-2">
              <router-link
                to="/peraturan"
                tag="a"
                active-class="active"
                exact
                class="nav-link nav-outline"
              >
                <font-awesome-icon :icon="['fas', 'shield-alt']" />
                Peraturan
              </router-link>
            </li>
          </ul>

          <!-- Dropdown LogOut -->
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ nama }}
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" @click="logout">Log Out</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-user",
  data() {
    return {
      nama: "",
      id_mhs: null,
      status: null,
    };
  },
  created() {
    this.nama = sessionStorage.getItem("nama");
    this.id_mhs = sessionStorage.getItem("id_mhs");
    this.status = sessionStorage.getItem("status");
  },
  methods: {
    logout: function() {
      sessionStorage.clear();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped src="../assets/css/components/navbarUser.css">
</style>
