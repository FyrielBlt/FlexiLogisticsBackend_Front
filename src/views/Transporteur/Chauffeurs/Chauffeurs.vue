<template>
  <div>
    <!-- ADD CHAUFFEUR -->
    <button @click="open = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="25"
        fill="currentColor"
        class="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
        />
      </svg>
    </button>

    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="open = false"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <div class="px-6 py-4 text-center modal-content">
            <p class="text-2xl font-bold">Ajouter Chauffeur</p>
          
                  <form @submit.prevent="ajouterChauffeur">
                    <div>
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
                   style="display:none;" />
           <label for="image" class="relative group">
            <img width="50" length="50" :src="this.imageprevesoire" alt="Image Profil" />
            <div
              class="opacity-0 group-hover:opacity-70 duration-300 absolute 
              inset-x-0 bottom-0 flex justify-center items-end text-xl bg-black
               text-white font-semibold"
              >Changer</div>

          </label>
                    </div>
                   <div class="relative block mt-2 sm:mt-0">


                <input
                  id="nom"
                  required
                  placeholder="Nom"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    nom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="nom"
                />
              </div>
                     <div class="relative block mt-2 sm:mt-0">

               

                <input
                required
                  placeholder="Prénom"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    prenom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="prenom"
                />
              </div>
                    <div class="relative block mt-2 sm:mt-0">

              
                <input
                  placeholder="Numéro cin"
                  required
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    cinchauffeur === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="cinchauffeur"
                />
              </div>
                    <div class="relative block mt-2 sm:mt-0">

               

                <input
                type="email"
                required
                  placeholder="email"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    email === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="email"
                />
              </div>
                     <div class="relative block mt-2 sm:mt-0">

              

                <input
                type="tel"
                required
                  placeholder="téléphone"
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    tel === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="tel"
                />
              </div>
                   
                    <div class="flex justify-end mt-4">
                      <button
                      type="submit"
                        class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      >
                        Ajouter
                      </button>
                    </div>
                  </form>
                </div>

                
              </div>
            </div>
          
   <!-- Add end / import begin-->
    <div class="mt-8 ">
      <div class="mt-6">
        <div class="flex flex-col mt-3 text-center sm:flex-row ">
          <div class="flex">
            <div class="relative">
              <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                v-model="perPage"
                @change="ChangePage(this.currentPage)"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              v-model="searchby"
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              @keyup="searchfunction(this.searchby)"
            />
          </div>
        </div>
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 ">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table id="example" class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Cin
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Nom
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Email
                  </th>
 <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Tel
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                   Paramétres
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(u, index) in chauffeurs" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ u.cinchauffeur }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img v-if="u.imageSrc!=null"
                          class="w-full h-full rounded-full"
                          :src="u.imageSrc"
                          alt="profile pic"
                        />
                         <img v-else
                          class="w-full h-full rounded-full"
                          src="http://localhost:5000/File/Image/modelphoto.jpg"
                          alt="profile pic"
                        />
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{
                            u.iduserNavigation.nom +
                            " " +
                            u.iduserNavigation.prenom
                          }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.iduserNavigation.email }}
                    </p>
                  </td>

                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.iduserNavigation.tel }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                      <span class="text-black-500 flex " >
                        <modal-layout-chauffeur-update
                          :userss="u"
                        ></modal-layout-chauffeur-update>
                        <form
                          @submit.prevent="supprimerchauffeur(u.idchauffeur)"
                        >
                           <span class="text-orange-500 flex justify-center">
                     <button
                            class="mx-2 px-2 rounded-md"
                          >
                         <i class="bi bi-trash3-fill"></i>
                          </button>
                           </span>
                        </form>
                          
                      </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex flex-col items-center px-2 py-2 bg-white border-t xs:flex-row xs:justify-between"
            >
              <div class="inline-flex xs:mt-0">
                <!-- PAGINATION -->
                <pagination-vue
                  :current="currentPage"
                  :total="this.long"
                  :per-page="perPage"
                  @page-changed="ChangePage"
                ></pagination-vue>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
