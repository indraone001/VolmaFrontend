<template>
  <div>
    <nav class="navbar navbar-light fixed-top">
      <!-- Nama Admin -->
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
      <!-- Navbar jika ukuran layar kecil -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <span class="navbar-brand mb-0 h4 text-center d-block">
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

export default {
  name: "navbar-admin",
  data() {
    return {};
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

@media only screen and (max-width: 768px) {
  .navbar-toggler {
    display: inline-block;
  }
  .navbar .navbar-brand {
    display: none;
  }
}
</style>
