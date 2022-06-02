<template>
  <div class="flex items-center justify-center h-screen px-6 bg-white r">
    <div
      class="w-full max-w-sm p-6 rounded-md shadow-md"
      style="opacity: 0.9; background-color: #d2d7e0"
    >
      <div class="flex items-center justify-center">
        <div class="flex items-center">
          <svg
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

          <span class="mx-2 text-2xl font-semibold" style="color: #385183"
            >P F E 2022</span
          >
        </div>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="password"
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <a
              class="block text-sm text-indigo-700 fontme hover:underline"
              href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      axios
        .post("http://localhost:5000/api/login", {
          Email: this.email,
          Motdepasse: this.password,
        })
        .then((response) => {
          localStorage.setItem("type", response.data.type);
          if (localStorage.getItem("type") == "intermediaire") {
            localStorage.setItem("token", response.data.type.token);
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
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
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
  background-position: 50% 50%;
}
</style>
