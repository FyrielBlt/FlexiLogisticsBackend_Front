<template>
  <!-- Breadcrumb -->
   <bread-crumb>
      <template v-slot:bread1> Demandes </template>
      <template v-slot:bread> Offres recus </template>
    </bread-crumb>
  <!-- <Breadcrumb breadcrumb="Offre Récu" /> -->

  <div class="mt-6">
   
          <div class="flex justify-center">
          <h4 class="font-semibold p-3">Per Page :</h4>
          <div class="mb-3 p-3">
            <select
              v-model="perpage"
              @change="ChangePage(page)"
              class="
                form-select
                appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              aria-label="Default select example"
            >
              <option :value="2">2</option>
              <option :value="5">5</option>
              <option :value="10">10</option>
            </select>
          </div>

          <h4 class="font-semibold p-3">Depart :</h4>
          <div class="mb-3 xl:w-96 p-3">
            <select
              v-model="arrive"
              @change="ChangePage(page)"
              class="
                form-select
                appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-semibold
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              aria-label="Default select example"
            >
              <option value="" class="font-semibold" selected>--Vide--</option>
              <option v-for="v in villes" :key="v" :value="v.nomVille">
                --{{ v.nomVille }}--
              </option>
            </select>
          </div>
          <h4 class="font-semibold p-3">Arrive :</h4>
          <div class="mb-3 xl:w-96 p-3">
            <select
              v-model="depart"
              @change="ChangePage(page)"
              class="
                form-select
                appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-semibold
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              aria-label="Default select example"
            >
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
          id="grid-first-name" type="text" placeholder="Num demande">
        <table class="min-w-full leading-normal" id="myTable">
          <thead>
            <tr>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Num
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
                style="padding: 15px 30px"
              >
                Demande
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Description
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Date
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Départ
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Arrive
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                File
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Prix
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Etat
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Transporteur
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Settings
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(u, index) in offres" :key="index">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ u.idDemandeNavigation.idDemande }}
                  </p>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.idDemandeNavigation.description }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ u.description }}
                  </p>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <span
                    class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-red-800
                      bg-red-100
                      rounded-full
                    "
                    v-if="u.date > u.idDemandeNavigation.date"
                    >{{ u.date.substr(0,10) }}</span>
                    <span
                    class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-green-800
                      bg-green-100
                      rounded-full
                    "
                    v-else-if="u.date == u.idDemandeNavigation.date"
                    >{{ u.date.substr(0,10) }}</span>
           
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.idDemandeNavigation.adressarrive }}
                </p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.idDemandeNavigation.adressdepart }}
                </p>
              </td>
              <td
                class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                style="padding: 1px 10px"
              >
                <a
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                  "
                  :href="u.file"
                  v-if="u.file"
                  >Download</a
                >
                <a style="color: red; font-weight: bold" v-else> No File</a>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">{{ u.prixFinale }}DT</p>
              </td>

              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span
                  :class="`relative inline-block px-3 py-1 font-semibold text-${u.statusColor}-900 leading-tight`"
                >
                  <span
                    aria-hidden
                    :class="`absolute inset-0 bg-${u.statusColor}-200 opacity-50 rounded-full`"
                  ></span>
                  <span class="relative"> {{ u.idEtatNavigation.etat }}</span>
                </span>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.idTransporteurNavigation.idUserNavigation.nom }}
                  {{ u.idTransporteurNavigation.idUserNavigation.prenom }}
                </p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex justify-around">
                  <span class="text-green-700 flex justify-center">
                    <button
                      class="
                        bg-white
                        hover:bg-green-100
                        text-green-800
                        font-semibold
                        py-2
                        px-4
                        border border-green-400
                        rounded
                        shadow
                      "
                      @click="accepter(u)"
                      v-if="u.idEtat == encdt"
                    >
                      Accepter
                    </button>
                    <button
                      class="
                        bg-white
                        hover:bg-red-100
                        text-red-800
                        font-semibold
                        py-2
                        px-4
                        border border-red-400
                        rounded
                        shadow
                      "
                      @click="annuler(u)"
                      v-if="u.idEtat == att"
                    >
                      Annuler
                    </button>
                   
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="
            flex flex-col
            items-center
            px-2
            py-2
            bg-white
            border-t
            xs:flex-row
            xs:justify-between
          "
        >
          <div class="inline-flex xs:mt-0">
            <!-- PAGINATION -->
            <pagination-vue
              :current="page"
              :total="total "
              :per-page="perpage"
              @page-changed="ChangePage"
            ></pagination-vue>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from 'vue'
import BreadCrumb from "../../components/Intermediaire/BreadCrumb.vue";
import axios from "axios";
import PaginationVue from "../../components/Intermediaire/pagination/PaginationVue.vue";

