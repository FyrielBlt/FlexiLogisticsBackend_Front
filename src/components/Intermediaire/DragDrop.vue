<!-- component -->
<template>
  <!-- {{client}} -->
  <a
    style="cursor: pointer"
    @click="open = true"
    v-if="client == null"
    target="_blank"
  >
    <span
      class="
        inline-flex
        px-2
        text-xs
        font-semibold
        leading-5
        text-yellow-800
        bg-yellow-100
        rounded-full
      "
    >
      Upload File</span
    ></a
  >
  <a v-else :href="client.srcFactureFile" target="_blank">
    <span
      class="
        inline-flex
        px-2
        text-xs
        font-semibold
        leading-5
        text-blue-800
        bg-blue-100
        rounded-full
      "
    >
      Download</span
    ></a
  >

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
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="px-6 py-4 text-left modal-content">
        <!--Title-->

        <div @drop="dragFile">
          <label class="block text-sm font-medium text-gray-700">
            Cover photo
          </label>
          <div @dragover.prevent @drop.prevent :class="active">
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="
                    relative
                    cursor-pointer
                    bg-white
                    rounded-md
                    font-medium
                    text-indigo-600
                    hover:text-indigo-500
                    focus-within:outline-none
                    focus-within:ring-2
                    focus-within:ring-offset-2
                    focus-within:ring-indigo-500
                  "
                >
                  <span>Upload a file</span>
                  <input
                    multiple
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                    @change="uploadFile($event)"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <div class="text-xs text-gray-500">
                <div>
                  <ul>
                    <li>{{ imageFile.name }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button
            @click="open = false"
            class="
              p-3
              px-6
              py-3
              mr-2
              text-indigo-500
              bg-transparent
              rounded-lg
              hover:bg-gray-100 hover:text-indigo-400
              focus:outline-none
            "
          >
            Close
          </button>
          <button
            @click="upload()"
            class="
              px-6
              py-3
              font-medium
              tracking-wide
              text-white
              bg-indigo-600
              rounded-md
              hover:bg-indigo-500
              focus:outline-none
            "
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Url from "../../store/Api";
export default {
  props: ["client", "id"],

  data() {
    return {
      open: false,
      imageFile: [],
      active:
        "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",
    };
  },
  methods: {
    uploadFile(event) {
      this.imageFile = event.target.files[0];
      this.active =
        "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-gray-200";

      console.log(event.target.files[0]);
      //this.imageFile = e.target.files;
    },
    upload() {
     // console.log(this.imageFile);
        let facture = new FormData();
        facture.append("etatFacture","Non payé");
        facture.append("idDemandeLivraison",this.id);
        facture.append("factureFile","");
        //facture.append("PayementFile",null);
        facture.append("imageFile", this.imageFile);
        facture.append("SrcFactureFile", "");
       axios
          .post(Url + "FactureClients", facture, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then(res=>{
           // this.file=res.data;
                this.open = false;
            console.log(res.data);
             this.$emit("f", true);
          });
    },
    dragFile(e) {
      this.imageFile = e.dataTransfer.files[0];
      this.active =
        "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-gray-200";

      console.log(this.imageFile);
    },
  },
};
</script>

<style>
</style>