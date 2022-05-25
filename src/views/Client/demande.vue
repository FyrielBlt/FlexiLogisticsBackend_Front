<template>
  <!-- Breadcrumb -->
  <bread-crumb>
    <template v-slot:bread1> Demandes </template>
  </bread-crumb>
  <!-- <Breadcrumb breadcrumb="Demandes" /> -->
  <button @click="open = true" class="
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
    right: 545px;
    top: 40px;
    height: 62px;">
    Demande Livraison
  </button>
  <div :class="`modal ${!open && 'opacity-0 pointer-events-none'
  } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
    <div @click="open = false" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

    <div class="
        z-50
        w-11/12
        mx-auto
        overflow-y-auto
        bg-white
        rounded
        shadow-lg
        modal-container
        animate__animated animate__fadeInDown
      " style="width: 681px">
      <div class="
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
        ">
        <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
          viewBox="0 0 18 18">
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="px-6 py-4 text-left modal-content">
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Demande Livraison</p>
          <div class="z-50 cursor-pointer modal-close" @click="open = false">
            <svg class="text-black fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </div>
        </div>

        <!--Body-->
        <div class="
            px-5
            py-6
            text-gray-700
            bg-gray-200
            border-b
            grid grid-cols-2
            gap-2
          ">
          <div class="relative mt-2 rounded-md shadow-sm">
            <label class="text-xs">Description</label>

            <textarea class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring focus:ring-opacity-40 focus:ring-indigo-500
              " v-model="description" />
          </div>
          <div class="relative mt-2 rounded-md shadow-sm">
            <label class="text-xs">Poids</label>

            <input class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring focus:ring-opacity-40 focus:ring-indigo-500
              " type="number" v-model="poids" />
          </div>
          <div class="relative mt-2 rounded-md shadow-sm">
            <label class="text-xs">Adresse depart</label>

            <select name="" class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring focus:ring-opacity-40 focus:ring-indigo-500
              " id="" v-model="depart">
              <option v-for="ville in villes" :key="ville" :value="ville.nomVille">
                {{ ville.nomVille }}
              </option>
            </select>
          </div>

          <div class="relative mt-2 rounded-md shadow-sm">
            <label class="text-xs">Adresse arrive</label>

            <select name="" class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring focus:ring-opacity-40 focus:ring-indigo-500
              " id="" v-model="arrive">
              <option v-for="ville in villes" :key="ville" :value="ville.nomVille">
                {{ ville.nomVille }}
              </option>
            </select>
          </div>



          <div class="relative mt-2 rounded-md shadow-sm">
            <label class="text-xs">Largeur</label>

            <input class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring focus:ring-opacity-40 focus:ring-indigo-500
              " type="number" v-model="largeur" />
          </div>

          <div class="relative mt-2 rounded-md shadow-sm">
            <label class="text-xs">Hauteur</label>

            <input class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring focus:ring-opacity-40 focus:ring-indigo-500
              " type="number" v-model="hauteur" />
          </div>

          <div class="relative mt-2 rounded-md shadow-sm">
            <label class="text-xs">Date</label>

            <input class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring focus:ring-opacity-40 focus:ring-indigo-500
              " type="date" :min="this.today" v-model="datedemande" />
          </div>
        </div>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button @click="open = false" class="
              p-3
              px-6
              py-3
              mr-2
              text-indigo-500
              bg-transparent
              rounded-lg
              hover:bg-gray-100
              hover:text-indigo-400
              focus:outline-none
            ">
            Close
          </button>
          <button @click="demandelivraisons()" class="
              px-6
              py-3
              font-medium
              tracking-wide
              text-white
              bg-indigo-600
              rounded-md
              hover:bg-indigo-500
              focus:outline-none
            ">
            Valider
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 animate__animated animate__fadeInDown">
    <div class="flex justify-center">
      <h4 class="font-semibold p-3">Per Page :</h4>
      <div class="mb-3 p-3">
        <select v-model="perpage" @change="ChangePage(page)" class="
            form-select
            appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
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
          " aria-label="Default select example">
          <option :value="2">2</option>
          <option :value="5">5</option>
          <option :value="10">10</option>
        </select>
      </div>

      <h4 class="font-semibold p-3">Depart :</h4>
      <div class="mb-3 xl:w-96 p-3">
        <select v-model="departfilter" @change="ChangePage(page)" class="
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
          " aria-label="Default select example">
          <option value="" class="font-semibold" selected>--Vide--</option>
          <option v-for="v in villes" :key="v" :value="v.nomVille">
            --{{ v.nomVille }}--
          </option>
        </select>
      </div>
      <h4 class="font-semibold p-3">Arrive :</h4>
      <div class="mb-3 xl:w-96 p-3">
        <select v-model="arrivefilter" @change="ChangePage(page)" class="
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
          " aria-label="Default select example">
          <option value="" class="font-semibold" selected>--Vide--</option>
          <option v-for="v in villes" :key="v" :value="v.nomVille">
            --{{ v.nomVille }}--
          </option>
        </select>
      </div>
    </div>

    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">

      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <input v-model="num" @keyup="ChangePage(page)"
          class="appearance-none block text-gray-700 border border-red-500 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="text" placeholder="Num demande">
        <table class="divide-y divide-gray-300" style="width: 100%">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 text-xs text-gray-500">
                NUM
              </th>
              <th class="px-6 py-2 text-xs text-gray-500">
                DESCRIPTION
              </th>
              <th class="px-6 py-2 text-xs text-gray-500">ADRESSE DEPART</th>
              <th class="px-6 py-2 text-xs text-gray-500">ADRESSE ARRIVE</th>
              <th class="px-6 py-2 text-xs text-gray-500">
                PONDS(KG)/DIMENSION(CM)
              </th>
              <th class="px-6 py-2 text-xs text-gray-500">DATE</th>
              <th class="px-6 py-2 text-xs text-gray-500">FILE</th>
              <th class="px-6 py-2 text-xs text-gray-500">ETAT</th>
              <th class="px-6 py-2 text-xs text-gray-500">SETTINGS</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-500">
            <tr class="whitespace-nowrap" v-for="(u, index) in demandes" :key="index">
              <td class="px-6 text-sm bg-white border-b border-gray-200">{{ u.idDemande }}</td>
              <td class="text-sm bg-white border-b border-gray-200" style="padding: 30px 49px">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      <input class="bg-white" type="text" v-model="u.description" :disabled="updateinputdisable" />
                    </p>
                  </div>
                </div>
              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                <span :hidden="!updateinputdisable">{{ u.adressdepart }}</span>
                <select v-model="u.adressdepart" :hidden="updateinputdisable">
                  <option v-for="ville in villes" :key="ville" :value="ville.nomVille">
                    {{ ville.nomVille }}
                  </option>
                </select>
              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                <span :hidden="!updateinputdisable">{{ u.adressarrive }}</span>
                <select v-model="u.adressarrive" :hidden="updateinputdisable">
                  <option v-for="ville in villes" :key="ville" :value="ville.nomVille">
                    {{ ville.nomVille }}
                  </option>
                </select>
              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                P :
                <input style="text-align: center; width: 33px" class="bg-white" type="number" v-model="u.poids"
                  :disabled="updateinputdisable" />

                L :
                <input style="text-align: center; width: 33px" class="bg-white" type="number" v-model="u.largeur"
                  :disabled="updateinputdisable" />

                H :<input style="text-align: center; width: 33px" class="bg-white" type="number" v-model="u.hauteur"
                  :disabled="updateinputdisable" />
              </td>
              <td class="text-sm bg-white border-b border-gray-200">
                <input style="text-align: center" class="bg-white" type="date" v-model="u.date"
                  :hidden="updateinputdisable" />
                <span :hidden="!updateinputdisable">{{ u.date.substr(0, 10) }}</span>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200" style="padding: 30px 49px">
                <a class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                  " :href="u.file" v-if="u.file">Download File</a>
                <a class="
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                  " v-else>
                  No File</a>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ u.idEtatdemandeNavigation.etatDemande }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex justify-around">
                  <span class="text-yellow-500 flex justify-center" v-if="u.offre.length == 0">
                    <button @click="updateinputdisable = false" :hidden="!updateinputdisable"
                      class="mx-2 px-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-700" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="updatedemande(u.idDemande, index)" :hidden="updateinputdisable"
                      class="mx-2 px-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-700" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="supprimer(u.idDemande)" class="mx-2 px-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-700" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                  </span>
                  <div v-else>
                    <button class="
                        bg-white
                        hover:bg-green-100
                        text-green-800
                        font-semibold
                        py-2
                        px-4
                        border border-green-400
                        rounded
                        shadow
                      " @click="livrer(u)" v-if="u.idEtatdemande != livre">
                      Livrer
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="
            flex flex-col
            items-center
            px-2
            py-2
            bg-white
            border-t
            xs:flex-row
            xs:justify-between
          ">
          <div class="inline-flex xs:mt-0">
            <!-- PAGINATION -->
            <pagination-vue :current="page" :total="this.demandes.length" :per-page="perpage"
              @page-changed="ChangePage"></pagination-vue>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script lang="js">
