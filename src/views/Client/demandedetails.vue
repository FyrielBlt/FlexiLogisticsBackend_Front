<template>
  <!-- Breadcrumb -->
  <bread-crumb>
    <template v-slot:bread1> Demande </template>
    <template v-slot:bread> {{ this.$route.params.id }} </template>
  </bread-crumb>

  <!-- Offre -->
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Information d'offre</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Offre {{ offre.idOffre }}</p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ offre.description }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Date</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ offre.date }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Heure</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ offre.heurearrive }}</dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Etat</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ etat.etat }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Prix</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ offre.prixFinale }}DT</dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Transporteur</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex">
            <img class="flex-col object-cover w-12 h-12" alt="Your avatar" :src=" transporteur.imageSrc " /><span class="ml-2 flex-col">{{ transporteur.nom }} {{ transporteur.prenom }}</span> 
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Fichiers</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li v-for="f in fichieroffre" :key="f" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: solid/paper-clip -->
                  <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate"> {{f.nomFile}} </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a :href="f.srcOffreFile" class="font-medium text-indigo-600 hover:text-indigo-500"> Voir </a>
                </div>
              </li>
  
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <!-- Demande -->
  <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-2">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Information du demande</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Demande {{ demande.idDemande }}</p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ demande.description }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Adresse de depart</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ demande.adressdepart }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Adresse d'arrivé</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ demande.adressarrive }}</dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Etat</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ etatdemande.etatDemande }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Dimension</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Hauteur : {{ demande.hauteur }}CM<br />Largeur : {{ demande.largeur }}CM </dd>

        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Poids</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ demande.poids }}KG</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Fichiers</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li v-for="f in fichierdemande" :key="f" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm" >
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: solid/paper-clip -->
                  <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate"> {{f.nomFile}} </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a :href="f.srcFile" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BreadCrumb from "../../components/Intermediaire/BreadCrumb.vue";
import url from "../../store/Api";

export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      offre: [],
      demande: [],
      etat: [],
      transporteur:[],
      fichieroffre:[],
      etatdemande: [],
      fichierdemande:[],
    }
  },
  created() {
    axios.get(url+"offres/details/" + this.$route.params.id)
      .then((resp) => {
        this.offre = resp.data;
        this.demande = this.offre.idDemandeNavigation
        this.etat = this.offre.idEtatNavigation
        this.transporteur = this.offre.idTransporteurNavigation.idUserNavigation
        this.fichieroffre = this.offre.fileOffre
        this.etatdemande = this.offre.idDemandeNavigation.idEtatdemandeNavigation
        this.fichierdemande = this.offre.idDemandeNavigation.fileDemandeLivraison
        
      });
  }
}
</script>