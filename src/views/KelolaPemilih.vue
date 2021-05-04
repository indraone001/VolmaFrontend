<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>
      <main>
        
      </main>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";

// import axios from "axios";

export default {
  name: "KelolaPemilih",
  components: {
    NavbarAdmin,
    Sidebar
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style scoped>


.main-content {
  height: 100%;
  margin-left: 16%;
  transition: margin-left 200ms;
  background: #eefafd;
}
.main-kandidat {
  padding-top: 6rem;
}
.main-kandidat h2 {
  font-weight: 600;
}
/* .main-kandidat .search-container {
  float: right;
} */

.main-kandidat input[type="text"] {
  width: 75%;
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  border-radius: 4px;
}

.main-kandidat .search-container button {
  /* float: right; */
  /* margin-right: 16px; */
  padding: 6px 10px;
  margin-top: 8px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.main-kandidat .search-container button:hover {
  background: #ccc;
}

.card {
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
}


/* .bars {
  cursor: pointer;
} */

/* responsive */
/* #nav-toggle {
  display: none;
}
#nav-toggle:checked + .sidebar {
  width: 75px;
}
#nav-toggle:checked ~ .main-content {
  margin-left: 75px;
}

#nav-toggle:checked + .sidebar .sidebar-brand span:last-child,
#nav-toggle:checked + .sidebar .sidebar-menu span:last-child {
  display: none;
} */

/* Media Queries */
@media only screen and (max-width: 1200px) {
  /* .navbar-brand img {
    width: 4%;
  } */
  
  .main-content {
    margin-left: 75px;
  }

  
  .main-content:hover {
    margin-left: 75px;
  }

  
}

/* @media only screen and (max-width: 1024px) {
  .navbar-brand img {
    width: 4%;
  }
} */

@media only screen and (max-width: 768px) {
  
  .main-content {
    margin-left: 0;
  }
  .main-content:hover {
    margin-left: 0;
  }
  .navbar-toggler {
    display: inline-block;
  }
  /* .navbar .navbar-brand {
    display: none;
  } */
}
</style>
