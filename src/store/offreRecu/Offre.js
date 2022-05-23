import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    ListeOffres: [],

  },
  getters: {
    ListeOffres(state) {
      return state.ListeOffres;
    }
  },
  mutations: {
    GetListeOffre(state, value) {
      state.ListeOffres = value;
    },

    AccepterOffre(state, ListeOffresId) {
      //refuser tout les offres puis accepter juste les choisit s
      for (var j = 0; j < state.ListeOffres.length; j++) {
        state.ListeOffres[j].idEtat = ListeOffresId.idEtatRefuser;
        axios.put(Url + "offres/" + state.ListeOffres[j].idOffre, state.ListeOffres[j], {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        }).then();
      }

      //accepter les choisits + donner l'offre au client 
      for (var i = 0; i < ListeOffresId.ListeOffresId.length; i++) {
        state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].idEtat = ListeOffresId.idEtatEnCours;
        state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].prixFinale =
          state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].prix + 10;
        console.log(state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0])
        axios.put(Url + "offres/" + state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].idOffre, state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0], {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        }).then(res => {
          console.log("en cour")
        });
      }

      console.log("bravo")



    },
    AnnulerAccepter(state, annuler){
      
      state.ListeOffres[annuler.index].idEtat=annuler.idEtatRefuser;
      axios.put(Url + "offres/" +annuler.idOffre , state.ListeOffres[annuler.index],{
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then(res => {
        console.log("AnnulerAccepter")
      });
    },
    ValiderAccepter(state, valider){
       //refuser tout les offres puis accepter juste les choisit s
       for (var j = 0; j < state.ListeOffres.length; j++) {
        state.ListeOffres[j].idEtat = valider.idEtatRefuser;
        axios.put(Url + "offres/" + state.ListeOffres[j].idOffre, state.ListeOffres[j], {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        }).then();
      }

      state.ListeOffres[valider.index].idEtat=valider.idEtatAccepter;
      axios.put(Url + "offres/" +valider.idOffre , state.ListeOffres[valider.index],{
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then(res => {
        console.log("ValiderAccepter")
      });
    },
  },
  actions: {


    Accepter_Offre({ commit }, ListeOffresId) {
      commit('AccepterOffre', ListeOffresId);
    },
    Get_ListeOffre({ commit }, value) {
      commit('GetListeOffre', value);
    },
    Annuler_Accepter({ commit }, annuler) {
      commit('AnnulerAccepter', annuler);
    },
    Valider_Accepter({ commit }, valider) {
      commit('ValiderAccepter', valider);
    },
  },
};

