<template>
  <div>
    <!-- Ajouter Trajet -->
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
        <div class="px-6 py-4 text-left modal-content">
          <!--Title-->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">Ajouter Trajet</p>
          </div>

          <!--Body-->
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <form @submit.prevent="ajouterTrajet">
                    <div>
                      <label class="text-gray-700" for="username"
                        >Code Véhicule</label
                      >
                      <input
                        disabled
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"
                        v-model="this.codevehicule"
                      />
                    </div>
                    <div>
                      <label class="text-gray-700" for="passwordConfirmation"
                        >ville départ
                      </label>
                      <select
                        v-model="depart"
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      >
                        <option v-for="column in this.villes" :key="column">
                          {{ column.nomVille }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label class="text-gray-700" for="passwordConfirmation"
                        >Destination
                      </label>
                      <select
                        v-model="Destination"
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      >
                        <option v-for="column in this.villes" :key="column">
                          {{ column.nomVille }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label class="text-gray-700" for="passwordConfirmation"
                        >Date/heure
                      </label>
                      <br />
                      <input
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
                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500">{{
                      this.error
                    }}</span>
                  </div>
                </div>
                <div v-if="this.sucess == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500"
                      >Nouvelle véhicule de transport</span
                    >
                    <p class="text-sm text-gray-600">Ajout réussi!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Breadcrumb breadcrumb="Blank" />
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
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Settings
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
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <modal-trajet-update :trajettable="u"></modal-trajet-update>
                    <form @submit.prevent="supprimertrajet(u.idTrajet)">
                      <span class="text-yellow-500 flex justify-center">
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
                      </span>
                    </form>
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
import ModalTrajetAdd from "/src/views/Transporteur/Trajets/ModalTrajetAdd .vue";
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import ModalTrajetUpdate from "/src/views/Transporteur/Trajets/ModalLayoutTrajetUpdate.vue";

export default {
  components: {
    ModalTrajetAdd,
    PaginationVue,
    ModalTrajetUpdate,
  },
  props: ["tarjettable"],
  data() {
    return {
      pass: "",
      error: "",
      open: false,
      codevehicule: localStorage.getItem("moncamion"),
      trajets: [],
      ajouterCamion: "Ajouter Camion",
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
      today: new Date().toISOString().substr(0, 10) + "T00:00:00.000",
    };
  },
  created() {
    //get etatdemandedevis where etat=accepte
    axios
      .get("http://localhost:5000/api/EtatDemandeDevis?etat=Accepte")
      .then((response) => {
        this.accepte = response.data;
      }),
      //get etatoffre where etat=en cours
      axios
        .get("http://localhost:5000/api/EtatOffres?offre=Nontraite")
        .then((response) => {
          this.encours = response.data;
        }),
      axios
        .get("http://localhost:5000/api/villes")
        .then((resp) => (this.villes = resp.data));
    // liste trajets de ce camion
    axios
      .get(
        "http://localhost:5000/api/Trajets/" +
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
        "http://localhost:5000/api/Trajets/" +
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
          "http://localhost:5000/api/Trajets/" +
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
    supprimertrajet(id) {
      this.$swal({
        title: "Supprission trajet",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#36c6d3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.value) {
          // renvoyer l'offre correspondant a cette camion a supprimer
          axios
            .get("http://localhost:5000/api/Offres/" + id + "/idcamion")
            .then((response) => {
              // puis on va modifier cette offre idcamion=null
              response.data.forEach((element) => {
                axios.put(
                  "http://localhost:5000/api/Offres/" + element.idOffre,
                  {
                    idOffre: element.idOffre,
                    description: element.description,
                    date: element.date,
                    heurdepart: element.heurdepart,
                    idEtat: element.idEtat,
                    prix: element.prix,
                    prixFinale: null,
                    idTransporteur: localStorage.getItem("idtransporteur"),
                    idDemande: element.idDemande,
                    idCamion: null,
                  }
                );
              });
              axios
                .delete("http://localhost:5000/api/Trajets/" + id)
                .then(() => {
                  this.reload();
                });
            });
          this.$swal("supprimer!", "Trajet supprimé diffinitivement", "reussi");
        } else if (result.dismiss == "cancel") {
          this.$swal("Cancelled", "Your imaginary file is safe :)", "error");
          console.log("cancel");
        }
      });
    },
    reload() {
      //get etatdemandedevis where etat=accepte
      axios
        .get("http://localhost:5000/api/EtatDemandeDevis?etat=Accepte")
        .then((response) => {
          this.accepte = response.data;
        }),
        //get etatoffre where etat=en cours
        axios
          .get("http://localhost:5000/api/EtatOffres?offre=Nontraite")
          .then((response) => {
            this.encours = response.data;
          }),
        axios
          .get("http://localhost:5000/api/villes")
          .then((resp) => (this.villes = resp.data));
      // liste trajets de ce camion
      axios
        .get(
          "http://localhost:5000/api/Trajets/" +
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
          "http://localhost:5000/api/Trajets/" +
            localStorage.getItem("moncamion") +
            "/camion"
        )
        .then((response) => {
          this.long = response.data.length;
        })
        .catch((error) => console.log(error));
    },
    ajouterTrajet() {
      axios
        .get(
          "http://localhost:5000/api/Trajets/" +
            localStorage.getItem("moncamion") +
            "/camion" +
            "?date=" +
            this.dateheure.toString().substr(0, 10)
        )
        .then((resp) => {
          console.log(resp.data);
          this.exists = resp.data.length;
          if (this.exists != 0) {
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
              this.depart != "" &&
              this.Destination != "" &&
              this.depart != this.Destination &&
              this.dateheure != "" &&
              this.dateheure >= this.today
            ) {
              axios
                .get(
                  "http://localhost:5000/api/Villes/" + this.depart + "/ville"
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
                      this.iddestination = response.data.idVille;
                      axios
                        .post("http://localhost:5000/api/Trajets", {
                          idVille1: this.iddepart,
                          idVille2: this.iddestination,
                          idCamion: localStorage.getItem("moncamion"),
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
              this.depart != "" &&
              this.Destination != "" &&
              this.depart == this.Destination &&
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
  },
};
</script>
<style>
.affect {
  font-weight: bold;
  color: red;
}
</style>
