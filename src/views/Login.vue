<template>
  <div>
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
            <form @submit.prevent="login()">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Username"
                v-model="nim"
              />

              <input
                type="password"
                id="lpass"
                name="lpass"
                placeholder="Password"
                v-model="password"
              />
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
    };
  },
  methods: {
    login: function() {
      if (this.nim && this.password) {
        let nim = this.nim;
        let password = this.password;
        const options = {
          url: "http://localhost:3000/login",
          method: "post",
          data: {
            nim,
            password,
          },
        };
        axios(options)
          .then((response) => {
            const token = response;
            console.log(token)
            // localStorage.setItem("access_token", token);
            // if (token) {
            //   this.$router.push({
            //     name: "Kelola-Pemilih",
            //     params: {
            //       token: token,
            //     },
            //   });
            // }

          })
          .catch((e) => {
            console.log(e);
            let error = true;
            this.error = error;
          });
      }
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
  background-color: #000;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  background-color: rgb(49, 49, 49);
}
.login-form {
  height: 100vh;
  background-color: #fff;
  align-items: center;
  padding: 0 5rem;
  text-align: center;
  color: rgb(49, 49, 49);
}
.btn {
  padding: 5px 30px;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
  border-radius: 20px;
  margin-top: 2.5rem;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 3px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(49, 49, 49);
}
input[type="text"]:active,
input[type="password"]:active {
  width: 100%;
  padding: 12px 3px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(32, 32, 32);
}
form {
  margin: 0 5%;
}
</style>
