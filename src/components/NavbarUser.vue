<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light py-3">
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
            <li class="nav-item pr-2">
              <a class="nav-link" href="#">
                <font-awesome-icon :icon="['fas', 'home']" /> 
                Home
              </a>
            </li>
            <li class="nav-item pr-2">
              <a class="nav-link" href="#">
                <font-awesome-icon :icon="['fas', 'shield-alt']" /> 
                Peraturan</a
              >
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
                Jhon Doe
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Log Out</a>
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
    return {};
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
}
.navbar-brand {
  font-weight: 600;
}
.nav-link {
  font-weight: 500;
}
.nav-link,
.navbar-brand {
  color: #fff;
}

.navbar button {
  color: #fff;
}
.navbar-toggler {
    border: none;
}

</style>
