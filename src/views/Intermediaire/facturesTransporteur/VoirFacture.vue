<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb breadcrumb="Profil" /> -->
    <bread-crumb>
      <template v-slot:bread1> Facture </template>
      <template v-slot:bread> Facture Transporteur </template>
    </bread-crumb>
    <div class="col-span-2" style="margin-left: 25%">
      <div class="text-center">
        <!-- <h4 class="text-gray-700">Profil</h4> -->
        <div
          class="max-w-lg p-6 bg-white rounded-md shadow-md"
          v-if="file != ''"
        >
          <pdf
            :src="file.srcFactureFile"
            @numpages="pageCount = $event"
            :page="numPage"
            :resize="true"
          ></pdf>
          <div class="px-6 py-4">
            <div class="mb-2 text-center text-gray-900">
              <span
                class="
                  inline-block
                  px-3
                  py-1
                  mb-2
                  mr-2
                  text-xm
                  font-semibold
                  bg-blue-400
                  rounded-full
                "
                @click="Previous()"
              >
                Previous
              </span>
              <span
                class="
                  inline-block
                  px-3
                  py-1
                  mb-2
                  mr-2
                  text-xm
                  font-semibold
                  bg-red-600
                  rounded-full
                "
              >
                {{ numPage }}
              </span>
              <span
                class="
                  inline-block
                  px-3
                  py-1
                  mb-2
                  mr-2
                  text-xm
                  font-semibold
                  bg-blue-400
                  rounded-full
                "
                @click="Next()"
              >
                Next
              </span>
            </div>
          </div>
           <router-link to="../factureTransporteur">
            <button
              class="
                px-4
                py-2
                text-xm
                font-semibold
                text-gray-900
                bg-red-400
                rounded-r rounded-l
                hover:bg-red-500
              "
            >
              Retour
            </button>
            </router-link>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import pdf from "pdfvuer";
import "pdfjs-dist/build/pdf.worker.entry";
import BreadCrumb from "../../../components/Intermediaire/BreadCrumb.vue";
import Url from "../../../store/Api";
import axios from "axios";
//import { mapGetters } from "vuex";
export default {
  components: {
    BreadCrumb,
    pdf,
  },
  data() {
    return {
      file: "",
      numPage: 1,
    };
  },

  async created() {
    await axios
      .get(Url + "FactureTransporteurs/" + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.file = res.data;
      });
  },
  methods: {
    Next() {
      if (this.numPage < this.pageCount) {
        this.numPage++;
      }
    },
    Previous() {
      if (this.numPage > 1) {
        this.numPage--;
      }
    },
  },
};
</script>
