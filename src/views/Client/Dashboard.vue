<template>
  <div>
    <!-- <Breadcrumb breadcrumb="" /> -->
    <bread-crumb>
      <template v-slot:bread1> Dashboard </template>
    </bread-crumb>
    <!--Banner get you to github repo-->
    <!-- <Banner /> -->
    <div class="mt-4">
      <div v-if="type == 'client'" class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3 animate__animated animate__bounceIn">
          <router-link to="/client/clients">
          <div
            class="transition ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center px-5 py-6 bg-white rounded-md shadow-sm ">
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <svg class="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                  fill="currentColor" />
                <path
                  d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                  fill="currentColor" />
                <path
                  d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                  fill="currentColor" />
                <path
                  d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                  fill="currentColor" />
                <path
                  d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                  fill="currentColor" />
                <path
                  d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                  fill="currentColor" />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ personnels.length }}
              </h4>
              <div class="text-gray-500">Personnels</div>
            </div>
          </div>
          </router-link>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0 animate__animated animate__bounceIn">
          <router-link to="/client/demande">
          <div
            class="transition ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                  fill="currentColor" />
                <path
                  d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                  fill="currentColor" />
                <path
                  d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                  fill="currentColor" />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ demandes.length }}
              </h4>
              <div class="text-gray-500">Demandes</div>
            </div>
          </div>
         </router-link>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0 animate__animated animate__bounceIn">
          <router-link to="/client/offres">
          <div
            class="transition ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor"
                  stroke-width="2" stroke-linejoin="round" />
                <path
                  d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                  stroke="currentColor" stroke-width="2" />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ offres.length }}
              </h4>
              <div class="text-gray-500">Offres Récues</div>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <line-chart style="background-color: white;" :data="line()"></line-chart>
    </div>
    <div class="border-2" style="display: flex;
    flex-direction: row;
    justify-content: space-around;    font-size: 20px;
    font-weight: 500;    position: relative;
    top: 57px;
    right: 0px;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;">
      <h2 style="background: -webkit-linear-gradient(blue, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;">Factures</h2>
      <h2 style="background: -webkit-linear-gradient(blue, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;">Demandes</h2>

    </div>

    <div class="flex flex-wrap justify-center  mx-auto mt-14 bg-white">

      <pie-chart width="580px" :donut="true" :data="pie()"></pie-chart>

      <pie-chart width="580px" :donut="true" :data="[['Achevé', 44], ['Non Achevé', 23]]"></pie-chart>
    </div>


    <v-calendar :demandes="demandes"></v-calendar>
  </div>
</template>

<script>
import axios from "axios";
//import { ref } from "vue";
//import Banner from "../../partials/Banner.vue";
import BreadCrumb from "../../components/Intermediaire/BreadCrumb.vue";
import url from "../../store/Api";
import VCalendar from "./components/v-calendar.vue";
export default {
  components: {
    //  Banner,
    BreadCrumb,
    VCalendar
  },
  data() {
    return {
      personnels: [],
      demandes: [],
      offres: [],
      type: localStorage.getItem("type"),
      facturesnp: [],
      facturesp: [],
      
    };
  },
  created() {
  
    axios
      .get(url +
        "FactureClients/client/" +
        localStorage.getItem("iduser") +
        "?etat=Payé"
      )
      .then((resp) => {
        this.facturesp = resp.data.length;
      });
    axios
      .get(url +
        "FactureClients/client/" +
        localStorage.getItem("iduser") +
        "?etat=Non payé"
      )
      .then((resp) => {
        this.facturesnp = resp.data.length;
      });
    axios
      .get(url +
        "offres/client/" +
        localStorage.getItem("iduser")
      )
      .then((resp) => {
        this.offres = resp.data;
      });

    axios
      .get(url + "users/client/" + localStorage.getItem('societe'))
      .then((response) => {
        this.personnels = response.data;
      })
      .catch((error) => console.log(error));
    axios
      .get(url +
        "demandelivraisons/client/" +
        localStorage.getItem("iduser")
      )
      .then((resp) => {
        this.demandes = resp.data;
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
    pie() {
      let liste = [];
      liste.push(['Payée', this.facturesp])
      liste.push(['Non Payée', this.facturesnp])
      return liste;
    },
    line() {
      let liste = [];
      let offre = [];
      var j1 = this.timeFrom(7)[0];
      var j2 = this.timeFrom(7)[1];
      var j3 = this.timeFrom(7)[2];
      var j4 = this.timeFrom(7)[3];
      var j5 = this.timeFrom(7)[4];
      var j6 = this.timeFrom(7)[5];
      var j7 = this.timeFrom(7)[6];
      var data = {
        [j7]: this.demandes.filter(
          (el) => el.datecreation.substr(0, 10) == j7
        ).length,
        [j6]: this.demandes.filter(
          (el) => el.datecreation.substr(0, 10) == j6
        ).length,
        [j5]: this.demandes.filter(
          (el) => el.datecreation.substr(0, 10) == j5
        ).length,
        [j4]: this.demandes.filter(
          (el) => el.datecreation.substr(0, 10) == j4
        ).length,
        [j3]: this.demandes.filter(
          (el) => el.datecreation.substr(0, 10) == j3
        ).length,
        [j2]: this.demandes.filter(
          (el) => el.datecreation.substr(0, 10) == j2
        ).length,
        [j1]: this.demandes.filter(
          (el) => el.datecreation.substr(0, 10) == j1
        ).length,
      };
      console.log(data)
      var offresdata = {
        [j7]: this.offres.filter(
          (el) => el.datecreation.substr(0, 10) == j7
        ).length,
        [j6]: this.offres.filter(
          (el) => el.datecreation.substr(0, 10) == j6
        ).length,
        [j5]: this.offres.filter(
          (el) => el.datecreation.substr(0, 10) == j5
        ).length,
        [j4]: this.offres.filter(
          (el) => el.datecreation.substr(0, 10) == j4
        ).length,
        [j3]: this.offres.filter(
          (el) => el.datecreation.substr(0, 10) == j3
        ).length,
        [j2]: this.offres.filter(
          (el) => el.datecreation.substr(0, 10) == j2
        ).length,
        [j1]: this.offres.filter(
          (el) => el.datecreation.substr(0, 10) == j1
        ).length,
      };
      var ob = {
        name: "Demandes de Livraison par jour",
        data: data,

      };
      var of = {
        name: "Offres par jour",
        data: offresdata,

      };
      liste.push(ob);
      liste.push(of);
      return liste;
    },
  },

};
</script>