import BreadCrumb from "../../components/Intermediaire/BreadCrumb.vue";
import { ref } from 'vue'
import axios from "axios";
import PaginationVue from "../../components/Intermediaire/pagination/PaginationVue.vue";
import $ from 'jquery';
export default {
  components: {
    BreadCrumb,
    PaginationVue
  },
  data() {
    return {
      demandes: [],
      open: ref(false),
      success: false,
      description: '',
      depart: '',
      arrive: '',
      num: '',
      villes: [],
      updateinputdisable: true,
      update: true,
      descupdate: "",
      departupdate: "",
      arriveupdate: "",
      poids: "",
      largeur: "",
      hauteur: "",
      datedemande: "",
      page: 1,
      perpage: 5,
      departfilter: '',
      arrivefilter: '',
      today: new Date().toISOString().split("T")[0],

    }
  },

  created() {
    axios
      .get(
        "http://localhost:5000/api/EtatDemandeLivraisons/check?etat=livre"
      )
      .then((response) => {
        this.livre = response.data.idEtatDemande;
      }),
      axios
        .get("http://localhost:5000/api/demandelivraisons/client/" + localStorage.getItem("iduser"))
        .then((response) => {
          this.demandes = response.data
        })

    axios.get('http://localhost:5000/api/villes').then((resp) => this.villes = resp.data)


  },
  methods: {
    ChangePage(NumPage) {
      this.page = NumPage;

      axios
        .get(
          "http://localhost:5000/api/demandelivraisons/client/" +
          localStorage.getItem("iduser") +
          "?page=" +
          this.page +
          "&quantityPage=" +
          this.perpage +
          "&depart=" +
          this.departfilter +
          "&arrive=" +
          this.arrivefilter +
          "&num=" +
          this.num
        )
        .then((resp) => {
          this.demandes = resp.data;
        });

    },
    livrer(u) {
      axios.put(
        "http://localhost:5000/api/demandelivraisons/" + u.idDemande,
        {
          idDemande: u.idDemande,
          description: u.description,
          datecreation: u.datecreation,
          adressdepart: u.adressdepart,
          adressarrive: u.adressarrive,
          date: u.date,
          poids: u.poids,
          largeur: u.largeur,
          hauteur: u.hauteur,
          idEtatdemande: this.livre,
          idclient: u.idclient,
          file: u.file,
        }
      ).then(() => {
        axios
          .get("http://localhost:5000/api/demandelivraisons/client/" + localStorage.getItem("iduser"))
          .then((response) => {
            this.demandes = response.data
            Swal.fire(
              'Updated!',
              'Your offer has been updated.',
              'success'
            )
          })

      });
    },
    updatedemande(id, index) {
      axios.put('http://localhost:5000/api/demandelivraisons/' + id, {
        "idDemande": id,
        "description": this.demandes[index].description,
        "datecreation": this.demandes[index].datecreation,
        "adressdepart": this.demandes[index].adressdepart,
        "poids": this.demandes[index].poids,
        "largeur": this.demandes[index].largeur,
        "hauteur": this.demandes[index].hauteur,
        "date": this.demandes[index].date,
        "adressarrive": this.demandes[index].adressarrive,
        "idEtatdemande": this.demandes[index].idEtatdemande,
        "idclient": this.demandes[index].idclient,
      }).then(() => {
        this.updateinputdisable = !this.updateinputdisable
      })
    },
    demandelivraisons() {
      const date = new Date();
      axios.post('http://localhost:5000/api/demandelivraisons', {
        "description": this.description,
        "datecreation": date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),
        "adressdepart": this.depart,
        "adressarrive": this.arrive,
        "poids": this.poids,
        "largeur": this.largeur,
        "hauteur": this.hauteur,
        "date": this.datedemande,
        "idEtatdemande": 2002,
        "idclient": parseInt(localStorage.getItem("clientid"))
      }).then((r) => {
        axios
          .get("http://localhost:5000/api/demandelivraisons/client/" + localStorage.getItem("iduser"))
          .then((response) => {
            this.demandes = response.data
          })

        this.open = false;
        Swal.fire(
          'Ajouté!',
          'Demande Ajouté Avec Succée',
          'success'
        )

      })
        .catch((error) => console.log(error))
    },

    supprimer(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('http://localhost:5000/api/demandelivraisons/' + id)
            .then(() => {
              axios
                .get("http://localhost:5000/api/demandelivraisons/client/" + localStorage.getItem("iduser"))
                .then((response) => {
                  this.demandes = response.data
                })
            })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    }
  }
}
</script>
<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>