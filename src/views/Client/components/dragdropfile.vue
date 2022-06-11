<!-- component -->
<template>
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
  <a style="cursor:pointer ;" @click="open = true" v-if="u.payementFile == null" target="_blank"> <span class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-yellow-800
                      bg-yellow-100
                      rounded-full
                    ">
      Upload File</span></a>

  <div :class="`modal ${!open && 'opacity-0 pointer-events-none'
  } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
    <div @click="open = false" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

    <div class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
      <div
        class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
        <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
          viewBox="0 0 18 18">
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="px-6 py-4 text-left modal-content">
        <!--Title-->




        <div @drop="dragFile">
          <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
          <div @dragover.prevent @drop.prevent :class="active">
            <div class="space-y-1 text-center" style="display: flex;
    flex-direction: column;
    align-items: center;">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                aria-hidden="true">
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label for="file-upload"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input multiple @change="uploadFile" id="file-upload" name="file-upload" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>

              </div>
              <p class="text-xs text-gray-500">
              <div>
                <ul>
                  <li>{{ File.name }}</li>
                </ul>
              </div>
              </p>

            </div>

          </div>
        </div>


        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button @click="open = false"
            class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none">
            Close
          </button>
          <button @click="payment(u)"
            class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
            Upload
            <span :hidden="spinner">
              <svg role="status" class="inline w-5 h-5 mr-2 text-gray-200 animate-spin  fill-purple-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import axios from "axios";
import url from "../../../store/Api";
export default {
  props: ["u"],

  data() {
    return {
      open: false,
      File: [],
      active: 'mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md',
      spinner: true
    };
  },
  methods: {
    uploadFile(e) {
      this.File = e.target.files[0];
    },
    payment(u) {
      this.spinner = false
      let facture = new FormData();
      facture.append("idFactClient", u.idFactClient);
      facture.append("etatFacture", "Payé");
      facture.append("idDemandeLivraison", u.idDemandeLivraison);
      facture.append("factureFile", u.factureFile);
      facture.append("payementFile", '');
      facture.append("notification", '');
      facture.append("imageFile", this.File);
      facture.append("srcPayementFile", "");
      axios.put(url + "FactureClients/" + u.idFactClient, facture)
        .then((resp) => {
          this.open = false;
          this.spinner = true
          this.$emit('f', true)

        })

    },
    dragFile(e) {
      this.File = e.dataTransfer.files[0];

    }
  }
}

</script>

<style>
</style>