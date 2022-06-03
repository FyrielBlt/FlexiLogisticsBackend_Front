<template>
  <div>
    <span class="text-blue-500 flex justify-center">
      <button @click="open = true">
        <i class="bi bi-box2-heart-fill"></i>
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
                ]"
                type="text"
                v-model="description"
                required
              />
            </div>
            <div class="relative block mt-2 sm:mt-0">
              <span>Prix demandé :</span>
              <input
                class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                :class="[
                  prix === ''
                    ? ' focus:bg-red-100  focus:border-red-800 '
                    : ' focus:bg-green-100  focus:border-green-800 ',
                ]"
                type="number"
                v-model="prix"
                required
              />
            </div>
            <div class="relative block mt-2 sm:mt-0">
              <span>Date livraison : </span>
              <input
                type="datetime-local"
                class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                :class="[
                  offre === ''
                    ? ' focus:bg-red-100  focus:border-red-800 '
                    : ' focus:bg-green-100  focus:border-green-800 ',
                ]"
                width="300px"
                v-model="offre"
                :min="this.today"
                required
              />
            </div>
            <div class="relative block mt-2 sm:mt-0">
              <input
                type="file"
                id="image"
                multiple="multiple"
                @change="FileSelected($event)"
              />
            </div>
            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                Envoyer
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
    };
  },
  created() {
    //get etatdemandedevis where etat=accepte
    axios
      .get(
        "http://localhost:5000/api/EtatDemandeDevis/EtatDemandeDevis?etat=Accepte"
      )
      .then((response) => {
        this.accepte = response.data.idEtat;
      }),
      //get etatoffre where etat=en cours
      axios
        .get("http://localhost:5000/api/EtatOffres/offre?offre=Nontraite")
        .then((response) => {
          this.encours = response.data.idEtat;
        });
  },
  methods: {
    close() {
      this.error = false;
      this.sucess = false;
      this.open = false;
      location.replace("demandechauffeur");
    },
    FileSelected(event) {
      this.imageFile = event.target.files;
      console.log(this.imageFile[0]);
      console.log(this.imageFile[1]);
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
        }).then(() => {
          axios
            .post("http://localhost:5000/api/Offres", {
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
                  axios.post("http://localhost:5000/api/FileOffres", file);
                }
              }
              axios.put(
                "http://localhost:5000/api/DemandeDevis/" +
                  this.tabledemande.idDemandeDevis,
                {
                  idDemandeDevis: this.tabledemande.idDemandeDevis,
                  dateEnvoit: this.tabledemande.dateEnvoit,
                  idIntermediaire: this.tabledemande.idIntermediaire,
                  idDemande: this.tabledemande.idDemande,
                  idTransporteur: this.tabledemande.idTransporteur,
                  idEtat: this.accepte,
                }
              );

              this.close();
            });
        });
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
