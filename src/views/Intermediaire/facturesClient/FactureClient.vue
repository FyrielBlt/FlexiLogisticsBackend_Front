<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Facture </template>
      <template v-slot:bread> Facture Client </template>
    </bread-crumb>

    <!-- <div class="mt-4"> -->

    <!--  -->

    <div class="mt-8">
      <!-- <h4 class="text-gray-600">Les Clients</h4> -->

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Les Factures
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
                v-model="ParpageFactureClients"
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
                 v-model="order"
              >
                <option value="0">All</option>
                <option value="oui">
                  Facturée
                </option>
                <option value="non">
                  Non Facturée
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
               v-model="recherche"
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
                    etat
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
                    Facture
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
                    Payement
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(demande, index) in ListeFactures"
                  :key="demande.idDemande"
                >
                  <th
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ 1 + index }}
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
                          :src="demande.idclientNavigation.imageSrc"
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
                          {{ demande.idclientNavigation.iduserNavigation.nom }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{
                            demande.idclientNavigation.iduserNavigation.prenom
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
                    <div class="text-sm leading-5 text-gray-900">
                      {{ GetEtatDemande(demande.idEtatdemande) }}
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
                    <a
                      class="
                        inline-flex
                        px-2
                        text-ms
                        font-semibold
                        leading-5
                        text-red-800
                        bg-red-200
                        rounded-full
                      "
                    >
                      <a class="mx-2 px-2 rounded-md">{{ Prix(index) }} $</a>
                    </a>
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
                    <a
                      class="
                        inline-flex
                        px-2
                        text-ms
                        font-semibold
                        leading-5
                        text-green-800
                        bg-green-200
                        rounded-full
                      "
                    >
                      <a class="mx-2 px-2 rounded-md"
                        >{{ PrixFinale(index) }} $</a
                      >
                    </a>
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
                          v-if="demande.factureClient.length == 0"
                          class="mx-2 px-2 rounded-md text-green-800 text-xm"
                          @click="
                            facture(demande.idDemande, demande.factureClient)
                          "
                        >
                          <a class="mx-2 px-2 rounded-md">Upload </a>
                          <i class="bi bi-cloud-upload"></i>
                        </button>
                        <button
                          v-else
                          class="
                            inline-flex
                            px-2
                            text-xs
                            font-semibold
                            leading-5
                            text-green-800
                            bg-green-100
                            rounded-full
                          "
                          @click="
                            facture(demande.idDemande, demande.factureClient)
                          "
                        >
                        
                          <a class="mx-2 px-2 rounded-md">Facturé </a>
                          <i class="bi bi-eye-slash"></i>
                        </button>
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
                      <span class="text-green-500 flex justify-center" v-if="VerifPayementClient(demande.idDemande, demande.factureClient)">
                        <button
                          class="mx-2 px-2 rounded-md text-green-600 text-xm"
                          @click="Payement(demande.idDemande, demande.factureClient)"
                        >
                          <a class="mx-2 px-2 rounded-md"> Oui </a>
                          <i class="bi bi-eye-slash"></i>
                        </button>
                      </span>
                       <span class="text-red-500 flex justify-center" v-else>
                        <button
                          class="mx-2 px-2 rounded-md text-red-600 text-xm"
                        >
                          <a class="mx-2 px-2 rounded-md"> Non </a>
                          <i class="bi bi-eye-slash"></i>
                        </button>
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
                  :current="currentFacture"
                  :total="totalFacture"
                  :per-page="perPageFacture"
                  @page-changed="ChangePage"
                ></pagination-vue>
              </div>
            </div>
            <!-- PAGINATION -->
          </div>
        </div>
        <!-- {{recherche}} -->
      </div>
    </div>
  </div>
  
  <!-- </div> -->
</template>
<script>
import { mapGetters } from "vuex";
import BreadCrumb from "../../../components/Intermediaire/BreadCrumb.vue";
import axios from "axios";
import Url from "../../../store/Api";
import PaginationVue from "../../../components/Intermediaire/pagination/PaginationVue.vue";
export default {
  components: {
    BreadCrumb,
    PaginationVue,
  },
  data() {
    return {
      ParpageFactureClients: "1",
      livrer: "",
      achever: "",
      order:"0",
      recherche:""
    };
  },
  async created() {
    await axios
      .get(Url + "EtatDemandeLivraisons", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.$store.dispatch("Get_EtatFacture", res.data);
        this.livrer = res.data
          .filter((el) => el.etatDemande == "Livré")
          .map((el) => el.idEtatDemande)[0];
        this.achever = res.data
          .filter((el) => el.etatDemande == "Achevé")
          .map((el) => el.idEtatDemande)[0];
      });
    await axios
      .get(
        Url +
          `DemandeLivraisons?page=${this.currentFacture}&quantityPage=${this.parPageFacture}&filter=${this.livrer}&filter1=${this.achever}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        this.$store.dispatch("Get_Facture", res);
      });
  },
  computed: {
    ...mapGetters([
      "ListeEtatOffres",
      "ListeFactures",
      "ListeEtatDemandeLivraisons",
      "currentFacture",
      "perPageFacture",
      "parPageFacture",
      "totalFacture",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_EtatDemandeLivraison");
    this.$store.dispatch("Get_EtatOffre");
  },
  methods: {
    facture(id, listfacture) {
      //alert(listfacture[0].idFactClient +"" + id);
      if (listfacture.length == 0) {
        this.$router.push({
          name: "UploadFacture",
          params: {
            demande: id,
            idFactClient: 0,
          },
        });
      } else {
        this.$router.push({
          name: "UploadFacture",
          params: {
            demande: id,
            idFactClient: listfacture[0].idFactClient,
          },
        });
      }
    },
    Payement(id, listfacture) {
      let idfacture=listfacture.filter(el=>el.idDemandeLivraison==id).map(el=>el.idFactClient)[0];
      this.$router.push({
        name: "PayementClient",
        params: {
            id: idfacture,
            
          },
      });
    },
    VerifPayementClient(id, listfacture){
      return listfacture.filter(el=>el.idDemandeLivraison==id).map(el=>el.payementFile)[0];
    },
    PrixFinale(indice) {
      let prix = this.ListeFactures[indice].offre
        .filter((el) => el.idEtat == this.GetEtatAccepter())
        .map((el) => el.prixFinale)[0];
      return prix;
    },
    Prix(indice) {
      let prix = this.ListeFactures[indice].offre
        .filter((el) => el.idEtat == this.GetEtatAccepter())
        .map((el) => el.prix)[0];
      return prix;
    },
    GetEtatAccepter() {
      return this.ListeEtatOffres.filter((el) => el.etat == "Accepté").map(
        (el) => el.idEtat
      )[0];
    },
    GetEtatDemande(id) {
      return this.ListeEtatDemandeLivraisons.filter(
        (el) => el.idEtatDemande == id
      ).map((el) => el.etatDemande)[0];
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
      this.$store.dispatch("Get_NoveauFacture", NumPage);
    },
  },
  watch: {
    ParpageFactureClients() {
      this.$store.dispatch(
        "Changer_ParpageFactureClients",
        this.ParpageFactureClients
      );
    },
    order() {
      this.$store.dispatch("Chercher_order", this.order);
    },
    recherche() {
      this.$store.dispatch("Chercher", this.recherche);
    },
    
  },
};
</script>