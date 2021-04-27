<template>
  <div>
    <nav class="navbar navbar-light fixed-top">
      <!-- <span><i class="fas fa-chevron-left te"></i></span> -->
      <span class="navbar-brand mb-0 h4 ml-auto">
        Jhon Doe
      </span>
      <button
        class="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <span class="navbar-brand mb-0 h4 text-center d-block">
          <!-- <img src="user.jpg" alt="" /> -->
          Jhon Doe
        </span>
        <div class="navbar-nav text-center">
          <a class="nav-item nav-link" href="#">Dashboard</a>
          <a class="nav-item nav-link" href="#">Kandidat</a>
          <a class="nav-item nav-link" href="#">Pemilih</a>
          <a class="nav-item nav-link" href="#">Sign Out</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "navbar-admin",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
}

/* .navbar-brand img {
  width: 2.5%;
  border-radius: 50%;
  margin-right: 0.5rem;
} */

.navbar-toggler {
  display: none;
}
/* @media only screen and (max-width: 1024px) {
  .navbar-brand img {
    width: 4%;
  }
} */
@media only screen and (max-width: 768px) {
  .navbar-toggler {
    display: inline-block;
  }
  .navbar .navbar-brand {
    display: none;
  }
}
</style>
