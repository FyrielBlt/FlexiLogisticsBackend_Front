<template>
  <header class="
      flex
      items-center
      justify-between
      px-6
      py-2
      bg-white
      border-b-4 border-indigo-600
    ">
    <div id="clock" class="shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110"></div>
    <div id="date" class="shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110">{{ date }}</div>
    <div class="flex items-center">
      <button @click="isOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

      </button>


    </div>
    <div class="flex items-center">

      <div class="relative pr-3 font-semibold">
        {{ this.name + " " + this.prenom }}
      </div>
      <div class="relative">
        <button @click="dropdownOpen = !dropdownOpen" class="
            relative
            z-10
            block
            w-8
            h-8
            overflow-hidden
            rounded-full
            shadow
            focus:outline-none
          ">
          <img class="object-cover w-full h-full" alt="Your avatar" :src="this.image" />
        </button>

        <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 z-10 w-full h-full"></div>

        <transition enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform" leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0">
          <div v-show="dropdownOpen" class="
              absolute
              right-0
              z-20
              w-48
              py-1
              mt-2
              bg-white
              rounded-lg
              shadow-xl
            ">


            <a @click="logout()" class="
                flex
                px-4
                py-2
                rounded-md
                text-sm text-gray-700
                hover:bg-indigo-600 hover:text-white
              " style="cursor: pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Se déconnecter</a>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>


<script>
import { defineComponent } from "vue";
//import { useSidebar } from "../hooks/useSidebar";
import router from "../router";
import { ref } from "vue";
//import { Axios } from "axios";
export default defineComponent({
  data() {
    return {
      dropdownOpen: ref(false),
      isOpen: true,
      notificationOpen: ref(false),
      offres: [],
      name: localStorage.getItem('name'),
      prenom: localStorage.getItem('prenom'),
      image: localStorage.getItem("imagesrc"),
      am_pm: '',
      date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
    };
  },
  created() {
    setInterval(this.showTime, 1000);

  },
  methods: {
    showTime() {
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
      let hr = 0;
      this.am_pm = "AM";

      if (hour > 12) {
        hour -= 12;
        this.am_pm = "PM";
      }
      if (hour == 0) {
        hr = 12;
        this.am_pm = "AM";
      }

      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      let currentTime = hour + ":"
        + min + ":" + sec + this.am_pm;

      document.getElementById("clock")
        .innerHTML = currentTime;
    },
    logout() {

      localStorage.removeItem("token");
      localStorage.removeItem("type");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("nom");
      localStorage.removeItem("prenom");
      localStorage.removeItem("societe");
      localStorage.removeItem("image");
      localStorage.removeItem("iduser");
      localStorage.removeItem("jwt");
      localStorage.removeItem("jwtt");
      localStorage.removeItem("jwtc");
      localStorage.removeItem("clientid");
      localStorage.removeItem("id");
      localStorage.removeItem("idtransporteur");
      localStorage.removeItem("idRole");
      localStorage.removeItem("imagesrc");
      router.push("/");

    },
  },
});
</script>
    <style>
#clock {
  font-size: 15px;
  padding: 2px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  position: relative;
  right: -470px;
  background-color:rgba(250, 235, 215, 0.466);
  -webkit-user-select: none;
}

#clock:hover {
  color: white;
  background-color: rgba(76, 0, 255, 0.541);
}

#date {
  font-size: 15px;
  padding: 2px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  position: relative;
  right: -236px;
  background-color:rgba(250, 235, 215, 0.466);
  -webkit-user-select: none;
}

#date:hover {
  color: white;
  background-color: rgba(0, 131, 207, 0.582);
}
</style>