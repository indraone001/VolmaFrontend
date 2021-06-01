<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>
      <main>
        <!-- Form -->
        <div class="background">
          <div class="containerForm container">
            <div class="screen">
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>Input Data</span>
                    <span>Pemilih</span>
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <form action="">
                      <div class="app-form-group form text-left">
                        <input
                          type="text"
                          id="nim"
                          name="nim"
                          v-model="nim"
                          required
                        />
                        <label for="nim" class="label-name">
                          <span class="content-name">Nim</span>
                        </label>
                      </div>
                      <div class="app-form-group form text-left">
                        <input
                          type="text"
                          id="nama"
                          name="nama"
                          v-model="nama"
                          required
                        />
                        <label for="nama" class="label-name">
                          <span class="content-name">Nama</span>
                        </label>
                      </div>
                      <div class="app-form-group buttons">
                        <button type="button" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Form -->
      </main>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";

// import axios from "axios";

export default {
  name: "TambahPemilih",
  components: {
    NavbarAdmin,
    Sidebar,
  },
  data() {
    return {
        nim: "",
        nama: ""
    };
  },
  created() {},
  methods: {
    // getPemilih() {
    //   const options = {
    //     url: "https://volma01.herokuapp.com/pemilih",
    //     method: "get",
    //   };
    //   axios(options)
    //     .then((response) => {
    //       this.pemilih = response.data.data;
    //       console.log(this.pemilih);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
};
</script>

<style scoped>
.main-content {
  height: 100vh;
  margin-left: 16%;
  transition: margin-left 200ms;
  background: #eefafd;
}

.background {
  display: flex;
  height: 100vh;
}

.containerForm {
  flex: 0 1 700px;
  margin: auto;
}

.screen {
  position: relative;
  background: #ffff;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 40px;

  right: 20px;
  bottom: 0;
  border-radius: 200px;
  box-shadow: 0 20px 40px rgba(15, 15, 15, 0.4);
  z-index: -1;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #666;
  font-size: 26px;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 35px;
  height: 4px;
  background: #666;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #666;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #666;
}

form {
  margin: 0 5%;
}
.form {
  width: 100%;
  height: 50px;
  position: relative;
  overflow: hidden;
}
.form input {
  width: 100%;
  height: 100%;
  color: #666;
  padding-top: 16px;
  padding-bottom: 10px;
  border: none;
  outline: none;
}
.form label {
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #666;
  color: #666;
}

.form label::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #2f80ed;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}
.content-name {
  position: absolute;
  bottom: 5px;
  left: 0px;
  transition: all 0.3s ease;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
  transform: translateY(-100%);
  font-size: 14px;
  color: #2f80ed;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after {
  transform: translateX(0%);
}



/* Query Form */
@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}

/* Media Queries */
@media only screen and (max-width: 1200px) {
  .main-content {
    margin-left: 75px;
  }
  .main-content:hover {
    margin-left: 75px;
  }
}

@media only screen and (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
  .main-content:hover {
    margin-left: 0;
  }
}
</style>
