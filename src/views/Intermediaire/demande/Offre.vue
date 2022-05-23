<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Demandes </template>
      <template v-slot:bread> Offres recus </template>
    </bread-crumb>

    <!-- <div class="mt-4"> -->

    <!--  -->

    <div class="mt-8">
      <!-- <h4 class="text-gray-600">Les Clients</h4> -->

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Les Offres :
        </h2>

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
                    Transporteur
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
                    Description
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
                    Date
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
                    Prix
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
                    Prix Final
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
                <tr v-for="(offre, index) in ListeOffres" :key="offre.idOffre">
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
                    <div class="ml-4">
                      <div
                        class="
                          text-sm
                          font-medium
                          leading-5
                          text-center text-gray-900
                        "
                      >
                        {{
                          offre.idTransporteurNavigation.idUserNavigation.prenom
                        }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{
                          offre.idTransporteurNavigation.idUserNavigation.nom
                        }}
                      </div>
                    </div>
                  </td>

                  <td
                    class="
                      px-6
                      py-4
                      border-b
                      text-center
                      border-gray-200
                      whitespace-nowrap
                    "
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ offre.description }}
                    </div>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      border-b
                      text-center
                      border-gray-200
                      whitespace-nowrap
                    "
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ offre.date }}
                    </div>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      text-sm
                      leading-5
                      text-center text-gray-500
                      border-b border-gray-200
                      whitespace-nowrap
                    "
                  >
                    {{ offre.prix }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      text-sm
                      leading-5
                      text-center text-gray-500
                      border-b border-gray-200
                      whitespace-nowrap
                    "
                  >
                    {{ offre.prixFinale }}
                  </td>
<!-- settings -->
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
                    <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-green-400
                        rounded-r rounded-l
                      "
                      v-if="GetEtatEnCours() == offre.idEtat"
                    >
                      En cour de traitemment
                    </button>
                    <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-red-400
                        rounded-r rounded-l
                        hover:bg-red-500
                      "
                      v-else-if="GetEtatRefuser() == offre.idEtat"
                    >
                      Refuser
                    </button>
                     <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-cyan-400
                        rounded-r rounded-l
                        "
                      v-else-if="GetEtatAccepter() == offre.idEtat"
                    >
                      Accepter
                    </button>
                    <div  v-else-if="GetEtatEnAttente() == offre.idEtat">
                    <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-cyan-400
                        rounded-r rounded-l
                        "
                        @click="Valider(offre.idOffre,index)" 
                    >
                      En attente d'acceptation
                    </button>
                    <button
                    style="margin-left:5px"
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-red-400
                        rounded-r rounded-l
                        "
                    @click="AnnulerAccepter(offre.idOffre,index)" 
                    >
                      Annuler
                    </button>
                    </div>
                    <input
                      type="checkbox"
                      class="
                        w-5
                        h-5
                        text-indigo-600
                        rounded-md
                        focus:ring-indigo-500
                      "
                      :id="offre.idOffre"
                      :value="offre.idOffre"
                      v-model="checkedOffreId"
                      v-else
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <!--  -->

            <div class="p-2 bg-white rounded-md shadow-md">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="text-center">
                  <div
                    class="
                      flex flex-col
                      items-center
                      bg-white
                      xs:flex-row xs:justify-between
                    "
                  >
                    <div class="inline-flex xs:mt-0"></div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div
                      class="
                        py-4
                        flex flex-col
                        items-center
                        bg-white
                        xs:flex-row xs:justify-between
                      "
                    >
                      <button
                      v-if="checkedOffreId.length!=0"
                        class="
                          px-6
                          py-2
                          font-semibold
                          text-gray-900
                          bg-gray-300
                          rounded-r rounded-l
                          hover:bg-gray-400
                        "
                        @click="Accepter()"
                      >
                        Accepter
                      </button>
                    </div>

                    <div
                      class="
                        px-6
                        py-4
                        flex flex-col
                        items-center
                        bg-white
                        xs:flex-row xs:justify-between
                      "
                    >
                      <router-link to="../demandeIntermediaire">
                        <button
                          class="
                            px-4
                            py-2
                            text-xm
                            font-semibold
                            text-gray-900
                            bg-red-400
                            rounded-r rounded-l
                            hover:bg-red-500
                          "
                        >
                          Annuler
                        </button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- PAGINATION -->
          </div>
        </div>
      </div>
    </div>
    <!-- les offre selecter :{{ checkedOffreId }}
    <br />
    {{ GetEtatEnCours() }} -->
  </div>
  <!-- </div> -->
</template>
<script>
import axios from "axios";
import Url from "../../../store/Api";
import { mapGetters } from "vuex";
import BreadCrumb from "../../../components/Intermediaire/BreadCrumb.vue";
// import PaginationVue from "../../../components/Intermediaire/pagination/PaginationVue.vue";
export default {
  components: {
    BreadCrumb,
    // PaginationVue,
  },
  data() {
    return {
      //listeOffre: [],
      checkedOffreId: [],
    };
  },

  computed: {
    ...mapGetters(["ListeEtatOffres", "ListeOffres"]),
  },
  mounted() {
    this.$store.dispatch("Get_EtatOffre");
  },
  async created() {
    await axios
      .get(Url + "DemandeLivraisons/" + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        // this.checkedOffreId = res.data[0].offre
        //   .filter((el) => el.idEtat == this.GetEtatAccepter())
        //   .map((el) => el.idOffre);

        this.$store.dispatch("Get_ListeOffre", res.data[0].offre);
      });
  },
  methods: {
    GetEtatEnAttente(){
       return this.ListeEtatOffres.filter((el) => el.etat == "En attente d'acceptation").map(
        (el) => el.idEtat
      )[0];
    },
    GetEtatRefuser() {
      return this.ListeEtatOffres.filter((el) => el.etat == "Refuser").map(
        (el) => el.idEtat
      )[0];
    },
    GetEtatAccepter() {
      return this.ListeEtatOffres.filter((el) => el.etat == "Accepter").map(
        (el) => el.idEtat
      )[0];
    },
    GetEtatEnCours() {
      return this.ListeEtatOffres.filter(
        (el) => el.etat == "En cours de traitemment"
      ).map((el) => el.idEtat)[0];
    },
    Accepter() {
      var AccepterOffre = {
        idEtatEnCours: this.GetEtatEnCours(),
        idEtatRefuser: this.GetEtatRefuser(),
        ListeOffresId: this.checkedOffreId,
      };
      this.$store.dispatch("Accepter_Offre", AccepterOffre);
    },
    AnnulerAccepter(id,index) {
       var Annuleraccepter = {
         idOffre:id,
         idEtatRefuser: this.GetEtatRefuser(),
         index: index,
         
      };
      //console.log(id)
      console.log(Annuleraccepter)
      this.$store.dispatch("Annuler_Accepter", Annuleraccepter);
    },
    Valider(id,index) {
       var AccepterValider = {
         idOffre:id,
         idEtatAccepter: this.GetEtatAccepter(),
         idEtatRefuser: this.GetEtatRefuser(),
         index: index,
         
      };
      //console.log(id)
      console.log(AccepterValider)
      this.$store.dispatch("Valider_Accepter", AccepterValider);
    },
  },
};
</script>