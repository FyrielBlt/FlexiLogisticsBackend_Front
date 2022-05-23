import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de EtatOffre
    ListeEtatOffres: [],
  },
  getters: {
    //return les EtatOffres
    ListeEtatOffres(state) {
      return state.ListeEtatOffres;
    },
  },
  mutations: {
    // get all
    GetEtatOffre(state, value) {
      state.ListeEtatOffres = value;
    },
    
  },
  actions: {
    // get all
    Get_EtatOffre({ commit }) {
      axios.get(Url + "EtatOffres", {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetEtatOffre', res.data);
        })
    },
  },
};

