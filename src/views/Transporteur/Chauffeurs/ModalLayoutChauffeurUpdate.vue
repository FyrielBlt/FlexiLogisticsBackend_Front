<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Modal" />
    <button @click="open = true" class="mx-2 px-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-green-700"
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

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="px-6 py-4 text-left modal-content">
          <!--Title-->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">Modifier Chauffeur</p>
          </div>
          <!--Body-->
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <div>
                      <label class="text-gray-700" for="image"
                        >Photo de Profil</label
                      >

                      
                       <input type="file" name="pic1" id="pic1" style="display:none;"
          
                  @change="FileSelected($event)"
          />
          <center>

<label for="pic1">
<img  width="250"  height="150" :src="userss.imageSrc" alt="photode profile"  
          />
</label>
          </center>
                    
                        
                     
                    </div>
                    <div>
                      <label class="text-gray-700" for="username">Nom</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"
                        v-model="userss.iduserNavigation.nom"
                      />
                    </div>

                    <div>
                      <label class="text-gray-700" for="emailAddress"
                        >Prenom</label
                      >
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"
                        v-model="userss.iduserNavigation.prenom"
                      />
                    </div>
                    <div>
                      <label class="text-gray-700" for="password">cin</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"
                        v-model="userss.cinchauffeur"
                      />
                    </div>
                    <div>
                      <label class="text-gray-700" for="password">email</label>
                      <input
                        class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text"
                        v-model="userss.iduserNavigation.email"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-end mt-4">
                
                  <button
                    @click="modifierChauffeur"
                    class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Save
                  </button>
                </div>

               
               
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
export default {
  props: ["chauffeurid", "iduserchauff", "userss"],
  data() {
    return {
      idchauffeur: "",
      codevehicule: "",
      open: false,
      cinchauffeur: "",
      nextpage: 1,
      cetransporteur: "",
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
      this.open = false;
      location.replace("chauffeurs");
    },
     FileSelected(event) {
      this.imageFile = event.target.files[0];
      console.log(this.imageFile);
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
