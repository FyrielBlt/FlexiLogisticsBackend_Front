<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Users </template>
      <template v-slot:bread> Sociéte </template>
    </bread-crumb>

    <div class="mt-8">
      <!-- <h4 class="text-gray-600">Les Clients</h4> -->

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Les Sociétes
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
                v-model="ParpageSociete"
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

            <div class="relative">
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
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search"
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
              v-model="rechercheSociete"
            />
          </div>

          <!-- button ajouter -->
          <button
            class="
              px-4
              py-2
              text-xm
              font-semibold
              text-gray-900
              bg-gray-300
              rounded-r rounded-l
              hover:bg-gray-400
            "
            @click="Ajouter"
          >
            <i class="bi bi-person-plus"></i> Ajouter
          </button>
          <!-- fin button ajouter -->
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
                    Logo
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
                    Nom sociéte
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
                    Adresse
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
                    description
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
                    Settings
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(societe, index) in ListeSocietes"
                  :key="societe.idSociete"
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
                          :src="societe.imageSrc"
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
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
                      <div class="ml-4">
                        <div
                          class="
                            text-sm
                            font-medium
                            leading-5
                            text-center text-gray-900
                          "
                        >
                          {{ societe.nom }}
                        </div>
                      </div>
                    </div>
                  </td>
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
                      <div class="ml-4">
                        <div
                          class="
                            text-sm
                            font-medium
                            leading-5
                            text-center text-gray-900
                          "
                        >
                          {{ societe.adress }}
                        </div>
                      </div>
                    </div>
                  </td>
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
                      <div class="ml-4">
                        <div
                          class="
                            text-sm
                            font-medium
                            leading-5
                            text-center text-gray-900
                          "
                        >
                          {{ societe.description }}
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
                    <div class="flex justify-around">
                      <span class="text-yellow-500 flex justify-center">
                        <a
                          class="mx-2 px-2 rounded-md"
                          @click="Modifier(societe, index)"
                          ><svg
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
                        </a>

                        <button
                          class="mx-2 px-2 rounded-md"
                          @click="Supprimer(societe)"
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
                  :current="currentSociete"
                  :total="totalSociete"
                  :per-page="perPageSociete"
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
    <card-ajouter v-bind:open="open" @CloseAjouter="Close">
      <template v-slot:ajouter>
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Ajouter Ville</p>
        </div>

        <div class="gap-6 mt-4 sm:grid-cols-2">
          <div class="text-center">
            <label
              class="text-gray-700"
              for="username"
              style="text-align: center"
              >Nom Societe :</label
            >
            <input
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
              style="text-align: center"
              id="username"
              type="text"
              v-model="nomSociete"
            />
          </div>
          <div class="text-center">
            <label
              class="text-gray-700"
              for="Adresse"
              style="text-align: center"
              >Adresse :</label
            >
            <input
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
              style="text-align: center"
              id="Adresse"
              type="text"
              v-model="adresseSociete"
            />
          </div>
            <div class="text-center">
            <label
              class="text-gray-700"
              for="Description"
              style="text-align: center"
              >Description :</label
            >
            <input
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
              style="text-align: center"
              id="Description"
              type="text"
              v-model="descriptionSociete"
            />
          </div>
           <div class="text-center">
            <label
              class="text-gray-700"
              for="Image"
              style="text-align: center"
              >Image :</label
            >
            <input
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
              style="text-align: center"
              id="Image"
              type="file"
                 @change="FileSelected($event)"
            />
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <button
            @click="Close()"
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
            @click="SaveSociete()"
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
        <!-- Ajouter ************************* -->
      </template>
    </card-ajouter>
    <card-ajouter v-bind:open="openModifier" @CloseAjouter="Close">
      <template v-slot:ajouter>
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Modifier Ville</p>
        </div>

        <div class="gap-6 mt-4 sm:grid-cols-2">
          <div class="text-center">
            <label
              class="text-gray-700"
              for="username"
              style="text-align: center"
              >Nom Societe :</label
            >
            <input
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
              style="text-align: center"
              id="username"
              type="text"
              v-model="nomSociete"
            />
          </div>
          <div class="text-center">
            <label
              class="text-gray-700"
              for="Adresse"
              style="text-align: center"
              >Adresse :</label
            >
            <input
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
              style="text-align: center"
              id="Adresse"
              type="text"
              v-model="adresseSociete"
            />
          </div>
            <div class="text-center">
            <label
              class="text-gray-700"
              for="Description"
              style="text-align: center"
              >Description :</label
            >
            <input
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
              style="text-align: center"
              id="Description"
              type="text"
              v-model="descriptionSociete"
            />
          </div>
           <div class="text-center">
            <label
              class="text-gray-700"
              for="Image"
              style="text-align: center"
              >Image :</label
            >
            <input
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
              style="text-align: center"
              id="Image"
              type="file"
                 @change="FileSelected($event)"
            />
          </div>
        </div>

          <div class="flex justify-end mt-4">
            <button
              @click="Close()"
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
              @click="SaveModifier()"
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
              Modifier
            </button>
          </div>
      
        <!-- Modifier ************************* -->
      </template>
    </card-ajouter>

    {{ ListeSocietes }}


  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BreadCrumb from "../../../../components/Intermediaire/BreadCrumb.vue";
