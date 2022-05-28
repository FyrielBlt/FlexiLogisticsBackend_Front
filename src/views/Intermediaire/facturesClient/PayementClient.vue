<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb breadcrumb="Profil" /> -->
    <bread-crumb>
      <template v-slot:bread1> Facture </template>
      <template v-slot:bread> Facture Client </template>
    </bread-crumb>
    <!-- alert -->

    <!-- fin alert -->

    <div class="col-span-2" style="margin-left: 25%">
      <div class="text-center">
        <!-- <h4 class="text-gray-700">Profil</h4> -->

        <div
          class="max-w-lg p-6 bg-white rounded-md shadow-md"
          v-if="file != ''"
        >
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
      </div>
    </div>
    <br />
  </div>
</template>
<!-- BlogPost.vue -->
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
      .get(Url + "FactureClients/" + this.$route.params.id, {
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
    // Modifier() {
    //   let user = new FormData();
    //   user.append("idUser", this.idUser);
    //   user.append("Nom", this.nom);
    //   user.append("Prenom", this.prenom);
    //   user.append("Email", this.email);
    //   user.append("motdepasse", this.password);
    //   user.append("image", "");
    //   user.append("ImageFile", this.imageFile);
    //   user.append("ImageSrc", "");
    //   axios
    //     .put(Url + "users/" + this.idUser, user, {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("token"),
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //       this.user = res.data;
    //       this.nom = res.data.nom;
    //       this.prenom = res.data.prenom;
    //       this.email = res.data.email;
    //       this.image = res.data.imageSrc;
    //       this.imageFile = "";
    //       this.password = "";
    //       this.cpassword = "";
    //     });
    // },
    // // ajouter image
    // FileSelected(event) {
    //   this.imageFile = event.target.files[0];
    //   console.log(this.imageFile);
    // },
  },
  watch: {
    // cpassword() {
    //   if (this.password != "" && this.cpassword == "") {
    //     //:class="[cpassword === '' ? ' focus:bg-red-100  focus:border-red-800 ' : ' focus:bg-green-200  focus:border-green-800 ']"
    //     this.cla = "form-control";
    //   } else if (this.password != "" && this.cpassword != "") {
    //     if (this.password == this.cpassword) {
    //       this.class1 = "focus:bg-green-200  focus:border-green-800 ";
    //       this.class2 = "focus:bg-green-200  focus:border-green-800 ";
    //     } else {
    //       this.class1 = "form-control";
    //       this.class2 = "focus:bg-red-100  focus:border-red-800 ";
    //     }
    //   }
    // },
  },
};
</script>
