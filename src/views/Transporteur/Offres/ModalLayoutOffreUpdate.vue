<template>
 <div>
    <!-- Breadcrumb -->
    <!--  <Breadcrumb breadcrumb="Modal" /> -->
    <button
      class="bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow"
      @click="open = true"
    >
      Modifier
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
            <p class="text-2xl font-bold">Modifier offre</p>
            <h6>Tant que votre offre n'est pas transmis au client vous pouvez le modifier</h6>
          </div>

          <!--Body-->
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <form @submit.prevent="modifierOffre">
                  <div>
                    <label class="text-gray-700" for="username"
                      >Description</label
                    >
                    <textarea
                      class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="text"
                      v-model="table.description"
                      required
                    />
                  </div>
                  <div>
                    <label class="text-gray-700" for="username">Prix</label>
                    <input
                      class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="number"
                      v-model="table.prix"
                      required
                    />
                  </div>
                   <div>
                    <label class="text-gray-700" for="username">Date choisi</label>
                    <input
                      class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                      type="text"
                      :value="table.date.substr(0,10)+' ' +table.heurdepart"
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
                <div v-if="this.sucess == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500"
                      >Offre modifié</span
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
import url from "../../../store/Api";


export default {
  props: ["table"],
  components: {
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
    };
  },
  created() {
//get etatdemandedevis where etat=accepte
 axios
      .get(
        url+"EtatDemandeDevis/EtatDemandeDevis?etat=Accepte" 
          )
      .then((response) =>{
        this.accepte= response.data;
      }),

  //get etatoffre where etat=en cours
 axios
      .get(
        url+"EtatOffres/offre?offre=Nontraite" 
          )
      .then((response) =>{
        this.encours= response.data;
      })

    
     
  },
  methods: {
    close() {
      this.error = false;
      this.sucess = false;
      this.open = false;
      location.replace("offreschauffeur");
    },
    modifierOffre() {
      if (this.table.description != "" && this.table.prix != "" && this.offre == "") {
          this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Offre Modifié",
          showConfirmButton: false,
          timer: 2000,
        }).then(()=>{
         axios.put(url+"Offres/"+this.table.idOffre, {
              idOffre:this.table.idOffre,
              description: this.table.description,
              date: this.table.date,
              heurdepart:this.table.heurdepart,
              idEtat:this.encours.idEtat,
              prix: this.table.prix,
              prixFinale: null,
              idTransporteur: localStorage.getItem("idtransporteur"),
              idDemande: this.table.idDemande,
              idCamion:this.table.idCamion
            }).then(()=>{ 
              this.close()
            })
        
        })
              
      }
       if (this.table.description != "" && this.table.prix != "" && this.offre != "") {
           this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Offre Modifié",
          showConfirmButton: false,
          timer: 2000,
        }).then(()=>{

 axios.put(url+"Offres/"+this.table.idOffre, {
              idOffre:this.table.idOffre,
              description: this.table.description,
              date: this.offre.substr(0,10),
              heurdepart:this.offre.substr(20,24),
              idEtat:this.encours.idEtat,
              prix: this.table.prix,
              prixFinale: null,
              idTransporteur: localStorage.getItem("idtransporteur"),
              idDemande: this.table.idDemande,
            }).then(()=>{
               
              
              this.close()

            })
        
      
    


        }
        )      
    }}
  },
};
</script>



<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>