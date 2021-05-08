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
            <li>
              <router-link
                to="/"
                active-class="active"
                exact
                class="navigate-link"
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
            <li>
              <router-link
                to="/kandidat"
                active-class="active"
                exact
                class="navigate-link"
              >
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'user-tie']" />
                  </div>
                  <div class="col-8">
                    <span>Kandidat</span>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/pemilih"
                active-class="active"
                exact
                class="navigate-link"
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

          <div class="items logout">
            <li>
              <router-link 
                to="/"
                active-class="active"
                exact
                class="navigate-link">
                <div class="row">
                  <div class="col-2">
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                  </div>
                  <div class="col-8">
                    <span>Log Out</span>
                  </div>
                </div>
              </router-link>
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
        status: true
    };
  },
  computed: {
    setStatus: () => {
      return this.status ? "active" : "";
    },
  },
};
</script>

<style scoped>
.sidebar {
  color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 16%;
  transition: width 300ms;
  z-index: 999999;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
}

.sidebar-brand {
  display: flex;
  padding: 2rem;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
}
.sidebar-brand span {
  font-weight: 600;
}

.sidebar-menu {
  margin-top: 1rem;
  width: 100%;
}
.sidebar-menu ul {
  list-style: none;
}
.sidebar-menu ul li .navigate-link {
  color: #fff;
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
}
.sidebar-menu ul li .navigate-link:hover {
  transition: 0.3s;
  padding: 1rem 1.7rem;
  background-color: #7bb4ff;
}

.align {
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.active {
  background-color: #2f80ed;
}

@media only screen and (max-width: 1200px) {
  .sidebar {
    width: 75px;
  }
  .sidebar .sidebar-brand span:last-child,
  .sidebar .sidebar-menu span:last-child {
    display: none;
  }

  /* Hover */
  .sidebar:hover {
    width: 300px;
  }
  .sidebar:hover .sidebar-brand span:last-child,
  .sidebar:hover .sidebar-menu span:last-child {
    display: block;
  }
  .sidebar-menu ul li .navigate-link {
    color: #fff;
    display: block;
    padding: 1rem 2rem;
    text-decoration: none;
  }
}

@media only screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
