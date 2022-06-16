<template>
  <div>
    <bread-crumb>
      <template v-slot:bread1> Profile </template>
    </bread-crumb>
    <!-- <Breadcrumb breadcrumb="Profil" /> -->
    <div class="grid grid-flow-col gap-3">
      <div class="row-span-3">
        <!-- <h4 class="text-gray-700">Profil</h4> -->
        <div class="max-w-sm overflow-hidden bg-white rounded-full shadow-2xl shadow-slate-600" style="    width: 360px;
    height: 360px;">

          <input
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            id="image" name="image" type="file" accept="image/*" @change="FileSelected($event)" style="display: none" />

          <label for="image"  class="relative group">
            <div
              class="h-full opacity-0 group-hover:opacity-70 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-black text-white font-semibold"
              style="    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
">
              Cliquez ici pour changer l'image
            </div>
            <img class="rounded-full" :src="this.image" alt="Image Profil" />

          </label>

        </div>
      </div>

      <div class="col-span-2 mobile">
        <!-- <h4 class="text-gray-600">Modifier :</h4> -->
        <div>
          <div class="p-6 bg-white rounded-md shadow-md">
            <h2 class="text-lg font-semibold text-gray-700 capitalize">
              Profile
            </h2>
            <br />
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="nom">Nom</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg v-if="nom != ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  </svg>
                </span>

                <input id="nom" placeholder="Nom"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    nom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" v-model="nom" />
              </div>
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="prenom">Prenom</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg v-if="prenom != ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  </svg>
                </span>

                <input id="prenom" placeholder="Prenom"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    prenom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" v-model="prenom" />
              </div>
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="email">Email</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg v-if="email != ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  </svg>
                </span>

                <input id="email" placeholder="Email"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    email === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" v-model="email" />
              </div>
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="tel">Tel</label>
                <span class="absolute flex items-center pl-1 py-3">
                  <svg v-if="tel != ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-check-lg bg-green-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  </svg>
                </span>
                <input id="tel" placeholder="Téléphone"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    tel === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" v-model="tel" />
              </div>

              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray -700" for="motdepasse">Mot de passe</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg v-if="password != ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-check-lg bg-green-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  </svg>
                </span>

                <input type="password" id="motdepasse" placeholder="password"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    password === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]" v-model="password" />
              </div>
              <div class="relative block mt-2 sm:mt-0">
                <label class="text-gray-700" for="cmotdepasse">Confirmer mot de passe</label>

                <span class="absolute flex items-center pl-1 py-3">
                  <svg v-if="cpassword != '' && cpassword == password" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" class="bi bi-check-lg bg-green-500 rounded-r rounded-l"
                    viewBox="0 0 16 16">
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-exclamation-lg bg-red-500 rounded-r rounded-l" viewBox="0 0 16 16">
                    <path
                      d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  </svg>
                </span>

                <input type="password" placeholder="Confirmer password"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[cpassword === '' ? class1 : class2]" v-model="cpassword" />
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button
                class="px-2 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
                @click="Modifier()">
                Modifier
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
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import url from "../../../store/Api";

