<template>
  <div>
    <!-- <Breadcrumb breadcrumb="" /> -->
    <!--Banner get you to github repo-->
    <!-- <Banner /> -->
    <div class="mt-4">
      <div   class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3 ">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
             <i class="bi bi-people-fill"></i>
            </div>

            <div class="mx-5 animate__animated animate__fadeInDown" >
              <h4 class="text-2xl font-semibold text-gray-700">
              {{ this.chauffeurs.length }}
              </h4>
              <div class="text-gray-500">Chauffeurs</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0 animate__animated animate__bounceIn">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
            <i class="bi bi-truck"></i>
            </div>
            
            <div class="mx-5 animate__animated animate__fadeInDown">
              <h4 class="text-2xl font-semibold text-gray-700">
{{ this.camions.length }}

              </h4>
              <div class="text-gray-500">Camions</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0 ">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
             <i class="bi bi-bell-fill"></i>
            </div>

            <div class="mx-5 animate__animated animate__fadeInDown">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ this.demandes.length }}
              </h4>
              <div class="text-gray-500">Demandes Non Traités</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8"></div>

    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 animate__animated animate__zoomIn">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >

                    <line-chart :data="web()"></line-chart>

      <pie-chart width="580px" :donut="true" :data="pie()"></pie-chart>

  

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";


export default {
  components: {
    
  },
  data() {
    return {
      chauffeurs: [],
      camions:[],
      demandes:[],
      offretotal:[],
      offreaccepte:[],
       offrerefuse:[]
    };
  },
  created() {
    
     
    axios
      .get("http://localhost:5000/api/offres/" +localStorage.getItem('idtransporteur')+"/offrestransporteur"
      )
      .then((response) =>{
        this.offretotal= response.data;
      })
      axios
      .get("http://localhost:5000/api/offres/" +localStorage.getItem('idtransporteur')+"/offrestransporteur"
      +"?etat=Accepte"
      
      )
      .then((response) =>{
        this.offreaccepte= response.data;
      })
       axios
      .get("http://localhost:5000/api/offres/" +localStorage.getItem('idtransporteur')+"/offrestransporteur"
      +"?etat=Refuse"
      
      )
      .then((response) =>{
        this.offrerefuse= response.data;
      })
     
    axios
      .get(
        "http://localhost:5000/api/Chauffeurs/" +
          localStorage.getItem("societe") +
          "/chauffeurs"
      )
      .then((response) => {
        this.chauffeurs = response.data;
      })
      .catch((error) => console.log(error));
        axios
      .get(
        "http://localhost:5000/api/Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((response) => {
        axios
          .get(
            "http://localhost:5000/api/Camions/" + response.data.idTransporteur
          )
          .then((response) => {
            this.camions = response.data;
            console.log(this.camions);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
      
        axios
          .get(
            "http://localhost:5000/api/DemandeDevis/" +
              localStorage.getItem('idtransporteur') +
              "/transporteur"
              
          )
          .then((response) => {
            
            this.demandes = response.data;
          })
          .catch((error) => console.log(error));
  
  },
  methods: {
    pie() {
      let liste = [];
      liste.push(['Offre accepté',this.offreaccepte.length])
      liste.push(['Offre réfusé',this.offrerefuse.length])
      return liste;
    },
      timeFrom(X) {
      var dates = [];
      for (let I = 0; I < Math.abs(X); I++) {
        dates.push(
          new Date(
            new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
          ).getFullYear() +
            "-" +
            (
              new Date(
                new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
              ).getMonth() + 1
            )
              .toString()
              .padStart(2, "0") +
            "-" +
            new Date(
              new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
            )
              .getDate()
              .toString()
              .padStart(2, "0")
        );
      }

      return dates;
    },
     web() {
      let liste = [];
      var j1 = this.timeFrom(7)[0];
      var j2 = this.timeFrom(7)[1];
      var j3 = this.timeFrom(7)[2];
      var j4 = this.timeFrom(7)[3];
      var j5 = this.timeFrom(7)[4];
      var j6 = this.timeFrom(7)[5];
      var j7 = this.timeFrom(7)[6];
      var data = {
        [j7]: this.demandes.filter(
          (el) => el.dateEnvoit.substr(0, 10) == j7
        ).length,
        [j6]: this.demandes.filter(
          (el) => el.dateEnvoit.substr(0, 10) == j6
        ).length,
        [j5]: this.demandes.filter(
          (el) => el.dateEnvoit.substr(0, 10) == j5
        ).length,
        [j4]: this.demandes.filter(
          (el) => el.dateEnvoit.substr(0, 10) == j4
        ).length,
        [j3]: this.demandes.filter(
          (el) => el.dateEnvoit.substr(0, 10) == j3
        ).length,
        [j2]: this.demandes.filter(
          (el) => el.dateEnvoit.substr(0, 10) == j2
        ).length,
        [j1]: this.demandes.filter(
          (el) => el.dateEnvoit.substr(0, 10) == j1
        ).length,
      };
       var offretotal = {
        [j7]: this.offretotal.filter(
          (el) => el.datecreation.substr(0, 10) == j7
        ).length,
        [j6]: this.offretotal.filter(
          (el) => el.datecreation.substr(0, 10) == j6
        ).length,
        [j5]: this.offretotal.filter(
          (el) => el.datecreation.substr(0, 10) == j5
        ).length,
        [j4]: this.offretotal.filter(
          (el) => el.datecreation.substr(0, 10) == j4
        ).length,
        [j3]: this.offretotal.filter(
          (el) => el.datecreation.substr(0, 10) == j3
        ).length,
        [j2]: this.offretotal.filter(
          (el) => el.datecreation.substr(0, 10) == j2
        ).length,
        [j1]: this.offretotal.filter(
          (el) => el.datecreation.substr(0, 10) == j1
        ).length,
      };
      var ob = {
        name: "Demande Livraison par jour",
        data: data,
        
      };
      var ob2 = {
        name: "Offre envoyé par jour",
        data: offretotal,
        
      };
     
     
      liste.push(ob);
      liste.push(ob2);

      return liste;
    },
    
    }}
     
  

  
</script>