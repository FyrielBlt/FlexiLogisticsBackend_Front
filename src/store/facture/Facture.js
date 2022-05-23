import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    ListeFactures: [],
    livrer: 0,
    achever: 0,
    currentFacture: 1,
    perPageFacture: 1,
    parPageFacture: 5,
    totalFacture: 10,
    filterPayement: null,
    cher:null

  },
  getters: {
    ListeFactures(state) {
      return state.ListeFactures;
    },
    currentFacture(state) {
      return state.currentFacture;
    },
    perPageFacture(state) {
      return state.perPageFacture;
    },
    parPageFacture(state) {
      return state.parPageFacture;
    },
    totalFacture(state) {
      return state.totalFacture;
    },
  },
  mutations: {
    GetFacture(state, value) {
   
      state.ListeFactures = value.data;
      state.totalFacture = parseInt(value.headers["x-wp-total"]);
    },
    //etatdemandelivraison
    GetEtatFacture(state, value) {

      state.livrer = value.filter(el => el.etatDemande == "Livré").map(el => el.idEtatDemande)[0];
      state.achever = value.filter(el => el.etatDemande == "Achevé").map(el => el.idEtatDemande)[0];

    },


  },
  actions: {
    Get_Facture({ commit }, value) {
      commit('GetFacture', value);
    },
    // get noveau page 
    Get_NoveauFacture({ commit, state }, NumPage) {
      state.currentFacture = NumPage;
      axios.get(Url + `DemandeLivraisons?page=${state.currentFacture}&quantityPage=${state.parPageFacture}&sortOrder=${state.filterPayement}&filter=${state.livrer}&filter1=${state.achever}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFacture', res);
        })
    },
    Chercher_order({ commit, state }, filter) {
      console.log("esoooo");
      state.filterPayement = filter;
      state.currentFacture = 1;
      //state.parPageFacture = Parpage;
      axios.get(Url + `DemandeLivraisons?page=${state.currentFacture}&quantityPage=${state.parPageFacture}&sortOrder=${state.filterPayement}&filter=${state.livrer}&filter1=${state.achever}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFacture', res);
        })
    },
    Chercher({ commit, state }, recherche) {
      state.cher=recherche;
      state.currentFacture = 1;
      //state.parPageFacture = Parpage;
      axios.get(Url + `DemandeLivraisons?page=${state.currentFacture}&quantityPage=${state.parPageFacture}&sortOrder=${state.filterPayement}&name=${state.cher}&filter=${state.livrer}&filter1=${state.achever}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFacture', res);
        })
    },
    Changer_ParpageFactureClients({ commit, state }, Parpage) {
      state.currentFacture = 1;
      state.parPageFacture = Parpage;
      axios.get(Url + `DemandeLivraisons?page=${state.currentFacture}&quantityPage=${state.parPageFacture}&sortOrder=${state.filterPayement}&filter=${state.livrer}&filter1=${state.achever}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFacture', res);
        })
    },
    //get etat
    Get_EtatFacture({ commit }, value) {
      commit('GetEtatFacture', value);
    },
  },
};

