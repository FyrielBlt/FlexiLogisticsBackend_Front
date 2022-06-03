<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Villes </template>
      <template v-slot:bread> Trajets </template>
    </bread-crumb>

    <div class="mt-8">
      <!-- <h4 class="text-gray-600">Les Clients</h4> -->

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Les Trajets
        </h2>

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
                v-model="ParpageTrajet"
              >
                <option value="1">1</option>
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
          </div>

          <div class="relative block mt-2 sm:mt-0">
            <input
              placeholder="Ville Deppart"
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
              v-model="VilleDeppart"
            />
          </div>
          <div class="relative block mt-2 sm:mt-0">
            <input
              placeholder="Ville Arrive"
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
              v-model="VilleArrive"
            />
          </div>
          <div class="relative block mt-2 sm:mt-0">
            <input
              placeholder="Ville Deppart"
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
              type="date"
              v-model="date"
            />
          </div>
        </div>

        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    ID
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    Transporteur
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    Ville Depart
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    Ville Arrive
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-gray-100
                      uppercase
                      bg-indigo-800
                    "
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(trajet, index) in ListeTrajetsAll"
                  :key="trajet.idTrajet"
                >
                  <th
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ index + 1 }}
                  </th>
                  <td
                    class="
                      px-6
                      py-4
                      border-b
                      text-center
                      border-gray-200
                      whitespace-nowrap
                      text-center
                    "
                  >
                    <div class="flex justify-around">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          :src="
                            trajet.idCamionNavigation.idtransporteurNavigation
                              .imageSrc
                          "
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="
                            text-sm
                            font-medium
                            leading-5
                            text-center text-gray-900
                          "
                        >
                          {{
                            trajet.idCamionNavigation.idtransporteurNavigation
                              .idUserNavigation.nom
                          }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{
                            trajet.idCamionNavigation.idtransporteurNavigation
                              .idUserNavigation.prenom
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      text-sm
                      font-medium
                      leading-5
                      text-center
                      border-b border-gray-200
                      whitespace-nowrap
                    "
                  >
                    {{ trajet.idVille1Navigation.nomVille }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      text-sm
                      font-medium
                      leading-5
                      text-center
                      border-b border-gray-200
                      whitespace-nowrap
                    "
                  >
                    {{ trajet.idVille2Navigation.nomVille }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      text-sm
                      font-medium
                      leading-5
                      text-center
                      border-b border-gray-200
                      whitespace-nowrap
                    "

                  >
                    {{ trajet.date.substr(0,10) }}
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
                  :current="currentTrajet"
                  :total="totalTrajet"
                  :per-page="perPageTrajet"
                  @page-changed="ChangePage"
                ></pagination-vue>
              </div>
            </div>
            <!-- PAGINATION -->
          </div>
        </div>
      </div>
    </div>
    <!-- Ajouter personnelle -->
<!-- {{today()}} -->
    <!-- {{ ListeTrajetsAll }} -->
  </div>

  <!-- </div> -->
</template>
<script>
import { mapGetters } from "vuex";
import BreadCrumb from "../../../components/Intermediaire/BreadCrumb.vue";
import CardAjouter from "../../../components/Intermediaire/CardAjouter.vue";
import PaginationVue from "../../../components/Intermediaire/pagination/PaginationVue.vue";
export default {
  components: {
    BreadCrumb,
    CardAjouter,
    PaginationVue,
  },
  data() {
    return {
      openModifier: false,
      open: false,
      
      ParpageTrajet: "10",
      VilleDeppart: "",
      VilleArrive: "",
      nomVille: "",
      idVille: "",
      date:'',
      // success: false,
      // timeout: false,
    };
  },
  computed: {
    ...mapGetters([
      "ListeTrajetsAll",
      "currentTrajet",
      "perPageTrajet",
      "parPageTrajet",
      "totalTrajet",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_Trajet");
  }, 
  methods: {
    ChangePage(NumPage) {
      this.$store.dispatch("Get_NoveauTrajet", NumPage);
    },
    today(){
      if((new Date().getMonth()+1)<10){
     return  new Date().getFullYear()+"-0"+(new Date().getMonth()+1)+"-"+new Date().getDate();
      }else{
        return new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate();
      }
    }
  },
  watch: {
    ParpageTrajet() {
      this.$store.dispatch("Changer_ParpageTrajet", this.ParpageTrajet);
    },
    VilleDeppart() {
      if (this.VilleDeppart != "") {
        if (this.VilleDeppart != "" || this.VilleArrive != "") {
          let chercher = {
            Arrive: this.VilleArrive,
            Depart: this.VilleDeppart,
          };
          this.$store.dispatch("Chercher_Trajett", chercher);
        } else {
          let chercher = {
            Arrive: this.VilleArrive,
            Depart: this.VilleDeppart,
          };
          this.$store.dispatch("Chercher_Depart", chercher);
        }
      } else {
        if (this.VilleArrive != "") {
          let chercher = {
            Arrive: this.VilleArrive,
            Depart: this.VilleDeppart,
          };
          //this.$store.dispatch("Chercher_Trajett", chercher);
          this.$store.dispatch("Chercher_Arrive", chercher);
        } else {
          this.$store.dispatch("Get_Trajet");
        }
      }
    },
    VilleArrive() {
      if (this.VilleArrive != "") {
         if (this.VilleDeppart != "" || this.VilleArrive != "") {
          let chercher = {
            Arrive: this.VilleArrive,
            Depart: this.VilleDeppart,
          };
          this.$store.dispatch("Chercher_Trajett", chercher);
        } else {
          let chercher = {
            Arrive: this.VilleArrive,
            Depart: this.VilleDeppart,
          };
          this.$store.dispatch("Chercher_Arrive", chercher);
        }
      } else {
        if (this.VilleDeppart != "") {
          let chercher = {
            Arrive: this.VilleArrive,
            Depart: this.VilleDeppart,
          };
        
          this.$store.dispatch("Chercher_Depart", chercher);
        } else {
          this.$store.dispatch("Get_Trajet");
        }
       
      }
    },
    date(){
      this.$store.dispatch("Chercher_date",this.date);
    }
  },
};
</script>