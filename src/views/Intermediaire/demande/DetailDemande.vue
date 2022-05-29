<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb breadcrumb="Cards" /> -->
    <bread-crumb>
      <template v-slot:bread1> Demandes </template>
      <template v-slot:bread> Détail Demande </template>
    </bread-crumb>
    <div class="mt-10 text-center" style="margin-left:18%"> 
      <!-- <h4 class="text-gray-700">{{ demande }}</h4> -->
      <div class="w-full max-w-sm mt-6 lg:max-w-full lg:flex">
        <div
          class="
            flex-none
            h-48
            overflow-hidden
            text-center
            bg-cover
            rounded-t
            lg:h-auto lg:w-80 lg:rounded-t-none lg:rounded-l
          "
          :style="{ 'background-image': 'url(' + demande.idclientNavigation.imageSrc+ ')' }"
         
          title="Woman holding a mug"
        >
          <!-- <img
              class="
            flex-none
            h-48
            overflow-hidden
            text-center
            bg-cover
            rounded-t
            lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l
          "
              src="https://via.placeholder.com/50"
              alt="Avatar of Jonathan Reinink"
            /> -->
        </div>
        <div
          class="
            flex flex-col
            justify-between
            p-4
            leading-normal
            bg-white
            border-b border-l border-r border-gray-200
            rounded-b
            lg:border-l-0
            lg:border-t
            lg:border-gray-200
            lg:rounded-b-none
            lg:rounded-r
          "
        >
        
          <div class="mb-8">
            <p class="flex items-center text-sm text-gray-600">
              <!-- <svg
                class="w-3 h-3 mr-2 text-gray-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="
                  bi bi-person-fill
                  w-3
                  h-3
                  mr-2
                  text-gray-500
                  fill-current
                "
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              {{ nom }}
              {{ prenom }}
            </p>
            <p class="flex items-center text-sm text-gray-600">
              <!-- <svg
                class="w-3 h-3 mr-2 text-gray-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg> -->
              <br><br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="
                  bi bi-envelope-check-fill
                  w-3
                  h-3
                  mr-2
                  text-gray-500
                  fill-current
                "
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"
                />
                <path
                  d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"
                />
              </svg>
              Email : {{ email }}
            </p>
            <p class="flex items-center text-sm text-gray-600">
              <!-- <svg
                class="w-3 h-3 mr-2 text-gray-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg> -->
              <br><br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="
                  bi bi-telephone-outbound-fill
                  w-3
                  h-3
                  mr-2
                  text-gray-500
                  fill-current
                "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Telephone : {{ telephone }}
            </p>
            <br>
            <!-- <div class="mb-2 text-xl font-bold text-gray-900">
              Can coffee make you a better developer?
            </div> -->
            <p class="text-base text-gray-900 font-bold">
              {{ Description }}
            </p>
          </div>
          <div class="flex items-center">
            <!-- <img
              class="w-10 h-10 mr-4 rounded-full"
              src="https://via.placeholder.com/50"
              alt="Avatar of Jonathan Reinink"
            /> -->
            <div class="text-sm" style="margin-left:90px">
              <p class="leading-none text-gray-900">
                <span
                  class="
                    inline-block
                    px-3
                    py-1
                    mb-2
                    mr-2
                    text-sm
                    font-semibold
                    text-gray-700
                    bg-gray-200
                    rounded-full
                  "
                  >Départ : {{ adressdepart }}</span
                >

                <span
                  class="
                    inline-block
                    px-3
                    py-1
                    mb-2
                    mr-2
                    text-sm
                    font-semibold
                    text-gray-700
                    bg-gray-200
                    rounded-full
                  "
                  >Arrive : {{ adressarrive }}</span
                >
              </p>

              <p
                class="
                  inline-block
                  px-3
                  py-1
                  mb-2
                  mr-2
                  text-sm
                  font-semibold
                  text-gray-700
                  bg-gray-200
                  rounded-full
                "
              >
                date : {{ date.substr(0, 10) }}
              </p>
            </div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="
                inline-block
                px-3
                py-1
                mb-2
                mr-2
                text-sm
                font-semibold
                text-gray-700
                bg-gray-200
                rounded-full
              "
              >Poids : {{ Poids }} kg</span
            >
            <span
              class="
                inline-block
                px-3
                py-1
                mb-2
                mr-2
                text-sm
                font-semibold
                text-gray-700
                bg-gray-200
                rounded-full
              "
              >Hauteur : {{ Hauteur }} m</span
            >
            <span
              class="
                inline-block
                px-3
                py-1
                mb-2
                mr-2
                text-sm
                font-semibold
                text-gray-700
                bg-gray-200
                rounded-full
              "
              >Largeur : {{ Largeur }} m</span
            >
          </div>
           <div class="px-6 pt-4 pb-2">
            <span
              class="
                inline-block
                px-3
                py-1
                mb-2
                mr-2
                text-sm
                font-semibold
                text-gray-900
                bg-blue-400
                rounded-full
              "
              > {{ demande.idEtatdemandeNavigation.etatDemande }} </span
            >
           
          </div>
        </div>
      </div>
    </div>
    <!-- {{demande}} -->
  </div>
</template>
<script >
import BreadCrumb from "../../../components/Intermediaire/BreadCrumb.vue";
import axios from "axios";
import Url from "../../../store/Api";
export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      demande: "",
      nom: "",
      prenom: "",
      Description: "",
      email: "",
      adressdepart: "",
      adressarrive: "",
      date: "",
      Poids: "",
      Largeur: "",
      Hauteur: "",
    };
  },
  async created() {
    await axios
      .get(Url + "DemandeLivraisons/" + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        this.demande = res.data[0];
        this.nom = res.data[0].idclientNavigation.iduserNavigation.nom;
        this.prenom = res.data[0].idclientNavigation.iduserNavigation.prenom;
        this.Description = res.data[0].description;
        this.email = res.data[0].idclientNavigation.iduserNavigation.email;
        this.adressdepart = res.data[0].adressdepart;
        this.adressarrive = res.data[0].adressarrive;
        this.date = res.data[0].date;
        this.Poids = res.data[0].poids;
        this.Largeur = res.data[0].largeur;
        this.Hauteur = res.data[0].hauteur;
      });
  },
};
</script>
