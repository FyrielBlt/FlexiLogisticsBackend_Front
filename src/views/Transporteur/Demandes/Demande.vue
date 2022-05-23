<template>
  <div>
    
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Blank" />
    HISTORIQUE
  <router-link :to="'historiqueDemande'"
   >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark-zip-fill" viewBox="0 0 16 16">
  <path d="M5.5 9.438V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243z"/>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-4-.5V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3h1zm0 4.5h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V8.5a1 1 0 0 1 1-1z"/>
</svg>     
  </router-link>
    <div class="mt-8">
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
        </div>
        
            <table id="example" class="min-w-full leading-normal">
              <thead>
                <tr>
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
                    File
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
                    Settings
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
                         <a 
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                  "
                  href="hh"
                  
                  >Download</a
                >
                
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
                      <span class="text-yellow-500 flex justify-center" >
                        <modal-layout-offre 
                          :tabledemande="demande"
                          :demandeid="demande.idDemande"
                        ></modal-layout-offre>

                        <form @submit.prevent="refuserdemande(demande)">
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
import ModalLayoutOffre from "/src/views/Transporteur/Offres/ModalLayoutOffre.vue";
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
export default {
  components: {
    ModalLayoutOffre,
    PaginationVue,
  },
  data() {
    return {
      demandes: [],
      datedemande:'',
      today:new Date().getFullYear()+"-0"+(new Date().getMonth()+1)+"-"+new Date().getDate(),
      open: ref(false),
      description: "",
      depart: "",
      arrive: "",
       long:'',
      success: false,
      villes:[],
       currentPage:1,
       searchby:'',
       date:'',
      perPage:5,
      searchby:'',
      total:'',
      refus:'',
    };
  },

  created() {
    //get etatdemandedevis where etat=refusé
 axios
      .get(
        "http://localhost:5000/api/EtatDemandeDevis/EtatDemandeDevis?etat=Refuse" 
          )
      .then((response) =>{
        this.refus= response.data.idEtat;
      }),

     axios
      .get("http://localhost:5000/api/villes")
      .then((resp) => (this.villes = resp.data));
        axios
          .get(
            "http://localhost:5000/api/DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"
              
          )
          .then((response) => {
            
            this.long= response.data.length;
          })
          .catch((error) => console.log(error));
    
       
        axios
          .get(
            "http://localhost:5000/api/DemandeDevis/" +
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
            "http://localhost:5000/api/DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"+"?page="+this.currentPage+"&quantityPage="+this.perPage+"&&depart="+this.depart
              +"&arrive="+this.arrive +"&date="+this.date+"&today="+this.datedemande
              
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
              .put("http://localhost:5000/api/DemandeDevis/"+demande.idDemandeDevis, {
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
        "http://localhost:5000/api/EtatDemandeDevis/EtatDemandeDevis?etat=Refuse" 
          )
      .then((response) =>{
        this.refus= response.data.idEtat;
      }),

     axios
      .get("http://localhost:5000/api/villes")
      .then((resp) => (this.villes = resp.data));
        axios
          .get(
            "http://localhost:5000/api/DemandeDevis/" +
              localStorage.getItem("idtransporteur") +
              "/transporteur"
              
          )
          .then((response) => {
            
            this.long= response.data.length;
          })
          .catch((error) => console.log(error));
    
       
        axios
          .get(
            "http://localhost:5000/api/DemandeDevis/" +
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