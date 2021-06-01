<template>
  <div class="landing">
    <navbar-user />
    <main class="pb-4">
      <div class="container main-content">
        <h3 class="title text-center pb-2">PEMILIHAN KETUA UMUM</h3>

        <div class="row card-groups">
          <div class="col-sm-12 col-md-6 col-lg-6 mb-4" 
          v-for="kandidat in kandidats"
                :key="kandidat.no_urut">
            <div class="card">
              <div class="card-body text-center">
                <h4 class="name-kandidat">{{ kandidat.nama }}</h4>
                <h6 class="no-kandidat">Nomor Urut {{ kandidat.no_urut }}</h6>

                <div class="container pt-4">
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-4 text-right">
                      <img
                        class="card-profile"
                        :src="'/profilePicture/'+kandidat.img_ketua+'.jpg'"
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

                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-4 text-right">
                      <img
                        class="card-profile"
                        :src="'/profilePicture/'+kandidat.img_wakil+'.jpg'"
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

                <div class="container navbar-tab-content my-4">
                  <ul
                    class="nav nav-tabs justify-content-center"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" :href="'#visi'+kandidat.no_urut"
                        >Visi</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" :href="'#misi'+kandidat.no_urut"
                        >Misi</a
                      >
                    </li>
                  </ul>
                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div :id="'visi'+kandidat.no_urut" class="container tab-pane active">
                      <br />
                      <p class="text-justify">
                        {{ kandidat.visi }}
                      </p>
                    </div>
                    <div :id="'misi'+kandidat.no_urut" class="container tab-pane fade">
                      <br />
                      <p class="text-justify">
                        {{ kandidat.misi }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  data-toggle="modal"
                  :data-target="'#kandidat'+kandidat.no_urut"
                >
                  Pilih Calon
                </button>

                <!-- Modal -->
                <div
                  class="modal fade py-auto"
                  :id="'kandidat'+kandidat.no_urut"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
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
                      <div class="modal-body text-left">
                        <p>Anda memilih pasangan calon dengan nomor urut {{ kandidat.no_urut }}.</p>
                        <p>Dengan {{ kandidat.nama }} sebagai ketua dan {{ kandidat.nama_wakil }} sebagai wakil.</p>
                        <p><b>Apakah anda yakin?</b></p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Tidak
                        </button>
                        <button type="button" class="btn btn-primary">
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
      </div>
    </main>
  </div>
</template>

<script>
import NavbarUser from "@/components/NavbarUser.vue";

import axios from "axios";

export default {
  name: "Landing",
  components: {
    NavbarUser,
  },
  data() {
    return {
        kandidats: []
    };
  },
  created() {
      this.getKandidats();
  },
  methods: {
    /*
     * @return dataset dashboard yang telah didaftarkan oleh admin.
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
          console.log(this.kandidats);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.landing {
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  height: 100%;
  color: rgb(66, 66, 66);
}
.main-content {
  padding-top: 2rem;
}

.main-content h3 {
  color: #fff;
}

.card {
  border-radius: 12px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.card-groups {
  margin-top: 3rem;
}
.card-profile {
  border-radius: 50%;
  width: 6.5rem;
}

.name-kandidat {
  margin-top: 1.5rem;
  margin-bottom: 0;
  font-weight: 600;
}
.no-kandidat {
  margin-bottom: 0;
  font-weight: 500;
  color: gray;
}

.col-6 p.mb-0 {
  color: gray;
}

.nav-tabs .nav-link {
  color: rgb(66, 66, 66);
}
.tab-content {
  height: 20vh;
  overflow-y: scroll;
}
.tab-content::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.modal-content {
  border: none;
  border-radius: 10px;
}
</style>
