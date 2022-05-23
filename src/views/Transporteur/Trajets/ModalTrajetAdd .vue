<template>
  <div>
    <!-- Breadcrumb -->
    <!--  <Breadcrumb breadcrumb="Modal" /> -->
    <button @click="open = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="25"
        fill="currentColor"
        class="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
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
        class="
          z-50
          w-11/12
          mx-auto
          overflow-y-auto
          bg-white
          rounded
          shadow-lg
          modal-container
          md:max-w-md
        "
      >
        <div
          class="
            absolute
            top-0
            right-0
            z-50
            flex flex-col
            items-center
            mt-4
            mr-4
            text-sm text-white
            cursor-pointer
            modal-close
          "
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
            <p class="text-2xl font-bold">Ajouter Trajet</p>
          </div>

          <!--Body-->
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div v-if="this.add != true">
                    <label class="text-gray-700" for="passwordConfirmation">
                      camion
                    </label>
                    <select
                      v-model="camion"
                      class="
                        w-full
                        mt-2
                        border-gray-200
                        rounded-md
                        focus:border-indigo-600
                        focus:ring
                        focus:ring-opacity-40
                        focus:ring-indigo-500
                      "
                    >
                      <option
                        v-for="column in this.chauffeurscamions"
                        :key="column.codevehicule"
                        :value="column.idcamion"
                      >
                        {{ column.codevehicule }}
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label class="text-gray-700" for="passwordConfirmation"
                    >ville départ
                  </label>
                  <select
                    v-model="depart"
                    class="
                      w-full
                      mt-2
                      border-gray-200
                      rounded-md
                      focus:border-indigo-600
                      focus:ring
                      focus:ring-opacity-40
                      focus:ring-indigo-500
                    "
                  >
                    <option v-for="column in this.villes" :key="column">
                      {{ column.nomVille }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="text-gray-700" for="passwordConfirmation"
                    >Destination
                  </label>
                  <select
                    v-model="Destinaton"
                    class="
                      w-full
                      mt-2
                      border-gray-200
                      rounded-md
                      focus:border-indigo-600
                      focus:ring
                      focus:ring-opacity-40
                      focus:ring-indigo-500
                    "
                  >
                    <option v-for="column in this.villes" :key="column">
                      {{ column.nomVille }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="text-gray-700" for="passwordConfirmation"
                    >Date/heure
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    width="300px"
                    v-model="dateheure"
                  />
                </div>
                <div class="flex justify-end mt-4">
                  <button
                    @click="ajouterTrajet"
                    class="
                      px-4
                      py-2
                      text-gray-200
                      bg-gray-800
                      rounded-md
                      hover:bg-gray-700
                      focus:outline-none focus:bg-gray-700
                    "
                  >
                    Save
                  </button>
                </div>

                <div v-if="this.error == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500"
                      >Merci de remplir tout les champs</span
                    >
                    <p class="text-sm text-gray-600">error!</p>
                  </div>
                </div>
                <div v-if="this.error2 == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500"
                      >Depart et Destination ne peuvent pas etre
                      identiques</span
                    >
                    <p class="text-sm text-gray-600">error!</p>
                  </div>
                </div>
                <div v-if="this.sucess == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500"
                      >Nouvelle véhicule de transport</span
                    >
                    <p class="text-sm text-gray-600">Ajout réussi!</p>
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
import datetime from "vuejs-datetimepicker";

export default {
  props: ["add", "desc", "prix", "demandeid2", "tabledemande2"],
  components: {
    datetime,
  },
  data() {
    return {
      idchauffeur: "",
      codevehicule: localStorage.getItem("moncamion"),
      Destinaton: "",
      depart: "",
      statut: "",
      open: false,
      cinchauffeur: "",
      chauffeur: "",
      sucess: false,
      error: false,
      dateheure: "",
      nextpage: 1,
      chauffeurscamions: [],
      idtransporteur: "",
      i: 0,
      camion: "",
      villes: [],
      iddepart: "",
      iddestination: "",
      chauffeurscamions: [],
      encours: [],
      accepte: [],
    };
  },
  created() {
    //get etatdemandedevis where etat=accepte
    axios
      .get("http://localhost:5000/api/EtatDemandeDevis/EtatDemandeDevis?etat=Accepte")
      .then((response) => {
        this.accepte = response.data;
      }),
      //get etatoffre where etat=en cours
      axios
        .get("http://localhost:5000/api/EtatOffres/offre?offre=Nontraite")
        .then((response) => {
          this.encours = response.data;
        }),
      axios
        .get(
          "http://localhost:5000/api/Transporteurs/" +
            localStorage.getItem("iduser") +
            "/iduser"
        )
        .then((resp) => {
          axios
            .get(
              "http://localhost:5000/api/Camions/" + resp.data.idTransporteur
            )
            .then((response) => {
              this.chauffeurscamions = response.data;
            })
            .catch((error) => console.log(error));
        });
    axios
      .get("http://localhost:5000/api/Villes")
      .then((response) => {
        this.villes = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    close() {
      this.error = false;
      this.sucess = false;
      this.open = false;
      if (this.add == false) {
        location.replace("Trajetcamion");
      } else {
        location.replace("demandechauffeur");
      }
    },
    ajouterTrajet() {
      if (
        this.depart != "" &&
        this.Destinaton != "" &&
        this.depart != this.Destinaton
      ) {
        axios
          .get("http://localhost:5000/api/Villes/" + this.depart + "/ville")
          .then((response) => {
            this.iddepart = response.data.idVille;
            axios
              .get(
                "http://localhost:5000/api/Villes/" + this.Destinaton + "/ville"
              )
              .then((response) => {
                this.iddestination = response.data.idVille;
                axios
                  .post("http://localhost:5000/api/Trajets", {
                    idVille1: this.iddepart,
                    idVille2: this.iddestination,
                    idCamion: this.camion,
                    date: this.dateheure.toString().substr(0, 10),
                    heurdepart: this.dateheure.toString().substr(11, 16),
                  })
                  .then(() => {
                    axios
                      .get(
                        "http://localhost:5000/api/Transporteurs/" +
                          localStorage.getItem("iduser") +
                          "/iduser"
                      )
                      .then((resp) => {
                        axios
                          .post("http://localhost:5000/api/Offres", {
                            description: this.desc,
                            date: this.dateheure.toString().substr(0, 10),
                            idEtat: this.encours.idEtat,
                            prix: this.prix,
                            prixFinale: null,
                            idTransporteur: resp.data.idTransporteur,
                            idDemande: this.demandeid2,
                            heurdepart: this.dateheure
                              .toString()
                              .substr(11, 16),
                            idCamion: this.camion,
                          })
                          .then(() => {
                            axios.put(
                              "http://localhost:5000/api/DemandeDevis/" +
                                this.tabledemande2.idDemandeDevis,
                              {
                                idDemandeDevis:
                                  this.tabledemande2.idDemandeDevis,
                                dateEnvoit: this.tabledemande2.dateEnvoit,
                                idIntermediaire:
                                  this.tabledemande2.idIntermediaire,
                                idDemande: this.tabledemande2.idDemande,
                                idTransporteur:
                                  this.tabledemande2.idTransporteur,
                                idEtat: this.accepte.idEtat,
                              }
                            );
                          });
                        // this.close()
                      });
                  });
              });
          });
      }

      if (
        this.depart == "" &&
        this.Destinaton == "" &&
        this.camion == "" &&
        this.add == false
      ) {
        this.error = true;
        this.sucess = false;
      } else if (this.depart == this.Destinaton && this.add == false) {
        this.error2 = true;
        this.sucess = false;
      }
    },
  },
};
</script>
