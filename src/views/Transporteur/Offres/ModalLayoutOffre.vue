<template>
  <div>
    <!-- Breadcrumb -->
    <!--  <Breadcrumb breadcrumb="Modal" /> -->
    <button @click="open = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-box2-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1v3ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
        />
      </svg>
    </button>

    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="open = false"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="px-6 py-4 text-left modal-content">
          <!--Title-->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">Suggestion offre</p>
          </div>

          <!--Body-->
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <form @submit.prevent="ajouterOffre">
                  <div>
                    <label class="text-gray-700" for="username"
                      >Description</label
                    >
                    <textarea
                      class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="text"
                      v-model="description"
                      required
                    />
                  </div>
                  <div>
                    <label class="text-gray-700" for="username">Prix</label>
                    <input
                      class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="number"
                      v-model="prix"
                      required
                    />
                  </div>
                
                <div>
                  <label class="text-gray-700" for="passwordConfirmation">
                    Date disponible
                  </label>
                  <select
                    v-model="offre"
                    class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  >
                    <option
                      v-for="column in this.trajets"
                      :key="column"
                      :value="column"
                      required
                  >
                      {{
                        " DEPART:" +
                        column.date.substr(0,10)   + 
                         ":" +
                        column.heurdepart.substr(0,5)  +
                          " TYPE:" +
                        column.idCamionNavigation.idtypeNavigation.description               
                      }}
                    </option>
                  </select>
                </div>
                 <label class="text-gray-700" for="passwordConfirmation">
                    Ajouter un autre trajet
                  </label>
                <modal-trajet-add
                  :prix="this.prix"
                  :demandeid2="this.demid"
                  :tabledemande2="this.tabledemande"
                  :desc="this.description"
                  :add="false"
                ></modal-trajet-add>
               <div class="flex justify-end mt-4">
                  <button
                    class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Save
                  </button>
                </div>
                  </form>
              </div>
               

                <div v-if="this.error == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500"
                      >Merci de remplir tout les champs</span
                    >
                    <p class="text-sm text-gray-600">error!</p>
                  </div>
                </div>
                <div v-if="this.sucess == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500"
                      >Offre envoyé</span
                    >
                    <p class="text-sm text-gray-600">réussi!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import axios from "axios";


import ModalTrajetAdd from "/src/views/Transporteur/Trajets/ModalTrajetAdd .vue";
export default {
  props: ["demandeid" ,"tabledemande"],
  components: {
    ModalTrajetAdd,
  },
  data() {
    return {
      demid: this.demandeid,
      idchauffeur: "",
      codevehicule: "",
      statut: "",
      open: false,
      cinchauffeur: "",
      chauffeur: "",
      sucess: false,
      error: false,
      nextpage: 1,
      chauffeurscamions: [],
      idtransporteur: "",
      i: 0,
      description: "",
      prix: "",
      trajets: [],
      offre: "",
      encours:'',
      accepte:'',
    };
  },
  created() {
//get etatdemandedevis where etat=accepte
 axios
      .get(
        "http://localhost:5000/api/EtatDemandeDevis/EtatDemandeDevis?etat=Accepte" 
          )
      .then((response) =>{
        this.accepte= response.data;
      }),

  //get etatoffre where etat=en cours
 axios
      .get(
        "http://localhost:5000/api/EtatOffres/offre?offre=Nontraite" 
          )
      .then((response) =>{
        this.encours= response.data;
      }),

    //les trajets de cet transport

        axios 
          .get(
            "http://localhost:5000/api/Trajets/" + localStorage.getItem("idtransporteur")
            + "/idtransporteur"
            +"?&depart="+this.tabledemande.idDemandeNavigation.adressdepart
              +"&arrive="+this.tabledemande.idDemandeNavigation.adressarrive 
               +"&date="+new Date().toISOString()
          )  
          .then((response) => {
            this.trajets = response.data;
          })
          .catch((error) => console.log(error));
     
  },
  methods: {
    close() {
      this.error = false;
      this.sucess = false;
      this.open = false;
      location.replace("demandechauffeur");
    },
    ajouterOffre() {
      if (this.description != "" && this.prix != "" && this.offre != "") {
                 this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Offre ajouté",
          showConfirmButton: false,
          timer: 2000,
        }).then(()=>{
          axios.post("http://localhost:5000/api/Offres", {
              description: this.description,
              date: this.offre.date,
              heurdepart:this.offre.heurdepart      ,
              idEtat:this.encours.idEtat,
              prix: this.prix,
              prixFinale: null,
              idTransporteur: localStorage.getItem("idtransporteur"),
              idDemande: this.demandeid,
              idCamion:this.offre.idCamionNavigation.idcamion
            }).then(()=>{
               axios
              .put("http://localhost:5000/api/DemandeDevis/"+this.tabledemande.idDemandeDevis, {
               idDemandeDevis:this.tabledemande.idDemandeDevis,
               dateEnvoit:this.tabledemande.dateEnvoit,
               idIntermediaire:this.tabledemande.idIntermediaire,
               idDemande:this.tabledemande.idDemande,
               idTransporteur:this.tabledemande.idTransporteur,
               idEtat:this.accepte.idEtat
              }) 
              
              this.close()

            })
        
      })
            
  
}
    }
  }
}
</script>


<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
