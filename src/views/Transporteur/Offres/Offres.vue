<template>
  <!-- Breadcrumb -->
  <!-- <Breadcrumb breadcrumb="Offre Récu" /> -->
  <div class="mt-6">
    <h2 class="text-xl font-semibold leading-tight text-gray-700">
      Offres 
    </h2>
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
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
                v-model="etat"
                @change="ChangePage(this.currentPage)"
              >
                
                <option  value=''>Tout</option>
                <option value="Accepte">Accepté </option>
                <option value="Refuse">Réfusé</option>
                <option value="Livre">Livré </option>

                <option value="Non traite">Non traité</option>
                <option value="En cours de traitement">En cours de traitement</option>
                                <option value="Indisponible">Indisponible</option>

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
            v-model="searchby"
              placeholder="num offre/num demande"
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
              @keyup="searchfunction(this.searchby)"
            />
          </div>
        </div>
        
        <table  id="example" class="min-w-full leading-normal">
          <thead>
            <tr>
               <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                numéro offre
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
               Numéro Demande
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Description offre
              </th>
              
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Date de livraison
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Départ
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Arrive
              </th>
               <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Fichiers
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Prix
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                Etat
              </th>
              <th
                class="
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-left text-gray-600
                  uppercase
                  bg-gray-100
                  border-b-2 border-gray-200
                "
              >
                 Paramétres
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(u, index) in offres" :key="index">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.idOffre}}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.idDemandeNavigation.idDemande}}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.description }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.date.substr(0,10)+ u.heurearrive }}
                </p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.idDemandeNavigation.adressdepart }}
                </p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.idDemandeNavigation.adressarrive}}
                </p>
              </td>
              <td
                class="text-sm bg-white border-b border-gray-200"
                
              >
             
                <modal-offre-fichier  :u="u" ></modal-offre-fichier>
               
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.prix }}
                </p>
              </td>

              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span
                  :class="`relative inline-block px-3 py-1 font-semibold text-${u.statusColor}-900 leading-tight`"
                >
                  <span
                    aria-hidden
                    :class="`absolute inset-0 bg-${u.statusColor}-200 opacity-50 rounded-full`"
                  ></span>
                  <span class="relative"> {{ u.idEtatNavigation.etat }}</span>
                </span>
              </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span
                  :class="`relative inline-block px-3 py-1 font-semibold text-${u.statusColor}-900 leading-tight`"
                >
                  <span
                    aria-hidden
                    :class="`absolute inset-0 bg-${u.statusColor}-200 opacity-50 rounded-full`"
                  ></span>
                  <span class="relative"> 
                     <button v-if="u.idEtatNavigation.etat=='Accepté'"
                   type="button" @click="livrer(u)"       
                   class="inline-flex px-2 text-xs font-semibold
                    leading-5 text-green-800 bg-blue-100 rounded-full border-8 border-blue-600"
                  >Livraison réussi</button>
                  </span>
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
</template>
<script>
import { defineComponent } from "vue";
// import Breadcrumb from "../../partials/Breadcrumb.vue";
import axios from "axios";
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import ModalLayoutOffreUpdate from "/src/views/Transporteur/Offres/ModalLayoutOffreUpdate.vue";
import ModalOffreFichier from "/src/views/Transporteur/Offres/ModalOffreFichier.vue";import url from "../../../store/Api";
;
export default defineComponent({
  components: {// Breadcrumb 
   ModalLayoutOffreUpdate,
   PaginationVue,
   ModalOffreFichier
  },
  data() {
    return {
      offres: [],
      valide:'',
    villes:[],
       currentPage:1,
       searchby:'',
       date:'',
      perPage:5,
      total:'',
      long:'',
      depart:'',
      arrive:'',
       etat:'',
       nondispo:'',
       hrefa:'',
    };
  },
  created() {
     axios
      .get(
        url+"EtatOffres/offre?offre=Nontraite" 
          )
      .then((response) =>{
        this.nondispo= response.data;
      })
      axios
      .get(
        url+"EtatOffres/offre?offre=livre" 
          )
      .then((response) =>{
        this.valide= response.data.idEtat;
      })
     axios
      .get(url+"villes")
      .then((resp) => (this.villes = resp.data));
     axios
      .get(
        url+"Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((response) => {
    axios
      .get(url+"offres/" +response.data.idTransporteur+"/offrestransporteur")
      .then((resp) => {
        this.long = resp.data.length;
      });
      })
       
    axios
      .get(url+"offres/" +localStorage.getItem('idtransporteur')+"/offrestransporteur"
      +"?page="+this.currentPage+"&quantityPage="+this.perPage
      )
      .then((resp) => {
        this.offres = resp.data;
      });
      
  },
  methods: {
   close(){
axios
      .get(
        url+"EtatOffres/offre?offre=Nontraite" 
          )
      .then((response) =>{
        this.nondispo= response.data;
      })
      axios
      .get(
        url+"EtatOffres/offre?offre=livre" 
          )
      .then((response) =>{
        this.valide= response.data.idEtat;
      })
     axios
      .get(url+"villes")
      .then((resp) => (this.villes = resp.datanpm ));
     axios
      .get(
        url+"Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((response) => {
    axios
      .get(url+"offres/" +response.data.idTransporteur+"/offrestransporteur")
      .then((resp) => {
        this.long = resp.data.length;
      });
      })
       
    axios
      .get(url+"offres/" +localStorage.getItem('idtransporteur')+"/offrestransporteur"
      +"?page="+this.currentPage+"&quantityPage="+this.perPage
      )
      .then((resp) => {
        this.offres = resp.data;
      });
      
   },
    livrer(table){
 axios.put(url+"Offres/"+table.idOffre, {
              idOffre:table.idOffre,
              description:table.description,
              date:table.date,
              heurearrive:table.heurearrive,
              idEtat:this.valide,
              prix:table.prix,
              prixFinale: table.prixFinale,
              idTransporteur: localStorage.getItem("idtransporteur"),
              idDemande:table.idDemande,
              idCamion:table.idCamion,
              notificationIntermediaire: 1,
              notificationClient: null,
              notificationTransporteur: null,
              datecreation:table.datecreation
            }).then(()=>{ 
              this.close()
            })
    },
    searchfunction(mot){    
    axios
      .get(url+"offres/" +localStorage.getItem('idtransporteur')+"/offrestransporteur"
      +"?page="+this.currentPage+"&quantityPage="+this.perPage
      +"&&depart="+this.depart
      +"&arrive="+this.arrive +"&date="+this.date+"&etat="+this.etat
      +"&search="+this.searchby
      )
      .then((resp) => {
        this.offres = resp.data;
      });
    },
     ChangePage(NumPage) {
        this.currentPage=NumPage;
        this.perPage=this.perPage; 
    axios
      .get(url+"offres/" +localStorage.getItem('idtransporteur')+"/offrestransporteur"
      +"?page="+this.currentPage+"&quantityPage="+this.perPage
      +"&&depart="+this.depart
      +"&arrive="+this.arrive +"&date="+this.date+"&etat="+this.etat
      )
      .then((resp) => {
        this.offres = resp.data;
      });
     },
    valider(table) {
      if (result.value) {
        axios.put(url+"Offres/"+table.idOffre, {
              idOffre:table.idOffre,
              description:table.description,
              date: table.date,
              heurearrive:table.heurearrive,
              datecreation:table.datecreation,
              idEtat:this.valide.idEtat,
              prix:table.prix,
              prixFinale:table.prixFinale,
              idTransporteur:localStorage.getItem("idtransporteur"),
              idDemande:table.idDemande,
            }).then(()=>{ 
              this.close()
            })
    }
    },   
    }}
);
</script>

