<template>
  <div>
    <!-- Breadcrumb -->
      <span class="text-blue-500 flex justify-center">
      <button @click="open = true">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-blue-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        />
        <path
          fill-rule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clip-rule="evenodd"
        />
      </svg>
      </button>
    </span>
     

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
            <p class="text-2xl font-bold">Modifier Chauffeur</p>
          
                  <form @submit.prevent="modifierChauffeur">
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
                  " id="image2" name="image" type="file" @change="FileSelected($event)"
                   style="display:none;" />
           <label for="image2" class="relative group">
            <img  v-if="userss.imageSrc!=null "  width="50" height="50" :src="userss.imageSrc" alt="Image Profil" />
             <img v-else
                                       width="50" height="50"

                          class="rounded-full"
                          src="http://localhost:5000/File/Image/modelphoto.jpg"
                          alt="profile pic"
                        />
            <div
              class="opacity-0 group-hover:opacity-70 duration-300 absolute 
              inset-x-0 bottom-0 flex justify-center items-end text-xl bg-black
               text-white font-semibold"
              >Changer</div>

          </label>
                    </div>
                   <div class="relative block mt-2 sm:mt-0">

                                     <span>Nom </span>

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
                  v-model="userss.iduserNavigation.nom"
                />
              </div>
                     <div class="relative block mt-2 sm:mt-0">

                <div class="relative block mt-2 sm:mt-0">

                                     <span>Prenom </span>

                <input
                  id="prenom"
                  required
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    prenom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="userss.iduserNavigation.prenom"
                />
              </div>
              <span>Numéro cin : </span>
                <input
                  placeholder="Numéro cin"
                  required
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                   userss.cinchauffeur === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="userss.cinchauffeur"
                />
              </div>
                    <div class="relative block mt-2 sm:mt-0">

               <span> Email : </span>
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
                  v-model="userss.iduserNavigation.email"
                />
              </div>
                   <div class="relative block mt-2 sm:mt-0">

                                     <span>Tel: </span>

                <input
                  id="tel"
                  required
                  class="block w-full py-2 pl-8 pr-6 text-xm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  :class="[
                    nom === ''
                      ? ' focus:bg-red-100  focus:border-red-800 '
                      : ' focus:bg-green-100  focus:border-green-800 ',
                  ]"
                  v-model="userss.iduserNavigation.tel"
                />
              </div> 
                    <div class="flex justify-end mt-4">
                      <button
                        class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      >
                        Modifier
                      </button>
                    </div>
                  </form>
                </div>

                
              </div>
            </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["userss"],
  data() {
    return {
      idchauffeur: "",
      codevehicule: "",
      open:false,
      cinchauffeur: "",
      nextpage: 1,
      cetransporteur: "",
      imageFile:null,
      i: 0,
    };
  },
  created() {
    // inserer dans chauffeurscamions les camions sans chauffeur
    axios
      .get(
        "http://localhost:5000/api/Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((response) => {
        this.cetransporteur = response.data.idTransporteur;
      });
  },
  methods: {
    close() {
      this.open=false
      location.replace("chauffeurs");
    },
     FileSelected(event) {
      this.imageFile = event.target.files[0];
      console.log(this.imageFile)
     this.userss.imageSrc=URL.createObjectURL(this.imageFile)

    },
    modifierChauffeur() {
      if (
        this.userss.iduserNavigation.nom != "" &&
        this.userss.iduserNavigation.prenom != "" &&
        this.userss.iduserNavigation.email != "" &&
       this.userss.cinchauffeur != "" 
      ) {
      let user = new FormData();
      user.append("idUser", this.userss.iduser,);
      user.append("Nom", this.userss.iduserNavigation.nom);
      user.append("Prenom",this.userss.iduserNavigation.prenom);
      user.append("Email", this.userss.iduserNavigation.email);
      user.append("motdepasse",this.userss.iduserNavigation.motdepasse);
      user.append("image", this.userss.iduserNavigation.image);
            user.append("tel", this.userss.iduserNavigation.tel);
      user.append("ImageFile", this.imageFile);
      user.append("ImageSrc", "");
      axios
        .put( "http://localhost:5000/api/Users/" + this.userss.iduser, user, {
        })
          .then((response) =>{   
            axios
              .put("http://localhost:5000/api/Chauffeurs/" + this.userss.idchauffeur, {
                idchauffeur:this.userss.idchauffeur,
                Cinchauffeur: this.userss.cinchauffeur,
                Idsociete: localStorage.getItem("societe"),
                Iduser: this.userss.iduser,
              }).then(()=>{
                  this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Chauffeur Modifié",
          showConfirmButton: false,
          timer: 2000,
        });
              location.replace("chauffeurs");

              })
            
              .catch((error) => 
              this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Cin existe",
          showConfirmButton: false,
          timer: 2000,
        })
);
          })
          .catch((error) => 
             this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Email existe déja",
          showConfirmButton: false,
          timer: 2000,
        })
          ); 
      }
    },
  },
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
