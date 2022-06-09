<template>
  <div class="rounded-full  w-64 h-64" style="position: absolute;
    width: 262px;
    right: 226px;
    top: 94px;
     background-color: #fffffff2;">
    <svg class="mx-auto h-28 w-28" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32"
      style="enable-background: new 0 0 32 32" xml:space="preserve">
      <polyline class="st0" points="2,9 19,9 19,24 10,24 " />
      <circle class="st0" cx="24" cy="24" r="2" />
      <circle class="st0" cx="8" cy="24" r="2" />
      <polyline class="st0" points="19,24 19,13 25,13 29,18 29,24 26,24 " />
      <line class="st0" x1="4" y1="13" x2="13" y2="13" />
      <line class="st0" x1="2" y1="17" x2="11" y2="17" />
      <rect x="-288" y="-432" class="st3" width="536" height="680" />
    </svg>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">S'inscrire</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Ou
      {{ ' ' }}
      <router-link to="/" class="font-medium text-indigo-600 hover:text-indigo-500"> Se connecter </router-link>
    </p>
  </div>


  <div class="flex items-center  h-screen px-6 r">

    <form @submit.prevent="Enregistrer">
      <div class="w-full h-full  p-7 shadow-md rounded flex flex-col my-2" style="width: 800px;    position: absolute;
    top: -7px;
    left: 0px;
     background-color: #fffffff2;">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Nom
            </label>
            <input v-model="nom"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-first-name" type="text" placeholder="Jane" required>
            <p v-if="nom == ''" class="text-red text-xs italic">Obligatoire *</p>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Prenom
            </label>
            <input v-model="prenom"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name" type="text" placeholder="Doe" required>
            <p v-if="prenom == ''" class="text-red text-xs italic">Obligatoire *</p>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Email
            </label>
            <input v-model="email"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-first-name" type="text" placeholder="Exemple@exemple.com" required>
            <p v-if="email == ''" class="text-red text-xs italic">Obligatoire *</p>

          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Tel
            </label>
            <input v-model="tel"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name" type="text" placeholder="23456789" required>
            <p v-if="tel == ''" class="text-red text-xs italic">Obligatoire *</p>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Nom Societe
            </label>
            <input v-model="societe" @focus="magic_flag = false"
              class="overflow-scroll appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-first-name" type="text" placeholder="Societe" required @keyup="societelist()">
            <ul class="border border-grey-lighter list-none w-5/12 p-2" v-if="societe!='' || magic_flag" style="position: absolute;
    background-color: white;margin-top: -13px;z-index: 999;    height: 52px;
    overflow: hidden;
    " >
              <li class="hover:bg-gray-100" v-for="s in societes" :key="s">{{s.nom}}</li>
            </ul>
            <p v-if="societe == ''" class="text-red text-xs italic">Obligatoire *</p>

          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Adresse Societe
            </label>
            <input v-model="adress"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name" type="text" placeholder="Adresse" required>
            <p v-if="adress == ''" class="text-red text-xs italic">Obligatoire *</p>
          </div>
        </div>

        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
              Description
            </label>
            <input v-model="description"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
               type="text" placeholder="Description">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
              Type
            </label>
            <div class="relative">
              <select v-model="type"
                class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 "
                id="grid-state">
                <option>Client</option>
                <option>Transporteur</option>
              </select>
              <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
              Logo
            </label>
             <div class="shrink-0">
    <img class="h-11 w-11 object-cover rounded-full"  :src="image" alt="Current profile photo" />
     <input @change="FileSelected($event)" accept="image/*"
              class="block w-36 h-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
      style="    position: absolute;
    right: 37px;
    bottom: -436px;"
              id="grid-zip" type="file" placeholder="90210">
  </div>
           
          </div>

        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input v-model="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password" type="password" placeholder="******************">
            <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div class="mt-6">
          <button type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500">
            Enregistrer
          </button>
          <p class="mt-2 text-center text-sm text-gray-600">
            Ou
            {{ ' ' }}
            <router-link to="/" class="font-medium text-indigo-600 hover:text-indigo-500"> Se Connecter </router-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import url from "../store/Api";
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
      imageFile: '',
      societes:[],
      magic_flag:null,
      image:'https://d28brcvwqnonbf.cloudfront.net/build/img/icon/picture-9558485552.svg'
    };
  },
  methods: {
    societelist(){
      axios(url+'societes?societe='+this.societe).then((resp)=>this.societes =resp.data )
    },
    FileSelected(event) {
      this.imageFile = event.target.files[0];
      this.image=URL.createObjectURL(this.imageFile)
    },
    Enregistrer() {
      let societe = new FormData();
      societe.append("nom", this.societe);
      societe.append("adress", this.adress);
      societe.append("description", this.description);
      societe.append(
        "image", "");
      societe.append("ImageFile", "");
      societe.append("ImageFile", this.imageFile);
      axios.post(url + "Societes", societe).then((res) => {
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
          .post(url + "Users", user)
          .then((response) => {
            if (this.type == "Client") {
              axios.post(url + "Clients", {
                iduser: response.data.idUser,
              });
            }
            if (this.type == "Transporteur") {
              axios.post(url + "Transporteurs", {
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
  background-size: cover;
}
</style>
