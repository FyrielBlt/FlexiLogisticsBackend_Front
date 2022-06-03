<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <side-bar>
      <!--  -->
      <template v-slot:menu>
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          GENERAL
        </p>
         <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="dashboardTransporteur"
        >
         <i class="bi bi-bank2"></i>
          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'profil' ? activeClass : inactiveClass]"
          to="profil"
        >
         <i class="bi bi-file-earmark-person"></i>
          <span class="mx-4">Profil</span>
        </router-link>
       <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          GESTION
        </p>
  <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'Transporteurs' ? activeClass : inactiveClass,
          ]"
          to="itetiaires"
        
        >
         <i class="bi bi-building"></i>
          <span class="mx-4">Villes</span>
        </router-link>
           <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'Transporteurs' ? activeClass : inactiveClass,
          ]"
          to="chauffeurs"
        
        >
          <i class="bi bi-people-fill"></i>
          <span class="mx-4">Chauffeurs</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Camions' ? activeClass : inactiveClass]"
          to="camions"
         
        >
         <i class="bi bi-truck"></i>
          <span class="mx-4">Camions</span>
        </router-link>
          <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Trajets' ? activeClass : inactiveClass]"
          to="trajets"
         
        >
         <i class="bi bi-minecart"></i>

          <span class="mx-4">Trajets</span>
        </router-link>
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          TRAITEMENT
        </p>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'Transporteurs' ? activeClass : inactiveClass,
          ]"
          to="demandechauffeur"
         
        >
         <i class="bi bi-bell"></i>

          <span class="mx-4">Demande</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'Transporteurs' ? activeClass : inactiveClass,
          ]"
          to="offreschauffeur"
         
        >
         <i class="bi bi-box2-heart-fill"></i>
          <span class="mx-4">Offre</span>
        </router-link>
         <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'facturesTransporteur' ? activeClass : inactiveClass]"
          to="facturesTransporteur"
        >
         <i class="bi bi-receipt"></i>

          <span class="mx-4">Facture</span>
        </router-link>
      </template>
<!--        -->
    </side-bar>

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import SideBar from "/src/components/SideBar.vue";
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
export default {
  name: "MenuTransporteur",
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
    };
  },
};
</script>
