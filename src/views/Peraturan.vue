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
                  <ol v-for="rule in rules" :key="rule.id">
                    <li class="d-flex">
                      <div>
                        <p>{{ rule.id }}.</p>
                      </div>
                      <div class="divider"></div>
                      <div>
                        <p>{{ rule.value }}</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <router-link
                  to="/landing"
                  tag="button"
                  class="btn btn-primary mt-4 mb-3 px-4"
                  v-if="status != 1"
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

export default {
  name: "Peraturan",
  components: {
    NavbarUser,
  },
  data() {
    return {
      rules: [
        {
          id: 1,
          value:
            "Pengguna dinyatakan sebagai mahasiswa yang masih terdaftar secara sah oleh universitas.",
        },
        {
          id: 2,
          value:
            "Setiap pengguna hanya bisa memilih satu calon saja dan tidak akan bisa mengubah pilihan tersebut setelah diinputkan.",
        },
        {
          id: 3,
          value:
            "Setiap pengguna sepakat untuk tidak memperjualkan atau memberikan hak pilihnya kepada pihak lain.",
        },
        {
          id: 4,
          value: "Pengguna dan calon harus menerapkan asas LUBER dan JURDIL.",
        },
        {
          id: 5,
          value:
            "Setelah hasil akhir pemilihan telah didapatkan maka hasil tersebut tidak dapat diganggu gugat oleh pihak manapun.",
        },
        {
          id: 6,
          value:
            "Jika proses Pemilihan terindikasi kecurangan maka permasalahan tersebut akan dikembalikan kepada fakultas untuk ditindak lanjuti apakah pemilihan akan dilakukan ulang atau tidak.",
        },
        {
          id: 7,
          value:
            "Dengan Menekan tombol 'Saya menyetujui persyaratan' maka, Pengguna dianggap telah membaca, memahami dan menyetujui ketentuan dalam pemilihan umum.",
        },
      ],
      status: null,
    };
  },
  created() {
    this.status = sessionStorage.getItem("status");
  },
};
</script>

<style scoped>
.peraturan {
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  height: 100%;
  color: rgb(66, 66, 66);
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
.divider {
  width: 5px;
}
</style>