// import Vue from "vue";
// import VueSimpleAlert from "vue-simple-alert";
import PaginationVue from "/src/components/Intermediaire/pagination/PaginationVue.vue";
import ModalLayoutChauffeurUpdate from "/src/views/Transporteur/Chauffeurs/ModalLayoutChauffeurUpdate.vue";
export default {
  components: {
    ModalLayoutChauffeurUpdate,
    PaginationVue,
  },
  data() {
    return {
      open: ref(false),
      chauffeurs: [],
      tel:'',
      imageFile:'',
      imageprevesoire:"http://localhost:5000/File/Image/modelphoto.jpg",
      camions: [],
      image: "",
      currentPage: 1,
      perPage: 5,
      searchby: "",
      long: "",
      camion: "",
      open: false,
      nom: "",
      prenom: "",
      email: "",
      motdepasse: "",
      codevehicule: "",
      cinchauffeur: "",
      nextpage: 1,
      idchauffeur: "",
      camion: [],
      iduser: "",
      i: 0,
      chauffeurscamions: [],
    };
  },
  created(){
    axios
      .get(
        "http://localhost:5000/api/Chauffeurs/" +
          localStorage.getItem("societe") +
          "/chauffeurs"
      )
      .then((response) => {
        this.long = response.data.length;
      })
      .catch((error) => console.log(error));
    axios
      .get(
        "http://localhost:5000/api/Chauffeurs/" +
          localStorage.getItem("societe") +
          "/chauffeurs" +
          "?page=" +
          this.currentPage +
          "&quantityPage=" +
          this.perPage
      )
      .then((response) => {
        this.chauffeurs = response.data;
      })
      .catch((error) => console.log(error));
    // inserer dans la table chauffeurscamions les camions qui n'ont pas un chauffeur
    axios
      .get(
        "http://localhost:5000/api/Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((resp) => {
        axios
          .get("http://localhost:5000/api/Camions/" + resp.data.idTransporteur)
          .then((response) => {
            response.data.forEach((element) => {
              if (element.idchauffeur == null) {
                this.chauffeurscamions[this.i] = element;
                this.i = this.i + 1;
              }
            });
          })
          .catch((error) => console.log(error));
      });
  },
  methods: {
    close() {
      axios
        .get(
          "http://localhost:5000/api/Chauffeurs/" +
            localStorage.getItem("societe") +
            "/chauffeurs"
        )
        .then((response) => {
          this.long = response.data.length;
        })
        .catch((error) => console.log(error));
      axios
        .get(
          "http://localhost:5000/api/Chauffeurs/" +
            localStorage.getItem("societe") +
            "/chauffeurs" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage
        )
        .then((response) => {
          this.chauffeurs = response.data;
        })
        .catch((error) => console.log(error));
    },
    FileSelected(event) {
      this.imageFile = event.target.files[0];
      if(this.imageFile!=null){
        this.imageprevesoire=URL.createObjectURL(this.imageFile)
      }
      else{
        this.imageprevesoire="http://localhost:5000/File/Image/modelphoto.jpg"
      }
    },
    searchfunction(mot) {
      axios
        .get(
          "http://localhost:5000/api/Chauffeurs/" +
            localStorage.getItem("societe") +
            "/chauffeurs" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage +
            "&search=" +
            mot
        )
        .then((response) => {
          this.chauffeurs = response.data;
        })
        .catch((error) => console.log(error));
    },
    ChangePage(NumPage) {
      this.currentPage = NumPage;
      this.perPage = this.perPage;
      axios
        .get(
          "http://localhost:5000/api/Chauffeurs/" +
            localStorage.getItem("societe") +
            "/chauffeurs" +
            "?page=" +
            this.currentPage +
            "&quantityPage=" +
            this.perPage
        )
        .then((response) => {
          this.chauffeurs = response.data;
        })
        .catch((error) => console.log(error));
    },
    supprimerchauffeur(id) {
      this.$swal({
        title: "Vous êtes sûr?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#36c6d3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.value) {
          axios
            .get("http://localhost:5000/api/Camions/" + id + "/chauffeur")
            .then((resp) => {
              //on cas ou ce camion a un chauffeur
              axios
                .put(
                  "http://localhost:5000/api/Camions/" + resp.data.idcamion,
                  {
                    idcamion: resp.data.idcamion,
                    idtransporteur: resp.data.idtransporteur,
                    idchauffeur: null,
                    codevehicule: resp.data.codevehicule,
                    idtype: resp.data.idType,
                  }
                )
                .then(() => {
                  axios.delete("http://localhost:5000/api/Chauffeurs/" + id).then(()=>{
                    this.$swal({
                    position: "top-end",
                    icon: "success",
                    toast: true,
                  title: "Chauffeur supprimé",
          showConfirmButton: false,
          timer: 2000,
        })
                  this.close()
                  }
                  
                  )
                });
            }).catch(()=>
            // si non
             axios.delete("http://localhost:5000/api/Chauffeurs/" + id).then(()=>{
               this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Chauffeur supprimé",
          showConfirmButton: false,
          timer: 2000,
        })
                 this.close()
             }
            ))
          
        } 
      });
    },
    ajouterChauffeur() {
      if (
        this.nom != "" &&
        this.prenom != "" &&
        this.email != "" &&
        this.cinchauffeur != "" &&
        this.password != "" &&
        this.imageFile!='' &&
        this.tel!=''
      ) {
        let user = new FormData();
        user.append("nom", this.nom);
        user.append("prenom", this.prenom);
        user.append("email", this.email);
        user.append("motdepasse",'chauffeur');
        user.append("societe", localStorage.getItem("societe"));
        user.append("image", "");
        user.append("tel", this.tel);
        user.append("ImageFile", this.imageFile);
        user.append("ImageSrc", "");
        axios
          .post("http://localhost:5000/api/Users", user,)
          .then((response) => { 
                axios
                  .post("http://localhost:5000/api/Chauffeurs/" + this.email, {
                    Cinchauffeur: this.cinchauffeur,
                    Idsociete: localStorage.getItem("societe"),
                    Iduser: response.data.idUser,
                  })
                  .then(() => {
                    this.nom=''
                    this.prenom=''
                    this.cinchauffeur=''
                    this.tel=''
                    this.email=''
                                        this.imageFile=null

                    this.imageprevesoire="http://localhost:5000/File/Image/modelphoto.jpg"
                    this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Chauffeur ajouté",
          showConfirmButton: false,
          timer: 2000,
        });
                  
                    this.close();
                  })
                  .catch(() => {
                    this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Cin existe",
          showConfirmButton: false,
          timer: 2000,
        })
                    // si l 'email est correct l'utilisateur sera stocké dans la table user meme si la cin
                    //n'est pas unique dnc on doit le supprimer
                    axios.delete(
                      "http://localhost:5000/api/Users/" + response.data.idUser
                    );
                  });
              })
              .catch(() => {
                this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Email utilisé",
          showConfirmButton: false,
          timer: 2000,
        })
              });
          
      } 
       if (
        this.nom != "" &&
        this.prenom != "" &&
        this.email != "" &&
        this.cinchauffeur != "" &&
        this.password != "" &&
        this.imageFile=='' &&
        this.tel!=''
      ) {
        let user = new FormData();
        user.append("nom", this.nom);
        user.append("prenom", this.prenom);
        user.append("email", this.email);
        user.append("motdepasse",'chauffeur');
        user.append("societe", localStorage.getItem("societe"));
        user.append("image", "");
        user.append("tel", this.tel);
        user.append("ImageFile",null);
        user.append("ImageSrc", "");
        axios
          .post("http://localhost:5000/api/Users", user,)
          .then((response) => { 
                axios
                  .post("http://localhost:5000/api/Chauffeurs/" + this.email, {
                    Cinchauffeur: this.cinchauffeur,
                    Idsociete: localStorage.getItem("societe"),
                    Iduser: response.data.idUser,
                  })
                  .then(() => {
                    this.nom=''
                    this.prenom=''
                    this.cinchauffeur=''
                    this.tel=''
                    this.email=''
                    this.imageFile=null
                    this.imageprevesoire="http://localhost:5000/File/Image/modelphoto.jpg"
                    this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Chauffeur ajouté",
          showConfirmButton: false,
          timer: 2000,
        });
                  
                    this.close();
                  })
                  .catch(() => {
                    this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Cin existe",
          showConfirmButton: false,
          timer: 2000,
        })
                    // si l 'email est correct l'utilisateur sera stocké dans la table user meme si la cin
                    //n'est pas unique dnc on doit le supprimer
                    axios.delete(
                      "http://localhost:5000/api/Users/" + response.data.idUser
                    );
                  });
              })
              .catch(() => {
                this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Email utilisé",
          showConfirmButton: false,
          timer: 2000,
        })
              });
          
      } 
      
    },
  },
};
</script>
<style>
.affect {
  font-weight: bold;
  color: red;
}
</style>