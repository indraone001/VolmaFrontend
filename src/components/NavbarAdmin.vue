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
            <h5 class="py-2">Jhon Doe</h5>
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
          <li class="nav-item d-block d-sm-block d-md-none">
            <a class="nav-link" href="#">Logout</a>
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

.navbar-brand {
  font-weight: 600;
}

h5 {
  margin-bottom: 0;
  font-weight: 600;
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
</style>
