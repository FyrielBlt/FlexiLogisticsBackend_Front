<template>
  <div>
  <span class="text-yellow-500 flex justify-center">
                       
                        <router-link :to="'historiqueDemande'"
                        class="
          px-6
          py-2
          mt-3
          font-medium
          tracking-wide
          text-white
          bg-indigo-600
          hover:bg-indigo-900
          focus:outline-none
           animate__animated animate__shakeX animate__delay-1s
        " style="position: absolute;
    right: 600px;
    top: 40px;
    height: 62px;"
   >
   Historique
<i class="bi bi-box2"></i>   
  </router-link>
                      </span>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">

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
                v-model="perPage"
                @change="ChangePage(this.currentPage)"
              >
                <option value="5">5</option>
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
              v-model="depart"
              @change="ChangePage(this.currentPage)"
              class="
                form-select
                appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-semibold
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              aria-label="Default select example"
            >
              <option value="" class="font-semibold" selected>depart</option>
              <option v-for="v in villes" :key="v" :value="v.nomVille">
                --{{ v.nomVille }}--
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
            <div class="relative">
             <select
              v-model="arrive"
              @change="ChangePage(this.currentPage)"
              class="
                form-select
                appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-semibold
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              aria-label="Default select example"
            >
              <option value="" class="font-semibold" selected>Arrive</option>
              <option v-for="v in villes" :key="v" :value="v.nomVille">
                --{{ v.nomVille }}--
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
          <div class="relative">
             <input
             type="date"
              v-model="date"
              @change="ChangePage(this.currentPage)"
              class="
                form-select
                appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-semibold
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              aria-label="Default select example"
            />
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
                  border border-gray-400
                  rounded-l
                  appearance-none
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                v-model="datedemande"
                @change="ChangePage(this.currentPage)"
              >
                
                <option  value=''>All</option>
                <option :value="this.today">today</option>
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
              <input
              v-model="num"
              placeholder="numéro demande"
              class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              @keyup="searchfunction(this.searchby)"
            />
             
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
               
              </div>
              
            </div>
        </div>
        
            <table id="example" class="min-w-full leading-normal">
              <thead>
                <tr>
                   <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Numero
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Description
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Adress depart
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Destination
                  </th>
                   <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Fichiers
                  </th>
                    <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Date
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Etat
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                     Paramétres
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(demande, index) in demandes" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        {{ demande.idDemandeNavigation.idDemande }}
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{demande.idDemandeNavigation.description }}
                          <br>
                            {{"Poids:"+ demande.idDemandeNavigation.poids }}
                            <br>
                           {{"Largeur:"+ demande.idDemandeNavigation.largeur }}
                           <br>
                            {{"Hauteur:"+ demande.idDemandeNavigation.hauteur }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        {{ demande.idDemandeNavigation.adressdepart }}
                      </div>
                    </div>
                  </td>
                   <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        {{ demande.idDemandeNavigation.adressarrive }}
                      </div>
                    </div>
                  </td>
                    <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3"  >
                <modal-demande-files :u="demande"></modal-demande-files>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        {{ demande.idDemandeNavigation.date.substr(0,10)}}
                      </div>
                    </div>
                  </td>
                 
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        {{ demande.idEtatNavigation.etat}}
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                      <span class="text-black-500 flex justify-center" >
                        <modal-layout-offre 
                          :tabledemande="demande"
                          :demandeid="demande.idDemande"
                        ></modal-layout-offre>
                        <form @submit.prevent="refuserdemande(demande)">
                           <span class="text-orange-500 flex justify-center">
                     <button
                            class="mx-2 px-2 rounded-md"
                          >
<i class="bi bi-file-excel-fill"></i>                          </button>
                           </span>
                        </form>
                          
                      </span>
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
//import Breadcrumb from "../../partials/Breadcrumb.vue";
import { ref } from "vue";
import axios from "axios";
import ModalDemandeFiles from "/src/views/Transporteur/Demandes/ModalDemandeFiles.vue";;
import ModalLayoutOffre from "/src/views/Transporteur/Offres/ModalLayoutOffre.vue";
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import url from "../../../store/Api";
export default {
  components: {
    ModalLayoutOffre,
    PaginationVue,
    ModalDemandeFiles
  },
  data() {
    return {
      demandes: [],
      datedemande:'',
      num:'',
      today:new Date().getFullYear()+"-0"+(new Date().getMonth()+1)+"-"+new Date().getDate(),
      open: ref(false),
      description: "",
      depart: "",
      arrive: "",
       long:'',
      success: false,
      villes:[],
       currentPage:1,
       date:'',
      perPage:5,
      total:'',
      refus:'',
    };
  },

  created() {
    //get etatdemandedevis where etat=refusé
 axios
      .get(
        url+"EtatDemandeDevis/EtatDemandeDevis?etat=Refuse" 
          )
      .then((response) =>{
        this.refus= response.data.idEtat;
      }),

     axios
      .get(url+"villes")
      .then((resp) => (this.villes = resp.data));
        axios
          .get(
            url+"DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"
              
          )
          .then((response) => {
            
            this.long= response.data.length;
          })
          .catch((error) => console.log(error));
    
       
        axios
          .get(
            url+"DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"+"?page="+this.currentPage+"&quantityPage="+this.perPage
              
          )
          .then((response) => {
            
            this.demandes = response.data;
          })
          .catch((error) => console.log(error));
      
  },
  methods: {
     
     ChangePage(NumPage) {
        this.currentPage=NumPage;
        this.perPage=this.perPage;
       
        axios
          .get(
            url+"DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"+"?page="+this.currentPage+"&quantityPage="+this.perPage
               +"&search="+this.num
              +"&depart="+this.depart
              +"&arrive="+this.arrive +"&date="+this.date+"&today="+this.datedemande
              
              
          )
          .then((response) => {
            
            this.demandes = response.data;
          })
          .catch((error) => console.log(error));
      
     },
      searchfunction(mot) {
axios
          .get(
            url+"DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"+"?page="+this.currentPage+"&quantityPage="+this.perPage
               +"&search="+this.num
             
              
              
          )
          .then((response) => {
            
            this.demandes = response.data;
          })
          .catch((error) => console.log(error));
      },
   refuserdemande(demande) {
 this.$swal({
        title: "Voulez vous réfusé cette demande?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#36c6d3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.value) {
         axios
              .put(url+"DemandeDevis/"+demande.idDemandeDevis, {
               idDemandeDevis:demande.idDemandeDevis,
               date:demande.date,
               idIntermediaire:demande.idIntermediaire,
               idDemande:demande.idDemande,
               idTransporteur:demande.idTransporteur,
               idEtat:this.refus,
              }).then(()=>{
           this.close()
              })

          this.$swal(
            "supprimer!",
            "Demande réfusé",
            "reussi"
          );
        } 
      });
    
      
              
    },
    close(){
       axios
      .get(
        url+"EtatDemandeDevis/EtatDemandeDevis?etat=Refuse" 
          )
      .then((response) =>{
        this.refus= response.data.idEtat;
      }),

     axios
      .get(url+"villes")
      .then((resp) => (this.villes = resp.data));
        axios
          .get(
            url+"DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"
              
          )
          .then((response) => {
            
            this.long= response.data.length;
          })
          .catch((error) => console.log(error));
    
       
        axios
          .get(
            url+"DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"+"?page="+this.currentPage+"&quantityPage="+this.perPage
              
          )
          .then((response) => {
            
            this.demandes = response.data;
          })
          .catch((error) => console.log(error));
      
    }
  },
};
</script>
<style>
.modal {
  transition: opacity 0.25s ease;
}

</style>