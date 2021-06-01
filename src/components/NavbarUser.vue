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
      id_mhs: null,
      nama: "",
      status: null,
    };
  },
  created() {
    this.id_mhs = sessionStorage.getItem("id_mhs");
    this.nama = sessionStorage.getItem("nama");
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

<style scoped>
.navbar {
  background-color: #fff;
}
a.navbar-brand {
  font-weight: 600;
  color: rgb(66, 66, 66);
}
.nav-link {
  font-weight: 500;
}
.nav-link,
.navbar-brand {
  color: #fff;
}
.nav-item {
  padding: 3px 2px;
}
.navbar button {
  color: #fff;
}
.navbar-toggler {
  border: none;
}
.nav-outline::after {
  position: relative;
  top: 10px;
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: #2f80ed;
  transition: width 0.3s;
}
.nav-outline:hover::after {
  width: 100%;
}
.active {
  color: #2f80ed;
}
.active::after {
  position: relative;
  top: 10px;
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: #2f80ed;
}
a.nav-link.nav-outline.active {
  color: #2f80ed;
}
.dropdown-item {
  cursor: pointer;
}
</style>
