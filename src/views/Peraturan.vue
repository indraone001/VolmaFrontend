<template>
  <div class="peraturan">
    <navbar-user />
    <main class="pb-4">
      <div class="container main-content">
        <h3 class="title text-center pb-2">PEMILIHAN KETUA UMUM</h3>

        <div class="col d-flex justify-content-center">
          <div class="card">
            <div class="card-body text-center">
              <div class="container">
                <div class="agreement">
                  <br />
                  <h4 class="text-center">Ketentuan Umum pengguna:</h4>
                  <br />
                  <ol>
                    <li>
                      <p>
                        Pengguna dinyatakan sebagai <b>mahasiswa</b> yang masih
                        terdaftar secara sah oleh universitas.
                      </p>
                    </li>
                    <li>
                      <p>
                        Setiap pengguna hanya bisa memilih satu calon saja dan
                        tidak akan bisa mengubah pilihan tersebut setelah
                        diinputkan.
                      </p>
                    </li>
                    <li>
                      <p>
                        Setiap pengguna sepakat untuk tidak memperjualkan atau
                        memberikan hak pilihnya kepada pihak lain.
                      </p>
                    </li>
                    <li>
                      <p>
                        Pengguna dan calon harus menerapkan asas
                        <b>LUBER</b> dan <b>JURDIL</b>.
                      </p>
                    </li>
                    <li>
                      <p>
                        Setelah hasil akhir pemilihan telah didapatkan maka
                        hasil tersebut tidak dapat diganggu gugat oleh pihak
                        manapun.
                      </p>
                    </li>
                    <li>
                      <p>
                        Jika proses Pemilihan terindikasi kecurangan maka
                        permasalahan tersebut akan dikembalikan kepada fakultas
                        untuk ditindak lanjuti apakah pemilihan akan dilakukan
                        ulang atau tidak.
                      </p>
                    </li>
                    <li>
                      <p>
                        Dengan Menekan tombol
                        <b>"Saya menyetujui persyaratan"</b> maka, Pengguna
                        dianggap telah membaca, memahami dan menyetujui
                        ketentuan dalam pemilihan umum.
                      </p>
                    </li>
                  </ol>
                </div>
                <router-link
                  to="/landing"
                  tag="button"
                  class="btn btn-primary mt-4 mb-3 px-4"
                >
                  Saya menyetujui persyaratan
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarUser from "@/components/NavbarUser.vue";

// import axios from "axios";

export default {
  name: "Peraturan",
  components: {
    NavbarUser,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    /*
     * @return dataset dashboard yang telah didaftarkan oleh admin.
     *
     */
    // getKandidats() {
    //   const options = {
    //     url: "https://volma01.herokuapp.com/kandidat",
    //     method: "get",
    //   };
    //   axios(options)
    //     .then((response) => {
    //       this.kandidats = response.data.data;
    //       console.log(this.kandidats);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
};
</script>

<style scoped>
.peraturan {
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  height: 100%;
}
.main-content {
  padding-top: 2rem;
  padding-bottom: 2cm;
}

.main-content h3 {
  color: #fff;
}

.card {
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  align-items: center;
  top: 1cm;
}

.agreement {
  overflow: auto;
  text-align: left;
}

.container {
  max-height: fit-content;
}
</style>
