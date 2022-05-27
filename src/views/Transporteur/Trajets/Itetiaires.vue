<template>
  <div>
    <!-- Ajouter villes -->
    <button @click="open = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="25"
        fill="currentColor"
        class="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
        />
      </svg>
    </button>
    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="open = false"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <div class="px-6 py-4 text-left modal-content ">
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">Ajouter Ville</p>
          </div>
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <form @submit.prevent="ajouterTrajet">
                    <div>
                      <label class="text-gray-700" for="passwordConfirmation"
                        >ctr+c pour selection multiple
                      </label>
                      <select
                        v-model="ville"
                        multiple
                        required
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      >
                        <option
                          v-for="column in this.villesshown"
                          :key="column"
                          :value="column"
                        >
                          {{ column.nomVille }}
                        </option>
                      </select>
                    </div>
                    <div class="flex justify-end mt-4">
                      <button
                        class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      >
                        Ajouter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Affichage des villes -->
    <div class="mt-8">
      <div class="mt-6">
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow  "
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
              </div>
            </div>
            <table id="example" class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Ville
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Settings
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    <form
                      @submit.prevent="supprimerville(u)"
                      v-if="this.checked != ''"
                    >
                      <span class="text-yellow-500 flex justify-center">
                        <button class="
          px-6
          py-2
          mt-3
          font-medium
          tracking-wide
          text-white
          bg-indigo-600
          hover:bg-indigo-900
          focus:outline-none
           animate__animated animate__shakeX animate__delay-1s
        " style="position: absolute;
    right: 600px;
    top: 40px;
    height: 62px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-red-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          
                        </button>
                      </span>
                    </form>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(u, index) in inteneraires" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ u.idVilleNavigation.nomVille }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <input
                      type="checkbox"
                      class="w-5 h-5 text-indigo-600 rounded-md focus:ring-indigo-500"
                      :id="u.idItineraire"
                      :value="u.idItineraire"
                      v-model="checked"
                      name="radio"
                    />
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  ></td>
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
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";

export default {
  components: {
    PaginationVue,
  },
  data() {
    return {
      open: false,
      inteneraires: [],
      currentPage: 1,
      perPage: 5,
      checked: [],
      total: "",

      villes: [],

      villesshown: [],
    };
  },
  created() {
    // tous le villes
    axios
      .get(
        "http://localhost:5000/api/villes/" +
          localStorage.getItem("idtransporteur") +
          "/transporteur"
      )
      .then((resp) => (this.villesshown = resp.data));

    // liste des villes de ce transport
    axios
      .get(
        "http://localhost:5000/api/Itineraires/" +
          localStorage.getItem("idtransporteur") +
          "/transporteur"
      )
      .then((response) => {
        this.inteneraires = response.data;
      });
    // liste des villes de ce transport
    axios
      .get(
        "http://localhost:5000/api/Itineraires/" +
          localStorage.getItem("idtransporteur") +
          "/transporteur"
      )
      .then((response) => {
        this.long = response.data.length;
      });
  },
  methods: {
    ChangePage(NumPage) {
      this.currentPage = NumPage;
      this.perPage = this.perPage;
      axios
        .get(
          "http://localhost:5000/api/Itineraires/" +
            localStorage.getItem("idtransporteur") +
            "/transporteur" +
            "/camion" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage
        )
        .then((response) => {
          this.villesshown = response.data;
        })
        .catch((error) => console.log(error));
    },
    supprimerville() {
      this.$swal({
        title: "Supprission ville",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#36c6d3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.value) {
          this.checked.forEach((element) => {
            axios
              .delete("http://localhost:5000/api/Itineraires/" + element)
              .then(() => {
                this.reload();
              });
          });
           
        } 
      });
    },
    reload() {
      // tous le villes
      axios
        .get(
          "http://localhost:5000/api/villes/" +
            localStorage.getItem("idtransporteur") +
            "/transporteur"
        )
        .then((resp) => (this.villesshown = resp.data));
      // liste des villes de ce transport
      axios
        .get(
          "http://localhost:5000/api/Itineraires/" +
            localStorage.getItem("idtransporteur") +
            "/transporteur"
        )
        .then((response) => {
          this.inteneraires = response.data;
        });
      // liste des villes de ce transport
      axios
        .get(
          "http://localhost:5000/api/Itineraires/" +
            localStorage.getItem("idtransporteur") +
            "/transporteur"
        )
        .then((response) => {
          this.long = response.data.length;
        });
    },
    ajouterTrajet() {
      if (this.ville != "") {
        this.ville.forEach((element) => {
          axios.post("http://localhost:5000/api/Itineraires", {
            idVille: element.idVille,
            idTransporteur: localStorage.getItem("idtransporteur"),
          })
          .then(()=>{
            this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Ville(s) Ajouté!",
          showConfirmButton: false,
          timer: 2000,
        })
                this.reload();

        })
        })
      }
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
