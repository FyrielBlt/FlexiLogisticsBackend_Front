import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de EtatDemandeLivraison
    ListeEtatDemandeDevis: [],
  },
  getters: {
    //return les EtatDemandeLivraisons
    ListeEtatDemandeDevis(state) {
      return state.ListeEtatDemandeDevis;
    },
  },
  mutations: {
    // get all
    GetEtatDemandeDevi(state, value) {
      state.ListeEtatDemandeDevis = value;
    },
    
  },
  actions: {
    // get all
    Get_EtatDemandeDevi({ commit }) {
      axios.get(Url + "EtatDemandeDevis", {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetEtatDemandeDevi', res.data);
        })
    },
  },
};

