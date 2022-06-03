<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Demandes </template>
      <template v-slot:bread> Demande Devi </template>
    </bread-crumb>

    <div class="mt-8">
      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Les Transporteurs
        </h2>

        <div class="flex flex-col mt-3 text-center sm:flex-row">
          <div class="flex">
            <div class="relative">
              <select
                class="
                  block
                  w-full
                  h-full
                  px-4
                  py-2
                  pr-8
                  leading-tight
                  text-gray-700
                  bg-white
                  border border-gray-400
                  rounded-l
                  appearance-none
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                v-model="ParpageTransporteur"
              >
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  px-2
                  text-gray-700
                  pointer-events-none
                "
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
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  px-2
                  text-gray-700
                  pointer-events-none
                "
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
              placeholder="Search"
              class="
                block
                w-full
                py-2
                pl-8
                pr-6
                text-xm text-gray-700
                placeholder-gray-400
                bg-white
                border border-b border-gray-400
                rounded-l rounded-r
                appearance-none
                sm:rounded-l-none
                focus:bg-white
                focus:placeholder-gray-600
                focus:text-gray-700
                focus:outline-none
              "
              v-model="rechercheTransporteur"
            />
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
              placeholder="Ville 1"
              class="
                block
                w-full
                py-2
                pl-8
                pr-6
                text-xm text-gray-700
                placeholder-gray-400
                bg-white
                border border-b border-gray-400
                rounded-l rounded-r
                appearance-none
                sm:rounded-l-none
                focus:bg-white
                focus:placeholder-gray-600
                focus:text-gray-700
                focus:outline-none
              "
              v-model="rechercheVille1"
            />
          </div>
         
        </div>

        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    ID
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    User
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    Settings
                  </th>
                </tr>
              </thead>
              <!-- liste transporteur -->
              <tbody class="bg-white">
                <tr
                  v-for="(transporteur, index) in ListeTransporteurs"
                  :key="transporteur.idTransporteur"
                >
                
                  <th
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ index + 1 }}
                  </th>
                  <td
                    class="
                      px-6
                      py-4
                      border-b
                      text-center
                      border-gray-200
                      whitespace-nowrap
                      text-center
                    "
                  >
                    <div class="flex justify-around">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          :src="transporteur.imageSrc"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div class="px-6 py-2 border-b border-gray-200">
                          {{ transporteur.idUserNavigation.prenom }}

                          {{ transporteur.idUserNavigation.nom }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="
                      px-6
                      py-4
                      text-sm
                      font-medium
                      leading-5
                      text-center
                      border-b border-gray-200
                      whitespace-nowrap
                    "
                  >
                    <input
                      type="checkbox"
                      class="
                        w-5
                        h-5
                        text-indigo-600
                        rounded-md
                        focus:ring-indigo-500
                      "
                      :id="transporteur.idTransporteur"
                      :value="transporteur.idTransporteur"
                      v-model="checkedTransporteurId"
                      name="radio"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
           
                <div class="text-center ">
                  <div
                    class="
                      flex flex-col
                      items-center
                      bg-white
                      xs:flex-row xs:justify-between
                    "
                  >
                    <div class="inline-flex xs:mt-0">
                      <!-- PAGINATION -->
                      <pagination-vue
                        :current="currentTransporteur"
                        :total="totalTransporteur"
                        :per-page="perPageTransporteur"
                        @page-changed="ChangePage"
                      ></pagination-vue>
                    </div>
                  </div>
                </div>
               
          </div>
        </div>
      </div>
    </div>
    <div class="mt" v-if="checkedTransporteurId.length">
      <h2 class="text-xl font-semibold leading-tight text-gray-700">
        {{ checkedTransporteurId.length }} Transporteur select :
      </h2>

      <div class="flex flex-col mt-6">
        <div
          class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="
              inline-block
              min-w-full
              overflow-hidden
              align-middle
              border-b border-gray-200
              shadow
              sm:rounded-lg
            "
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    Name
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr
                  v-for="transporteur in checkedTransporteur"
                  :key="transporteur.idTransporteur"
                >
                 <td
                    class="
                      px-6
                      py-4
                      border-b
                      text-center
                      border-gray-200
                      whitespace-nowrap
                      text-center
                    "
                  >
                    <div class="flex justify-around">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          :src="transporteur.imageSrc"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div class="px-6 py-2 border-b border-gray-200">
                          {{ transporteur.idUserNavigation.prenom }}

                          {{ transporteur.idUserNavigation.nom }}
                        </div>
                      </div>
                    </div>
                  </td>
                  
                </tr>
              </tbody>
            </table>
                 <div class="p-2 bg-white rounded-md shadow-md"  v-if="ListeDemandeDevis.length == 0">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
               
                  <div class="text-center ">
                  <div
                    class="
                      flex flex-col
                      items-center
                      bg-white
                      xs:flex-row xs:justify-between
                    "
                  >
                    <div class="inline-flex xs:mt-0">
                      <button
                        class="
                          px-6
                          py-2
                          font-semibold
                          text-gray-900
                          bg-gray-300
                          rounded-r rounded-l
                          hover:bg-gray-400
                        "
                       
                        @click="Ajouter()"
                      >
                        Demander
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
    <!-- {{ checkedTransporteurId }} -->
    <!-- {{ ListeTransporteurs }} -->
    <br />
    <!-- {{$route.params.id}} -->
    <br />
    <!-- {{ ChercherVille1 }} kkk{{ ChercherVille2 }} -->
    <!-- {{ checkedTransporteurId.length }} -->
    <br />
    <!-- {{ checkedTransporteur }} -->
    <!-- {{ ListeDemacheckedTransporteurIdndeDevis }} -->
  </div>
  <!-- </div> -->
</template>
<script>
import swal from "sweetalert2";
window.Swal = swal;
import axios from "axios";
import Url from "../../../store/Api";
import { mapGetters } from "vuex";
import BreadCrumb from "../../../components/Intermediaire/BreadCrumb.vue";
import PaginationVue from "../../../components/Intermediaire/pagination/PaginationVue.vue";
export default {
  components: {
    BreadCrumb,
    PaginationVue,
  },
  data() {
    return {
      ParpageTransporteur: "1",
      rechercheTransporteur: "",
      rechercheVille1: "",
      rechercheVille2: "",
      Description: "",
      DateCreation: "",
      AdressDepart: "",
      AdressArrive: "",
      IdEtatDemande: "",
      IdClient: "",
      Date: "",
      Poids: "",
      Largeur: "",
      Hauteur: "",
      checkedTransporteur: [],
      checkedTransporteurId: [],
    };
  },
  computed: {
    ...mapGetters([
      "ListeTransporteurs",
      "ListeEtatDemandeDevis",
      "ListeDemandeDevis",
      "ListeEtatDemandeLivraisons",
      "currentTransporteur",
      "perPageTransporteur",
      "parPageTransporteur",
      "totalTransporteur",
      "ChercherVille1",
      "ChercherVille2",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_Transporteur");
    this.$store.dispatch("Get_EtatDemandeDevi");
    this.$store.dispatch("Get_DemandeDevi", this.$route.params.id);
    this.$store.dispatch("Get_EtatDemandeLivraison");
  },
  async created() {
    await axios
      .get(Url + `DemandeDevis/${this.$route.params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.checkedTransporteurId = res.data
          .map((el) => el.idTransporteurNavigation)
          .map((el) => el.idTransporteur);
          this.checkedTransporteur=res.data.map((el) => el.idTransporteurNavigation);
      });

    await axios
      .get(Url + "DemandeLivraisons/" + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        this.id = res.data[0].idDemande;
        this.Description = res.data[0].description;
        this.DateCreation = res.data[0].datecreation;
        this.AdressDepart = res.data[0].adressdepart;
        this.AdressArrive = res.data[0].adressarrive;
        this.IdEtatDemande = res.data[0].idEtatdemande;
        this.IdClient = res.data[0].idclient;
        this.Date = res.data[0].date;
        this.Poids = res.data[0].poids;
        this.Largeur = res.data[0].largeur;
        this.Hauteur = res.data[0].hauteur;
      });
  },
  methods: {
    GetEtatDemandeDevis() {
      return this.ListeEtatDemandeDevis.filter(
        (el) => el.etat == "Non traité"
      ).map((el) => el.idEtat)[0];
    },
    GetEtatDemande() {
      return this.ListeEtatDemandeLivraisons.filter(
        (el) => el.etatDemande == "En cours de traitement"
      ).map((el) => el.idEtatDemande)[0];
    },
    GetEtatDemandeModifier() {
      return this.ListeEtatDemandeLivraisons.filter(
        (el) => el.etatDemande == "Non traité"
      ).map((el) => el.idEtatDemande)[0];
    },
    Ajouter() {
      let DemandeDevi = {
        DateEnvoit: "2022-04-07",
        IdIntermediaire: localStorage.getItem("id"),
        IdDemande: this.$route.params.id,
        IdTransporteur: this.checkedTransporteurId,
        IdEtat: this.GetEtatDemandeDevis(),
      };

      if (this.checkedTransporteurId.length != 0) {
        this.$store.dispatch("Ajouter_DemandeDevi", DemandeDevi);
        var DemandeLivraison = {
          idDemande: this.$route.params.id,
          description: this.Description,
          datecreation: this.DateCreation,
          adressdepart: this.AdressDepart,
          adressarrive: this.AdressArrive,
          idEtatdemande: this.GetEtatDemande(),
          idclient: this.IdClient,
          Date: this.Date,
          Poids: this.Poids,
          Largeur: this.Largeur,
          Hauteur: this.Hauteur,
        };
      } else {
        var DemandeLivraison = {
          idDemande: this.$route.params.id,
          description: this.Description,
          datecreation: this.DateCreation,
          adressdepart: this.AdressDepart,
          adressarrive: this.AdressArrive,
          idEtatdemande: this.GetEtatDemandeModifier(),
          idclient: this.IdClient,
          Date: this.Date,
          Poids: this.Poids,
          Largeur: this.Largeur,
          Hauteur: this.Hauteur,
        };
       this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Il faut choisir au moins transporteur",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      console.log(DemandeLivraison);
      // changer l'etat du demande de en cour de traitemment a traiter
      axios
        .put(
          Url + "DemandeLivraisons/" + DemandeLivraison.idDemande,
          DemandeLivraison,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then();
    },
    Modifier() {
      if (this.checkedTransporteurId.length != 0) {
        let DemandeDevi = {
          DateEnvoit: "2022-04-07",
          IdIntermediaire: localStorage.getItem("id"),
          IdDemande: this.$route.params.id,
          IdTransporteur: this.checkedTransporteurId,
          IdEtat: this.GetEtatDemandeDevis(),
        };
        console.log(DemandeDevi);
        this.$store.dispatch("Modifier_DemandeDevi", DemandeDevi);
        this.Ajouter();
      } else {
        this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Il faut choisir au moins transporteur",
          showConfirmButton: false,
          timer: 2000,
        });

       

        
      }
    },
    ChangePage(NumPage) {
      if (this.rechercheVille1 != ""&&this.rechercheTransporteur != "") {
        this.$store.dispatch("Get_NoveauTrajet", NumPage);
      } else {
        this.$store.dispatch("Get_NoveauTransporteur", NumPage);
      }
    },
  },
  watch: {
    ParpageTransporteur() {
      if (this.rechercheVille1 != "") {
        this.$store.dispatch("Changer_ParpageTrajet", this.ParpageTransporteur);
      } else {
        this.$store.dispatch(
          "Changer_ParpageTransporteur",
          this.ParpageTransporteur
        );
      }
    },
    rechercheTransporteur() {
    if (this.rechercheTransporteur != "") {
        let ville = {
          ville1: this.rechercheVille1,
          name: this.rechercheTransporteur,
        };
        this.$store.dispatch("Chercher_Trajet", ville);
     }else{
        this.$store.dispatch(
          "Get_Transporteur",
          this.rechercheTransporteur
         );
    }
      
    },
    rechercheVille1() {
      if (this.rechercheVille1 != "") {
        let ville = {
           ville1: this.rechercheVille1,
          name: this.rechercheTransporteur,
        
        };
        console.log(ville)
        this.$store.dispatch("Chercher_Trajet", ville);
      } else {
        this.$store.dispatch(
          "Get_Transporteur",
          this.rechercheTransporteur
        );
      }
    },
    
    checkedTransporteurId() {
      //let leng=this.checkedTransporteurId.length-1;
      this.checkedTransporteur = [];
      let i;
      for (i = 0; i < this.checkedTransporteurId.length; i++) {
        axios
          .get(Url + "Transporteurs/" + this.checkedTransporteurId[i], {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            this.checkedTransporteur.push(res.data);
          });
      }
    },
    
  },
};
</script>