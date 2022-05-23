<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb breadcrumb="Profil" /> -->
    <bread-crumb>
      <template v-slot:bread1> Facture </template>
      <template v-slot:bread> Facture Client </template>
    </bread-crumb>
    <div class="grid grid-flow-col">
      <div class="row-span" style="margin-left: 50px">
        <!-- <h4 class="text-gray-700">Profil</h4> -->
        <!-- debut pdf -->
        <div class="max-w-md p-6 bg-white rounded-md shadow-md"  v-if="file.payementFile">
          <pdf
            :src="file.srcPayementFile"
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
        </div>
        <!-- fin pdf -->
      </div>

      <div class="grid grid-flow-col">
        <div class="row-span">
          <div class="max-w-md p-6 bg-white rounded-md shadow-md text-center">
            <h2 class="text-lg font-semibold text-gray-700 capitalize">
              Upload Facture
            </h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 text-center">
              <div class="text-center">
                <label class="text-gray-700" for="image">Facture :</label>
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
                  "
                  style=" margin-top: 20px"
                  id="image"
                  type="file"
                  accept=".pdf"
                  @change="FileSelected($event)"
                />
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button
                class="
                  px-4
                  py-2
                  text-gray-200
                  bg-gray-800
                  rounded-md
                  hover:bg-gray-700
                  focus:outline-none focus:bg-gray-700
                "
                @click="upload()"
              >
                Upload
              </button>
                 <router-link to="../factureTransporteur">
              <button
                class="px-4 py-2 text-gray-200 bg-red-600 rounded-md"
                style="margin-left: 5px"
              >
                Annuler
              </button>
               </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- {{file}} -->
  </div>
</template>
<!-- BlogPost.vue -->
<script>
import pdf from "pdfvuer";
import "pdfjs-dist/build/pdf.worker.entry";
import BreadCrumb from "../../../components/Intermediaire/BreadCrumb.vue";
import axios from "axios";
import Url from "../../../store/Api";

//import { mapGetters } from "vuex";
export default {
  components: {
    BreadCrumb,
    pdf,
  },
  data() {
    return {
      
      file: "",
      imageFile: "",
      numPage: 1,
    };
  },

  async created() {
    await axios
      .get(Url + "FactureTransporteurs/" + this.$route.params.facture, {
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
    async upload(){
      let facture = new FormData();
      facture.append("IdFactTransporteur",this.file.idFactTransporteur);
      facture.append("EtatFacture","En cour de payement");
      facture.append("IdOffre",this.file.idOffre);
      facture.append("FactureFile",this.file.factureFile);
      facture.append("PayementFile",null);
      facture.append("ImageFile", this.imageFile);
     
    await axios
        .put(Url + "FactureTransporteurs/"+this.file.idFactTransporteur, facture, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(res=>{
          this.file=res.data;
          console.log(res.data);
        });
  },

    // ajouter image
    FileSelected(event) {
      this.imageFile = event.target.files[0];
      console.log(this.imageFile);
    },
  },
  watch: {
   
  },
};
</script>
