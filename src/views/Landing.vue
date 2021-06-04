<template>
  <div class="landing">
    <navbar-user />

    <main class="pb-4">
      <div class="container main-content">
        <h3 class="title text-center pb-2">PEMILIHAN KETUA UMUM</h3>

        <!-- Search -->
        <div class="item my-4 pt-4">
          <form>
            <input
              type="text"
              class="search"
              placeholder="Cari Ketua"
              v-model="search"
            />
          </form>
        </div>

        <div class="row card-groups" v-if="filteredData.length">
          <div
            class="col-sm-12 col-md-6 col-lg-6 mb-4"
            v-for="kandidat in filteredData"
            :key="kandidat.id_kandidat"
          >
            <div class="card">
              <div class="card-body text-center">
                <h4 class="name-kandidat">{{ kandidat.nama }}</h4>
                <h6 class="no-kandidat">Nomor Urut {{ kandidat.no_urut }}</h6>

                <div class="container pt-4">
                  <!-- Profile Ketua -->
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-4 text-right">
                      <img
                        class="card-profile"
                        :src="'/profilePicture/' + kandidat.img_ketua + '.jpg'"
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div class="col-6 text-left my-auto">
                      <h5 class="mb-0">Ketua</h5>
                      <p class="mb-0">{{ kandidat.nama }}</p>
                    </div>
                    <div class="col-1"></div>
                  </div>

                  <br />

                  <!-- Profile Wakil -->
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-4 text-right">
                      <img
                        class="card-profile"
                        :src="'/profilePicture/' + kandidat.img_wakil + '.jpg'"
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div class="col-6 text-left my-auto">
                      <h5 class="mb-0">Wakil</h5>
                      <p class="mb-0">{{ kandidat.nama_wakil }}</p>
                    </div>
                    <div class="col-1"></div>
                  </div>
                </div>

                <!-- Visi dan Misi -->
                <div class="container navbar-tab-content my-4">
                  <ul
                    class="nav nav-tabs justify-content-center"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        :href="'#visi' + kandidat.no_urut"
                        >Visi</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        :href="'#misi' + kandidat.no_urut"
                        >Misi</a
                      >
                    </li>
                  </ul>

                  <!-- Tab panes Visi Misi -->
                  <div class="tab-content">
                    <div
                      :id="'visi' + kandidat.no_urut"
                      class="container tab-pane active"
                    >
                      <br />
                      <p class="text-justify">
                        {{ kandidat.visi }}
                      </p>
                    </div>
                    <div
                      :id="'misi' + kandidat.no_urut"
                      class="container tab-pane fade"
                    >
                      <br />
                      <p class="text-justify">
                        {{ kandidat.misi }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Button Pilih Calon -->
                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  data-toggle="modal"
                  :data-target="'#kandidat' + kandidat.no_urut"
                >
                  Pilih Calon
                </button>

                <!-- Modal Pilih Calon -->
                <div
                  class="modal fade py-auto"
                  :id="'kandidat' + kandidat.no_urut"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header border-0">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Nomor Urut {{ kandidat.no_urut }}
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
                      <div class="modal-body border-0 text-left">
                        <p>
                          Anda memilih pasangan calon dengan nomor urut
                          {{ kandidat.no_urut }}.
                        </p>
                        <p>
                          Dengan <b>{{ kandidat.nama }}</b> sebagai ketua dan
                          <b>{{ kandidat.nama_wakil }}</b> sebagai wakil.
                        </p>
                        <p><b>Apakah anda yakin?</b></p>
                      </div>
                      <div class="modal-footer border-0">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Tidak
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click.prevent="addVote(id_mhs, kandidat.id_kandidat)"
                          data-dismiss="modal"
                        >
                          Ya, saya yakin.
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          
          <div class="card">
            <div class="card-body">
              <h4 class="text-center not-found">Data tidak ditemukan</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import NavbarUser from "@/components/NavbarUser.vue";

export default {
  name: "Landing",
  components: {
    NavbarUser,
  },
  data() {
    return {
      search: "",
      kandidats: [],
      id_pemilih: null,
    };
  },
  created() {
    this.getKandidats();
    this.id_mhs = sessionStorage.getItem("id_pemilih");
  },
  methods: {
    /**
     * @return list data Kandidat
     *
     */
    getKandidats() {
      const options = {
        url: "https://volma01.herokuapp.com/kandidat",
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
     * Memilih Kandidat
     *
     */
    addVote: function(id_mhs, id_kandidat) {
      const options = {
        url: `https://volma01.herokuapp.com/vote/${id_mhs}/${id_kandidat}`,
        method: "post",
      };
      axios(options)
        .then((response) => {
          console.log("Voted: ", response);
          sessionStorage.setItem("status", 1);
          alert("Anda sudah melakukan vote");
          this.$router.push({ path: "statistik-vote" });
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    },
  },
  computed: {
    /**
     * @return data kandidat yang dicari
     *
     */
    filteredData: function() {
      return this.kandidats.filter((data) => {
        let name = data.nama.toLowerCase();
        return name.match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped src="../assets/css/views/landing.css"></style>
