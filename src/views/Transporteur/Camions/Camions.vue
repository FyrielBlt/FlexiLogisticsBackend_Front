<template>
  <div>
    <!-- Add Trajet-->
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
        <div class="px-6 py-4 text-left modal-content">
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">Ajouter Camion</p>
          </div>
          <!--Body-->
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <form @submit.prevent="ajouterCamionfunction">
                    <div>
                      <label class="text-gray-700" for="username"
                        >Code Véhicule</label
                      >
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"
                        v-model="codevehicule"
                        required
                      />
                      <div>
                        <label class="text-gray-700" for="passwordConfirmation"
                          >Chauffeur
                        </label>
                        <select
                          v-model="cinchauffeur"
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                          required
                        >
                          <option
                            v-for="column in this.chauffeurscamions"
                            :key="column"
                            :value="column.idchauffeur"
                          >
                            {{ column.cinchauffeur }}
                          </option>
                        </select>
                      </div>
                      <div>
                        <label class="text-gray-700" for="passwordConfirmation"
                          >Type
                        </label>
                        <select
                          required
                          v-model="typecamion"
                          class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        >
                          <option
                            v-for="column in this.typecamions"
                            :key="column"
                            :value="column.idType"
                          >
                            {{ column.description }}
                          </option>
                        </select>
                      </div>
                      <div class="flex justify-end mt-4">
                        <button
                          type="submit"
                          class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Breadcrumb breadcrumb="Blank" />
    <div  >
      <div class="mt-6">
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
          <div class="relative">
            <select
              v-model="type"
              @change="ChangePage(this.currentPage)"
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="" class="font-semibold" selected>Type</option>
              <option v-for="t in typecamions" :key="t" :value="t.idtype">
                {{ "--" + t.description + "--" }}
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
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              @keyup="searchfunction(this.searchby)"
            />
          </div>
        </div>

        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table id="example" class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    N
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Code Véhicule
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Chauffeur
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Type
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Description
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Trajet
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Settings
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(u, index) in camions" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    {{ index + 1 }}
                  </td>

                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ u.codevehicule }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <div v-if="u.idchauffeurNavigation != null">
                          {{ u.idchauffeurNavigation.iduserNavigation.nom }}
                        </div>
                        <div v-if="u.idchauffeurNavigation == null">
                          <span class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-red-800
                      bg-red-100
                      rounded-full
                    "> Affecter chauffeur</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ u.idtypeNavigation.description }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          Poids: {{ u.idtypeNavigation.poids }} <br />
                          Largeur : {{ u.idtypeNavigation.largeur }} <br />
                          Hauteur : {{ u.idtypeNavigation.hauteur }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      <button @click="setlocalstorage(u.idcamion)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-vector-pen"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                          />
                        </svg>
                      </button>
                    </p>
                  </td>

                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <span class="text-yellow-500 flex justify-center">
                      <modal-layout-camion-update
                        :camiontable="u"
                      ></modal-layout-camion-update>
                      <form @submit.prevent="supprimercamion(u.idcamion)">
                        <button class="mx-2 px-2 rounded-md">
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
                      </form>
                    </span>
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
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import ModalLayoutCamionUpdate from "/src/views/Transporteur/Camions/ModalLayoutCamionUpdate.vue";
import ModalLayoutTarjet from "/src/views/Transporteur/Trajets/Tarjet.vue";
export default {
  components: {
    ModalLayoutCamionUpdate,
    ModalLayoutTarjet,
    PaginationVue,
  },
  data() {
    return {
      camions: [],
      open: false,
      ajouterCamion: "Ajouter Camion",
      idtransporteur: "",
      currentPage: 1,
      perPage: 5,
      type: "",
      searchby: "",
      total: "",
      long: "",
      idchauffeur: "",
      codevehicule: "",
      typecamion: "",
      statut: "",
      open: false,
      cinchauffeur: "",
      chauffeur: "",
      chauffeurscamions: [],
      i: 0,
      typecamions: [],
    };
  },
  created() {
    // liste camions de ce transporteur
    axios
      .get(
        "http://localhost:5000/api/Camions/" +
          localStorage.getItem("idtransporteur") +
          "?page=" +
          this.currentPage +
          "&quantityPage=" +
          this.perPage
      )
      .then((response) => {
        this.camions = response.data;
      })
      .catch((error) => console.log(error));
    axios
      .get(
        "http://localhost:5000/api/Camions/" +
          localStorage.getItem("idtransporteur")
      )
      .then((response) => {
        this.long = response.data.length;
      })
      .catch((error) => console.log(error));
    // tous les typescamions

    axios
      .get("http://localhost:5000/api/TypeCamions")
      .then((response) => {
        this.typecamions = response.data;
      })
      .catch((error) => console.log(error));

    //les chauffeurs sans camion
    axios
      .get(
        "http://localhost:5000/api/Chauffeurs/" +
          localStorage.getItem("societe") +
          "/chauffeurs"
      )
      .then((response) => {
        response.data.forEach((element) => {
          if (element.camion.length == 0) {
            this.chauffeurscamions[this.i] = element;
            this.i = this.i + 1;
          }
        });
      })
      .catch((error) => console.log(error));
  },

  methods: {
    close() {
    // liste camions de ce transporteur
    axios
      .get(
        "http://localhost:5000/api/Camions/" +
          localStorage.getItem("idtransporteur") +
          "?page=" +
          this.currentPage +
          "&quantityPage=" +
          this.perPage
      )
      .then((response) => {
        this.camions = response.data;
      })
      .catch((error) => console.log(error));
    axios
      .get(
        "http://localhost:5000/api/Camions/" +
          localStorage.getItem("idtransporteur")
      )
      .then((response) => {
        this.long = response.data.length;
      })
      .catch((error) => console.log(error));
    // tous les typescamions

    axios
      .get("http://localhost:5000/api/TypeCamions")
      .then((response) => {
        this.typecamions = response.data;
      })
      .catch((error) => console.log(error));

    //les chauffeurs sans camion
    axios
      .get(
        "http://localhost:5000/api/Chauffeurs/" +
          localStorage.getItem("societe") +
          "/chauffeurs"
      )
      .then((response) => {
        response.data.forEach((element) => {
          if (element.camion.length == 0) {
            this.chauffeurscamions[this.i] = element;
            this.i = this.i + 1;
          }
        });
      })
      .catch((error) => console.log(error));
    },
    searchfunction(mot) {
      axios
        .get(
          "http://localhost:5000/api/Transporteurs/" +
            localStorage.getItem("iduser") +
            "/iduser"
        )
        .then((response) => {
          axios
            .get(
              "http://localhost:5000/api/Camions/" +
                response.data.idTransporteur +
                "?page=" +
                this.currentPage +
                "&quantityPage=" +
                this.perPage +
                "&search=" +
                mot
            )
            .then((response) => {
              this.camions = response.data;
              console.log(this.camions);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    ChangePage(NumPage) {
      this.currentPage = NumPage;
      this.perPage = this.perPage;
      axios
        .get(
          "http://localhost:5000/api/Transporteurs/" +
            localStorage.getItem("iduser") +
            "/iduser"
        )
        .then((response) => {
          axios
            .get(
              "http://localhost:5000/api/Camions/" +
                response.data.idTransporteur +
                "?page=" +
                this.currentPage +
                "&quantityPage=" +
                this.perPage +
                "&type=" +
                this.type
            )
            .then((response) => {
              this.camions = response.data;
              console.log(this.camions);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    setlocalstorage(id) {
      localStorage.setItem("moncamion", id);
      location.replace("Trajetcamion");
    },
    supprimercamion(id) {
      this.$swal({
        title: "vous êtes sûr?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#36c6d3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.value) {
         
              axios
                .delete("http://localhost:5000/api/Camions/" + id)
                .then(() => {
                 
                });
            
        }
      });
    },
    ajouterCamionfunction() {
      // tout les champs sont remplis
      if (
        this.codevehicule != "" &&
        this.cinchauffeur != "" &&
        this.typecamion != ""
      ) {
        axios
          .post("http://localhost:5000/api/Camions", {
            idtransporteur: localStorage.getItem("idtransporteur"),
            idchauffeur: this.cinchauffeur,
            codevehicule: this.codevehicule,
            idtype: this.typecamion,
          })
          .then(() => {
            this.$swal({
              position: "top-end",
              icon: "success",
              toast: true,
              title: "Camion Ajouté",
              showConfirmButton: false,
              timer: 2000,
            });
            location.replace("camions");
          })
          .catch((error) => {
            console.log(error);
            this.$swal({
              position: "top-end",
              icon: "error",
              toast: true,
              title: "Codevéhicule réservé",
              showConfirmButton: false,
              timer: 2000,
            });
          });
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
