<template>
  <!-- Breadcrumb -->
  <!-- <Breadcrumb breadcrumb="Demandes" /> -->

  <div
    class="
      inline-flex
      w-full
      max-w-sm
      ml-3
      overflow-hidden
      bg-white
      rounded-lg
      shadow-md
    "
    style="position: absolute; right: 50px"
    v-if="success"
    @click="success = false"
  >
    <div class="flex items-center justify-center w-12 bg-green-500">
      <svg
        class="w-6 h-6 text-white fill-current"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
        />
      </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
      <div class="mx-3">
        <span class="font-semibold text-green-500">Succée</span>
        <p class="text-sm text-gray-600">Demande envoyé avec succée</p>
      </div>
    </div>
  </div>
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
          <p class="text-2xl font-bold">Demande Livraison</p>
          <div class="z-50 cursor-pointer modal-close" @click="open = false">
            <svg
              class="text-black fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>

        <!--Body-->
        <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b">
          <label class="text-xs">Description</label>

          <div class="relative mt-2 rounded-md shadow-sm">
            <span
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-3
                text-gray-600
              "
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <textarea
              type="text"
              class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring
                focus:ring-opacity-40
                focus:ring-indigo-500
              "
              v-model="description"
            />
          </div>

          <label class="text-xs">Adresse depart</label>

          <div class="relative mt-2 rounded-md shadow-sm">
            <span
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-3
                text-gray-600
              "
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>
            <select
              name=""
              class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring
                focus:ring-opacity-40
                focus:ring-indigo-500
              "
              id=""
              v-model="depart"
            >
              <option
                v-for="ville in villes"
                :key="ville"
                :value="ville.nomVille"
              >
                {{ ville.nomVille }}
              </option>
            </select>
          </div>

          <label class="text-xs">Adresse arrive</label>

          <div class="relative mt-2 rounded-md shadow-sm">
            <span
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-3
                text-gray-600
              "
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <select
              name=""
              class="
                w-full
                px-12
                py-2
                border-transparent
                rounded-md
                appearance-none
                focus:border-indigo-600
                focus:ring
                focus:ring-opacity-40
                focus:ring-indigo-500
              "
              id=""
              v-model="arrive"
            >
              <option
                v-for="ville in villes"
                :key="ville"
                :value="ville.nomVille"
              >
                {{ ville.nomVille }}
              </option>
            </select>
          </div>
        </div>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button
            @click="open = false"
            class="
              p-3
              px-6
              py-3
              mr-2
              text-indigo-500
              bg-transparent
              rounded-lg
              hover:bg-gray-100 hover:text-indigo-400
              focus:outline-none
            "
          >
            Close
          </button>
          <button
            @click="demandelivraisons()"
            class="
              px-6
              py-3
              font-medium
              tracking-wide
              text-white
              bg-indigo-600
              rounded-md
              hover:bg-indigo-500
              focus:outline-none
            "
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6">
    <h2 class="text-xl font-semibold leading-tight text-gray-700">Demandes</h2>
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table class="divide-y divide-gray-300" style="width: 100%">
          <thead class="bg-gray-100">
            <tr>
              <th
                class="px-6 py-2 text-xs text-gray-500"
                style="padding: 15px 30px"
              >
                DESCRIPTION
              </th>
              <th class="px-6 py-2 text-xs text-gray-500">ADRESSE DEPART</th>
              <th class="px-6 py-2 text-xs text-gray-500">ADRESSE ARRIVE</th>
              <th class="px-6 py-2 text-xs text-gray-500">FILE</th>
              <th class="px-6 py-2 text-xs text-gray-500">ETAT</th>
              <th class="px-6 py-2 text-xs text-gray-500">SETTINGS</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-500">
            <tr
              class="whitespace-nowrap"
              v-for="(u, index) in demandes"
              :key="index"
            >
              <td
                class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                style="padding: 30px 49px"
              >
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      <input
                        class="bg-white"
                        type="text"
                        v-model="u.description"
                        :disabled="updateinputdisable"
                      />
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <input
                  class="bg-white"
                  type="text"
                  v-model="u.adressdepart"
                  :disabled="updateinputdisable"
                />
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <input
                  class="bg-white"
                  type="text"
                  v-model="u.adressarrive"
                  :disabled="updateinputdisable"
                />
              </td>
              <td
                class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                style="padding: 30px 49px"
              >
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
                  :href="u.file"
                  v-if="u.file"
                  >Download File</a
                >
                <a
                  class="
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                  "
                  v-else
                >
                  No File</a
                >
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {{ u.idEtatdemandeNavigation.etatDemande }}
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex justify-around">
                  <span class="text-yellow-500 flex justify-center">
                    <button
                      @click="updateinputdisable = false"
                      :hidden="!updateinputdisable"
                      class="mx-2 px-2 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-green-700"
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
                    <button
                      @click="updatedemande(u.idDemande, index)"
                      :hidden="updateinputdisable"
                      class="mx-2 px-2 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-green-700"
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
                    <button
                      @click="supprimer(u.idDemande)"
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
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        @click="open = true"
        class="
          px-6
          py-2
          mt-3
          font-medium
          tracking-wide
          text-white
          bg-indigo-600
          rounded-md
          hover:bg-indigo-500
          focus:outline-none
        "
      >
        Demande Livraison
        
      </button>
    </div>
  </div>
</template>
<script lang="js">
// import Breadcrumb from "../../partials/Breadcrumb.vue";
import { ref } from 'vue'
import axios from "axios";
import $ from 'jquery'; 
   export default {
      components: {
   // Breadcrumb,
  },
         data () {
      return {
      demandes:[],
      open : ref(false),
      description:'',
      depart:'',
      arrive:'',
      success:false,
      villes: [],
      updateinputdisable:true,
      update:true,
      descupdate:"",
      departupdate:"",
      arriveupdate:""
      }
    },
  
    created(){
  
         axios
      .get( "http://localhost:5000/api/demandelivraisons/client/"+localStorage.getItem("iduser"))
      .then((response) =>{
      this.demandes= response.data
      })

  axios.get('http://localhost:5000/api/villes').then((resp)=>this.villes=resp.data)
      
      
    },
    methods:{
  updatedemande(id,index){
axios.put('http://localhost:5000/api/demandelivraisons/'+id,{
    "idDemande": id,
    "description": this.demandes[index].description,
    "datecreation": this.demandes[index].datecreation,
    "adressdepart": this.demandes[index].adressdepart,
    "adressarrive": this.demandes[index].adressarrive,
    "idEtatdemande": this.demandes[index].idEtatdemande,
    "idclient": this.demandes[index].idclient,
}).then(()=>{
this.open = false;
        this.success = true;
})
  },
      demandelivraisons(){
        const date = new Date();
   axios.post('http://localhost:5000/api/demandelivraisons',{
          "description":this.description,
          "datecreation":date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate(),
          "adressdepart":this.depart,
          "adressarrive":this.arrive,
          "idEtatdemande":2002,
          "idclient":this.demandes[0].idclient
        }).then((r)=>{
    axios
      .get( "http://localhost:5000/api/demandelivraisons/client/"+localStorage.getItem("iduser"))
      .then((response) =>{
      this.demandes= response.data
      })

 this.open = false;
        this.success = true;
      
      })
      .catch((error) => console.log(error))
      },
      supprimer(id){
        axios.delete('http://localhost:5000/api/demandelivraisons/'+id)
        .then(()=>{
       axios
      .get( "http://localhost:5000/api/demandelivraisons/client/"+localStorage.getItem("iduser"))
      .then((response) =>{
      this.demandes= response.data
      })
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