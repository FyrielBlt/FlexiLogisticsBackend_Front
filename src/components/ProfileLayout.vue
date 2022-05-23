<template>
  <!-- Breadcrumb -->
  <!-- <Breadcrumb breadcrumb="Profil" /> -->
  <div class="grid grid-rows-3 grid-flow-col gap-4">
    <div class="mt-4 mb-3 row-span-3">
      <h4 class="text-gray-600">SOCIETE</h4>

      <div class="max-w-sm mt-4 overflow-hidden bg-white rounded shadow-lg">
        <label for="image">
          <input type="file" name="image" id="image" @change="fileimage($event)" accept=".png,.jpg" style="display:none;" />

          <img
            class="object-contain h-48 w-96"
            :src="user.societeNavigation.image"
            alt="Sunset in the mountains"
          />
        </label>

        <div class="px-6 py-4 pb-8">
          <div class="mb-2 text-xl font-bold text-gray-900">
            Nom :
            <input
              type="text"
              :disabled="this.disabledbutton"
              v-model="user.societeNavigation.nom"
            />
          </div>
          <hr />
          <p class="text-base text-gray-700 pb-8">
            Description :
            <input
              type="text"
              :disabled="this.disabledbutton"
              v-model="user.societeNavigation.description"
            />
          </p>
          <p class="text-base text-gray-700 pb-8">
            Adresse :
            <input
              type="text"
              :disabled="this.disabledbutton"
              v-model="user.societeNavigation.adress"
            />
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button :hidden="this.hiddenbutton" @click="modifiersociete">
            modifier
          </button>
          <button :hidden="this.hiddenbutton2" @click="modifiersociete2">
            valider
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="col-span-2 col-span-2" style="margin-top: -16.1em">
      <h4 class="text-gray-600">INFORMATIONS</h4>
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Account settings
          </h2>
          <form @submit.prevent="register">
             <label for="image">
          <input type="file" name="image" id="image" @change="fileimage($event)" accept=".png,.jpg" style="display:none;" />
            <img
              class="rounded-full w-full"
             :src="user.image"

              alt="Sunset in the mountains"
              style="height: 110px; margin-left: 500px; width: 105px"
            />
            
        </label>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="nom">NOM</label>
                <input
                  class="
                    w-full
                    mt-2
                    border-gray-200
                    rounded-md
                    focus:border-indigo-600
                    focus:ring focus:ring-opacity-40 focus:ring-indigo-500
                  "
                  type="text"
                  v-model="this.user.nom"
                />
              </div>
              <div>
                <label class="text-gray-700" for="prenom">PRENOM</label>
                <input
                  class="
                    w-full
                    mt-2
                    border-gray-200
                    rounded-md
                    focus:border-indigo-600
                    focus:ring focus:ring-opacity-40 focus:ring-indigo-500
                  "
                  type="text"
                  v-model="this.user.prenom"
                />
              </div>
              <div>
                <label class="text-gray-700" for="email">Email</label>
                <input
                  class="
                    w-full
                    mt-2
                    border-gray-200
                    rounded-md
                    focus:border-indigo-600
                    focus:ring focus:ring-opacity-40 focus:ring-indigo-500
                  "
                  type="email"
                  v-model="this.user.email"
                />
              </div>

              <div>
                <label class="text-gray-700" for="motdepasse"
                  >MOT DE PASSE</label
                >
                <input
                  class="
                    w-full
                    mt-2
                    border-gray-200
                    rounded-md
                    focus:border-indigo-600
                    focus:ring focus:ring-opacity-40 focus:ring-indigo-500
                  "
                  type="password"
                  v-model="this.user.motdepasse"
                />
              </div>
              <div>
                <label class="text-gray-700" for="nom">Type</label>
                <input
                  class="
                    w-full
                    mt-2
                    border-gray-200
                    rounded-md
                    focus:border-indigo-600
                    focus:ring focus:ring-opacity-40 focus:ring-indigo-500
                  "
                  type="text"
                  v-model="this.user.type"
                  disabled
                />
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button
                @click="register"
                class="
                  px-4
                  py-2
                  text-gray-200
                  bg-gray-800
                  rounded-md
                  hover:bg-gray-700
                  focus:outline-none
                  focus:bg-gray-700
                "
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- BlogPost.vue -->
<script>
//dwlx8q3pu
//https://api.cloudinary.com/v1_1/
//karimomrane
//import Breadcrumb from "../partials/Breadcrumb.vue";
//import axios from "axios";
export default {
  components: {
  //  Breadcrumb,
  },
  props: [
    "user",
    "hiddenbutton",
    "disabledbutton",
    "hiddenbutton2",
    "modifiersociete",
    "modifiersociete2",
    "register",
    "fileimage",
    "file",
  ],
  data() {
    return {};
  },
};
</script>
