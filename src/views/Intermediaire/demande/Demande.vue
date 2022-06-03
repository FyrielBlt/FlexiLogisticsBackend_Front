<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Demande </template>
      <template v-slot:bread> Demandes </template>
    </bread-crumb>
    <div class="mt-8">
      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Les Demandes
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
                v-model="ParpageDemandeLivraison"
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
                  border-t border-b border-r border-gray-400
                  rounded-r
                  appearance-none
                  sm:rounded-r-none sm:border-r-0
                  focus:outline-none
                  focus:border-l
                  focus:border-r
                  focus:bg-white
                  focus:border-gray-500
                "
                v-model="EtatDemande"
              >
                <option value="0">All</option>
                <option
                  v-for="etat in ListeEtatDemandeLivraisons"
                  :key="etat.idEtatDemande"
                  :value="etat.idEtatDemande"
                >
                  {{ etat.etatDemande }}
                </option>
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
                   <div class="relative block mt-2 sm:mt-0">
            <input
              placeholder="Numéro Demande"
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
               
                appearance-none
                sm:rounded-l-none
                focus:bg-white
                focus:placeholder-gray-600
                focus:text-gray-700
                focus:outline-none
              "
              type="text"
              v-model="rechercheDemande"
            />
            
          </div>
             <div class="relative block mt-2 sm:mt-0">
            <input
              placeholder="Ville Deppart"
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
              type="date"
              v-model="dateChercher"
            />
          </div>
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
                    Numéro
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
                    Client
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
                    Détail
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
                    etat
                  </th>
                  <!-- <th
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
                    Depart
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
                    fIN
                  </th> -->
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
                    Demande devis
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
                    offre Recu
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="demandeLivraison in ListeDemandeLivraisons"
                  :key="demandeLivraison.idDemande"
                >
                  <th
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ demandeLivraison.idDemande }}
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
                          :src="demandeLivraison.idclientNavigation.imageSrc"
                          alt=""
                        />
                      </div>

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
                            demandeLivraison.idclientNavigation.iduserNavigation
                              .nom
                          }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{
                            demandeLivraison.idclientNavigation.iduserNavigation
                              .prenom
                          }}
                        </div>
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
                    <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-stone-300
                        rounded-r rounded-l
                        hover:bg-stone-500
                      "
                      @click="DetailDemande(demandeLivraison.idDemande)"
                    >
                      Détail
                    </button>
                  </td>
                  <td
                  v-if=" demandeLivraison.idEtatdemandeNavigation.etatDemande=='En cours de traitement'"
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
                        <a class="mx-2 px-2 rounded-md">{{
                          demandeLivraison.idEtatdemandeNavigation.etatDemande
                        }}</a>
                      </a>
                    </div>
                  </td>
                  <td
                  v-if="demandeLivraison.idEtatdemandeNavigation.etatDemande=='Livré' ||demandeLivraison.idEtatdemandeNavigation.etatDemande=='Achevé'"
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
                        <a class="mx-2 px-2 rounded-md">{{
                          demandeLivraison.idEtatdemandeNavigation.etatDemande
                        }}</a>
                      </a>
                    </div>
                  </td>
                  <td
                  v-if="demandeLivraison.idEtatdemandeNavigation.etatDemande=='Non traité'"
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
                        <a class="mx-2 px-2 rounded-md">{{
                          demandeLivraison.idEtatdemandeNavigation.etatDemande
                        }}</a>
                      </a>
                    </div>
                  </td>
                  <!-- <td
                    class="
                      px-6
                      py-4
                      border-b
                      text-center
                      border-gray-200
                      whitespace-nowrap
                    "
                  >
                    {{ demandeLivraison.adressdepart }}
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
                    {{ demandeLivraison.adressarrive }}
                  </td> -->
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
                    {{ demandeLivraison.date.substr(0,10) }}
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
                    v-if="demandeLivraison.idEtatdemandeNavigation.etatDemande!='Livré'"
                  >
                    <div class="flex justify-around">
                      <span class="text-green-500 flex justify-center">
                       
                         <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-stone-300
                        rounded-r rounded-l
                        hover:bg-stone-500
                      "
                      @click="DemandeDevis(demandeLivraison.idDemande)"
                    >
                      {{ demandeLivraison.demandeDevis.length }} demandes <i class="bi bi-eye"></i>
                    </button>

                        <!-- <button
                          class="mx-2 px-2 rounded-md text-red-400 text-xm"
                          @click="DemandeDevis(demandeLivraison.idDemande)"
                        >
                          <i class="bi bi-eye-slash"></i>
                        </button> -->
                      </span>
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
                    v-else
                  >
                    <div class="flex justify-around">
                      <span class="text-green-500 flex justify-center">
                        <a class="mx-2 px-2 rounded-md"
                          >
                        </a>

                        
                      </span>
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
                    <div class="flex justify-around">
                      <span class="text-green-500 flex justify-center">
                         <button
                      class="
                        px-4
                        py-2
                        text-xm
                        font-semibold
                        text-gray-900
                        bg-stone-300
                        rounded-r rounded-l
                        hover:bg-stone-500
                      "
                      @click="Offre(demandeLivraison.idDemande)"
                    >
                      {{ demandeLivraison.offre.length }} Offres <i class="bi bi-eye"></i>
                    </button>
                        <!-- <a class="mx-2 px-2 rounded-md"
                          >{{ demandeLivraison.offre.length }} Offres
                        </a>

                        <button
                          class="mx-2 px-2 rounded-md text-red-400 text-xm"
                          @click="Offre(demandeLivraison.idDemande)"
                        >
                          <i class="bi bi-eye-slash"></i>
                        </button> -->
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="
                flex flex-col
                items-center
                px-2
                py-2
                bg-white
                border-t
                xs:flex-row xs:justify-between
              "
            >
              <div class="inline-flex xs:mt-0">
                <!-- PAGINATION -->
                <pagination-vue
                  :current="currentDemandeLivraison"
                  :total="totalDemandeLivraison"
                  :per-page="perPageDemandeLivraison"
                  @page-changed="ChangePage"
                ></pagination-vue>
              </div>
            </div>
            <!-- PAGINATION -->
          </div>
        </div>
      </div>
    </div>
    <!-- {{ rechercheDemande }} -->
    <!-- {{ EtatDemande }}{{rechercheDemande}} -->
  </div>
  <!-- </div> -->
