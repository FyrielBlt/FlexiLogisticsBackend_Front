<template>
  <div>
    <!-- <Breadcrumb breadcrumb="" /> -->
    <!--Banner get you to github repo-->
    <!-- //<Banner /> -->
    <div class="mt-4">
      <!-- liste -->
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                  fill="currentColor"
                />
                <path
                  d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                  fill="currentColor"
                />
                <path
                  d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                  fill="currentColor"
                />
                <path
                  d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ ListePersonnellesAll.length }}
              </h4>
              <div class="text-gray-500">Personnels</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <i class="bi bi-people-fill"></i>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ ListeClientsAll.length }}
              </h4>
              <div class="text-gray-500">clients</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <i class="bi bi-truck"></i>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ ListeTransporteursAll.length }}
              </h4>
              <div class="text-gray-500">transporteur</div>
            </div>
          </div>
        </div>
      </div>
      <!-- liste -->
    </div>

    <!-- table -->
    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="
            inline-block
            min-w-full
            overflow-hidden
            align-middle
            border-b border-gray-200
            shadow
            sm:rounded-lg
            bg-gray-50
            text-center
          "
        >
          <!-- <timeline :data="[['Washington', '1789-04-29', '1797-03-03'], ['Adams', '1797-03-03', '1801-03-03']]"></timeline> -->
          <line-chart :data="web()"></line-chart>
          <!-- <br />
          <pie-chart :data="dataa()"></pie-chart> -->
        </div>
      </div>
    </div>
    <div class="mt-8">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/2">
          <div
            class="
              flex
              items-center
              px-5
              py-6
              bg-white
              rounded-md
              shadow-sm
              text-center
            "
          >
            <h1 style="margin-left:38%">Facture Transporteur</h1>
          </div>
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <pie-chart :donut="true" :data="factureTransporteur()"></pie-chart>
          </div>
        </div>
        <div class="w-full px-6 sm:w-1/2 xl:w-1/2">
          <div
            class="
              flex
              items-center
              px-5
              py-6
              bg-white
              rounded-md
              shadow-sm
              text-center
            "
          >
            <h1 style="margin-left:42%">Facture Client</h1>
          </div>
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <pie-chart :donut="true" :data="factureClient()"></pie-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Url from "../../store/Api";
//import Breadcrumb from "../../partials/Breadcrumb.vue";
export default {
  components: {
    //Banner,
    //Breadcrumb,
  },
  data() {
    return {
      personnels: [],
      demandes: [],
      offres: [],
      factureTransporteurPaye: "",
      factureTransporteurNonPaye:"",
      factureClientPaye: "",
      factureClientNonPaye:"",
      data: [
        {
          name: "Demande Livraison par jour",
          data: {
            "2022-01-01": 3,
            "2022-01-02": 4,
            "2022-01-03": 15,
            "2022-01-04": 0,
            "2022-01-05": 6,
            "2022-01-06": 3,
          },
        },
      ],
    };
  },
  async created() {
    await axios
      .get(Url + `FactureTransporteurs?sortOrder=oui`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.factureTransporteurPaye=res.data.length;
        //console.log(this.factureClientPaye)
      });
       await axios
      .get(Url + `FactureTransporteurs?sortOrder=non`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.factureTransporteurNonPaye=res.data.length;
        //console.log(this.factureClientNonPaye)
      });
     //facture client
       await axios
      .get(Url + `FactureClients`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        let liste=res.data;
       this.factureClientPaye=liste.filter(el=>el.payementFile!=null).length;
        this.factureClientNonPaye=liste.filter(el=>el.payementFile==null).length;
        console.log(res.data)
      });
  },
  methods: {
    timeFrom(X) {
      var dates = [];
      for (let I = 0; I < Math.abs(X); I++) {
        dates.push(
          new Date(
            new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
          ).getFullYear() +
            "-" +
            (
              new Date(
                new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
              ).getMonth() + 1
            )
              .toString()
              .padStart(2, "0") +
            "-" +
            new Date(
              new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
            )
              .getDate()
              .toString()
              .padStart(2, "0")
        );
      }

      return dates;
    },
    factureTransporteur() {
      let liste = [];
      liste.push(["Payé", this.factureTransporteurPaye]);
      liste.push(["Non Payé", this.factureTransporteurNonPaye]);
      return liste;
    },
    factureClient() {
      let liste = [];
      liste.push(["Payé", this.factureClientPaye]);
      liste.push(["Non Payé", this.factureClientNonPaye]);
      return liste;
    },
    web() {
      let liste = [];

      var j1 = this.timeFrom(7)[0];
      var j2 = this.timeFrom(7)[1];
      var j3 = this.timeFrom(7)[2];
      var j4 = this.timeFrom(7)[3];
      var j5 = this.timeFrom(7)[4];
      var j6 = this.timeFrom(7)[5];
      var j7 = this.timeFrom(7)[6];

      var data = {
        [j7]: this.ListeDemandeLivraisonsAll.filter(
          (el) => el.datecreation.substr(0, 10) == j7
        ).length,
        [j6]: this.ListeDemandeLivraisonsAll.filter(
          (el) => el.datecreation.substr(0, 10) == j6
        ).length,
        [j5]: this.ListeDemandeLivraisonsAll.filter(
          (el) => el.datecreation.substr(0, 10) == j5
        ).length,
        [j4]: this.ListeDemandeLivraisonsAll.filter(
          (el) => el.datecreation.substr(0, 10) == j4
        ).length,
        [j3]: this.ListeDemandeLivraisonsAll.filter(
          (el) => el.datecreation.substr(0, 10) == j3
        ).length,
        [j2]: this.ListeDemandeLivraisonsAll.filter(
          (el) => el.datecreation.substr(0, 10) == j2
        ).length,
        [j1]: this.ListeDemandeLivraisonsAll.filter(
          (el) => el.datecreation.substr(0, 10) == j1
        ).length,
      };
      var ob = {
        name: "Demande Livraison par jour",
        data: data,
      };

      liste.push(ob);

      return liste;
    },
  },
  computed: {
    ...mapGetters([
      "ListePersonnellesAll",
      "ListeClientsAll",
      "ListeTransporteursAll",
      "ListeDemandeLivraisonsAll",
      // "ListeFactureTransporteurs"
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_Personnelle_All");
    this.$store.dispatch("Get_Client_All");
    this.$store.dispatch("Get_Transporteur_All");
    this.$store.dispatch("Get_DemandeLivraison_All");
    //  this.$store.dispatch("Get_Facture_Transporteur");
  },
};
</script>
