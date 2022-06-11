<template>
  <div class="flex items-center justify-center h-screen px-6 bg-white r">
    <div
      class="w-full h-full p-6 rounded-md shadow-md"
      style="position: absolute;
    right: 1px;
    top: 1px;
    width: 626px;
     background-color: #fffffff2;"
    >

  <div class="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
                <svg
                class="mx-auto h-28 w-28"
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 32 32"
            style="enable-background: new 0 0 32 32"
            xml:space="preserve"
          >
            <polyline class="st0" points="2,9 19,9 19,24 10,24 " />
            <circle class="st0" cx="24" cy="24" r="2" />
            <circle class="st0" cx="8" cy="24" r="2" />
            <polyline
              class="st0"
              points="19,24 19,13 25,13 29,18 29,24 26,24 "
            />
            <line class="st0" x1="4" y1="13" x2="13" y2="13" />
            <line class="st0" x1="2" y1="17" x2="11" y2="17" />
            <rect x="-288" y="-432" class="st3" width="536" height="680" />
          </svg>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Se Connecter</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Ou
          {{ ' ' }}
          <router-link  to="/Inscription" class="font-medium text-indigo-600 hover:text-indigo-500"> Créer compte </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="pb-3">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" v-model="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Mot de passe oublié? </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Se Connecter
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
      </form>
    </div>
  </div>
  
    </div>
  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import Url from "../store/Api";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      spinner: true
    };
  },

  methods: {
    login() {
      this.spinner = false
      axios
        .post(Url+"login", {
          Email: this.email,
          Motdepasse: this.password,
        })
        .then((response) => {
          localStorage.setItem("type", response.data.type);
          if (localStorage.getItem("type") == "intermediaire") {
            localStorage.setItem("token", response.data.type.token);
            localStorage.setItem("name", response.data.validUser.nom);
            localStorage.setItem("prenom", response.data.validUser.prenom);
             localStorage.setItem("imagesrc", response.data.validUser.imageSrc);
            localStorage.setItem(
              "id",
              response.data.validUser.intermediaire[0].idIntermediaire
            );
            localStorage.setItem(
              "idRole",
              response.data.validUser.intermediaire[0].idRole
            );
            localStorage.setItem("jwt", "foo.bar.baz");
            console.log(localStorage.getItem("jwt"));

            this.$router.push({ name: "Intermediaire" });

            // login Transporteur
          } else if (localStorage.getItem("type") == "transporteur") {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem(
              "idtransporteur",
              response.data.validUser.transporteur[0].idTransporteur
            );
            localStorage.setItem("iduser", response.data.validUser.idUser);
            localStorage.setItem("name", response.data.validUser.nom);
            localStorage.setItem("prenom", response.data.validUser.prenom);
            localStorage.setItem("email", response.data.validUser.email);
            localStorage.setItem("societe", response.data.validUser.societe);
            localStorage.setItem("image", response.data.validUser.image);
            localStorage.setItem("imagesrc", response.data.validUser.imageSrc);

            localStorage.setItem("jwtt", "t");
            this.$router.push({ name: "DashboardTransporteur" });
          } else if (localStorage.getItem("type") == "") {
            this.$router.push({ name: "Login" });
          } else {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("iduser", response.data.validUser.idUser);
            localStorage.setItem("name", response.data.validUser.nom);
            localStorage.setItem("prenom", response.data.validUser.prenom);
            localStorage.setItem("email", response.data.validUser.email);
            localStorage.setItem("societe", response.data.validUser.societe);
            localStorage.setItem("image", response.data.validUser.image);
            localStorage.setItem("imagesrc", response.data.validUser.imageSrc);

            localStorage.setItem(
              "clientid",
              response.data.validUser.client[0].idclient
            );
            localStorage.setItem("jwtc", "c");
            this.$router.push({ name: "DashboardClient" });
          }

          //  console.log(localStorage.getItem("type"));
          //   else if(localStorage.getItem("type")==""){
          //    this.$router.push({ name:"Login"});
          //   }
          //   else{
          //     this.$router.push({ name:"DashboardClient"});
          //   }

          //  console.log(localStorage.getItem("type"));
        })
        .catch((error) => {
          this.spinner = true
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data,
          });
        });
    },
  },
});
</script>
<style>
.r {
  background-image: url("../assets/malek.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}
</style>