//import $ from "jquery";
export default defineComponent({
  // components: { Breadcrumb },
  components: {
    PaginationVue,BreadCrumb
  },
  data() {
    return {
       open : ref(false),
      success:false,
      offres: [],
      page: 1,
      perpage: 5,
      searchtext: "",
      villes: [],
      depart: "",
      arrive: "",
      nt:"",
      att:"",
      encdt:"",
      acc:"",
      num: '',
      total:0
    };
  },
  created() {
     axios
      .get(
        "http://localhost:5000/api/EtatOffres/offre?offre=attente" 
          )
      .then((response) =>{
        this.att= response.data.idEtat;
      }),
       axios
      .get(
        "http://localhost:5000/api/EtatOffres/offre?offre=Accepte" 
          )
      .then((response) =>{
        this.acc= response.data.idEtat;
      }),
      axios
      .get(
        "http://localhost:5000/api/EtatOffres/offre?offre=Encours" 
          )
      .then((response) =>{
        this.encdt= response.data.idEtat;
      }),
     axios
      .get(
        "http://localhost:5000/api/EtatOffres/offre?offre=Nontraite" 
          )
      .then((response) =>{
        this.nt= response.data.idEtat;
      }),
    axios
      .get("http://localhost:5000/api/villes")
      .then((resp) => (this.villes = resp.data));
    axios
      .get(
        "http://localhost:5000/api/offres/client/" +
          localStorage.getItem("iduser") +
          "?page=" +
          this.page +
          "&quantityPage=" +
          this.perpage
      )
      .then((resp) => {
        this.offres = resp.data;
      });
      axios
      .get(
        "http://localhost:5000/api/offres/client/" +
          localStorage.getItem("iduser")
      )
      .then((resp) => {
        this.total = resp.data.length
      });
      
  },

  methods: {
    search() {
      axios
        .get(
          "http://localhost:5000/api/offres/client/" +
            localStorage.getItem("iduser") +
            "?page=" +
            this.page +
            "&quantityPage=" +
            this.perpage +
            "&name=" +
            this.searchtext
        )
        .then((resp) => {
          this.offres = resp.data;
        });
    },
    ChangePage(NumPage) {
      this.page = NumPage;
        axios
          .get(
            "http://localhost:5000/api/offres/client/" +
              localStorage.getItem("iduser") +
              "?page=" +
              this.page +
              "&quantityPage=" +
              this.perpage +
              "&depart=" +
              this.depart +
              "&arrive=" +
              this.arrive +
               "&num=" +
              this.num
          )
          .then((resp) => {
            this.offres = resp.data;
          });
      
    },

    accepter(offre) {
      axios
        .put("http://localhost:5000/api/offres/" + offre.idOffre, {
          idOffre: offre.idOffre,
          description: offre.description,
          date: offre.date,
          idEtat: this.att,
          prix: offre.prix,
          prixFinale: offre.prixFinale,
          idTransporteur: offre.idTransporteur,
          idDemande: offre.idDemande,
          recu: offre.recu,
          file: offre.file,
          heurearrive:offre.heurearrive,
          idCamion:offre.idCamion,

        })
        .then(() => {
          axios.put(
            "http://localhost:5000/api/demandelivraisons/" + offre.idDemande,
            {
              idDemande: offre.idDemande,
              description: offre.idDemandeNavigation.description,
              datecreation: offre.idDemandeNavigation.datecreation,
              adressdepart: offre.idDemandeNavigation.adressdepart,
              adressarrive: offre.idDemandeNavigation.adressarrive,
              date: offre.idDemandeNavigation.date,
              poids: offre.idDemandeNavigation.poids,
              largeur: offre.idDemandeNavigation.largeur,
              hauteur: offre.idDemandeNavigation.hauteur,
              idEtatdemande: offre.idDemandeNavigation.idEtatdemande,
              idclient: offre.idDemandeNavigation.idclientNavigation.idclient,
              file: offre.idDemandeNavigation.file,
            }
          ).then(()=>{
           Swal.fire(
      'Updated!',
      'Your offer has been updated.',
      'success'
    )
          });
          axios
            .get(
              "http://localhost:5000/api/offres/client/" +
                localStorage.getItem("iduser")
            )
            .then((resp) => {
              this.offres = resp.data;
            });
        });
    },
    annuler(offre) {
      axios
        .put("http://localhost:5000/api/offres/" + offre.idOffre, {
          idOffre: offre.idOffre,
          description: offre.description,
          date: offre.date,
          idEtat: this.encdt,
          prix: offre.prix,
          prixFinale: offre.prixFinale,
          idTransporteur: offre.idTransporteur,
          idDemande: offre.idDemande,
          recu: offre.recu,
          file: offre.file,
          heurearrive:offre.heurearrive,
          idCamion:offre.idCamion,
        })
        .then(() => {
          axios.put(
            "http://localhost:5000/api/demandelivraisons/" + offre.idDemande,
            {
              idDemande: offre.idDemande,
              description: offre.idDemandeNavigation.description,
              datecreation: offre.idDemandeNavigation.datecreation,
              adressdepart: offre.idDemandeNavigation.adressdepart,
              adressarrive: offre.idDemandeNavigation.adressarrive,
               date: offre.idDemandeNavigation.date,
              poids: offre.idDemandeNavigation.poids,
              largeur: offre.idDemandeNavigation.largeur,
              hauteur: offre.idDemandeNavigation.hauteur,
              idEtatdemande: offre.idDemandeNavigation.idEtatdemande,
              idclient: offre.idDemandeNavigation.idclientNavigation.idclient,
              file: offre.idDemandeNavigation.file,
            }
          ).then(()=>{
           Swal.fire(
      'Updated!',
      'Your offer has been updated.',
      'success'
    )
          });
          axios
            .get(
              "http://localhost:5000/api/offres/client/" +
                localStorage.getItem("iduser")
            )
            .then((resp) => {
              this.offres = resp.data;
            });
        });
    },
  },
});
</script>

