<template>
  <!-- Breadcrumb -->
  <!-- <Breadcrumb breadcrumb="Offre Récu" /> -->
  <div class="mt-6">
    <h2 class="text-xl font-semibold leading-tight text-gray-700">
      Facture offres
    </h2>
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <div class="flex flex-col mt-3 text-center sm:flex-row">
          <div class="flex">
            <div class="relative">
              <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                v-model="perPage"
                @change="ChangePage(this.currentPage)"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
           
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              v-model="searchby"
              placeholder="num demande"
              class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              @keyup="searchfunction(this.searchby)"
            />
          </div>
        </div>

        <table id="example" class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Numéro offre
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Numéro Demande
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Facture envoyé
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Reçu payement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(u, index) in offres" :key="index">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.idOffre }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.idDemandeNavigation.idDemande }}
                    </p>
                  </div>
                </div>
              </td>
              <td
                class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                style="padding: 30px 49px"
                v-if="u.factureTransporteur.length > 0"
              >
                <a
                  v-if="u.factureTransporteur[0].factureFile != null"
                  :href="u.factureTransporteur[0].srcFactureFile"
                  target=" _blank"
 class="inline-flex px-2 
      text-xs font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full
                            border-8 border-blue-600 

      "                >
                  Télécharger
                </a>
                <input
                  v-if="u.factureTransporteur[0].factureFile == null"
                  type="file"
                  id="image"
                  multiple="multiple"
                  @change="FileSelected($event, u)"
                />
              </td>
              <td
                class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                v-if="u.factureTransporteur.length > 0"
              >
                  <a
                    v-if="u.factureTransporteur[0].payementFile != null"
                    :href="u.factureTransporteur[0].srcPayementFile"
                    target=" _blank"
               class="inline-flex px-2 
      text-xs font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full
                            border-8 border-blue-600 

      "                  >
                    Télécharger
                  </a>
                  <p
                    v-if="u.factureTransporteur[0].payementFile == null"
                    class="inline-flex px-2 
      text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full
                            border-8 border-orange-600 

      "
                    >en attente</p
                  >
                
              </td>
              <td
                class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                v-if="(u.factureTransporteur.length == 0)"
              >
                <p class="text-gray-900 whitespace-nowrap">
                  <a>
                    <input
                      type="file"
                      id="image"
                      multiple="multiple"
                      @change="FileSelected($event, u)"
                    />
                  </a>
                </p>
              </td>
              <td
                class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                v-if="(u.factureTransporteur.length== 0)"
              >
                <p class="text-gray-900 whitespace-nowrap">
                  <a>paiement en attente</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="flex flex-col items-center px-2 py-2 bg-white border-t xs:flex-row xs:justify-between"
        >
          <div class="inline-flex xs:mt-0">
            <!-- PAGINATION -->
            <pagination-vue
              :current="currentPage"
              :total="this.long"
              :per-page="perPage"
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
// import Breadcrumb from "../../partials/Breadcrumb.vue";
import axios from "axios";
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import ModalLayoutOffreUpdate from "/src/views/Transporteur/Offres/ModalLayoutOffreUpdate.vue";
import ModalOffreFichier from "/src/views/Transporteur/Offres/ModalOffreFichier.vue";
export default defineComponent({
  components: {
    // Breadcrumb
    ModalLayoutOffreUpdate,
    PaginationVue,
    ModalOffreFichier,
  },
  data() {
    return {
      offres: [],
      valide: "",
      villes: [],
      imageFile: null,
      currentPage: 1,
      searchby: "",
      date: "",
      perPage: 5,
      total: "",
      long: "",
      depart: "",
      arrive: "",
      etat: "",
      nondispo: "",
      hrefa: "",
    };
  },
  created() {
    axios
      .get("http://localhost:5000/api/EtatOffres/offre?offre=Nontraite")
      .then((response) => {
        this.nondispo = response.data;
      });
    axios
      .get("http://localhost:5000/api/EtatOffres/offre?offre=livre")
      .then((response) => {
        this.valide = response.data.idEtat;
      });
    axios
      .get("http://localhost:5000/api/villes")
      .then((resp) => (this.villes = resp.data));
    axios
      .get(
        "http://localhost:5000/api/Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((response) => {
        axios
          .get(
            "http://localhost:5000/api/offres/" +
              response.data.idTransporteur +
              "/offrestransporteur" +
              "?etat=Livre"
          )
          .then((resp) => {
            this.long = resp.data.length;
          });
      });

    axios
      .get(
        "http://localhost:5000/api/offres/" +
          localStorage.getItem("idtransporteur") +
          "/offrestransporteur" +
          "?page=" +
          this.currentPage +
          "&quantityPage=" +
          this.perPage +
          "&etat=Livre"
      )
      .then((resp) => {
        this.offres = resp.data;
      });
  },
  methods: {
    FileSelected(event, table) {
      this.imageFile = event.target.files[0];
      let user = new FormData();
      user.append("etatFacture", 1);
      user.append("idOffre", table.idOffre);
      user.append("factureFile", "");
      user.append("payementFile", "");
      user.append("notification", "");
      user.append("imageFile", this.imageFile);
      user.append("srcPayementFile", "");
      axios.post("http://localhost:5000/api/FactureTransporteurs", user);
    },

    searchfunction(mot) {
      axios
        .get(
          "http://localhost:5000/api/offres/" +
            localStorage.getItem("idtransporteur") +
            "/offrestransporteur" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage +
            "&&depart=" +
            this.depart +
            "&arrive=" +
            this.arrive +
            "&date=" +
            this.date +
            "&etat=Livre" +
            "&search=" +
            this.searchby
        )
        .then((resp) => {
          this.offres = resp.data;
        });
    },
    ChangePage(NumPage) {
      this.currentPage = NumPage;
      this.perPage = this.perPage;
      axios
        .get(
          "http://localhost:5000/api/offres/" +
            localStorage.getItem("idtransporteur") +
            "/offrestransporteur" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage +
            "&&depart=" +
            this.depart +
            "&arrive=" +
            this.arrive +
            "&date=" +
            this.date +
            "&etat=" +
            this.etat
        )
        .then((resp) => {
          this.offres = resp.data;
        });
    },
    valider(table) {
      if (result.value) {
        axios
          .put("http://localhost:5000/api/Offres/" + table.idOffre, {
            idOffre: table.idOffre,
            description: table.description,
            date: table.date,
            heurearrive: table.heurearrive,
            datecreation: table.datecreation,
            idEtat: this.valide.idEtat,
            prix: table.prix,
            prixFinale: table.prixFinale,
            idTransporteur: localStorage.getItem("idtransporteur"),
            idDemande: table.idDemande,
          })
          .then(() => {
            this.close();
          });
      }
    },
  },
});
</script>
