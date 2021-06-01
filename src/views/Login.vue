<template>
  <div>
    <!-- "Tag HTML yang digunakan"
      <div>
        Merupakan tag pembungkus dengan display: block
      ------------------------------------------------
      <h2>
        Tag untuk membuat judul
      ------------------------------------------------
      <h3>
        Tag membuat judul yang tidak terlalu besar
      ------------------------------------------------
      <p>
        Tag untuk menuliskan paragraf
      ------------------------------------------------
      <button>
        Membuat tombol untuk submit
      ------------------------------------------------
      <form>
        Tag untuk membungkus input
      ------------------------------------------------
      <input>
        Tag tempat untuk melakukan Binding data
      ------------------------------------------------
      <span>
        Tag pembungkus dengan display: inline-block
      ------------------------------------------------
     -->
    <!-- Sintax Vue
      Event Handling:
        v-on:click / @click
        @submin.prevent
      Binding Data:
        v-model, Untuk binding data secara real-time
     -->
    <div class="cover">
      <div class="row">
        <div class="col-lg-7 d-none d-md-none d-lg-block d-sm-none">
          <div class="brand d-flex">
            <div class="container">
              <h2 class="tittle">Welcome to Volma</h2>
              <div class="line-brand"></div>
              <p>
                VOLMA merupakan aplikasi berbasis web yang bertujuan untuk
                membantu mahasiswa dalam melakukan pemilihan umum secara online.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 d-flex login-form">
          <div class="container">
            <h2
              class="d-block d-sm-block d-md-block d-lg-none title-responsive"
            >
              Welcome to Volma
            </h2>
            <h3 class="title-form d-none d-md-none d-sm-none d-lg-block">
              Sign In
            </h3>
            <div class="line-form d-inline-block"></div>
            <div
              v-if="cekError"
              class="alert alert-warning alert-dismissible fade show text-left"
              role="alert"
            >
              Gagal melakukan login, periksa kembali nim dan password anda.
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                @click="setCekError()"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="login()">
              <div class="form text-left">
                <input type="text" id="nim" name="nim" v-model="nim" required />
                <label for="nim" class="label-name">
                  <span class="content-name">Nim</span>
                </label>
              </div>
              <div class="form mt-3 text-left">
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  v-model="password"
                  required
                />
                <label for="pass" class="label-name">
                  <span class="content-name">Password</span>
                </label>
              </div>

              <button class="btn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      nim: "",
      password: "",
      cekError: false,
    };
  },
  methods: {
    /**
     * @return status true / false
     *
     */
    login: function() {
      if (this.nim && this.password) {
        let nim = this.nim;
        let password = this.password;
        const options = {
          url: "https://volma01.herokuapp.com/login",
          method: "post",
          data: {
            nim,
            password,
          },
        };
        axios(options)
          .then((response) => {
            const token = response.data;
            console.log(token);
            if (token.admin) {
              sessionStorage.setItem("id_mhs", token.data[0].id_mhs);
              sessionStorage.setItem("nama", token.data[0].nama);
              this.$router.push({ path: "dashboard" });
            } else {
              console.log("Noo");
              sessionStorage.setItem("id_mhs", token.data[0].id_mhs);
              sessionStorage.setItem("nama", token.data[0].nama);
              sessionStorage.setItem("status", token.data[0].status);

              if (token.data[0].status == 1) {
                this.$router.push({ path: "statistik-vote" });
              } else {
                this.$router.push({ path: "peraturan" });
              }
            }
          })
          .catch((e) => {
            console.log(e);
            let error = true;
            this.cekError = error;
          });
      }
    },
    /**
     * @return cekError = false
     * Jika terdapat error maka akan set cekError menjadi false untuk menampilkan notifikasi
     */
    setCekError: function() {
      this.cekError = false;
    },
  },
};
</script>

<style scoped>
.brand {
  height: 100vh;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
  padding: 0 7rem;
  align-items: center;
}
h2 {
  font-size: 2.5rem;
}
.cover {
  overflow-x: hidden;
}
.line-brand {
  width: 15%;
  height: 4px;
  background-color: #fff;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}
.line-form {
  width: 10%;
  height: 4px;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  background-color: #666;
}
.login-form {
  height: 100vh;
  background-color: #fff;
  align-items: center;
  padding: 0 5rem;
  text-align: center;
  color: #666;
}
.btn {
  padding: 9px 46px;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
  border-radius: 20px;
  margin-top: 2.5rem;
}
.btn:hover {
  color: white;
  background: #5255eb;
  background: -webkit-linear-gradient(to right, #5255eb, #56ccf2);
  background: linear-gradient(to right, #5255eb, #56ccf2);
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
</style>
