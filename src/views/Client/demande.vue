<template>
  <!-- Breadcrumb -->
  <bread-crumb>
    <template v-slot:bread1> Demandes </template>
  </bread-crumb>
  <!-- <Breadcrumb breadcrumb="Demandes" /> -->
  <button @click="open = true"
    class="mobileajouter px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none animate__animated animate__shakeX animate__delay-1s"
   >
    Demande Livraison
  </button>
  <div :class="`modal ${!open && 'opacity-0 pointer-events-none'
  } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
    <div @click="open = false" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

    <div class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container" style="width: 681px">
      <div
        class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
        <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
          viewBox="0 0 18 18">
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="px-6 py-4 text-left modal-content">
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Demande Livraison</p>
          <div class="z-50 cursor-pointer modal-close" @click="open = false">
            <svg class="text-black fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </div>
        </div>

        <!--Body-->
        <form @submit.prevent="demandelivraisons">
          <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b grid grid-cols-2 gap-2">
            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Description</label>

              <textarea required
                class="w-full px-2 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                v-model="description" />
            </div>
            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Poids</label>

              <input required
                class="w-full px-2 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="number" v-model="poids" />
            </div>
            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Adresse depart</label>

              <select required name=""
                class="w-full px-2 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                id="" v-model="depart">
                <option v-for="ville in villes" :key="ville" :value="ville.nomVille">
                  {{ ville.nomVille }}
                </option>
              </select>
            </div>

            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Adresse arrive</label>

              <select required name=""
                class="w-full px-2 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                id="" v-model="arrive">
                <option v-for="ville in villes" :key="ville" :value="ville.nomVille">
                  {{ ville.nomVille }}
                </option>
              </select>
            </div>

            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Largeur</label>

              <input required
                class="w-full px-2 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="number" v-model="largeur" />
            </div>

            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Hauteur</label>

              <input required
                class="w-full px-2 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="number" v-model="hauteur" />
            </div>

            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Date</label>

              <input required
                class="w-full px-2 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="date" :min="this.today" v-model="datedemande" />
            </div>
            <div class="relative mt-2 rounded-md shadow-sm">
              <label class="text-xs">Fchiers</label>
              <input type="file" name="file" id="file" @change="FileSelected($event)" multiple />
            </div>
          </div>
          <div class="flex justify-end pt-2">
            <button @click="open = false"
              class="p-3 px-2 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none">
              Close
            </button>
            <button type="submit"
              class="px-2 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
              Valider
              <span :hidden="spinner">
                <svg role="status" class="inline w-5 h-5 mr-2 text-gray-200 animate-spin  fill-purple-600"
                  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
                </svg>
              </span>
            </button>

          </div>
        </form>

        <!--Footer-->

      </div>
    </div>
  </div>
  <div style="margin-top: -70px">
    <div class="flex justify-center">
      <h4 class="font-semibold p-3">Per Page :</h4>
      <div class="mb-3 p-3">
        <select v-model="perpage" @change="ChangePage(page)"
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example">
          <option :value="2">2</option>
          <option :value="5">5</option>
          <option :value="10">10</option>
        </select>
      </div>

      <h4 class="font-semibold p-3">Depart :</h4>
      <div class="mb-3 xl:w-96 p-3">
        <select v-model="departfilter" @change="ChangePage(page)"
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example">
          <option value="" class="font-semibold" selected>--Vide--</option>
          <option v-for="v in villes" :key="v" :value="v.nomVille">
            --{{ v.nomVille }}--
          </option>
        </select>
      </div>
      <h4 class="font-semibold p-3">Arrive :</h4>
      <div class="mb-3 xl:w-96 p-3">
        <select v-model="arrivefilter" @change="ChangePage(page)"
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example">
          <option value="" class="font-semibold" selected>--Vide--</option>
          <option v-for="v in villes" :key="v" :value="v.nomVille">
            --{{ v.nomVille }}--
          </option>
        </select>
      </div>
    </div>

    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <input v-model="num" @keyup="ChangePage(page)"
          class="appearance-none block text-gray-700 border border-red-500 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="text" placeholder="Num demande" />
        <table class="min-w-full leading-normal" style="width: 100%">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 text-xs text-gray-500">NUM</th>
              <th class="px-6 py-2 text-xs text-gray-500">DESCRIPTION</th>
              <th class="px-6 py-2 text-xs text-gray-500">ADRESSE DEPART</th>
              <th class="px-6 py-2 text-xs text-gray-500">ADRESSE ARRIVE</th>
              <th class="px-6 py-2 text-xs text-gray-500">
                PONDS(KG)/DIMENSION(CM)
              </th>
              <th class="px-6 py-2 text-xs text-gray-500">DATE</th>
              <th class="px-6 py-2 text-xs text-gray-500">FILE</th>
              <th class="px-6 py-2 text-xs text-gray-500">ETAT</th>
              <th class="px-6 py-2 text-xs text-gray-500">Paramétre</th>
            </tr>
          </thead>
          <tbody class="bg-gray-300 divide-y divide-gray-500">

            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              v-for="(u, index) in demandes" :key="index">

              <td class=" px-6 text-sm bg-white border-b border-gray-200">
                {{ u.idDemande }}


              </td>
              <td class="text-sm bg-white border-b border-gray-200" style="padding: 30px 49px">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.description }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                <span>{{ u.adressdepart }}</span>
              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                <span>{{ u.adressarrive }}</span>

              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                P : {{ u.poids }}
                L : {{ u.largeur }}
                H : {{ u.hauteur }}

              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                <span>{{ u.date.substr(0, 10) }}</span>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200" style="padding: 30px 49px">
                <files-modal :u="u"></files-modal>
              </td>

              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ u.idEtatdemandeNavigation.etatDemande }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex justify-around">
                  <span class="text-yellow-500 flex justify-center" v-if="u.offre.length == 0">
                    <button @click="supprimer(u.idDemande)" class="mx-2 px-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-700" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                  </span>
                  <div v-else>
                    <button
                      class="bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow"
                      @click="livrer(u)" v-if="u.idEtatdemande == encdt && u.offre.length > 0">
                      Achevé
                    </button>
                  </div>
                </div>

              </td>

            </tr>


          </tbody>
        </table>
        <div class="flex flex-col items-center px-2 py-2 bg-white border-t xs:flex-row xs:justify-between">
          <div class="inline-flex xs:mt-0">
            <!-- PAGINATION -->
            <pagination-vue :current="page" :total="total" :per-page="perpage" @page-changed="ChangePage">
            </pagination-vue>
          </div>
        </div>
      </div>
    </div>
  </div>







