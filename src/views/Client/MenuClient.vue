<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <side-bar :isOpen="isOpen" @open="openSideBare($event)" >
      <template v-slot:menu>
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          GENERAL
        </p>
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4" :class="[
          $route.name === 'DashboardClient' ? activeClass : inactiveClass,
        ]" to="/client/DashboardClient" @click="fermerSide()">
                  <i class="bi bi-bank2"></i>


          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Profile' ? activeClass : inactiveClass]" to="/client/profile" @click="fermerSide()">
                 
         <i class="bi bi-file-earmark-person"></i>

          <span class="mx-4">Profil</span>
        </router-link>
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          GESTION
        </p>
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Client' ? activeClass : inactiveClass]" to="/client/clients" @click="fermerSide()">
                        <i class="bi bi-people-fill"></i>


          <span class="mx-4">Personnels</span>
        </router-link>
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Demande' ? activeClass : inactiveClass]" to="/client/demande" @click="fermerSide()">
                  <i class="bi bi-box2-heart-fill"></i>

          <span class="mx-4">Demandes</span>
        </router-link>
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Offres' ? activeClass : inactiveClass]" to="/client/offres" @click="fermerSide()">
                  <i class="bi bi-bell"></i>


          <span class="mx-4">Offres Récues</span>
        </router-link>
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          PAYEMENT
        </p>
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Facture' ? activeClass : inactiveClass]" to="/client/facture" @click="fermerSide()">
          <svg version="1.1" width="24px" height="24px" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path fill="currentColor" d="M418.472,68.409H25.119C11.268,68.409,0,79.677,0,93.528v256.534c0,13.851,11.268,25.119,25.119,25.119h247.983
			c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H25.119c-5.01,0-9.086-4.076-9.086-9.086V93.528
			c0-5.01,4.076-9.086,9.086-9.086h393.353c5.01,0,9.086,4.076,9.086,9.086v111.167c0,4.427,3.589,8.017,8.017,8.017
			c4.427,0,8.017-3.589,8.017-8.017V93.528C443.591,79.677,432.323,68.409,418.472,68.409z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M401.37,222.33c-61.002,0-110.63,49.629-110.63,110.63s49.629,110.63,110.63,110.63S512,393.962,512,332.96
			S462.371,222.33,401.37,222.33z M401.37,427.557c-52.161,0-94.597-42.436-94.597-94.597s42.436-94.597,94.597-94.597
			s94.597,42.436,94.597,94.597S453.53,427.557,401.37,427.557z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M136.284,128.267H67.875c-9.136,0-16.568,7.432-16.568,16.568v51.307c0,9.136,7.432,16.568,16.568,16.568h68.409
			c9.136,0,16.568-7.432,16.568-16.568v-51.307C152.852,135.699,145.42,128.267,136.284,128.267z M85.511,196.676H67.875
			c-0.295,0-0.534-0.239-0.534-0.534v-51.307c0-0.295,0.239-0.534,0.534-0.534h17.637V196.676z M136.818,196.142
			c0,0.295-0.239,0.534-0.534,0.534h-34.739v-18.171h9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-9.086
			v-18.171h34.739c0.295,0,0.534,0.239,0.534,0.534V196.142z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M345.787,119.716c-9.467,0-18.278,2.851-25.632,7.729c-7.571-5.017-16.489-7.729-25.675-7.729
			c-25.638,0-46.497,20.858-46.497,46.497s20.858,46.497,46.497,46.497c9.47,0,18.284-2.853,25.641-7.735
			c7.572,5.013,16.499,7.735,25.666,7.735c25.638,0,46.497-20.858,46.497-46.497S371.426,119.716,345.787,119.716z M308.114,193.443
			c-4.106,2.064-8.735,3.233-13.634,3.233c-16.798,0-30.463-13.666-30.463-30.463s13.666-30.464,30.463-30.464
			c4.781,0,9.448,1.127,13.652,3.234c-5.555,7.66-8.842,17.065-8.842,27.229C299.29,176.098,302.435,185.591,308.114,193.443z
			 M345.787,196.676c-4.773,0-9.444-1.129-13.65-3.237c5.554-7.66,8.84-17.064,8.84-27.227c0-4.427-3.589-8.017-8.017-8.017
			s-8.017,3.589-8.017,8.017c0,6.037-1.772,11.666-4.814,16.404c-3.102-4.849-4.806-10.52-4.806-16.404
			c0-16.798,13.666-30.464,30.463-30.464s30.464,13.666,30.464,30.464S362.585,196.676,345.787,196.676z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M127.733,256.534H59.324c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h68.409
			c4.427,0,8.017-3.589,8.017-8.017S132.16,256.534,127.733,256.534z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M264.551,307.841H59.324c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h205.228
			c4.427,0,8.017-3.589,8.017-8.017S268.979,307.841,264.551,307.841z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M230.347,256.534h-68.409c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h68.409
			c4.427,0,8.017-3.589,8.017-8.017S234.774,256.534,230.347,256.534z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M281.653,256.534h-17.102c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.102
			c4.427,0,8.017-3.589,8.017-8.017S286.081,256.534,281.653,256.534z" />
              </g>
            </g>
            <g>
              <g>
                <path fill="currentColor" d="M466.896,293.087c-3.131-3.131-8.207-3.131-11.337,0l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0
			c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348l76.96-76.96
			C470.027,301.293,470.027,296.218,466.896,293.087z" />
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
          </svg>

          <span class="mx-4">Facture</span>
        </router-link>
      </template>
    </side-bar>

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header @openSide="openSideBare($event)" />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="mx-auto px-6 py-8">

          <router-view />

        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar.vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "Menu",
  components: {
    SideBar,
    Header,
    Footer,
  },
  data() {
    return {
      activeClass: "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100",
      inactiveClass:
        "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100",
        isOpen:false,
    };
  },
  methods:{
fermerSide(){
       this.isOpen=false;
    },
    openSideBare(e){
        this.isOpen=e; 
    },
  }
};
</script>
