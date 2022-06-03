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
    // AccepterOffreSeule(state, OffreId) {
     

    //     state.ListeOffres.filter(el => el.idOffre == OffreId.OffreId)[0].idEtat = OffreId.idEtatEnCours;
    //     state.ListeOffres.filter(el => el.idOffre == OffreId.OffreId)[0].prixFinale =
    //       state.ListeOffres.filter(el => el.idOffre == OffreId.OffreId)[0].prix + 10;
    //     console.log(state.ListeOffres.filter(el => el.idOffre == OffreId.OffreId)[0])
    //     axios.put(Url + "offres/" + state.ListeOffres.filter(el => el.idOffre == OffreId.OffreId)[0].idOffre, state.ListeOffres.filter(el => el.idOffre == OffreId.OffreId)[0], {
    //       headers: {
    //         Authorization: 'Bearer ' + Token
    //       }
    //     }).then(res => {
    //       console.log("en cour")
    //     });
      

    //   console.log("bravo")



    // },
    RefuserTout(state, ListeOffresId) {
      //refuser tout les offres puis accepter juste les choisit s
      for (var j = 0; j < state.ListeOffres.length; j++) {
        state.ListeOffres[j].idEtat = ListeOffresId.idEtatRefuser;
        let off =state.ListeOffres[j];
        off.idEtatNavigation=null;
        axios.put(Url + "offres/" + off.idOffre, off, {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        }).then(res=>{
          console.log("res :1")
          console.log(off)
        });
      }
      console.log("malek")
      //accepter les choisits + donner l'offre au client 
      // for (var i = 0; i < ListeOffresId.ListeOffresId.length; i++) {
      //   state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].idEtat = ListeOffresId.idEtatEnCours;
      //   state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].prixFinale =
      //   state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].prix + 10;
      //  var of= state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0];
      //   of.idEtatNavigation=null;
      // // console.log(of)
      //    axios.put(Url + "offres/" + of.idOffre, of, {
      //     headers: {
      //       Authorization: 'Bearer ' + Token
      //     }
      //   }).then(res => {
      //     console.log("res 2 :")
      //     console.log(of)
      //   });
      //   console.log("bravo")
      // }

      //console.log("bravo")



    },
    // AccepterOffre(state, ListeOffresId) {
    //   // //refuser tout les offres puis accepter juste les choisit s
    //   // for (var j = 0; j < state.ListeOffres.length; j++) {
    //   //   state.ListeOffres[j].idEtat = ListeOffresId.idEtatRefuser;
    //   //   var off =state.ListeOffres[j];
    //   //   off.idEtatNavigation=null;
    //   //   axios.put(Url + "offres/" + off.idOffre, off, {
    //   //     headers: {
    //   //       Authorization: 'Bearer ' + Token
    //   //     }
    //   //   }).then(res=>{
    //   //     console.log("res :1")
    //   //     console.log(off)
    //   //   });
    //   // }
    //   // console.log("malek")
    //   //accepter les choisits + donner l'offre au client 
    //   for (var i = 0; i < ListeOffresId.ListeOffresId.length; i++) {
    //     state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].idEtat = ListeOffresId.idEtatEnCours;
    //     state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].prixFinale =
    //     state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0].prix + 10;
    //     let of = state.ListeOffres.filter(el => el.idOffre == ListeOffresId.ListeOffresId[i])[0];
    //     of.idEtatNavigation=null;
    //   // console.log(of)
    //      axios.put(Url + "offres/" + of.idOffre, of, {
    //       headers: {
    //         Authorization: 'Bearer ' + Token
    //       }
    //     }).then(res => {
    //       console.log("res 2 :")
    //       console.log(of)
    //     });
    //     console.log("bravo")
    //   }

    //   //console.log("bravo")



    // },
    AnnulerAccepter(state, annuler){
      
      state.ListeOffres[annuler.index].idEtat=annuler.idEtatRefuser;
      let offre=state.ListeOffres[annuler.index];
      offre.idEtatNavigation=null;
      axios.put(Url + "offres/" +annuler.idOffre ,offre,{
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

      // state.ListeOffres[valider.index].idEtat=valider.idEtatAccepter;
      // let offre=state.ListeOffres[valider.index];
      // offre.idEtatNavigation=null;
   
    },
  },
  actions: {


    // Accepter_Offre({ commit }, ListeOffresId) {
    //   commit('AccepterOffre', ListeOffresId);
    // },
    Accepter_Offre_seule({ commit }, ListeOffresId) {
      commit('AccepterOffreSeule', ListeOffresId);
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
    Refuser_Tout({ commit }, valider) {
      commit('RefuserTout', valider);
    },
  },
};

