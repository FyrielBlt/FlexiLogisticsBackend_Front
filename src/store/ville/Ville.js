import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de transporteur

    ListeVilles: [],
    currentVille: 1,
    perPageVille: 1,
    parPageVille: 3,
    totalVille: 10,
    ChercherVille: ""

  },
  getters: {
    
    ListeVilles(state) {
      return state.ListeVilles;
    },
    currentVille(state) {
      return state.currentVille;
    },
    perPageVille(state) {
      return state.perPageVille;
    },
    parPageVille(state) {
      return state.parPageVille;
    },
    totalVille(state) {
      return state.totalVille;
    },

  },
  mutations: {
    // get all d'une page
    GetVille(state, value) {
      state.ListeVilles = value.data;
      state.totalVille = parseInt(value.headers["x-wp-total"]);
    },
    
    // supprimer 
    DeleteVille(state, Ville) {
      state.ListeVilles.splice(state.ListeVilles.indexOf(Ville), 1);
      axios.delete(Url + "Villes/" + Ville.idVille, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
      
    },
    // Modifier
    ModifierVille(state, Ville) {
      Ville.idIntermediaire = localStorage.getItem("id");
      state.ListeVilles[Ville.index] = Ville;
      //modifier intermediaire


      // modifier users
      axios
        .put(Url + "Villes/" + Ville.idVille, Ville, {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        })
        .then()
        .catch((rer) => console.log(rer));

    },
    // Ajouter
    AjouterVille(state, Ville) {
      Ville.idIntermediaire = localStorage.getItem("id");


      // console.log(user);

      axios.post(Url + "Villes", Ville, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then(res => {
        // console.log(res.data);


        state.ListeVilles.push(res.data);
        //console.log(intermediaireAjouter);
      });


      // axios.post(Url + "Transporteurs", transporteur, {
      //     headers: {
      //         Authorization: 'Bearer ' + Token
      //     }
      // }).then(res => {
      //     state.ListeTransporteurs.push(res.data);
      // });
    }
  },
  actions: {
    //get page :
    Get_Ville({ commit, state }) {
      axios.get(Url + `Villes?page=${state.currentVille}&quantityPage=${state.parPageVille}&ville=${state.ChercherVille}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetVille', res);
        })
    },
    // get noveau page 
    Get_NoveauVille({ commit, state }, NumPage) {
      state.currentVille = NumPage;
      axios.get(Url + `Villes?page=${state.currentVille}&quantityPage=${state.parPageVille}&ville=${state.ChercherVille}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        } 
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetVille', res);
        })
    },
    Changer_ParpageVille({ commit, state }, Parpage) {
      state.currentVille = 1;
      state.parPageVille = Parpage;
      axios.get(Url + `Villes?page=${state.currentVille}&quantityPage=${state.parPageVille}&ville=${state.ChercherVille}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetVille', res);
        })
    },
    //recherche
    Chercher_Ville({ commit, state }, chercher) {
      state.currentVille = 1;
      state.ChercherVille = chercher;
      axios.get(Url + `Villes?page=${state.currentVille}&quantityPage=${state.parPageVille}&ville=${state.ChercherVille}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetVille', res);
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
    Delete_Ville({ commit }, Ville) {
      commit('DeleteVille', Ville);
    },
    // modifier
    Modifier_Ville({ commit }, value) {
      commit('ModifierVille', value);
    },
    // Ajouter
    Ajouter_Ville({ commit }, Ville) {
      console.log(Ville);
      commit('AjouterVille', Ville);
    },
  },
};
