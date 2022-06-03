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
                    Etat
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
                      {{ offre.date.substr(0, 10) }}
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
                  <td
                    v-if="offre.idEtat == GetEtatEnCours()"
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
                      <a
                        class="
                          inline-flex
                          px-2
                          text-ms
                          font-semibold
                          leading-5
                          text-black-800
                          bg-yellow-300
                          rounded-full
                        "
                      >
                        <a class="mx-2 px-2 rounded-md">
                          En cour de traitement</a
                        >
                      </a>
                    </div>
                  </td>
                  <td
                    v-if="offre.idEtat == GetEtatAccepter()"
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
                      <a
                        class="
                          inline-flex
                          px-2
                          text-ms
                          font-semibold
                          leading-5
                          text-black-800
                          bg-green-500
                          rounded-full
                        "
                      >
                        <a class="mx-2 px-2 rounded-md">Accepté</a>
                      </a>
                    </div>
                  </td>
                  <td
                    v-if="offre.idEtat == GetEtatNonTraite()"
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
                      <a
                        class="
                          inline-flex
                          px-2
                          text-ms
                          font-semibold
                          leading-5
                          text-black-800
                          bg-blue-500
                          rounded-full
                        "
                      >
                        <a class="mx-2 px-2 rounded-md">Non traité</a>
                      </a>
                    </div>
                  </td>
                  <td
                    v-if="offre.idEtat == GetEtatEnAttente()"
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
                      <a
                        class="
                          inline-flex
                          px-2
                          text-ms
                          font-semibold
                          leading-5
                          text-black-800
                          bg-cyan-500
                          rounded-full
                        "
                      >
                        <a class="mx-2 px-2 rounded-md"
                          >En attente d'acceptation</a
                        >
                      </a>
                    </div>
                  </td>
                  <td
                    v-if="offre.idEtat == GetEtatRefuser()"
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
                      <a
                        class="
                          inline-flex
                          px-2
                          text-ms
                          font-semibold
                          leading-5
                          text-black-800
                          bg-red-500
                          rounded-full
                        "
                      >
                        <a class="mx-2 px-2 rounded-md">Refusé</a>
                      </a>
                    </div>
                  </td>
                  <td
                    v-if="offre.idEtat == GetEtatIndisponible()"
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
                      <a
                        class="
                          inline-flex
                          px-2
                          text-ms
                          font-semibold
                          leading-5
                          text-black-800
                          bg-orange-500
                          rounded-full
                        "
                      >
                        <a class="mx-2 px-2 rounded-md">Indisponible</a>
                      </a>
                    </div>
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
                    <!-- <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-cyan-400
                        rounded-r rounded-l
                        "
                      v-if="GetEtatAccepter() == offre.idEtat"
                    >
                      Accepter
                    </button> -->
                    <div v-if="GetEtatEnAttente() == offre.idEtat">
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
                        @click="Valider(offre, index)"
                      >
                        Accepter
                      </button>
                      <button
                        style="margin-left: 5px"
                        class="
                          px-4
                          py-2
                          text-xm
                          font-semibold
                          text-gray-900
                          bg-red-400
                          rounded-r rounded-l
                        "
                        @click="AnnulerAccepter(offre.idOffre, index)"
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
                      v-if="offre.idEtat == GetEtatNonTraite()"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <!--  -->

            <div
              class="bg-white rounded-md shadow-md"
              v-if="checkedOffreId.length != 0"
            >
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
                        py-2
                        flex flex-col
                        items-center
                        bg-white
                        xs:flex-row xs:justify-between
                      "
                    >
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
                        @click="Accepter()"
                      >
                        Accepter
                      </button>
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
    <br /> -->
    <!-- {{ GetEtatEnAttente()}}  -->
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
      accepter: true,
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
    GetEtatEnAttente() {
      return this.ListeEtatOffres.filter(
        (el) => el.etat == "En attente d'acceptation"
      ).map((el) => el.idEtat)[0];
    },
    GetEtatRefuser() {
      return this.ListeEtatOffres.filter((el) => el.etat == "Refusé").map(
        (el) => el.idEtat
      )[0];
    },
    GetEtatAccepter() {
      return this.ListeEtatOffres.filter((el) => el.etat == "Accepté").map(
        (el) => el.idEtat
      )[0];
    },
    GetEtatNonTraite() {
      return this.ListeEtatOffres.filter((el) => el.etat == "Non traité").map(
        (el) => el.idEtat
      )[0];
    },
    GetEtatEnCours() {
      return this.ListeEtatOffres.filter(
        (el) => el.etat == "En cours de traitement"
      ).map((el) => el.idEtat)[0];
    },
    GetEtatIndisponible() {
      return this.ListeEtatOffres.filter((el) => el.etat == "Indisponible").map(
        (el) => el.idEtat
      )[0];
    },
    Accepter() {
      var AccepterOffre = {
        idEtatEnCours: this.GetEtatEnCours(),
        idEtatRefuser: this.GetEtatRefuser(),
        ListeOffresId: this.checkedOffreId,
      };

      this.$store.dispatch("Refuser_Tout", AccepterOffre);
      for (var i = 0; i < this.checkedOffreId.length; i++) {
        let of = this.ListeOffres.filter(
          (el) => el.idOffre == this.checkedOffreId[i]
        )[0];
        of.idEtat = this.GetEtatEnCours();
        of.prixFinale = of.prix + 10;

        of.idEtatNavigation = null;
        // console.log(of)
        axios
          .put(Url + "offres/" + of.idOffre, of, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log("res 2 :");
            console.log(of);
            console.log(res);
          });
        console.log("bravo");
      }

      // this.$store.dispatch("Accepter_Offre", AccepterOffre);

      this.checkedOffreId = [];
    },

    AnnulerAccepter(id, index) {
      var Annuleraccepter = {
        idOffre: id,
        idEtatRefuser: this.GetEtatIndisponible(),
        index: index,
      };
      //console.log(id)
      console.log(Annuleraccepter);
      this.$store.dispatch("Annuler_Accepter", Annuleraccepter);
    },
    Valider(offre, index,) {
      var AccepterValider = {
        idOffre: offre.idOffre,
        idEtatAccepter: this.GetEtatAccepter(),
        idEtatRefuser: this.GetEtatRefuser(),
        index: index,
      };
      //console.log(id)
      console.log(AccepterValider);
      this.$store.dispatch("Valider_Accepter", AccepterValider);
      offre.idEtat= this.GetEtatAccepter();
      offre.idEtatNavigation=  null;
         axios.put(Url + "offres/" +offre.idOffre , offre,{
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("token"),
        }
      }).then(res => {
        console.log("ValiderAccepter")
      });
    },
  },
};
</script>