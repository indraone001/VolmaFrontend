<template>
  <div id="kandidat">
    <sidebar />
    <div class="main-content">
      <header>
        <navbar-admin />
      </header>

      <main>
        <div class="container main-kandidat">
          <h2 class="mb-4">Kelola Kandidat</h2>
          <div class="d-flex justify-content-between">
            <!-- Router to Tambah Kandidat -->
            <div class="item">
              <router-link
                tag="button"
                to="/tambah-kandidat"
                class="btn btn-primary"
              >
                Tambahkan Kandidat
              </router-link>
            </div>

            <!-- Search -->
            <div class="item search-container">
                <input
                  type="text"
                  class="search"
                  placeholder="Cari Ketua"
                  v-model="search"
                />
            </div>
          </div>

          <!-- Table Kandidat -->
          <section class="table-kandidat pb-4">
            <div class="card border-0 mb-4">
              <div class="card-body">
                <div
                  class="container table-responsive"
                  v-if="filteredData.length"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>No Urut</th>
                        <th>Foto</th>
                        <th>Ketua dan Wakil</th>
                        <th>Visi dan Misi</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="kandidat in filteredData"
                        :key="kandidat.id_kandidat"
                      >
                        <th>{{ kandidat.no_urut }}</th>
                        <td>
                          <img
                            class="card-profile"
                            :src="
                              '/profilePicture/' + kandidat.img_ketua + '.jpg'
                            "
                            alt=""
                            width="100%"
                          />
                          <br />
                          <img
                            class="card-profile"
                            :src="
                              '/profilePicture/' + kandidat.img_wakil + '.jpg'
                            "
                            alt=""
                            width="100%"
                          />
                        </td>
                        <td style="width:250px; height:50px;">
                          <!-- Ketua -->
                          <p class="mb-0"><b>Ketua</b></p>
                          <p>{{ kandidat.nama_ketua }}</p>

                          <!-- Wakil -->
                          <p class="mb-0"><b>Wakil</b></p>
                          <p>{{ kandidat.nama_wakil }}</p>
                        </td>
                        <td style="width:400px;">
                          <!-- Visi -->
                          <p class="mb-0"><b>Visi</b></p>
                          <p style="width:400px;">{{ kandidat.visi }}</p>

                          <!-- Misi -->
                          <p class="mb-0"><b>Misi</b></p>
                          <p style="width:400px;">{{ kandidat.misi }}</p>
                        </td>
                        <td>
                          <!-- Button Edit Kandidat -->
                          <button
                            type="button"
                            class="btn btn-primary my-4 mr-1"
                            data-toggle="modal"
                            :data-target="'#edit' + kandidat.id_kandidat"
                            @click="
                              fillFormEdit(
                                kandidat.id_ketua,
                                kandidat.id_wakil,
                                kandidat.nama_ketua,
                                kandidat.nama_wakil,
                                kandidat.img_ketua,
                                kandidat.img_wakil,
                                kandidat.no_urut,
                                kandidat.visi,
                                kandidat.misi
                              )
                            "
                          >
                            Edit
                          </button>
                          <!-- Modal Edit Kandidat -->
                          <div
                            class="modal fade"
                            :id="'edit' + kandidat.id_kandidat"
                            tabindex="-2"
                            role="dialog"
                            aria-labelledby="exampleModalCenterTitle"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-lg modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-header border-0">
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body border-0 text-center">
                                  <h5>Ubah Data Kandidat</h5>
                                  <p>Nomor Urut {{ kandidat.no_urut }}</p>
                                  <!--  -->
                                  <div class="container">
                                    <div class="row">
                                      <!-- Data Ketua -->
                                      <div class="col-md-6 text-center">
                                        <h5 class="text-center py-3">
                                          Data Ketua
                                        </h5>

                                        <!-- Id Ketua -->
                                        <div
                                          class="form text-left my-3 mx-auto"
                                        >
                                          <input
                                            type="text"
                                            name="id_ketua"
                                            v-model="id_ketua"
                                            required
                                            readonly
                                          />
                                          <label
                                            for="id_ketua"
                                            class="label-name"
                                          >
                                            <span class="content-name"
                                              >Id Ketua (Read only)</span
                                            >
                                          </label>
                                        </div>

                                        <!-- Nama Ketua -->
                                        <div
                                          class="form text-left mb-4 mx-auto"
                                        >
                                          <input
                                            type="text"
                                            name="namaKetua"
                                            v-model="namaKetua"
                                            required
                                            readonly
                                          />
                                          <label
                                            for="namaKetua"
                                            class="label-name"
                                          >
                                            <span class="content-name"
                                              >Nama Ketua (Read only)</span
                                            >
                                          </label>
                                        </div>

                                        <!-- Foto Ketua -->
                                        <div
                                          class="form text-left mb-4 mx-auto"
                                        >
                                          <input
                                            type="text"
                                            name="imgKetua"
                                            v-model="imgKetua"
                                            required
                                          />
                                          <label
                                            for="imgKetua"
                                            class="label-name"
                                          >
                                            <span class="content-name"
                                              >Foto Ketua</span
                                            >
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-md-6 text-center">
                                        <!-- Data Wakil -->
                                        <h5 class="text-center py-3">
                                          Data Wakil
                                        </h5>

                                        <!-- Id Wakil -->
                                        <div
                                          class="form text-left my-3 mx-auto"
                                        >
                                          <input
                                            type="text"
                                            name="id_wakil"
                                            v-model="id_wakil"
                                            required
                                            readonly
                                          />
                                          <label
                                            for="id_wakil"
                                            class="label-name"
                                          >
                                            <span class="content-name"
                                              >Id Wakil (Read only)</span
                                            >
                                          </label>
                                        </div>

                                        <!-- Nama Wakil -->
                                        <div
                                          class="form text-left mb-4 mx-auto"
                                        >
                                          <input
                                            type="text"
                                            name="namaWakil"
                                            v-model="namaWakil"
                                            required
                                            readonly
                                          />
                                          <label
                                            for="namaWakil"
                                            class="label-name"
                                          >
                                            <span class="content-name"
                                              >Nama Wakil (read only)</span
                                            >
                                          </label>
                                        </div>

                                        <!-- Foto Wakil -->
                                        <div
                                          class="form text-left mb-4 mx-auto"
                                        >
                                          <input
                                            type="text"
                                            name="imgWakil"
                                            v-model="imgWakil"
                                            required
                                          />
                                          <label
                                            for="imgWakil"
                                            class="label-name"
                                          >
                                            <span class="content-name"
                                              >Foto Wakil</span
                                            >
                                          </label>
                                        </div>
                                      </div>
                                    </div>

                                    <!-- No Urut -->
                                    <div class="form text-left my-4 mx-auto">
                                      <input
                                        type="text"
                                        name="noUrut"
                                        v-model="noUrut"
                                        required
                                      />
                                      <label for="noUrut" class="label-name">
                                        <span class="content-name"
                                          >Nomor Urut</span
                                        >
                                      </label>
                                    </div>

                                    <!-- Visi -->
                                    <div class="form text-left mb-4 mx-auto">
                                      <input
                                        type="text"
                                        name="visi"
                                        v-model="visi"
                                        required
                                      />
                                      <label for="visi" class="label-name">
                                        <span class="content-name">Visi</span>
                                      </label>
                                    </div>

                                    <!-- Misi -->
                                    <div class="form text-left mb-4 mx-auto">
                                      <input
                                        type="text"
                                        name="misi"
                                        v-model="misi"
                                        required
                                      />
                                      <label for="misi" class="label-name">
                                        <span class="content-name">Misi</span>
                                      </label>
                                    </div>
                                  </div>

                                  <!-- Button Ubah Data Kandidat -->
                                  <button
                                    type="button"
                                    class="btn btn-primary my-4"
                                    data-dismiss="modal"
                                    @click.prevent="updateKandidat(kandidat.id_kandidat)"
                                  >
                                    Ubah Data
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Button Hapus Kandidat -->
                          <button
                            type="button"
                            class="btn btn-outline-danger my-4"
                            data-toggle="modal"
                            :data-target="'#hapus' + kandidat.id_kandidat"
                          >
                            Hapus
                          </button>
                          <!-- Modal Button Hapus Kandidat-->
                          <div
                            class="modal fade"
                            :id="'hapus' + kandidat.id_kandidat"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-header border-0">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Hapus Kandidat
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body border-0">
                                  <p>
                                    Apakan anda yakin ingin menghapus pasangan
                                    calon nomor <b>{{ kandidat.no_urut }}</b
                                    >?
                                  </p>
                                </div>
                                <div class="modal-footer border-0">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    tidak
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-dismiss="modal"
                                    @click="delKandidat(kandidat.id_kandidat)"
                                  >
                                    Ya, saya yakin.
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div v-else>
                  <h4 class="text-center not-found">Data tidak ditemukan</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    <div class="foo" v-if="filteredData.length <= 3"></div>
  </div>
