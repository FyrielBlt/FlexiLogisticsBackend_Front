<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Users </template>
      <template v-slot:bread> Personnels </template>
    </bread-crumb>

    <div class="mt-8">
      <!-- <h4 class="text-gray-600">Les Clients</h4> -->

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Les Personnels
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
                v-model="ParpagePersonnelle"
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
                  border-t border-b border-r border-gray-400
                  rounded-r
                  appearance-none
                  sm:rounded-r-none sm:border-r-0
                  focus:outline-none
                  focus:border-l
                  focus:border-r
                  focus:bg-white
                  focus:border-gray-500
                "
                v-model="filterRole"
              >
                <option value="0">All</option>
                <option
                  v-for="role in ListeRoles"
                  :key="role.idRole"
                  :value="role.idRole"
                >
                  {{ role.role1 }}
                </option>
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
                    User
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
                    Email
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
                    Télèphone
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
                    Status
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
                  v-for="(personnelle, index) in ListePersonnelles"
                  :key="personnelle.idIntermediaire"
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
     
                    "
                  >
                    <div class="flex justify-around">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          :src="personnelle.imageSrc"
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
                          {{ personnelle.idUserNavigation.prenom }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ personnelle.idUserNavigation.nom }}
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
                    "
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ personnelle.idUserNavigation.email }}
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
                    "
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ personnelle.idUserNavigation.tel }}
                    </div>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      text-sm
                      leading-5
                      text-center text-gray-500
                      border-b border-gray-200
                      whitespace-nowrap
                    "
                  >
                    {{ personnelle.idRoleNavigation.role1 }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      border-b
                      text-center
                      border-gray-200
                      whitespace-nowrap
                    "
                  >
                  <button
                      class="
                        inline-flex
                        px-2
                        text-xx
                        font-semibold
                        leading-5
                        text-orange-700
                        bg-orange-100
                        rounded-full
                      "
                      v-if="personnelle.idRoleNavigation.role1=='SuperAdmin'"
                      
                    >
                      Activé
                    </button>
                    <button
                      class="
                        inline-flex
                        px-2
                        text-xx
                        font-semibold
                        leading-5
                        text-green-700
                        bg-green-100
                        rounded-full
                      "
                      v-else-if="personnelle.idUserNavigation.active == 1 "
                      @click="Desactive(personnelle.idUserNavigation)"
                    >
                      Active
                    </button>
                    <button
                      class="
                        inline-flex
                        px-2
                        text-xx
                        font-semibold
                        leading-5
                        text-red-700
                        bg-red-100
                        rounded-full
                      "
                      v-else
                      @click="Active(personnelle.idUserNavigation)"
                    >
                      Désactivé
                    </button>
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
                          @click="Modifier(personnelle, index)"
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
                          @click="Supprimer(personnelle)"
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
                  :current="currentPersonnelle"
                  :total="totalPersonnelle"
                  :per-page="perPagePersonnelle"
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
          <p class="text-2xl font-bold">Ajouter Personnel</p>
        </div>

        <!--Body-->
        <!-- <div>
            <div class=""> -->
        <div class="p-6 bg-white rounded-md shadow-md">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div class="text-center">
              <label
                class="text-gray-700"
                for="username"
                style="text-align: center"
                >Nom :</label
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
                v-model="nom"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="name">Prenom :</label>
              <input
                id="name"
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
                type="text"
                v-model="prenom"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="MotDePasse"
                >Mot de passe :</label
              >
              <input
                id="MotDePasse"
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
                type="text"
                v-model="password"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="cpassword "
                >Confirme mot de passe:</label
              >
              <input
                id="cpassword "
                class="
                  w-full
                  mt-2
                  border-gray-200
                  rounded-md
                  focus:border-indigo-600 focus:ring focus:ring-opacity-40
                "
                style="text-align: center"
                type="text"
                v-model="cpassword"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="Email">Email :</label>
              <input
                id="Email"
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
                type="text"
                v-model="email"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="Email">Télèphone :</label>
              <input
                id="Email"
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
                type="number"
                v-model="tel"
              />
            </div>
          </div>
          <div class="text-center">
            <label class="text-gray-700" for="passwordConfirmation">Role</label>
            <select
              v-model="idRole"
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
                v-for="role in ListeRoles"
                :key="role.idRole"
                :value="role.idRole"
              >
                {{ role.role1 }}
              </option>
            </select>
          </div>

          <br />
          <div class="text-center">
            <label class="text-gray-700" for="Image">Image :</label>
            <input
              id="Image"
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
              type="file"
              @change="FileSelected($event)"
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
              @click="SavePersonnel()"
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
        </div>

        <!-- Ajouter ************************* -->
      </template>
    </card-ajouter>
    <!-- Ajouter ************************* -->

    <card-ajouter v-bind:open="openModifier" @CloseAjouter="Close">
      <template v-slot:ajouter>
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Modifier Personnel</p>
        </div>

        <!--Body-->
        <!-- <div>
            <div class=""> -->
        <div class="p-6 bg-white rounded-md shadow-md">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div class="text-center">
              <label
                class="text-gray-700"
                for="username"
                style="text-align: center"
                >Nom :</label
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
                v-model="nom"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="name">Prenom :</label>
              <input
                id="name"
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
                type="text"
                v-model="prenom"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="MotDePasse"
                >Mot de passe :</label
              >
              <input
                id="MotDePasse"
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
                type="text"
                v-model="password"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="MotDePasse"
                >Confirme Mot de passe :</label
              >
              <input
                id="MotDePasse"
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
                type="text"
                v-model="cpassword"
              />
            </div>

            <div class="text-center">
              <label class="text-gray-700" for="Email">Email :</label>
              <input
                id="Email"
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
                type="text"
                v-model="email"
              />
            </div>
            <div class="text-center">
              <label class="text-gray-700" for="Email">Télèphone :</label>
              <input
                id="Email"
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
                type="number"
                v-model="tel"
              />
            </div>
          </div>

          <div class="text-center">
            <label class="text-gray-700" for="passwordConfirmation">Role</label>
            <select
              v-model="idRole"
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
                v-for="role in ListeRoles"
                :key="role.idRole"
                :value="role.idRole"
              >
                {{ role.role1 }}
              </option>
            </select>

            <div class="text-center">
              <label class="text-gray-700" for="Image">Image :</label>
              <input
                id="Image"
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
        </div>

        <!-- Modifier ************************* -->
      </template>
    </card-ajouter>

    <!-- {{ ListePersonnelles }} -->
  </div>
  <!-- </div> -->
</template>
<script>
// import swal from "sweetalert2";
// window.Swal = swal;
import axios from "axios";
import Url from "../../../../store/Api";
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
      ParpagePersonnelle: "10",
      filterRole: 0,
      //data a ajouter
      nom: "",
      prenom: "",
      password: "",
      email: "",
      idRole: "",
      cpassword: "",
      imageFile: null,
      idIntermediaire: "",
      idUser: "",
      index: "",
      tel: "",
      // timeout: false,
    };
  },
  computed: {
    ...mapGetters([
      "ListePersonnelles",
      "ListeRoles",
      "currentPersonnelle",
      "perPagePersonnelle",
      "parPagePersonnelle",
      "totalPersonnelle",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_Personnelle");
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
      console.log(this.open);
    },
    Close(E) {
      this.open = E;
      if (this.openModifier) {
        this.openModifier = E;
        this.nom = "";
        this.prenom = "";
        this.email = "";
        this.password = "";
        this.cpassword = "";
        this.idRole = "";
        this.tel = "";
        this.imageFile = null;
      }
    },
    Supprimer(personnelle) {
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
          this.$store.dispatch("Delete_Personnelle", personnelle);
          this.$swal({
            position: "top-end",
            icon: "success",
            toast: true,
            title: "Supprimer",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    },

    GetRole(id) {
      return this.ListeRoles.filter((el) => el.idRole == id)[0];
    },
    ChangePage(NumPage) {
      this.$store.dispatch("Get_NoveauPersonnelle", NumPage);
    },
    //
    SavePersonnel() {
      if (this.password == this.cpassword) {
        if (
          this.nom != "" &&
          this.prenom != "" &&
          this.email != "" &&
          this.password != ""
        ) {
          let personnelle = new FormData();
          personnelle.append("Nom", this.nom);
          personnelle.append("Prenom", this.prenom);
          personnelle.append("Email", this.email);
          personnelle.append("MotDePasse", this.password);
          personnelle.append("Tel", this.tel);
          personnelle.append("image", "intermediaire.png");
          personnelle.append("ImageFile", this.imageFile);
          personnelle.append("ImageSrc", "");

          axios
            .post(Url + "users", personnelle, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((res) => {
              let per = {
                Idrole: this.idRole,
                personnelle: res.data,
                IdRoleNavigation: this.GetRole(this.idRole),
              };
              this.$store.dispatch("Ajouter_Personnelle", per);
              this.Close(false);
              this.$swal({
                position: "top-end",
                icon: "success",
                toast: true,
                title: "Personnel Ajouter",
                showConfirmButton: false,
                timer: 2000,
              });
              this.nom = "";
              this.prenom = "";
              this.email = "";
              this.password = "";
              this.cpassword = "";
              this.tel = "";
              this.imageFile = null;
            })
            .catch(() => {
              this.$swal({
                position: "top-end",
                icon: "error",
                toast: true,
                title: "Email utilisé",
                showConfirmButton: false,
                timer: 2000,
              });
            });

          // this.$store.dispatch("Ajouter_Personnelle", per);
          // this.open = false;
          // this.$swal({
          //   position: "top-end",
          //   icon: "success",

          //   toast: true,
          //   title: "Personnel Ajouter",
          //   showConfirmButton: false,
          //   timer: 2000,
          // });
        } else {
          this.$swal({
            position: "top-end",
            icon: "error",
            toast: true,
            title: "Il faut remplir tous les champs",
            showConfirmButton: false,
            timer: 2000,
          });
          // this.startAlert();
          this.open = false;
        }
      } else {
        this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Les mots de passe diferent",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    Modifier(personnelle, index) {
      this.openModifier = true;
      this.nom = personnelle.idUserNavigation.nom;
      this.prenom = personnelle.idUserNavigation.prenom;
      this.email = personnelle.idUserNavigation.email;
      //  this.password = personnelle.idUserNavigation.motdepasse;
      this.idRole = personnelle.idRole;
      this.tel = personnelle.idUserNavigation.tel;
      this.idIntermediaire = personnelle.idIntermediaire;
      this.idUser = personnelle.idUser;
      this.index = index; // console.log(personnelle.idUserNavigation);
    },
    SaveModifier() {
      if (this.password == this.cpassword) {
        if (
          this.idUser != "" &&
          this.nom != "" &&
          this.prenom != "" &&
          this.email != "" &&
          this.password != ""
        ) {
          let user = new FormData();
          user.append("idUser", this.idUser);
          user.append("Nom", this.nom);
          user.append("Prenom", this.prenom);
          user.append("Email", this.email);
          user.append("MotDePasse", this.password);
          user.append("image", "");
          user.append("Tel", this.tel);
          user.append("ImageFile", this.imageFile);
          user.append("ImageSrc", "");

          axios
            .put(Url + "users/" + this.idUser, user, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((res) => {
              let personnelle = {
                idUser: this.idUser,
                idRole: this.idRole,
                imageSrc: res.data.imageSrc,
                idRoleNavigation: this.GetRole(this.idRole),
                idUserNavigation: res.data,
                index: this.index,
              };
              this.$store.dispatch("Modifier_Personnelle", personnelle);
              this.Close(false);
              this.$swal({
                position: "top-end",
                icon: "success",
                toast: true,
                title: "Personnel Modifié",
                showConfirmButton: false,
                timer: 2000,
              });
              this.nom = "";
              this.prenom = "";
              this.email = "";
              this.password = "";
              this.cpassword = "";
              this.tel = "";
              this.imageFile = null;
            })
            .catch(() => {
              this.$swal({
                position: "top-end",
                icon: "error",
                toast: true,
                title: "Email utilisé",
                showConfirmButton: false,
                timer: 2000,
              });
            });
          // this.$store.dispatch("Modifier_Personnelle", personnelle);
          // this.Close(false);
          //  this.$swal({
          //   position: "top-end",
          //   icon: "success",

          //   toast: true,
          //   title: "Personnel Modifier",
          //   showConfirmButton: false,
          //   timer: 2000,
          // });
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
      } else {
        this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Les mots de passe diferent",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    // ajouter image
    FileSelected(event) {
      this.imageFile = event.target.files[0];
      console.log(this.imageFile);
    },

    Active(user) {
      user.active = 1;
      console.log(user);

      this.$store.dispatch("Active_Compte", user);
      this.$swal({
        position: "top-end",
        icon: "success",
        toast: true,
        title: "Compte Activée",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    Desactive(user) {
      user.active = null;
      console.log(user);

      this.$store.dispatch("Active_Compte", user);

      this.$swal({
        position: "top-end",
        icon: "info",
        toast: true,
        title: "Compte Desactivée",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
  watch: {
    ParpagePersonnelle() {
      this.$store.dispatch(
        "Changer_ParpagePersonnelle",
        this.ParpagePersonnelle
      );
    },
    filterRole() {
      this.$store.dispatch("Filter_Role", this.filterRole);
    },
    cpassword() {
      if (this.password != "" && this.cpassword == "") {
        this.cla = "form-control";
      } else if (this.password != "" && this.cpassword != "") {
        if (this.password == this.cpassword) {
          this.class1 = "form-control is-valid";
          this.class2 = "form-control is-valid";
        } else {
          this.class1 = "form-control";
          this.class2 = "form-control is-invalid";
        }
      }
    },
  },
};
</script>