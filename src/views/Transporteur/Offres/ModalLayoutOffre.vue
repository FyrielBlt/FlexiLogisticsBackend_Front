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
                    Date de livraison
                  </label>
                   <input
                    type="datetime-local"
                    width="300px"
                    v-model="offre"
                     :min="this.today"
                    requied
                  />
                 
                </div>
               <div class="flex justify-end mt-4">
                  <button
                    class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Save
                  </button>
                </div>
                  </form>
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
      offre: "",
      encours:'',
      accepte:'',
       today:new Date().toISOString().substr(0,10)+"T00:00:00.000",
    };
  },
  created() {
//get etatdemandedevis where etat=accepte
 axios
      .get(
        "http://localhost:5000/api/EtatDemandeDevis/EtatDemandeDevis?etat=Accepte" 
          )
      .then((response) =>{
        this.accepte= response.data.idEtat;
      }),

  //get etatoffre where etat=en cours
 axios
      .get(
        "http://localhost:5000/api/EtatOffres/offre?offre=Nontraite" 
          )
      .then((response) =>{
        this.encours= response.data.idEtat;
      })     
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
              date: this.offre.toString().substr(0, 10),
              heurearrive:this.offre.toString().substr(11, 16),
              idEtat:this.encours,
              prix: this.prix,
              prixFinale: null,
              idTransporteur: localStorage.getItem("idtransporteur"),
              idDemande: this.demandeid,
              notificationIntermediaire:1,
              notificationClient:null,
              notificationTransporteur:null,
              datecreation:new Date().getFullYear()+"-0"+(new Date().getMonth()+1)+"-"+new Date().getDate()

            }).then(()=>{
               axios
              .put("http://localhost:5000/api/DemandeDevis/"+this.tabledemande.idDemandeDevis, {
               idDemandeDevis:this.tabledemande.idDemandeDevis,
               dateEnvoit:this.tabledemande.dateEnvoit,
               idIntermediaire:this.tabledemande.idIntermediaire,
               idDemande:this.tabledemande.idDemande,
               idTransporteur:this.tabledemande.idTransporteur,
               idEtat:this.accepte
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
