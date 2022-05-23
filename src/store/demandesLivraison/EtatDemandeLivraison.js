import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de EtatDemandeLivraison
    ListeEtatDemandeLivraisons: [],
  },
  getters: {
    //return les EtatDemandeLivraisons
    ListeEtatDemandeLivraisons(state) {
      return state.ListeEtatDemandeLivraisons;
    },
  },
  mutations: {
    // get all
    GetEtatDemandeLivraison(state, value) {
      state.ListeEtatDemandeLivraisons = value;
    },
    
  },
  actions: {
    // get all
    Get_EtatDemandeLivraison({ commit }) {
      axios.get(Url + "EtatDemandeLivraisons", {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetEtatDemandeLivraison', res.data);
        })
    },
  },
};

