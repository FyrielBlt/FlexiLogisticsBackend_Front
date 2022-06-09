<template>
  <div>   
    <div class="mt-8 ">
      <div class="mt-6">
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
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
                <div class="relative">
                  <select
                    v-model="depart"
                    @change="ChangePage(this.currentPage)"
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="" class="font-semibold" selected>
                      depart
                    </option>
                    <option v-for="v in villes" :key="v" :value="v.nomVille">
                      --{{ v.nomVille }}--
                    </option>
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
                <div class="relative">
                  <select
                    v-model="arrive"
                    @change="ChangePage(this.currentPage)"
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="" class="font-semibold" selected>
                      Arrive
                    </option>
                    <option v-for="v in villes" :key="v" :value="v.nomVille">
                      --{{ v.nomVille }}--
                    </option>
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
                <div class="relative">
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
              </div>
              <div class="relative">
                <input
                  type="date"
                  v-model="date"
                  @change="ChangePage(this.currentPage)"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                />
              </div>
            </div>
            <table id="example" class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Ville départ
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Destination
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Date départ
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Heure départ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(u, index) in trajets" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ u.idVille1Navigation.nomVille }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        {{ u.idVille2Navigation.nomVille }}
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.date.substr(0, 10) }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.heurdepart }}
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
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../../../store/Api";
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import ModalTrajetUpdate from "/src/views/Transporteur/Trajets/ModalLayoutTrajetUpdate.vue";

export default {
  components: {
    PaginationVue,
    ModalTrajetUpdate,
  },
  props: ["tarjettable"],
  data() {
    return {
      pass: "",
      error: "",
      open: false,
      trajets: [],
      idtransporteur: "",
      currentPage: 1,
      perPage: 5,
      searchby: "",
      total: "",
      exists: [],
      depart: "",
      arrive: "",
      villes: [],
      date: "",
      long: "",
      dateheure: "",
    };
  },
  created() {
    //get etatdemandedevis where etat=accepte
    axios
      .get(url+"EtatDemandeDevis?etat=Accepte")
      .then((response) => {
        this.accepte = response.data;
      }),
      //get etatoffre where etat=en cours
      axios
        .get(url+"EtatOffres?offre=Nontraite")
        .then((response) => {
          this.encours = response.data;
        }),
      axios
        .get(url+"villes")
        .then((resp) => (this.villes = resp.data));
    // liste trajets de ce camion
    axios
      .get(
        url+"Trajets/" +
          localStorage.getItem("moncamion") +
          "/camion" +
          "?page=" +
          this.currentPage +
          "&quantityPage=" +
          this.perPage
      )
      .then((response) => {
        this.trajets = response.data;
      })
      .catch((error) => console.log(error));
    axios
      .get(
        url+"Trajets/" +
          localStorage.getItem("moncamion") +
          "/camion"
      )
      .then((response) => {
        this.long = response.data.length;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    ChangePage(NumPage) {
      this.currentPage = NumPage;
      this.perPage = this.perPage;
      axios
        .get(
          url+"Trajets/" +
            localStorage.getItem("moncamion") +
            "/camion" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage +
            "&depart=" +
            this.depart +
            "&arrive=" +
            this.arrive +
            "&date=" +
            this.date
        )
        .then((response) => {
          this.trajets = response.data;
        })
        .catch((error) => console.log(error));
    },
   
    reload() {
      //get etatdemandedevis where etat=accepte
      axios
        .get(url+"EtatDemandeDevis?etat=Accepte")
        .then((response) => {
          this.accepte = response.data;
        }),
        //get etatoffre where etat=en cours
        axios
          .get(url+"EtatOffres?offre=Nontraite")
          .then((response) => {
            this.encours = response.data;
          }),
        axios
          .get(url+"villes")
          .then((resp) => (this.villes = resp.data));
      // liste trajets de ce camion
      axios
        .get(
          url+"Trajets/" +
            localStorage.getItem("moncamion") +
            "/camion" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage
        )
        .then((response) => {
          this.trajets = response.data;
        })
        .catch((error) => console.log(error));
      axios
        .get(
          url+"Trajets/" +
            localStorage.getItem("moncamion") +
            "/camion"
        )
        .then((response) => {
          this.long = response.data.length;
        })
        .catch((error) => console.log(error));
    },
    
  },
};
</script>
<style>
.affect {
  font-weight: bold;
  color: red;
}
</style>
