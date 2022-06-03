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
        </div>
      </div>

      <form class="mt-4" @submit.prevent="Enregistrer">
        <label class="block mt-3">
          <span class="text-sm text-gray-700">Nom</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="nom"
          />
        </label>
        <label class="block mt-3">
          <span class="text-sm text-gray-700">Prenom</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="prenom"
          />
        </label>
        <label class="block mt-3">
          <span class="text-sm text-gray-700">Téléphone</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="tel"
          />
        </label>
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="email"
          />
        </label>
        <label class="block">
          <span class="text-sm text-gray-700">Nom Societe</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="societe"
          />
        </label>
        <label class="block">
          <span class="text-sm text-gray-700">Adress Societe</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="adress"
          />
        </label>
        <label class="block">
          <span class="text-sm text-gray-700">Description Societe</span>
          <textarea
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="description"
          />
        </label>
 <label class="block">
          <span class="text-sm text-gray-700">Logo</span>
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
                  " id="image" name="image" type="file" @change="FileSelected($event)"
                    />
        </label>
        <label class="block mt-3">
          <span class="text-sm text-gray-700">Type</span>
          <select
            v-model="type"
            required
            class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          >
            <option>Client</option>
            <option>Transporteur</option>
          </select>
        </label>
        <label class="block mt-3">
          <span class="text-sm text-gray-700">Mot de passe</span>
          <input
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="password"
          />
        </label>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Enregistrer
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
      nom: "",
      prenom: "",
      tel: "",
      type: "",
      societe: "",
      description: "",
      adress: "",
      imageFile:'',

    };
  },
  methods: {
    FileSelected(event) {
      this.imageFile = event.target.files[0];
    },
    Enregistrer() {
      let societe = new FormData();
      societe.append("nom", this.societe);
      societe.append("adress", this.adress);
      societe.append("description", this.description);
      societe.append(
        "image",""      );
      societe.append("ImageFile", "");
                societe.append("ImageFile", this.imageFile);
      axios.post("http://localhost:5000/api/Societes", societe).then((res) => {
        let user = new FormData();
        user.append("nom", this.nom);
        user.append("prenom", this.prenom);
        user.append("email", this.email);
        user.append("motdepasse", this.password);
        user.append("societe", res.data.idSociete);
        user.append("image", "");
        user.append("active", 0);
        user.append("tel", this.tel);
        user.append("ImageFile", "");
        user.append("ImageSrc", "");
        axios
          .post("http://localhost:5000/api/Users", user)
          .then((response) => {
            if (this.type == "Client") {
              axios.post("http://localhost:5000/api/Clients", {
                iduser: response.data.idUser,
              });
            }
            if (this.type == "Transporteur") {
              axios.post("http://localhost:5000/api/Transporteurs", {
                idUser: response.data.idUser,
              });
            }
            this.$router.push('/login');
          })
          
          .catch(() => {
            this.$swal({
              position: "top-end",
              icon: "error",
              toast: true,
              title: "Email existe déja",
              showConfirmButton: false,
              timer: 2000,
            });
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
