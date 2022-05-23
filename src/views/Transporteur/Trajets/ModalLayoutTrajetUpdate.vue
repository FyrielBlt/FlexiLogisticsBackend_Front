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
            <p class="text-2xl font-bold">Modifier Trajet</p>
          </div>
          <!--Body-->
          <div class="mt-8">
            <div class="mt-4">
              <div class="p-6 bg-white rounded-md shadow-md">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                     <form @submit.prevent="ModifierTrajet" >
                       
                   
 <div>
                  <label class="text-gray-700" for="passwordConfirmation"
                    >ville départ
                  </label>
                  <select
                    class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  >
                    <option selected disabled>
                      {{ trajettable.idVille1}}
                    </option>
                  </select>
                </div>
                 <div>
                  <label class="text-gray-700" for="passwordConfirmation"
                    >Destination 
                  </label>
                  <select
                    class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  >
                     <option selected disabled>
                      {{ trajettable.idVille2}}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="text-gray-700" for="passwordConfirmation"
                    >Date/heure
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    width="300px"  
                    v-model="dateheure"
                    :min="this.today"
                    required
                  />
                </div>
                <div class="flex justify-end mt-4">
                  <button
                    class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Save
                  </button>
                </div>
                  </form>
                  </div>
                </div>

                <div v-if="this.error == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500"
                      >Date occupé</span
                    >
                  </div>
                </div>
                <div v-if="this.sucess == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500"
                      >Modifiaction Réussi</span
                    >
                  </div>
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
  props: ["trajettable"],
  data() {
    return {
      open: false,
      exists:'',
      sucess: false,
      error: false,
      dateheure:'',
      today:new Date().toISOString().substr(0,10)+"T00:00:00.000",
    };
  },
  methods: {
      ModifierTrajet(){
         axios
        .get(
          "http://localhost:5000/api/Trajets/" +
            localStorage.getItem("moncamion") +
            "/camion" +
            "?date=" +
            this.dateheure.toString().substr(0,10)
            )
        .then((resp) => {
          console.log(resp.data)
            this.exists=resp.data.length
 if(this.exists!=0){
            this.$swal({
          position: "top-end",
          icon: "error",
          toast: true,
          title: "Camion occupé dans ce date",
          showConfirmButton: false,
          timer: 2000,
        })
 }
else{
 axios
          .put(
            "http://localhost:5000/api/Trajets/" + this.trajettable.idTrajet,
            {
                idTrajet:this.trajettable.idTrajet,
              idVille1: this.trajettable.idVille1,
             idVille2: this.trajettable.idVille2,
             idCamion: localStorage.getItem("moncamion"),
            date: this.dateheure.toString().substr(0,10),
             heurdepart:this.dateheure.toString().substr(11,16)
            }
          )
          .then(() => {
             this.$swal({
          position: "top-end",
          icon: "success",
          toast: true,
          title: "Date Trajet modifié ",
          showConfirmButton: false,
          timer: 2000,
        });
            // location.replace("chauffeurs");
          })
          .catch((error) => console.log(error));
      }
})}
        
          
  },
}
 

</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
