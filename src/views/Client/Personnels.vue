<template>
  <!-- Breadcrumb -->
  <bread-crumb>
    <template v-slot:bread1> Personnels </template>
  </bread-crumb>
  <!-- <Breadcrumb breadcrumb="Personnels" /> -->
  <div class="mt-6">


    <div class="flex flex-col mt-3 sm:flex-row">
      <div class="flex">
        <div class="relative">
          <select
            class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>

          <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div class="relative">
          <select
            class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="relative block mt-2 sm:mt-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
            <path
              d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
          </svg>
        </span>

        <input placeholder="Search"
          class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
      </div>
    </div>

    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Nom
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Prenom
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Email
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Tel
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Status
              </th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(u, index) in personnels" :key="index">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
            

                <div class="flex items-center">

                      <div class="flex-shrink-0 w-12 h-12 rounded-full ">
                        <img class="object-cover w-full h-full rounded-xl" alt="Your avatar" :src="u.imageSrc" />
     
                </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.nom }}

                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.prenom }}
                </p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.email }}
                </p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ u.tel }}
                </p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span :class="`relative inline-block px-3 py-1 font-semibold text-${u.statusColor}-900 leading-tight`">
                  <span aria-hidden :class="`absolute inset-0 bg-${u.statusColor}-200 opacity-50 rounded-full`"></span>
                  <span class="relative    text-green-800
                      bg-green-100
                      rounded-full px-2
                      text-sm
                      font-semibold
                      leading-5" v-if="u.active == 1">Activé</span>
                  <span class="relative" v-else>Desactivé</span>
                </span>
              </td>

            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>

</template>
<script>
import axios from "axios";
import BreadCrumb from "../../components/Intermediaire/BreadCrumb.vue";
import url from "../../store/Api";
export default {
  components: {
    BreadCrumb
  },
  data() {
    return {
      personnels: [],
    };
  },
  created() {
    axios
      .get(url+"users/client/" + localStorage.getItem('societe'))
      .then((response) => {
        this.personnels = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    supprimer(id) {
      axios.delete(url+"clients/" + id).then(() => {
        axios
          .get(url+"clients/")
          .then((response) => {
            this.personnels = response.data;
          })
          .catch((error) => console.log(error));
      });
    },
  },
};
</script>
