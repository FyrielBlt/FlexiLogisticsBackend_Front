<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb breadcrumb="Modal" /> -->
    <!-- <button @click="open = true">
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
    </button> -->

    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="Close()"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div
        class="
          z-50
          w-11/12
          mx-auto
          overflow-y-auto
          bg-white
          rounded
          shadow-lg
          modal-container
          md:max-w-md
        "
      >
        <div
          class="
            absolute
            top-0
            right-0
            z-50
            flex flex-col
            items-center
            mt-4
            mr-4
            text-sm text-white
            cursor-pointer
            modal-close
          "
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
          <!-- <span class="text-sm">(Esc)</span> -->
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <!-- ajouter ***************************** -->
        
        <div class="px-6 py-4 text-left modal-content">
          <!--Title-->
          <slot name="ajouter"> </slot> 

               

                <!-- <div v-if="this.error == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500"
                      >Merci de remplir tout les champs</span
                    >
                    <p class="text-sm text-gray-600">error!</p>
                  </div>
                </div>
                <div v-if="this.sucess == true" class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500"
                      >Nouvelle véhicule de transport</span
                    >
                    <p class="text-sm text-gray-600">Ajout réussi!</p>
                  </div>
                </div> -->
              
           
        </div>
        <!-- Ajouter ************************* -->
      </div>
    </div>
     
  </div>
</template>
<script>
export default {
  props:['open'],
  data(){
    return{
     // open:this.malek
    }
  },
  methods:{
    Close(){
      this.$emit("CloseAjouter",false);
    }
  }
}
</script>
