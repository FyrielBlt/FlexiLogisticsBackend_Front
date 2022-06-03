import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de transporteur
    ListeTransporteursAll: [],
    ListeTransporteurs: [],
    currentTransporteur: 1,
    perPageTransporteur: 1,
    parPageTransporteur: 10,
    totalTransporteur: 10,
    ChercherTransporteur: "",
    // trajet
    ChercherVille1: "",
    ChercherVille2: ""

  },
  getters: {
    //return les transporteurs
    ListeTransporteursAll(state) {
      return state.ListeTransporteursAll;
    },
    ListeTransporteurs(state) {
      return state.ListeTransporteurs;
    },
    currentTransporteur(state) {
      return state.currentTransporteur;
    },
    perPageTransporteur(state) {
      return state.perPageTransporteur;
    },
    parPageTransporteur(state) {
      return state.parPageTransporteur;
    },
    totalTransporteur(state) {
      return state.totalTransporteur;
    },
    //trajet
    ListeTrajets(state) {
      return state.ListeTrajets;
    },
    ChercherVille1(state) {
      return state.ChercherVille1;
    },
    ChercherVille2(state) {
      return state.ChercherVille2;
    },

  },
  mutations: {
    //trajet
    GetTrajett(state, value) {
     
      //state.ListeTrajets = value.data;
      state.ListeTransporteurs = value.data
        .map(el => el.idTransporteurNavigation);
         // supprimer repetition
         state.ListeTransporteurs = state.ListeTransporteurs.filter((obj, pos, arr) => {
          return arr.map(mapObj =>
                mapObj.idTransporteur).indexOf(obj.idTransporteur) == pos;
          });
        
         // supprimer repetition
      state.totalTransporteur = parseInt(value.headers["x-wp-total"]);

    },
    //   ModifierTransporteurTrajet(state, value) {   
    //     console.log(value);       
    //     state.ListeTransporteurs = value;

    // },
    // get all d'une page
    GetTransporteur(state, value) {
      state.ListeTransporteurs = value.data;
      state.totalTransporteur = parseInt(value.headers["x-wp-total"]);
    },
    GetTransporteurAll(state, value) {
      state.ListeTransporteursAll = value;
    },
    // supprimer 
    DeleteTransporteur(state, transporteur) {
      state.ListeTransporteurs.splice(state.ListeTransporteurs.indexOf(transporteur), 1);
      axios.delete(Url + "Transporteurs/" + transporteur.idTransporteur, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
      axios.delete(Url + "Users/" + transporteur.idUser, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
    },
    // Modifier
    ModifierTransporteur(state, user) {
      // state.ListeTransporteurs[transporteur.index] = transporteur;
      // modifier users
     // console.log(user.get("idUser"));
      // axios
      //   .put(Url + "users/" + user.idUserNavigation.get("idUser"), user.idUserNavigation, {
      //     headers: {
      //       Authorization: 'Bearer ' + Token
      //     }
      //   })
      //   .then(res => {
         // user.idUserNavigation=res.data;
        //  user.imageSrc=res.data.imageSrc;
          state.ListeTransporteurs[user.index] = user;
          //console.log(user);
        // });
        // .catch((rer) => console.log(rer));

    },
    // Ajouter
    AjouterTransporteur(state, transporteur) {
    
    
      // axios.post(Url + "users", transporteur, {
      //   headers: {
      //     Authorization: 'Bearer ' + Token
      //   }
      // }).then(res => {
        console.log(transporteur);
        let UserAjouter =transporteur;
        var Transporteur = {
          "idUser": transporteur.idUser,
        };

        axios.post(Url + "Transporteurs", Transporteur, {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        }).then(res => {
          let TransporteurAjouter = res.data;
          console.log(UserAjouter.imageSrc)
          TransporteurAjouter.imageSrc = UserAjouter.imageSrc;
          TransporteurAjouter.idUserNavigation = UserAjouter;
          state.ListeTransporteurs.push(TransporteurAjouter);

        });
      // });


    }
  },
  actions: {
    //Chercher transporteur a l'aide nom , ville1 ville2 
    Chercher_Trajet({ commit, state }, chercher) {
      state.ChercherVille1 = chercher.ville1;
      //supprimer repetition 

    
     // state.ChercherVille2 = chercher.ville2;
      // if (chercher.ville1 != "" ) { state.currentTransporteur = 1; }
      state.ChercherTransporteur = chercher.name;

      axios.get(Url + `itineraires?page=${state.currentTransporteur}&quantityPage=${state.parPageTransporteur}&ville1=${state.ChercherVille1}&name=${state.ChercherTransporteur}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajett', res);
        })
    },
    // get noveau page 
    Get_NoveauTrajet({ commit, state }, NumPage) {
      state.currentTransporteur = NumPage;
      axios.get(Url + `itineraires?page=${state.currentTransporteur}&quantityPage=${state.parPageTransporteur}&ville1=${state.ChercherVille1}&name=${state.ChercherTransporteur}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajett', res);
        })
    },
    Changer_ParpageTrajet({ commit, state }, Parpage) {
      state.currentTransporteur = 1;
      state.parPageTransporteur = Parpage;
      axios.get(Url + `itineraires?page=${state.currentTransporteur}&quantityPage=${state.parPageTransporteur}&ville1=${state.ChercherVille1}&name=${state.ChercherTransporteur}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTrajett', res);
        })
    },
    //************************************ */
    //get page :
    Get_Transporteur({ commit, state }) {
      axios.get(Url + `Transporteurs?page=${state.currentTransporteur}&quantityPage=${state.parPageTransporteur}&name=${state.ChercherTransporteur}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTransporteur', res);
        })
    },


    // get noveau page 
    Get_NoveauTransporteur({ commit, state }, NumPage) {
      state.currentTransporteur = NumPage;
      axios.get(Url + `Transporteurs?page=${state.currentTransporteur}&quantityPage=${state.parPageTransporteur}&name=${state.ChercherTransporteur}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTransporteur', res);
        })
    },
    Changer_ParpageTransporteur({ commit, state }, Parpage) {
      state.currentTransporteur = 1;
      state.parPageTransporteur = Parpage;
      axios.get(Url + `Transporteurs?page=${state.currentTransporteur}&quantityPage=${state.parPageTransporteur}&name=${state.ChercherTransporteur}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTransporteur', res);
        })
    },
    //recherche
    Chercher_Transporteur({ commit, state }, chercher) {
      state.currentTransporteur = 1;
      state.ChercherTransporteur = chercher;
      axios.get(Url + `Transporteurs?page=${state.currentTransporteur}&quantityPage=${state.parPageTransporteur}&name=${state.ChercherTransporteur}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetTransporteur', res);
        })
    },
    //get all
    Get_Transporteur_All({ commit }) {
      axios.get(Url + "Transporteurs", {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          console.log(res.data);
          commit('GetTransporteurAll', res.data);
        })
    },
    // delete
    Delete_Transporteur({ commit }, transporteur) {
      commit('DeleteTransporteur', transporteur);
    },
    // modifier
    Modifier_Transporteur({ commit }, value) {
      commit('ModifierTransporteur', value);
    },
    // Ajouter
    Ajouter_Transporteur({ commit }, transporteur) {
      commit('AjouterTransporteur', transporteur);
    },
    
  },
};
