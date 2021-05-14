<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand d-block d-sm-block d-md-none" href="#">Volma</a>
      <button
        class="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
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
              Jhon Doe
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <!-- <a class="dropdown-item" href="#">Another action</a> -->
              <!-- <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a> -->
            </div>
          </li>
          <li class="nav-item d-block d-sm-block d-md-none">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item d-block d-sm-block d-md-none">
            <a class="nav-link" href="#">Kandidat</a>
          </li>
          <li class="nav-item d-block d-sm-block d-md-none">
            <a class="nav-link" href="#">Pemilih</a>
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
    return {};
  },
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
  /* .navbar-toggler {
    display: inline-block;
  } */
  /* .navbar .navbar-brand {
    display: none;
  } */
}

@media only screen and (max-width: 990px) {
  .navbar-toggler {
    display: inline-block;
  }
  /* .navbar .navbar-brand {
    display: none;
  } */
}
</style>
