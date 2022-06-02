<template>
  <div>
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

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="px-6 py-4 text-center modal-content">
            <p class="text-2xl font-bold">Ajouter camion</p>
          <!--Body-->
         
                <form @submit.prevent="ajouterTrajet">
                    
                   <div class="relative block mt-2 sm:mt-0">
<span>Code véhicule :</span>
              <select
                        required
                        v-model="codevehicule"
                class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
 :class="[
                    codevehicule === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" 
                      >
                        <option
                          v-for="column in this.listcamions"
                          :key="column"
                          :value="column.idcamion"
                        >
                          {{ column.codevehicule }}
                        </option>
                      </select>   
 
               
              </div>
                     <div class="relative block mt-2 sm:mt-0">
<span> Ville départ: </span>
                <select
                        v-model="departadress"
                        required
                          class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
 :class="[
                    departadress === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" 
                      >
                        <option v-for="column in this.villes" :key="column">
                          {{ column.nomVille }}
                        </option>
                      </select>

               
              </div>
                      <div class="relative block mt-2 sm:mt-0">
<span>Destination: </span>
                <select
                        v-model="Destination"
                        required
                          class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
 :class="[
                    Destination=== ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" 
                      >
                        <option v-for="column in this.villes" :key="column">
                          {{ column.nomVille }}
                        </option>
                      </select>

               
              </div>
                    <div class="relative block mt-2 sm:mt-0">

                <span>Date arrive :</span>

                <input
                 class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
 :class="[
                    dateheure=== ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" 
                        required
                        type="datetime-local"
                        width="300px"
                        v-model="dateheure"
                        :min="this.today"
                      />
              </div>
                    
                    <div class="flex justify-end mt-4">
                      <button
                        class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      >
                        Save
                      </button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Blank" />
    <div class="mt-8">
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
              v-model="depart"
              @change="ChangePage(this.currentPage)"
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="" class="font-semibold" selected>Depart</option>
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
              <option value="" class="font-semibold" selected>Arrivé</option>
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
            <input
              type="date"
              v-model="date"
              @change="ChangePage(this.currentPage)"
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            />
          </div>
          <div class="relative">
            <input
              v-model="searchby"
              placeholder="code véhicule"
              class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              @keyup="searchfunction(this.searchby)"
            />

            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
            ></div>
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
                    Depart
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Arrive
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Date depart
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Heure depart
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                     Paramétres
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
                          {{ u.idCamionNavigation.codevehicule }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <div
                          v-if="
                            u.idCamionNavigation.idchauffeurNavigation != null
                          "
                        >
                          {{
                            u.idCamionNavigation.idchauffeurNavigation
                              .iduserNavigation.nom
                          }}
                        </div>
                        <div
                          v-if="
                            u.idCamionNavigation.idchauffeurNavigation == null
                          "
                        >
                          <span class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-red-800
                      bg-red-100
                      rounded-full
                    ">Affecter chauffeur</span>
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
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                     <span class="text-black-500 flex ">
                    <modal-trajet-update :trajettable="u"></modal-trajet-update>
                    <form @submit.prevent="supprimertrajet(u.idTrajet)">
                         <span class="text-orange-500 flex justify-center">
                     <button
                            class="mx-2 px-2 rounded-md"
                          >
                         <i class="bi bi-trash3-fill"></i>
                          </button>
                           </span>
                      
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
import ModalTrajetUpdate from "/src/views/Transporteur/Trajets/ModalLayoutTrajetUpdate.vue";
export default {
  components: {
    PaginationVue,
    ModalTrajetUpdate,
  },
  data() {
    return {
      long: "",
      codevehicule: "",
      dateheure: "",
      Destination: "",
      departadress: "",
      searchby: "",
      open: false,
      iddestination: "",
      iddepart: "",
      camions: [],
      idtransporteur: "",
      currentPage: 1,
      perPage: 5,
      total: "",
      villes: [],
      arrive: "",
      depart: "",
      date: "",
      listcamions: [],
      today: new Date().toISOString().substr(0, 10) + "T00:00:00.000",
    };
  },
  created() {
    axios
      .get("http://localhost:5000/api/villes")
      .then((resp) => (this.villes = resp.data));

    axios
      .get(
        "http://localhost:5000/api/camions/" +
          localStorage.getItem("idtransporteur")
      )
      .then((resp) => (this.listcamions = resp.data));
    // liste trajets de ce transporteur
    axios;
    axios
      .get(
        "http://localhost:5000/api/Trajets/" +
          localStorage.getItem("idtransporteur") +
          "/idtransporteur"
      )
      .then((response) => {
        this.long = response.data.length;
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "http://localhost:5000/api/Trajets/" +
          localStorage.getItem("idtransporteur") +
          "/idtransporteur" +
          "?page=" +
          this.currentPage +
          "&quantityPage=" +
          this.perPage
      )
      .then((response) => {
        this.camions = response.data;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    ChangePage(NumPage) {
      this.currentPage = NumPage;
      this.perPage = this.perPage;

      axios
        .get(
          "http://localhost:5000/api/Trajets/" +
            localStorage.getItem("idtransporteur") +
            "/idtransporteur" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage +
            "&depart=" +
            this.depart +
            "&arrive=" +
            this.arrive +
            "&date2=" +
            this.date +
            "&search=" +
            this.searchby
        )
        .then((response) => {
          this.camions = response.data;
        })
        .catch((error) => console.log(error));
    },
    reload() {
      axios
        .get("http://localhost:5000/api/villes")
        .then((resp) => (this.villes = resp.data));

      axios
        .get(
          "http://localhost:5000/api/camions/" +
            localStorage.getItem("idtransporteur")
        )
        .then((resp) => (this.listcamions = resp.data));
      // liste trajets de ce transporteur
      axios;

      axios
        .get(
          "http://localhost:5000/api/Trajets/" +
            localStorage.getItem("idtransporteur") +
            "/idtransporteur"
        )
        .then((response) => {
          this.long = response.data.length;
        })
        .catch((error) => console.log(error));

      axios
        .get(
          "http://localhost:5000/api/Trajets/" +
            localStorage.getItem("idtransporteur") +
            "/idtransporteur" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage
        )
        .then((response) => {
          this.camions = response.data;
        })
        .catch((error) => console.log(error));
    },
    ajouterTrajet() {
      axios
        .get(
          "http://localhost:5000/api/Trajets/" +
            this.codevehicule +
            "/camion" +
            "?date=" +
            this.dateheure.toString().substr(0, 10)
        )
        .then((resp) => {
          if (resp.data.length != 0) {
            this.sucess = false;
            this.$swal({
              position: "top-end",
              icon: "error",
              toast: true,
              title: "Camion occupé dans ce date",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            if (
              this.departadress != "" &&
              this.Destination != "" &&
              this.departadress != this.Destination &&
              this.dateheure != "" &&
              this.dateheure >= this.today
            ) {
              axios
                .get(
                  "http://localhost:5000/api/Villes/" +
                    this.departadress +
                    "/ville"
                )
                .then((response) => {
                  this.iddepart = response.data.idVille;
                  axios
                    .get(
                      "http://localhost:5000/api/Villes/" +
                        this.Destination +
                        "/ville"
                    )
                    .then((response) => {
                      axios
                        .post("http://localhost:5000/api/Trajets", {
                          idVille1: this.iddepart,
                          idVille2: response.data.idVille,
                          idcamion: this.codevehicule,
                          date: this.dateheure.toString().substr(0, 10),
                          heurdepart: this.dateheure.toString().substr(11, 16),
                        })
                        .then(() => {
                          this.$swal({
                            position: "top-end",
                            icon: "success",
                            toast: true,
                            title: "Trajet ajouté pour ce camion",
                            showConfirmButton: false,
                            timer: 2000,
                          });
                          this.reload();
                        });
                    });
                });
            } else if (
              this.departadress != "" &&
              this.Destination != "" &&
              this.departadress == this.Destination &&
              this.dateheure != "" &&
              this.dateheure >= this.today
            ) {
              this.$swal({
                position: "top-end",
                icon: "error",
                toast: true,
                title: "depart et arrive ne peuvent pas etre identique",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          }
        });
    },
    searchfunction(mot) {
      axios;
      axios
        .get(
          "http://localhost:5000/api/Trajets/" +
            localStorage.getItem("idtransporteur") +
            "/idtransporteur" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage +
            "&search=" +
            this.searchby
        )
        .then((response) => {
          this.camions = response.data;
        })
        .catch((error) => console.log(error));
    },
    supprimertrajet(id) {
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
          axios.delete("http://localhost:5000/api/Trajets/" + id).then(() => {
            this.$swal({
              position: "top-end",
              icon: "success",
              toast: true,
              title: "Trajet supprimé",
              showConfirmButton: false,
              timer: 2000,
            });
            this.reload();
          });
        }
      });
    },
  },
};
</script>