</template>

<script>
import axios from "@/axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "KelolaKandidat",
  components: {
    Sidebar,
    NavbarAdmin
  },
  data() {
    return {
      visi: "",
      misi: "",
      search: "",
      imgKetua: "",
      imgWakil: "",
      namaKetua: "",
      namaWakil: "",
      noUrut: null,
      id_ketua: null,
      id_wakil: null,
      kandidats: []
    };
  },
  created() {
    this.getKandidat();
  },
  methods: {
    /**
     * @return daftar mahasiswa
     *
     */
    getKandidat() {
      const options = {
        url: "kandidat",
        method: "get",
      };
      axios(options)
        .then((response) => {
          this.kandidats = response.data.data;
          console.log("Kandidat: ", this.kandidats);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * @return Data kandidat yang telah diedit
     *
     */
    updateKandidat: function(id_kandidat) {
      let id_ketua = this.id_ketua;
      let id_wakil = this.id_wakil;
      let img_ketua = this.imgKetua;
      let img_wakil = this.imgWakil;
      let no_urut = this.noUrut;
      let visi = this.visi;
      let misi = this.misi;

      const options = {
        url: `kandidat/${id_kandidat}`,
        method: "put",
        data: {
          id_ketua,
          id_wakil,
          img_ketua,
          img_wakil,
          no_urut,
          visi,
          misi
        },
      };
      axios(options)
        .then((response) => {
          console.log("Update Kandidat: ", response);
          alert("Berhasil melakukan Update");
          this.getKandidat();
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    },
    /**
     * @return Data mahasiswa yang dihapus
     *
     */
    delKandidat: function(id_kandidat) {
      const options = {
        url: `kandidat/${id_kandidat}`,
        method: "delete",
      };
      axios(options)
        .then((response) => {
          console.log("delKandidat: ", response);
          this.getKandidat();
          this.kandidats.splice(id_kandidat, 1);
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    },
    /**
     * Mengisi dengan data kandidat yang dipilih
     *
     */
    fillFormEdit: function(
      id_ketua,
      id_wakil,
      nama_ketua,
      nama_wakil,
      img_ketua,
      img_wakil,
      no_urut,
      visi,
      misi
    ) {
      this.id_ketua = id_ketua;
      this.id_wakil = id_wakil;
      this.namaKetua = nama_ketua;
      this.namaWakil = nama_wakil;
      this.imgKetua = img_ketua;
      this.imgWakil = img_wakil;
      this.noUrut = no_urut;
      this.visi = visi;
      this.misi = misi;
    }
  },
  computed: {
    /**
     * @return data kandidat yang dicari
     *
     */
    filteredData: function() {
      return this.kandidats.filter((data) => {
        let name = data.nama_ketua.toLowerCase();
        return name.match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped src="../assets/css/views/kelolaKandidat.css"></style>
