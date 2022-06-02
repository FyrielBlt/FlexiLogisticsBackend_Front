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
                  <line-chart :data="data"></line-chart>

       
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
       data : [
  {name: 'Offre accepté', data: {'2022-01-01': 3, '2022-01-02': 4,'2022-01-03': 15, '2022-01-04': 0,'2022-01-05': 6, '2022-01-06': 3}},
  {name: 'Offre réfusé', data: {'2022-01-01': 1, '2022-01-02': 5,'2022-01-03': 10, '2022-01-04': 2,'2022-01-05': 6, '2022-01-06': 10}},
  
],
    };
  },
  created() {
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
        "http://localhost:5000/api/Transporteurs/" +
          localStorage.getItem("iduser") +
          "/iduser"
      )
      .then((resp) => {
        axios
          .get(
            "http://localhost:5000/api/DemandeDevis/" +
              resp.data.idTransporteur +
              "/transporteur"
              
          )
          .then((response) => {
            
            this.demandes = response.data;
          })
          .catch((error) => console.log(error));
      });
  },
  methods: {
    supprimerchauffeur(id){
       axios.delete("http://localhost:5000/api/Chauffeurs/"+id)
.then(()=>{

     axios

      .get(
        "http://localhost:5000/api/Chauffeurs/" +
          localStorage.getItem("societe") +
          "/chauffeurs"
      )
      .then((response) => {
        this.chauffeurs = response.data;
        console.log(this.chauffeurs);
      })
      .catch((error) => console.log(error));
 })
    }
    
    
    }}
     
  

  
</script>