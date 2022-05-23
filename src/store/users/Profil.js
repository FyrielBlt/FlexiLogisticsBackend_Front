import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
const ID = localStorage.getItem('id');
export default {
  state: {
    //liste de EtatDemandeLivraison
    Profil: [],
  },
  getters: {
    //return les EtatDemandeLivraisons
    Profil(state) {
      return state.Profil;
    },
  },
  mutations: {
    // get all
    GetProfil(state, value) {
      state.Profil = value;
    },
    
  },
  actions: {
    // get all
    Get_Profil({ commit }) {
      axios.get(Url + "intermediaires/"+ID, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetProfil', res.data);
        })
    },
  },
};

