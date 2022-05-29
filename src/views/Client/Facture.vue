<template>
  <!-- Breadcrumb -->
  <bread-crumb>
    <template v-slot:bread> Facture </template>
    <template v-slot:bread1> Demandes </template>
  </bread-crumb>
  <div class="pt-2 relative mx-auto text-gray-600">
    <select id="small"  v-model="etat" @change="ChangePage(page)" style="    position: absolute;left: 191px;"
      class="block p-2 mb-6 w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300">
      <option class="inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5 
                      text-gray-800
                      bg-gray-100
                      " value="" selected>Etat</option>
      <option class="inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-red-800
                      bg-red-100
                      " value="Non payé">Non payé	</option>
      <option class="inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-green-800
                      bg-green-100" value="Payé">Payé</option>
    </select>
    <input style="padding-right: 3px;" class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search"
      v-model="num" @keyup="ChangePage(page)" name="search" placeholder="Search">
  </div>
  <table class="min-w-full">
    <thead>
      <tr>
        <th class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  ">
          Num
        </th>

        <th class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  ">
          Etat
        </th>
        <th class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  ">
          Demande
        </th>
        <th class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  ">
          Facture
        </th>
        <th class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  ">
          Payement
        </th>

      </tr>
    </thead>

    <tbody class="bg-white">
      <tr v-for="(u, index) in factures" :key="index">
        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap ">
          <div class="flex items-center">
            <div class="ml-4">
              <div class="text-sm font-medium leading-5 text-gray-900">
                {{ u.idFactClient }}
              </div>
            </div>
          </div>
        </td>

        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">

          <span class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-red-800
                      bg-red-100
                      rounded-full
                    " v-if="u.etatFacture == 'Non payé'">{{ u.etatFacture }}</span>
          <span class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-green-800
                      bg-green-100
                      rounded-full
                    " v-else>{{ u.etatFacture }}</span>
        </td>
        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">

          <div class="text-sm leading-5 text-gray-900">
            {{ u.idDemandeLivraison }}
          </div>
        </td>
        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
          <a :href="u.srcFactureFile" v-if="u.factureFile" target="_blank"> <span class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-yellow-800
                      bg-yellow-100
                      rounded-full
                    ">Download</span></a>

        </td>

        <td class="
                    px-6
                    py-4
                    text-sm
                    leading-5
                    text-gray-500
                    border-b border-gray-200
                    whitespace-nowrap
                  ">
          <a :href="u.srcPayementFile" v-if="u.payementFile" target="_blank"> <span class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-blue-800
                      bg-blue-100
                      rounded-full
                    ">
              Download</span></a>

        </td>


      </tr>
    </tbody>
  </table>
  <div class="
            flex flex-col
            items-center
            px-2
            py-2
            bg-white
            border-t
            xs:flex-row
            xs:justify-between
          ">
    <div class="inline-flex xs:mt-0">
      <!-- PAGINATION -->
      <pagination-vue :current="page" :total="total" :per-page="perpage" @page-changed="ChangePage"></pagination-vue>

    </div>
  </div>
  <Dragdropfile></Dragdropfile>
</template>

<script>
import axios from "axios";
import BreadCrumb from "../../components/Intermediaire/BreadCrumb.vue";

import PaginationVue from "../../components/Intermediaire/pagination/PaginationVue.vue";
import Dragdropfile from "./components/dragdropfile.vue";
export default {
  components: {
    //  Banner,
    BreadCrumb,
    PaginationVue,
    Dragdropfile
  },
  data() {
    return {
      page: 1,
      perpage: 3,
      total: 0,
      factures: [],
      num: '',
      etat: '',
    }
  },
  created() {
    axios
      .get(
        "http://localhost:5000/api/FactureClients/client/" +
        localStorage.getItem("iduser")

      )
      .then((resp) => {
        this.total = resp.data.length;
      });
    axios
      .get(
        "http://localhost:5000/api/FactureClients/client/" +
        localStorage.getItem("iduser") +
        "?page=" +
        this.page +
        "&quantityPage=" +
        this.perpage

      )
      .then((resp) => {
        this.factures = resp.data;
      });
  },
  methods: {
    ChangePage(NumPage) {
      this.page = NumPage;
      axios
        .get(
          "http://localhost:5000/api/FactureClients/client/" +
          localStorage.getItem("iduser") +
          "?page=" +
          this.page +
          "&quantityPage=" +
          this.perpage+
          "&num=" +
              this.num+
              "&etat=" +
              this.etat

        )
        .then((resp) => {
          this.factures = resp.data;
        });

    },

  }
}
</script>