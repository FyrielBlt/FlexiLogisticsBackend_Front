<template>
  <div>
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
                          <span class="affect">Affecter chauffeur</span>
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
                  
                   <modal-trajet-update :trajettable="u"></modal-trajet-update>
                  <form @submit.prevent="supprimertrajet(u.idTrajet)">
                    <span class="text-yellow-500 flex justify-center">
                      <button
                        class="mx-2 px-2 rounded-md"
                      >
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
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import ModalTrajetUpdate from "/src/views/Transporteur/Trajets/ModalLayoutTrajetUpdate.vue";
export default {
  components: {
    PaginationVue,
    ModalTrajetUpdate
  },
  data() {
    return {
      long: "",
      camions: [],
      ajouterCamion: "Ajouter Camion",
      idtransporteur: "",
      currentPage: 1,
      perPage: 5,
      searchby: "",
      total: "",
      villes: [],
      arrive: "",
      depart: "",
      date: "",
    };
  },
  created() {
    axios
      .get("http://localhost:5000/api/villes")
      .then((resp) => (this.villes = resp.data));
    //idtransporteur de cette user
    // liste trajets de ce transporteur
    axios
      .get(
        "http://localhost:5000/api/Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((response) => {
        axios
          .get(
            "http://localhost:5000/api/Trajets/" +
              response.data.idTransporteur +
              "/idtransporteur"
          )
          .then((response) => {
            this.long = response.data.length;
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "http://localhost:5000/api/Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((response) => {
        axios
          .get(
            "http://localhost:5000/api/Trajets/" +
              response.data.idTransporteur +
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
      })
      .catch((error) => console.log(error));
  },

  methods: {
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
              "http://localhost:5000/api/Trajets/" +
                response.data.idTransporteur +
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
                this.date
            )
            .then((response) => {
              this.camions = response.data;
              console.log(this.camions);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    reload() {
      axios
        .get(
          "http://localhost:5000/api/Transporteurs/" +
            localStorage.getItem("iduser") +
            "/iduser"
        )
        .then((response) => {
          axios
            .get(
              "http://localhost:5000/api/Trajets/" +
                response.data.idTransporteur +
                "/idtransporteur"
            )
            .then((response) => {
              this.camions = response.data;
              console.log(this.camions);
            })
            .catch((error) => console.log(error));
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
            axios.get("http://localhost:5000/api/Offres/"+ id+"/idcamion").then((response)=>{
              // puis on va modifier cette offre idcamion=null
               response.data.forEach(element => {
              axios.put("http://localhost:5000/api/Offres/"+element.idOffre, { 
              idOffre:element.idOffre,
              description:element.description,
              date:element.date,
              heurdepart:element.heurdepart,
              idEtat:element.idEtat,
              prix:element.prix,
              prixFinale: null,
              idTransporteur: localStorage.getItem("idtransporteur"),
              idDemande:element.idDemande,
              idCamion:null
            }) 
                })
            axios.delete("http://localhost:5000/api/Trajets/" + id).then(() => {
        axios
          .get(
            "http://localhost:5000/api/Transporteurs/" +
              localStorage.getItem("iduser") +
              "/iduser"
          )
          .then((response) => {
            axios
              .get(
                "http://localhost:5000/api/Trajets/" +
                  response.data.idTransporteur +
                  "/idtransporteur"
              )
              .then((response) => {
                this.long = response.data.length;
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
        axios
          .get(
            "http://localhost:5000/api/Transporteurs/" +
              localStorage.getItem("iduser") +
              "/iduser"
          )
          .then((response) => {
            axios
              .get(
                "http://localhost:5000/api/Trajets/" +
                  response.data.idTransporteur +
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
          })
          .catch((error) => console.log(error));
      });
     
       
            
      
            })
          this.$swal(
            "supprimer!",
            "Trajet supprimé diffinitivement",
            "reussi"
          );
        } else if (result.dismiss == "cancel") {
          this.$swal("Cancelled", "Your imaginary file is safe :)", "error");
          console.log("cancel");
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
