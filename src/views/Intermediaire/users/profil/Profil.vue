<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb breadcrumb="Profil" /> -->
    <bread-crumb>
      <template v-slot:bread1> Profil </template>
      <template v-slot:bread> {{ role }} </template>
    </bread-crumb>
    <!-- alert -->
    <!-- <div
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
    >
      <div class="flex items-center justify-center w-12 bg-red-500">
        <svg
          class="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
          />
        </svg>
      </div>

      <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
          <span class="font-semibold text-red-500">Erreur</span>
          <p class="text-sm text-gray-600">Il faut remplir tous les champs</p>
        </div>
      </div>
    </div> -->
    <!-- fin alert -->
    <div class="grid grid-flow-col gap-3">
      <div class="row-span-3">
        <!-- <h4 class="text-gray-700">Profil</h4> -->
        <div class="max-w-sm overflow-hidden bg-white rounded shadow-lg">
          <img class="w-full" :src="image" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl text-center font-bold text-gray-900">
              {{ user.nom }}
              {{ user.prenom }}
            </div>
          </div>
          <div class="text-center">
            <span
              class="
                inline-block
                px-3
                py-1
                mb-2
                mr-2
                text-xm
                font-semibold
                text-gray-700
                bg-gray-200
                rounded-full
              "
            >
              {{ user.email }}
            </span>
          </div>
        </div>
      </div>

      <div class="col-span-2 col-span-2">
        <!-- <h4 class="text-gray-600">Modifier :</h4> -->
        <div>
          <div class="p-6 bg-white rounded-md shadow-md">
            <h2 class="text-lg font-semibold text-gray-700 capitalize">
              Account settings
            </h2>
            <br />

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="nom">Nom</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg
                    v-if="nom != ''"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    />
                  </svg>
                </span>

                <input
                  id="nom"
                  placeholder="Nom"
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
                    focus:placeholder-gray-600
                    focus:text-gray-700
                    focus:outline-none
                  "
                  :class="[
                    nom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="nom"
                />
              </div>
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="prenom">Prenom</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg
                    v-if="prenom != ''"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    />
                  </svg>
                </span>

                <input
                  id="prenom"
                  placeholder="Prenom"
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
                    focus:placeholder-gray-600
                    focus:text-gray-700
                    focus:outline-none
                  "
                  :class="[
                    prenom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="prenom"
                />
              </div>
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="email">Email</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg
                    v-if="email != ''"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    />
                  </svg>
                </span>

                <input
                  id="email"
                  placeholder="Email"
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
                    focus:placeholder-gray-600
                    focus:text-gray-700
                    focus:outline-none
                  "
                  :class="[
                    email === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="email"
                />
              </div>
              <div>
                <label class="text-gray-700" for="image">Image</label>
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
                  id="image"
                  type="file"
                  @change="FileSelected($event)"
                />
              </div>

              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="motdepasse"
                  >Mot de passe</label
                >

                <span class="absolute flex items-center pl-1 py-3">
                  <svg
                    v-if="password != ''"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  id="motdepasse"
                  placeholder="password"
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
                    focus:placeholder-gray-600
                    focus:text-gray-700
                    focus:outline-none
                  "
                  :class="[
                    password === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="password"
                />
              </div>
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="cmotdepasse"
                  >Confirmer mot de passe</label
                >

                <span class="absolute flex items-center pl-1 py-3">
                  <svg
                    v-if="cpassword != '' && cpassword == password"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  placeholder="Confirmer password"
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
                    focus:placeholder-gray-600
                    focus:text-gray-700
                    focus:outline-none
                  "
                  :class="[cpassword === '' ? class1 : class2]"
                  v-model="cpassword"
                />
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button
                class="
                  px-4
                  py-2
                  text-gray-200
                  bg-gray-800
                  rounded-md
                  hover:bg-gray-700
                  focus:outline-none focus:bg-gray-700
                "
                @click="Modifier()"
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<!-- BlogPost.vue -->
<script>
import BreadCrumb from "../../../../components/Intermediaire/BreadCrumb.vue";
import axios from "axios";
import Url from "../../../../store/Api";
export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      Profil: [],
      role: "",
      nom: "",
      prenom: "",
      email: "",
      password: "",
      cpassword: "",
      user: "",
      class1: "",
      class2: "",
      idUser: "",
      image: "",
      imageFile: null,
      // success: false,
      // timeout: false,
    };
  },

  async created() {
    await axios
      .get(Url + "intermediaires/" + localStorage.getItem("id"), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.Profil = res.data;
        this.image = res.data.imageSrc;
        this.user = res.data.idUserNavigation;
        this.role = res.data.idRoleNavigation.role1;
        this.nom = res.data.idUserNavigation.nom;
        this.prenom = res.data.idUserNavigation.prenom;
        this.email = res.data.idUserNavigation.email;
        this.idUser = res.data.idUserNavigation.idUser;
      });
  },
  methods: {
    // startAlert() {
    //   this.success = true;
    //   this.timeout = setTimeout(() => {
    //     clearTimeout(this.timeout);
    //     this.success = false;
    //   }, 1500);
    // },

    Modifier() {
      if (
        this.idUser != "" &&
        this.nom != "" &&
        this.prenom != "" &&
        this.email != "" &&
        this.password != ""&&
         this.password == this.cpassword
      ) {
        let user = new FormData();
        user.append("idUser", this.idUser);
        user.append("Nom", this.nom);
        user.append("Prenom", this.prenom);
        user.append("Email", this.email);
        user.append("motdepasse", this.password);
        user.append("image", "");
        user.append("ImageFile", this.imageFile);
        user.append("ImageSrc", "");
        axios
          .put(Url + "users/" + this.idUser, user, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res.data);
            this.user = res.data;
            this.nom = res.data.nom;
            this.prenom = res.data.prenom;
            this.email = res.data.email;
            this.image = res.data.imageSrc;
            this.imageFile = null;
            this.password = "";
            this.cpassword = "";
          });
        // this.startAlert();
        this.$swal({
          position: "top-end",
          icon: "success",
         
          toast: true,
          title: "Profil Modifier",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
       // this.startAlert();
       this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Il faut remplir tous les champs",
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
  },
  watch: {
    cpassword() {
      if (this.password != "" && this.cpassword == "") {
        this.cla = "form-control";
      } else if (this.password != "" && this.cpassword != "") {
        if (this.password == this.cpassword) {
          this.class1 = "focus:bg-green-200  focus:border-green-800 ";
          this.class2 = "focus:bg-green-200  focus:border-green-800 ";
        } else {
          this.class1 = "form-control";
          this.class2 = "focus:bg-red-100  focus:border-red-800 ";
        }
      }
    },
  },
};
</script>