import BreadCrumb from "/src/components/Transporteur/ProfilBridal.vue";
export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      Profil: [],
      nom: "",
      reslt: false,
      prenom: "",
      email: "",
      tel: "",
      motdepasse: "",
      password: "",
      cpassword: "",
      user: "",
      class1: "",
      class2: "",
      idUser: "",
      image: "",
      imageFile: "",
      spinner: true
    };
  },
  async created() {
    await axios
      .get(url + "users/" + localStorage.getItem("iduser"))
      .then((res) => {
        this.Profil = res.data;
        this.image = res.data.imageSrc;
        this.user = res.data;
        this.nom = res.data.nom;
        this.prenom = res.data.prenom;
        this.email = res.data.email;
        this.idUser = res.data.idUser;
        (this.motdepasse = res.data.motdepasse), (this.tel = res.data.tel);
      });
  },
  methods: {
    // ajouter image
    FileSelected(event) {
      this.imageFile = event.target.files[0];

      this.image = URL.createObjectURL(this.imageFile)


    },
    Modifier() {
      Swal.fire({
        title: "Entrer Ancien mot de passe pour continuer",
        input: "password",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Modifier",
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          this.spinner = false
          if (login == this.motdepasse) {
            if (this.password != "") {
              if (
                this.password == this.cpassword ||
                this.password == this.motdepasse
              ) {
                let user = new FormData();
                user.append("idUser", this.idUser);
                user.append("Nom", this.nom);
                user.append("Prenom", this.prenom);
                user.append("Email", this.email);
                user.append("societe", localStorage.getItem("societe"));
                user.append("motdepasse", this.password);
                user.append("image", this.Profil.image);
                user.append("ImageFile", this.imageFile);
                user.append("tel", this.tel);
                user.append("ImageSrc", "");
                axios
                  .put(
                    url + "Users/" + this.idUser,
                    user
                  )
                  .then((res) => {
                    this.user = res.data;
                    this.nom = res.data.nom;
                    localStorage.setItem('name', this.nom)
                    this.prenom = res.data.prenom;
                    localStorage.setItem('prenom', this.prenom)
                    this.email = res.data.email;
                    localStorage.setItem('email', this.email)
                    this.image = res.data.imageSrc;
                    localStorage.setItem('imagesrc', this.image)
                    this.imageFile = "";
                    this.password = "";
                    this.cpassword = "";
                    this.tel = res.data.tel;

                    this.$swal({
                      position: "top-end",
                      icon: "success",
                      toast: true,
                      title: "Profil Modifié",
                      showConfirmButton: false,
                      timer: 2000,
                    });
                  
                    setTimeout(() => {
                      location.reload();
                    }, 2000);

                  }).catch(() => {
                    this.$swal({
                      position: "top-end",
                      icon: "error",
                      toast: true,
                      title: "Un compte utilisateur déja créer avec cette adresse email",
                      showConfirmButton: false,
                      timer: 3000,
                    });
                  })

              }
              if (
                this.password != this.cpassword &&
                this.password != this.motdepasse
              ) {
                this.$swal({
                  position: "top-end",
                  icon: "error",
                  toast: true,
                  title: "Confirmez mot de passe!",
                  showConfirmButton: false,
                  timer: 2000,
                });
              }

            }
            else if (this.password == "") {
              let user = new FormData();
              user.append("idUser", this.idUser);
              user.append("Nom", this.nom);
              user.append("Prenom", this.prenom);
              user.append("Email", this.email);
              user.append("societe", localStorage.getItem("societe"));
              user.append("motdepasse", this.motdepasse);
              user.append("image", this.Profil.image);
              user.append("tel", this.tel);
              user.append("ImageFile", this.imageFile);
              user.append("ImageSrc", "");
              axios
                .put(url + "Users/" + this.idUser, user)
                .then((res) => {
                  console.log(res.data);
                  this.user = res.data;
                  this.nom = res.data.nom;
                  localStorage.setItem('name', this.nom)
                  this.prenom = res.data.prenom;
                  localStorage.setItem('prenom', this.prenom)
                  this.email = res.data.email;
                  localStorage.setItem('email', this.email)
                  this.image = res.data.imageSrc;
                  localStorage.setItem('imagesrc', this.image)
                  this.imageFile = "";
                  this.password = "";
                  this.cpassword = "";
                  this.tel = res.data.tel;
                  this.$swal({
                    position: "top-end",
                    icon: "success",
                    toast: true,
                    title: "Profil Modifié",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  setTimeout(() => {
                    location.reload();
                  }, 2000);


                }).catch(() => {
                  this.$swal({
                    position: "top-end",
                    icon: "error",
                    toast: true,
                    title: "Un compte utilisateur déja créer avec cette adresse email",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                })

            }

            // allowOutsideClick: () => !Swal.isLoading(),
          }
          else if (login != this.motdepasse) {
            this.$swal({
              position: "top-end",
              icon: "error",
              toast: true,
              title: "Ancien mot de passe incorrecte",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        }
      })
    }
  }
  ,
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
  }

};
</script>
<style>
@media only screen and (max-width: 991px) {
.mobile{
  position: relative;
    left: -384px;
    bottom: -406px;
    width: 421px;
}
}
</style>