import CardAjouter from "../../../../components/Intermediaire/CardAjouter.vue";
import PaginationVue from "../../../../components/Intermediaire/pagination/PaginationVue.vue";
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
      ParpageSociete: "1",
      rechercheSociete: "",
       nomSociete: "",
       idSociete: "",
       imageFile: null,
       adresseSociete:"",
       descriptionSociete:""
      // success: false,
      // timeout: false,
    };
  },
  computed: {
    ...mapGetters([
      "ListeSocietes",
      "currentSociete",
      "perPageSociete",
      "parPageSociete",
      "totalSociete",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_Societe");
  },
  methods: {
    Ajouter() {
      this.open = true;
      console.log(this.open);
    },
    Close(E) {
      this.open = E;
      if (this.openModifier) {
        this.openModifier = E;
        this.nomSociete = "";
        this.adresseSociete = "";
        this.descriptionSociete = "";
        this.imageFile =null;
     
      }
    },
    Supprimer(ss) {
      this.$swal({
        title: "Supprimer ?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, Supprimer",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("Delete_Societe", ss);
          this.$swal("Supprimer!", "", "success");
        }
      });
    },

    ChangePage(NumPage) {
      this.$store.dispatch("Get_NoveauSociete", NumPage);
    },
    //
    SaveSociete() {
      if (this.nomSociete != "" &&
       this.adresseSociete && 
       this.descriptionSociete &&
       this.imageFile!=null) {
        let societe = new FormData();
        societe.append("nom", this.nomSociete);
        societe.append("adress", this.adresseSociete);
        societe.append("description", this.descriptionSociete);
        societe.append("image", "");
        societe.append("ImageFile", this.imageFile);
        societe.append("ImageSrc", "");
        this.$store.dispatch("Ajouter_Societe", societe);
        this.open = false;
        this.nomSociete = "";
        this.adresseSociete = "";
        this.descriptionSociete = "";
        this.imageFile=null;
        this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Ville Ajouter",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Il faut remplir tous les champs",
          showConfirmButton: false,
          timer: 2000,
        });
        //this.startAlert();
        this.open = false;
      }
    },
    Modifier(societe, index) {
      this.openModifier = true;
      //this.nomVille = ville.nomVille;
      this.idSociete = societe.idSociete;
      this.index = index;
      this.nomSociete = societe.nom;
      this.adresseSociete = societe.adress;
      this.descriptionSociete = societe.description;
      this.imageFile =null;
    },
    SaveModifier() {
        if (this.nomSociete != "" &&
       this.adresseSociete && 
       this.descriptionSociete) {
        let societe = new FormData();
         societe.append("idSociete", this.idSociete);
        societe.append("nom", this.nomSociete);
        societe.append("adress", this.adresseSociete);
        societe.append("description", this.descriptionSociete);
        societe.append("image",this.index );
        societe.append("ImageFile", this.imageFile);
        societe.append("ImageSrc", "");

        this.$store.dispatch("Modifier_Societe", societe);
        this.Close(false);
        this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Ville Modifier",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        //this.startAlert();
        this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Il faut remplir tous les champs",
          showConfirmButton: false,
          timer: 2000,
        });
        this.Close(false);
      }
    },
     // ajouter image
    FileSelected(event) {
      this.imageFile = event.target.files[0];
      console.log(this.imageFile);
    },
  },
  watch: {
    ParpageSociete() {
      this.$store.dispatch("Changer_ParpageSociete", this.ParpageSociete);
    },
    rechercheSociete() {
      this.$store.dispatch("Chercher_Societe", this.rechercheSociete);
    },
  },
};
</script>