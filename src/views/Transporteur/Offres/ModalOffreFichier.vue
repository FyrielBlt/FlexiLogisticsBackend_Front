<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Modal" />


    <button @click="open = true" 
                    class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-blue-800
                      bg-blue-100
                                            border-8 border-blue-600 

                    " v-if="u.fileOffre.length> 0">{{u.fileOffre.length}} Fichier(s) </button>

    <button disabled class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-red-800
                      bg-red-100
                      border-8 border-red-600 
                    " v-else>
      0 Fichier</button>
    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="open = false"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        style="background-color: #ff000000"
      ></div>

      <div
        class="z-50 w-full mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
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
            <p class="text-2xl font-bold">Fichiers</p>
            <div class="z-50 cursor-pointer modal-close" @click="open = false">
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>
          <!--Body-->
          <div class="flex justify-center">
            <ul
              class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900"
            >
              <li
                v-for="file in u.fileOffre"
                :key="file"
                class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
              >
                {{ file.nomFile }}
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: solid/paper-clip -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate"
                    >{{ file.nomFile }}
                  </span>
                </div>
                <a
                  :href="file.srcOffreFile"
                  target=" _blank"
                  class="bg-black ml-20 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Télécharger
                </a>
              </li>
            </ul>
          </div>
          <!--Body-->

          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button
              @click="open = false"
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["u"],

  data() {
    return {
      open: false,
    };
  },
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