</template>
<script>
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
      ParpageDemandeLivraison: 10,
      EtatDemande: 0,
      dateChercher:"",
       rechercheDemande:""
    };
  },
  computed: {
    ...mapGetters([
      "ListeDemandeLivraisons",
      "currentDemandeLivraison",
      "perPageDemandeLivraison",
      "parPageDemandeLivraison",
      "totalDemandeLivraison",
      "ListeEtatDemandeLivraisons",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_DemandeLivraison");
    this.$store.dispatch("Get_EtatDemandeLivraison");
  },
  methods: {
    GetEtatDemande(id) {
      return this.ListeEtatDemandeLivraisons.filter(
        (el) => el.idEtatDemande == id
      ).map((el) => el.etatDemande)[0];
    },
    DetailDemande(id) {
      this.$router.push({
        name: "DetailDemandeIntermediaire",
        params: { id: id },
      });
    },
    DemandeDevis(id) {
      this.$router.push({ name: "DemandeDevis", params: { id: id } });
    },
    Offre(id) {
      this.$router.push({ name: "OffreIntermediaire", params: { id: id } });
    },
    ListeOffre(id) {
      this.$router.push({ name: "ListeOffre", params: { id: id } });
    },
    ChangePage(NumPage) {
      this.$store.dispatch("Get_NoveauDemandeLivraison", NumPage);
    },
  },
  watch: {
    ParpageDemandeLivraison() {
      this.$store.dispatch(
        "Changer_ParpageDemandeLivraison",
        this.ParpageDemandeLivraison
      );
    },
    EtatDemande() {
      this.$store.dispatch("Chercher_DemandeLivraisonEtat", this.EtatDemande);
    },
    dateChercher(){
      this.$store.dispatch("Chercher_date",this.dateChercher);
    },
    dateDemande(){
      this.$store.dispatch("Chercher_DemandeLivraisonDate", this.dateDemande);
    },
    rechercheDemande()
    {
      this.$store.dispatch("Chercher_DemandeLivraisonNum", this.rechercheDemande);
    },
  },
};
</script>