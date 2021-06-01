<template>
  <div>
    <sidebar />

    <div class="main-content">
      <header>
        <navbar-admin />
      </header>
      <main>
        <!-- Form -->
        <div class="container">
          <div class="card text-center mx-auto">
            <div class="card-body">
              <h4 class="card-title mb-4">Input Data Mahasiswa</h4>
              <form @submit.prevent="addMahasiswa()">
                <div class="form text-left my-3">
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
                <div class="form text-left my-3">
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
                <div class="form text-left my-3">
                  <input
                    type="text"
                    id="jurusan"
                    name="jurusan"
                    v-model="jurusan"
                    required
                  />
                  <label for="jurusan" class="label-name">
                    <span class="content-name">Jurusan</span>
                  </label>
                </div>
                <div class="form text-left my-3">
                  <input
                    type="text"
                    id="angkatan"
                    name="angkatan"
                    v-model="angkatan"
                    required
                  />
                  <label for="angkatan" class="label-name">
                    <span class="content-name">Angkatan</span>
                  </label>
                </div>

                <button class="btn btn-primary mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <!-- Form -->
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "TambahMahasiswa",
  components: {
    Sidebar,
    NavbarAdmin,
  },
  data() {
    return {
      nim: "",
      nama: "",
      jurusan: "",
      angkatan: "",
    };
  },
  methods: {
    addMahasiswa: function() {
      if (this.nim && this.nama && this.jurusan && this.angkatan) {
        let nim = this.nim;
        let nama = this.nama;
        let jurusan = this.jurusan;
        let angkatan = this.angkatan;

        const options = {
          url: "https://volma01.herokuapp.com/mahasiswa",
          method: "post",
          data: {
            nim,
            nama,
            jurusan,
            angkatan,
          },
        };
        axios(options)
          .then((response) => {
            console.log(response.data);
            alert(response.data.message);
            this.$router.push({ path: "mahasiswa" });
          })
          .catch((e) => {
            console.log(e);
            alert(e);
            this.$router.push({ path: "mahasiswa" });
          });
      }
    },
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

.card {
  width: 70%;
  margin: 12vh 0;
  padding: 2rem 10vw;
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
h4.card-title {
  padding-bottom: 30px;
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
