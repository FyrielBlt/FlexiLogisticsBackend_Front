<template>
  <div>
    <bread-crumb>
      <template v-slot:bread1> Users </template>
      <template v-slot:bread> Role </template>
    </bread-crumb>
   
    <!-- fin alert -->
    <div class="mt-4">
      <h2 class="text-xl font-semibold leading-tight text-gray-700">
        Les Roles
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
              v-model="ParpageRole"
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
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
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
            v-model="rechercheRole"
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
      </div>

      <div class="mt-6">
        <div class="my-6 overflow-hidden bg-white rounded-md shadow">
          <table class="w-full text-center border-collapse">
            <thead class="border-b">
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
                  Role
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
                  Nombre
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
            <tbody>
              <tr v-for="(role, index) in ListeRoles" :key="role.idRole">
                <td class="px-6 py-4 text-lg text-gray-700 border-b">
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-4 text-gray-500 border-b">
                  {{ role.role1 }}
                </td>
                <td class="px-6 py-4 text-gray-500 border-b">
                  {{ role.intermediaire.length }}
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
                        @click="Modifier(role, index)"
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
                        @click="Supprimer(role)"
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
                :current="currentRole"
                :total="totalRole"
                :per-page="perPageRole"
                @page-changed="ChangePage"
              ></pagination-vue>
            </div>
          </div>
        </div>
        <!-- {{ListeRoles}} -->
      </div>
    </div>
    <!-- Ajouter personnelle -->
    <card-ajouter v-bind:open="open" @CloseAjouter="Close">
      <template v-slot:ajouter>
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Ajouter Role</p>
        </div>

        <div class="gap-6 mt-4 sm:grid-cols-2">
          <div class="text-center">
            <label
              class="text-gray-700"
              for="username"
              style="text-align: center"
              >Role :</label
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
              v-model="role"
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
            @click="SaveRole()"
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
    <!-- Ajouter ************************* -->

    <card-ajouter v-bind:open="openModifier" @CloseAjouter="Close">
      <template v-slot:ajouter>
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Modifier Role</p>
        </div>

        <!--Body-->
        <!-- <div>
            <div class=""> -->

        <div class="gap-6 mt-4 sm:grid-cols-2">
          <div class="text-center">
            <label
              class="text-gray-700"
              for="username"
              style="text-align: center"
              >Role :</label
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
              v-model="role"
            />
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
        </div>
        <!-- Modifier ************************* -->
      </template>
    </card-ajouter>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BreadCrumb from "../../../../components/Intermediaire/BreadCrumb.vue";
import PaginationVue from "../../../../components/Intermediaire/pagination/PaginationVue.vue";
import CardAjouter from "../../../../components/Intermediaire/CardAjouter.vue";

export default {
  components: {
    BreadCrumb,
    PaginationVue,
    CardAjouter,
  },
  data() {
    return {
      openModifier: false,
      open: false,
      ParpageRole: "10",
      rechercheRole: "",
      role: "",
      idRole: "",
      Role1: "",
      // success: false,
      // timeout: false,
    };
  },
  computed: {
    ...mapGetters([
      "ListeRoles",
      "currentRole",
      "perPageRole",
      "parPageRole",
      "totalRole",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_Role");
  },
  methods: {
    // startAlert() {
    //   this.success = true;
    //   this.timeout = setTimeout(() => {
    //     clearTimeout(this.timeout);
    //     this.success = false;
    //   }, 2000);
    // },
    Ajouter() {
      this.open = true;
      // console.log(this.open);
    },
    Close(E) {
      this.open = E;
      if (this.openModifier) {
        this.openModifier = E;
        this.role = "";
      }
    },
    Supprimer(role) {
      
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
          this.$store.dispatch("Delete_Role", role);
          this.$swal("Supprimer!", "", "success");
        }
      });
    },

    ChangePage(NumPage) {
      this.$store.dispatch("Get_NoveauRole", NumPage);
    },
    //
    SaveRole() {
      if (this.role != "") {
        let role = {
          role1: this.role,
        };
        this.$store.dispatch("Ajouter_Role", role);
        this.open = false;
        this.role = "";
        this.$swal({
          position: "top-end",
          icon: "success",
          toast:true,
          title: "Role Ajouter",
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
        this.open = false;
      }
    },
    Modifier(role, index) {
      this.openModifier = true;
      this.Role1 = role;
      this.role = role.role1;
      this.idRole = role.idRole;
      this.index = index;
    },
    SaveModifier() {
      if (this.role != "") {
        this.Role1.role1 = this.role;
        let role = {
          Role: this.Role1,
          index: this.index,
        };
        this.$store.dispatch("Modifier_Role", role);
        this.Close(false);
        this.$swal({
          position: "top-end",
          icon: "success",
          toast:true,
          title: "Role Modifier",
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
        this.Close(false);
      }
    },
  },
  watch: {
    ParpageRole() {
      this.$store.dispatch("Changer_ParpageRole", this.ParpageRole);
    },
    rechercheRole() {
      this.$store.dispatch("Chercher_Role", this.rechercheRole);
    },
  },
};
</script>