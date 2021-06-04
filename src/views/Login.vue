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
              <img src="@/assets/logoLogin.png" alt="" class="mb-4 pb-2" width="10%">
              <h2 class="tittle mb-3">Welcome to <br> Volma</h2>
              <div class="line-brand"></div>
              <p style="width: 30vw;">
                VOLMA merupakan aplikasi berbasis web yang bertujuan untuk
                membantu mahasiswa dalam melakukan pemilihan umum secara online.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 d-flex login-form">
          <div class="container">
            <img src="@/assets/logoTitle.png" alt="" class="m-auto pb-4 d-block d-sm-block d-md-block d-lg-none" width="15%">
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
              sessionStorage.setItem("id_pemilih", token.data[0].id_pemilih);
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

<style scoped src="../assets/css/views/login.css">
</style>
