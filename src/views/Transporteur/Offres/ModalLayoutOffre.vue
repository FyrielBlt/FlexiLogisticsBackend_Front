<template>
  <div>
    <span class="text-blue-500 flex justify-center">
      <button @click="open = true">
        <i class="bi bi-box2-heart-fill"></i>
      </button>
    </span>
    <div :class="`modal ${!open && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
      <div @click="open = false" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

      <div class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
          <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            viewBox="0 0 18 18">
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->

        <div class="px-6 py-4 text-center modal-content">
          <p class="text-2xl font-bold">Suggestion offre</p>
          <!--Body-->
          <form @submit.prevent="ajouterOffre">
            <div class="relative block mt-2 sm:mt-0">
              <span> Description offre :</span>
              <textarea
                class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                :class="[
                  description === ''
                    ? ' focus:bg-red-100  focus:border-red-800 '
                    : ' focus:bg-green-100  focus:border-green-800 ',
                ]" type="text" v-model="description" required />
            </div>
            <div class="relative block mt-2 sm:mt-0">
              <span>Prix demandé :</span>
              <input
                class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                :class="[
                  prix === ''
                    ? ' focus:bg-red-100  focus:border-red-800 '
                    : ' focus:bg-green-100  focus:border-green-800 ',
                ]" type="number" v-model="prix" required />
            </div>
            <div class="relative block mt-2 sm:mt-0">
              <span>Date livraison : </span>
              <input type="datetime-local"
                class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                :class="[
                  offre === ''
                    ? ' focus:bg-red-100  focus:border-red-800 '
                    : ' focus:bg-green-100  focus:border-green-800 ',
                ]" width="300px" v-model="offre" :min="tabledemande.idDemandeNavigation.date" required />
            </div>
            <div class="relative block mt-2 sm:mt-0">
              <input type="file" id="image" multiple="multiple" @change="FileSelected($event)" />
            </div>
            <div class="flex justify-end mt-4">
              <button
                class="px-2 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
                Envoyer
                 <span :hidden="spinner">
              <svg role="status" class="inline w-5 h-5 mr-2 text-gray-200 animate-spin  fill-purple-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill" />
              </svg>
              </span>
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
import url from "../../../store/Api";

export default {
  props: ["demandeid", "tabledemande"],

  data() {
    return {
      demid: this.demandeid,
      idchauffeur: "",
      codevehicule: "",
      statut: "",
      open: false,
      cinchauffeur: "",
      imageFile: null,
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
      encours: "",
      accepte: "",
      today: new Date().toISOString().substr(0, 10) + "T00:00:00.000",
      spinner: true
    };
  },
  created() {
    //get etatdemandedevis where etat=accepte
    axios
      .get(
        url + "EtatDemandeDevis/EtatDemandeDevis?etat=Accepte"
      )
      .then((response) => {
        this.accepte = response.data.idEtat;
      }),
      //get etatoffre where etat=en cours
      axios
        .get(url + "EtatOffres/offre?offre=Nontraite")
        .then((response) => {
          this.encours = response.data.idEtat;
        });
  },
  methods: {
    close() {
      this.error = false;
      this.sucess = false;
      this.open = false;
      location.reload()

    },
    FileSelected(event) {
      this.imageFile = event.target.files;
      console.log(this.imageFile[0]);
      console.log(this.imageFile[1]);
    },
    ajouterOffre() {
      this.spinner = false
      axios
        .post(url + "Offres", {
          description: this.description,
          date: this.offre.toString().substr(0, 10),
          heurearrive: this.offre.toString().substr(11, 16),
          idEtat: this.encours,
          prix: this.prix,
          prixFinale: null,
          idTransporteur: localStorage.getItem("idtransporteur"),
          idDemande: this.demandeid,
          notificationIntermediaire: 1,
          notificationClient: null,
          notificationTransporteur: null,
          datecreation:
            new Date().getFullYear() +
            "-0" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate(),
        })
        .then((resp) => {
          if (this.imageFile != null) {
            for (let i = 0; i < this.imageFile.length; i++) {
              let file = new FormData();
              file.append("idOffre", resp.data.idOffre);
              file.append("nomFile", "");
              file.append("imageFile", this.imageFile[i]);
              file.append("srcOffreFile", "");
              axios.post(url + "FileOffres", file).then(() => {
                if (this.imageFile.length - 1 === i) {
                  axios.put(
                    url + "DemandeDevis/" +
                    this.tabledemande.idDemandeDevis,
                    {
                      idDemandeDevis: this.tabledemande.idDemandeDevis,
                      dateEnvoit: this.tabledemande.dateEnvoit,
                      idIntermediaire: this.tabledemande.idIntermediaire,
                      idDemande: this.tabledemande.idDemande,
                      idTransporteur: this.tabledemande.idTransporteur,
                      idEtat: this.accepte,
                    }
                  ).then(() => {
                    this.$swal({
                      position: "top-end",
                      icon: "success",
                      toast: true,
                      title: "Offre ajouté",
                      showConfirmButton: false,
                      timer: 2000,
                    })
                    setTimeout(location.reload(), 2000)
                  });


                }

              });
            }
          }else{
             axios.put(
                    url + "DemandeDevis/" +
                    this.tabledemande.idDemandeDevis,
                    {
                      idDemandeDevis: this.tabledemande.idDemandeDevis,
                      dateEnvoit: this.tabledemande.dateEnvoit,
                      idIntermediaire: this.tabledemande.idIntermediaire,
                      idDemande: this.tabledemande.idDemande,
                      idTransporteur: this.tabledemande.idTransporteur,
                      idEtat: this.accepte,
                    }
                  ).then(() => {
                    this.$swal({
                      position: "top-end",
                      icon: "success",
                      toast: true,
                      title: "Offre ajouté",
                      showConfirmButton: false,
                      timer: 2000,
                    })
                    setTimeout(location.reload(), 2000)
                  });
          }

        });

    },
  },
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
