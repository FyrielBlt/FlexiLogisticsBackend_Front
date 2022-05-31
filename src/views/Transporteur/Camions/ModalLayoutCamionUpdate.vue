<template>
  <div>
    <!-- Breadcrumb -->
     <span class="text-blue-500 flex justify-center">
      <button @click="open = true">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-blue-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        />
        <path
          fill-rule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clip-rule="evenodd"
        />
      </svg>
      </button>
    </span>
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
        
                 <div class="px-6 py-4 text-center modal-content">
            <p class="text-2xl font-bold">Modifier Chauffeur</p>
          
                  <form @submit.prevent="modifierCamion">
                   
                   <div class="relative block mt-2 sm:mt-0">
<span> Code vehicule :</span>
                 <input

 class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    this.camiontable.codevehicule === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                                        type="text"
                          v-model="camiontable.codevehicule"
                        />
                      </div>

               
        
                     <div class="relative block mt-2 sm:mt-0">
<span>Chauffeur :</span>
               <select
                          v-if="camiontable.idchauffeurNavigation != null"
                          v-model="
                            camiontable.idchauffeurNavigation.idchauffeur
                          "
                          class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                   camiontable.idchauffeurNavigation.idchauffeur === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                        >
                          <option
                            :value="
                              camiontable.idchauffeurNavigation.idchauffeur
                            "
                            selected
                          >
                            {{ camiontable.idchauffeurNavigation.cinchauffeur }}
                          </option>
                          <option
                            v-if="this.chauffeurscamions.length == 0"
                            disabled
                          >
                            Aucun autre chauffeur est disponible créer un!
                          </option>
                          <option
                            v-for="column in this.chauffeurscamions"
                            :key="column"
                            :value="column.idchauffeur"
                          >
                            {{ column.cinchauffeur }}
                          </option>
                        </select>
                        <select
                          v-if="camiontable.idchauffeurNavigation == null"
                          v-model="idchauffeurcamion"
class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    camiontable.idchauffeurNavigation=== ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"                        >
                          <option
                            v-if="this.chauffeurscamions.length == 0"
                            disabled
                          >
                            Aucun chauffeur est disponible créer un!
                          </option>
                          <option
                            v-for="column in this.chauffeurscamions"
                            :key="column"
                            :value="column.idchauffeur"
                          >
                            {{ column.cinchauffeur }}
                          </option>
                        </select>

              
              </div>
                    <div class="relative block mt-2 sm:mt-0">
<span>Type camion :</span>
               <select
                          v-model="camiontable.idtypeNavigation.idType"
class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                   camiontable.idtypeNavigation.idType === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"                        >
                          <option
                            v-for="column in this.typecamions"
                            :key="column"
                            :value="column.idType"
                          >
                            {{ column.description }}
                          </option>
                        </select>
               
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
      
</template>
<script>
import axios from "axios";
export default {
  props: ["camiontable"],
  data() {
    return {
      idchauffeur: "",
      codevehicule: "",
      statut: "",
      open: false,
      chauffeur: "",
      sucess: false,
      error: false,
      camions: [],
      nextpage: 1,
      chauffeurscamions: [],
      typecamions: [],
      i: 0,
      idchauffeurcamion: "",
    };
  },
  created() {
    // tous les typescamions
    axios
      .get("http://localhost:5000/api/TypeCamions")
      .then((response) => {
        this.typecamions = response.data;
      })
      .catch((error) => console.log(error));

    // les chauffeur disponible
    axios
      .get(
        "http://localhost:5000/api/Chauffeurs/" +
          localStorage.getItem("societe") +
          "/chauffeurs"
      )
      .then((response) => {
        response.data.forEach((element) => {
          if (element.camion.length == 0) {
            this.chauffeurscamions[this.i] = element;
            this.i = this.i + 1;
          }
        });
      })
      .catch((error) => console.log(error));
  },
  methods: {
    close() {
      this.error = false;
      this.sucess = false;
      this.open = false;
      location.replace("camions");
    },

    modifierCamion() {
      if (
        this.camiontable.codevehicule != "" &&
        this.idchauffeurcamion != "" &&
        this.camiontable.idchauffeurNavigation == null
      ) {
        axios
          .put(
            "http://localhost:5000/api/Camions/" + this.camiontable.idcamion,
            {
              idcamion: this.camiontable.idcamion,
              idtransporteur: this.camiontable.idtransporteur,
              idchauffeur: this.idchauffeurcamion,
              codevehicule: this.camiontable.codevehicule,
              idtype: this.camiontable.idtypeNavigation.idType,
            }
          )
          .then(() => {
             this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Camion modifié",
          showConfirmButton: false,
          timer: 2000,
        });
         location.replace("camions");
            this.close();
          })
          .catch((error) => console.log(error));
      }
      if (
        this.camiontable.codevehicule != "" &&
        this.idchauffeurcamion == "" &&
        this.camiontable.idchauffeurNavigation == null
      ) {
        axios
          .put(
            "http://localhost:5000/api/Camions/" + this.camiontable.idcamion,
            {
              idcamion: this.camiontable.idcamion,
              idtransporteur: this.camiontable.idtransporteur,
              idchauffeur: null,
              codevehicule: this.camiontable.codevehicule,
              idtype: this.camiontable.idtypeNavigation.idType,
            }
          )
          .then(() => {
             this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Camion modifié",
          showConfirmButton: false,
          timer: 2000,
        });
         location.replace("camions");
            this.close();
          })
          .catch((error) => console.log(error));
      }
      if (
        this.camiontable.codevehicule != "" &&
        this.idchauffeurcamion == "" &&
        this.camiontable.idchauffeurNavigation != null
      ) {
        axios
          .put(
            "http://localhost:5000/api/Camions/" + this.camiontable.idcamion,
            {
              idcamion: this.camiontable.idcamion,
              idtransporteur: this.camiontable.idtransporteur,
              idchauffeur: this.camiontable.idchauffeurNavigation.idchauffeur,
              codevehicule: this.camiontable.codevehicule,
              idtype: this.camiontable.idtypeNavigation.idType,
            }
          )
          .then(() => {
           this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Camion modifié",
          showConfirmButton: false,
          timer: 2000,
        });
        location.replace("camions");
        this.close();
          })

          .catch((error) => 
          {
             this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Codevéhicule réservé",
          showConfirmButton: false,
          timer: 2000,
        })
          }
          );
      } 
    },
  },
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