</template>
<script lang="js">
import BreadCrumb from "../../components/Intermediaire/BreadCrumb.vue";
import { ref } from 'vue'
import axios from "axios";
import PaginationVue from "../../components/Intermediaire/pagination/PaginationVue.vue";
import FilesModal from "./FilesModal.vue";
import url from "../../store/Api";

export default {
  components: {
    BreadCrumb,
    PaginationVue,
    FilesModal
  },
  data() {
    return {
      demandes: [],
      open: ref(false),
      success: false,
      description: '',
      depart: '',
      arrive: '',
      num: '',
      villes: [],
      updateinputdisable: true,
      update: true,
      descupdate: "",
      departupdate: "",
      arriveupdate: "",
      poids: "",
      largeur: "",
      hauteur: "",
      datedemande: "",
      page: 1,
      perpage: 5,
      departfilter: '',
      arrivefilter: '',
      today: new Date().toISOString().split("T")[0],
      Files: [],
      total: 0,
      acheve: "",
      spinner: true
    }
  },

  created() {
    axios
      .get(url +
        "EtatDemandeLivraisons/check?etat=Encours"
      )
      .then((response) => {
        this.encdt = response.data.idEtatDemande;
      })
    axios
      .get(url +
        "EtatDemandeLivraisons/check?etat=acheve"
      )
      .then((response) => {
        this.acheve = response.data.idEtatDemande;
      }),
      this.ChangePage(1);
    axios
      .get(url + "demandelivraisons/client/" + localStorage.getItem("iduser"))
      .then((response) => {
        this.total = response.data.length
      })

    axios.get(url + 'villes').then((resp) => this.villes = resp.data)


  },
  methods: {
    FileSelected(event) {
      this.Files = event.target.files;
      console.log(this.Files);
    },
    ChangePage(NumPage) {
      this.page = NumPage;

      axios
        .get(
          url + "demandelivraisons/client/" +
          localStorage.getItem("iduser") +
          "?page=" +
          this.page +
          "&quantityPage=" +
          this.perpage +
          "&depart=" +
          this.departfilter +
          "&arrive=" +
          this.arrivefilter +
          "&num=" +
          this.num
        )
        .then((resp) => {
          this.demandes = resp.data;
        });

    },
    livrer(u) {
      axios.put(
        url + "demandelivraisons/" + u.idDemande,
        {
          idDemande: u.idDemande,
          description: u.description,
          datecreation: u.datecreation,
          adressdepart: u.adressdepart,
          adressarrive: u.adressarrive,
          date: u.date,
          poids: u.poids,
          largeur: u.largeur,
          hauteur: u.hauteur,
          idEtatdemande: this.acheve,
          idclient: u.idclient,
        }
      ).then(() => {
        axios
          .get(url + "demandelivraisons/client/" + localStorage.getItem("iduser") +
            "?page=" +
            this.page +
            "&quantityPage=" +
            this.perpage)
          .then((response) => {
            this.demandes = response.data
            this.$swal({
              position: "top-end",
              icon: "success",
              toast: true,
              title: "Demande achevé",
              showConfirmButton: false,
              timer: 2000,
            })
          })

      });
    },
    /* updatedemande(id, index) {
       axios.put(url+'demandelivraisons/' + id, {
         "idDemande": id,
         "description": this.demandes[index].description,
         "datecreation": this.demandes[index].datecreation,
         "adressdepart": this.demandes[index].adressdepart,
         "poids": this.demandes[index].poids,
         "largeur": this.demandes[index].largeur,
         "hauteur": this.demandes[index].hauteur,
         "date": this.demandes[index].date,
         "adressarrive": this.demandes[index].adressarrive,
         "idEtatdemande": this.demandes[index].idEtatdemande,
         "idclient": this.demandes[index].idclient,
       }).then(() => {
         this.updateinputdisable = !this.updateinputdisable
       })
     },*/
    demandelivraisons() {
      this.spinner = false
      const date = new Date();
      if (this.depart == this.arrive) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Adresse depart et arrivé doit etre different',
        })
        this.spinner = true
      } else {
        axios.post(url + 'demandelivraisons', {
          "description": this.description,
          "datecreation": date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
          "adressdepart": this.depart,
          "adressarrive": this.arrive,
          "poids": this.poids,
          "largeur": this.largeur,
          "hauteur": this.hauteur,
          "date": this.datedemande,
          "idEtatdemande": 2002,
          "idclient": parseInt(localStorage.getItem("clientid"))
        }).then((r) => {
          if (this.Files.length > 0) {
            for (let i = 0; i < this.Files.length; i++) {
              let filedemande = new FormData();
              filedemande.append("idDemande", r.data.idDemande);
              filedemande.append("File", this.Files[i]);
              axios.post(url + "filedemandelivraisons/", filedemande)
                .then(() => {
                  if (this.Files.length - 1 === i) {
                    this.open = false;
                    this.$swal({
                      position: "top-end",
                      icon: "success",
                      toast: true,
                      title: "Demande Ajouté Avec Succée",
                      showConfirmButton: false,
                      timer: 2000,
                    })
                    setTimeout(location.reload(), 1000)
                  }

                })
            }

          }









        })
          .catch((error) => console.log(error))
      }

    },

    supprimer(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(url + 'demandelivraisons/' + id)
            .then(() => {
              axios
                .get(url + "demandelivraisons/client/" + localStorage.getItem("iduser") +
                  "?page=" +
                  this.page +
                  "&quantityPage=" +
                  this.perpage)
                .then((response) => {
                  this.demandes = response.data
                })
            })

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Demande supprimé avec succée'
          })
        }
      })

    }
  }
}
</script>
<style>
.modal {
  transition: opacity 0.25s ease;
}

@media only screen and (max-width: 991px) {
  .mobileajouter {
    position: relative;
    left: 105px;
    top: -72px;
    height: 57px;
  }
}
@media only screen and (min-width: 991px) {
.mobileajouter {
  position: relative;
  left: 498px;
  top: -92px;
  height: 57px
}
}

</style>
