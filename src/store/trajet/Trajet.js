import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de transporteur

    ListeTrajetsAll: [],
    currentTrajet: 1,
    perPageTrajet: 1,
    parPageTrajet: 10,
    totalTrajet: 10,
    ChercherTrajet: "",
    ChercherDepart:"",
    ChercherArrive:"",
    date:"",
    today:""

  },
  getters: {
    
    ListeTrajetsAll(state) {
      return state.ListeTrajetsAll;
    },
    currentTrajet(state) {
      return state.currentTrajet;
    },
    perPageTrajet(state) {
      return state.perPageTrajet;
    },
    parPageTrajet(state) {
      return state.parPageTrajet;
    },
    totalTrajet(state) {
      return state.totalTrajet;
    },

  },
  mutations: {
    // get all d'une page
    GetTrajet(state, value) {
      state.ListeTrajetsAll = value.data;
      state.totalTrajet = parseInt(value.headers["x-wp-total"]);
    },
   
  },
  actions: {
    //get page :
    Get_Trajet({ commit, state }) {
      
      axios.get(Url + `Trajets?page=${state.currentTrajet}&quantityPage=${state.parPageTrajet}&date=${state.date}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajet', res);
        })
    },
    // get noveau page 
    Get_NoveauTrajet({ commit, state }, NumPage) {
      state.currentTrajet = NumPage;
      axios.get(Url + `Trajets?page=${state.currentTrajet}&quantityPage=${state.parPageTrajet}&ville1=${state.ChercherTrajet}&date=${state.date}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        } 
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajet', res);
        })
    },
    Changer_ParpageTrajet({ commit, state }, Parpage) {
      state.currentTrajet = 1;
      state.parPageTrajet = Parpage;
      axios.get(Url + `Trajets?page=${state.currentTrajet}&quantityPage=${state.parPageTrajet}&ville1=${state.ChercherTrajet}&date=${state.date}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajet', res);
        })
    },
    //recherche
    Chercher_Trajett({ commit, state }, chercher) {
      state.currentTrajet = 1;
      console.log(chercher);
    //  state.ChercherTrajet = chercher;
      state.ChercherArrive = chercher.Arrive;
      state.ChercherDepart =chercher.Depart;
      axios.get(Url + `Trajets?page=${state.currentTrajet}&quantityPage=${state.parPageTrajet}&ville1=${state.ChercherDepart}&ville2=${state.ChercherArrive}&date=${state.date}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajet', res);
        })
    },
    // chercherville1
    Chercher_Depart({ commit, state }, chercher) {
      state.currentTrajet = 1;
      state.ChercherArrive ="";
      state.ChercherDepart = chercher.Depart;
      axios.get(Url + `Trajets?page=${state.currentTrajet}&quantityPage=${state.parPageTrajet}&ville1=${state.ChercherDepart}&ville2=${state.ChercherArrive}&date=${state.date}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajet', res);
        })
    },
     // chercherville2
     Chercher_Arrive({ commit, state }, chercher) {
      state.currentTrajet = 1;
      state.ChercherArrive = chercher.Arrive ;
      state.ChercherDepart ="";
      axios.get(Url + `Trajets?page=${state.currentTrajet}&quantityPage=${state.parPageTrajet}&ville1=${state.ChercherDepart}&ville2=${state.ChercherArrive}&date=${state.date}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajet', res);
        })
    },
    Chercher_date({ commit, state }, date) {
      state.currentTrajet = 1;
      // state.ChercherArrive = chercher.Arrive ;
      // state.ChercherDepart ="";
      state.date=date;
      axios.get(Url + `Trajets?page=${state.currentTrajet}&quantityPage=${state.parPageTrajet}&ville1=${state.ChercherDepart}&ville2=${state.ChercherArrive}&date=${state.date}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajet', res);
        })
    },
  },
};
