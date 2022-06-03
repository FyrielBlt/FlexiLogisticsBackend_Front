import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de transporteur
    ListeSocietesAll: [],
    ListeSocietes: [],
    currentSociete: 1,
    perPageSociete: 1,
    parPageSociete: 10,
    totalSociete: 10,
    ChercherSociete: ""

  },
  getters: {
    
    ListeSocietesAll(state) {
      return state.ListeSocietesAll;
    },
    ListeSocietes(state) {
      return state.ListeSocietes;
    },
    currentSociete(state) {
      return state.currentSociete;
    },
    perPageSociete(state) {
      return state.perPageSociete;
    },
    parPageSociete(state) {
      return state.parPageSociete;
    },
    totalSociete(state) {
      return state.totalSociete;
    },

  },
  mutations: {
    // get all d'une page
    GetSociete(state, value) {
      state.ListeSocietes = value.data;
      state.totalSociete = parseInt(value.headers["x-wp-total"]);
    },
    GetSocieteAll(state, value) {
      state.ListeSocietesAll = value.data;   
    },
    
    // supprimer 
    DeleteSociete(state, societe) {
      console.log(societe)
      state.ListeSocietes.splice(state.ListeSocietes.indexOf(societe), 1);
      axios.delete(Url + "Societes/" + societe.idSociete, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
      
    },
    // Modifier
    ModifierSociete(state, societe) {
      // Ville.idIntermediaire = localStorage.getItem("id");
      // state.ListeVilles[Ville.index] = Ville;
      //modifier intermediaire


      // modifier users
     // console.log(societe)
     var index=societe.get('image');
     console.log(index)
      axios
        .put(Url + "Societes/" + societe.get('idSociete'), societe, {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        })
        .then(res=>{
          console.log(res.data);
          state.ListeSocietes[index] = res.data;
        })
        .catch((rer) => console.log(rer));

    },
    // Ajouter
    AjouterSociete(state, Societe) {
     
      axios.post(Url + "Societes", Societe, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then(res => {
       state.ListeSocietes.push(res.data);     
      });


     
    }
  },
  actions: {
    //get page :
    Get_Societe({ commit, state }) {
      axios.get(Url + `Societes?page=${state.currentSociete}&quantityPage=${state.parPageSociete}&societe=${state.ChercherSociete}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetSociete', res);
        })
    },
    Get_Societe_All({ commit, state }) {
      axios.get(Url + 'Societes', {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetSocieteAll', res);
        })
    },
    // get noveau page 
    Get_NoveauSociete({ commit, state }, NumPage) {
      state.currentSociete = NumPage;
      axios.get(Url + `Societes?page=${state.currentSociete}&quantityPage=${state.parPageSociete}&societe=${state.ChercherSociete}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        } 
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetSociete', res);
        })
    },
    Changer_ParpageSociete({ commit, state }, Parpage) {
      state.currentSociete = 1;
      state.parPageSociete = Parpage;
      axios.get(Url +  `Societes?page=${state.currentSociete}&quantityPage=${state.parPageSociete}&societe=${state.ChercherSociete}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetSociete', res);
        })
    },
    //recherche
    Chercher_Societe({ commit, state }, chercher) {
      state.currentSociete = 1;
      state.ChercherSociete = chercher;
      axios.get(Url +  `Societes?page=${state.currentSociete}&quantityPage=${state.parPageSociete}&societe=${state.ChercherSociete}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetSociete', res);
        })
    },
    //get all
    // Get_Transporteur_All({ commit }) {
    //     axios.get(Url + "Transporteurs", {
    //         headers: {
    //             Authorization: 'Bearer ' + Token
    //         }
    //     })
    //         .then(res => {
    //             console.log(res.data);
    //             commit('GetTransporteurAll', res.data);
    //         })
    // },
    // delete
    Delete_Societe({ commit }, Societe) {
      commit('DeleteSociete', Societe);
    },
    // modifier
    Modifier_Societe({ commit }, value) {
      commit('ModifierSociete', value);
    },
    // Ajouter
    Ajouter_Societe({ commit }, Societe) {
      
      commit('AjouterSociete', Societe);
    },
  },
};
