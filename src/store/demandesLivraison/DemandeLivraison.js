import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  
  state: {
    //liste de DemandeLivraison
   // ListeDemandeLivraisonsAll:[],
    ListeDemandeLivraisons: [],
    currentDemandeLivraison: 1,
    perPageDemandeLivraison: 1,
    parPageDemandeLivraison: 5,
    totalDemandeLivraison: 10,
    chercheDemande:0,
    date:""
    //chercheDemandeDate:""
    //ClientById:""
  },
  getters: {
    // ClientById(state){
    //   return state.ClientById;
    // },
    //return les DemandeLivraisons
    // ListeDemandeLivraisonsAll(state) {
    //   return state.ListeDemandeLivraisonsAll;
    // },
    
    ListeDemandeLivraisons(state) {
      return state.ListeDemandeLivraisons;
    },
    currentDemandeLivraison(state) {
      return state.currentDemandeLivraison;
    },
    perPageDemandeLivraison(state) {
      return state.perPageDemandeLivraison;
    },
    parPageDemandeLivraison(state) {
      return state.parPageDemandeLivraison;
    },
    totalDemandeLivraison(state) {
      return state.totalDemandeLivraison;
    },
  },
  mutations: {
   // get all
    // GetDemandeLivraisonAll(state, value) {
    //   state.ListeDemandeLivraisonsAll = value;
    // },
     // get all d'une page
     GetDemandeLivraison(state, value) {
      state.ListeDemandeLivraisons = value.data;
      state.totalDemandeLivraison = parseInt(value.headers["x-wp-total"]);
    },
    // GetClientById(state,client){
    //   state.ClientById=client;
    // }
   
  },
  actions: {
    //get page :
    Get_DemandeLivraison({ commit, state }) {
      axios.get(Url + `DemandeLivraisons?page=${state.currentDemandeLivraison}&quantityPage=${state.parPageDemandeLivraison}&date=${state.date}&filter=${state.chercheDemande}&filter1=${0}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetDemandeLivraison', res);
        })
    },
    // get noveau page 
    Get_NoveauDemandeLivraison({ commit, state }, NumPage) {
      state.currentDemandeLivraison = NumPage;
      axios.get(Url + `DemandeLivraisons?page=${state.currentDemandeLivraison}&quantityPage=${state.parPageDemandeLivraison}&date=${state.date}&filter=${state.chercheDemande}&filter1=${0}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetDemandeLivraison', res);
        })
    },
    Changer_ParpageDemandeLivraison({ commit, state }, Parpage) {
      state.currentDemandeLivraison = 1;
      state.parPageDemandeLivraison = Parpage;
      axios.get(Url + `DemandeLivraisons?page=${state.currentDemandeLivraison}&quantityPage=${state.parPageDemandeLivraison}&date=${state.date}&filter=${state.chercheDemande}&filter1=${0}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetDemandeLivraison', res);
        })
    },
    //Chercher DemandeLivraison a l'aide de l'Etat
    Chercher_DemandeLivraisonEtat({ commit, state }, chercher) {
      state.currentDemandeLivraison = 1;
      state.chercheDemande = chercher;
      axios.get(Url + `DemandeLivraisons?page=${state.currentDemandeLivraison}&quantityPage=${state.parPageDemandeLivraison}&date=${state.date}&filter=${state.chercheDemande}&filter1=${0}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetDemandeLivraison', res);
        })
    },
    Chercher_date({ commit, state }, date) {
      state.currentTrajet = 1;
      // state.ChercherArrive = chercher.Arrive ;
      // state.ChercherDepart ="";
      state.date=date;
      axios.get(Url +`DemandeLivraisons?page=${state.currentDemandeLivraison}&quantityPage=${state.parPageDemandeLivraison}&date=${state.date}&filter=${state.chercheDemande}&filter1=${0}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetDemandeLivraison', res);
        })
    },
  },
    //get client by id
    // Get_Client_By_Id({commit},id){
    //   axios.get(Url + `Clients/`+id, {
    //     headers: {
    //       Authorization: 'Bearer ' + Token
    //     }
    //   })
    //     .then(res => {
    //       //  let tot=parseInt(res.headers["x-wp-total"]);
    //       commit('GetClientById', res.data);
    //     })
    // },
     //Chercher DemandeLivraison a l'aide du date
    // Chercher_DemandeLivraisonDate({ commit, state }, date) {
    //   state.currentDemandeLivraison = 1;
    //   state.chercheDemandeDate = date;
    //   axios.get(Url + `DemandeLivraisons?page=${state.currentDemandeLivraison}&quantityPage=${state.parPageDemandeLivraison}&filter=${0}&filter1=${0}&date=${state.chercheDemandeDate}`, {
    //     headers: {
    //       Authorization: 'Bearer ' + Token
    //     }
    //   })
    //     .then(res => {
    //       //  let tot=parseInt(res.headers["x-wp-total"]);
    //       commit('GetDemandeLivraison', res);
    //     })
    // },
    // get all
    // Get_DemandeLivraison_All({ commit }) {
    //   axios.get(Url + "DemandeLivraisons", {
    //     headers: {
    //       Authorization: 'Bearer ' + Token
    //     }
    //   })
    //     .then(res => {
    //       commit('GetDemandeLivraisonAll', res.data);
    //     })
    // },
   
  
};
