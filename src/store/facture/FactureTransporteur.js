import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    ListeFactureTransporteurs: [],
    currentFactureTransporteurs: 1,
    perPageFactureTransporteurs: 1,
    parPageFactureTransporteurs: 10,
    totalFactureTransporteurs: 10,
    filterPayement:null,
    num:""
  },
  getters: {
    ListeFactureTransporteurs(state) {
      return state.ListeFactureTransporteurs;
    },
    currentFactureTransporteurs(state) {
      return state.currentFactureTransporteurs;
    },
    perPageFactureTransporteurs(state) {
      return state.perPageFactureTransporteurs;
    },
    parPageFactureTransporteurs(state) {
      return state.parPageFactureTransporteurs;
    },
    totalFactureTransporteurs(state) {
      return state.totalFactureTransporteurs;
    },
  },
  mutations: {
    GetFactureTransporteur(state, value) {
      state.ListeFactureTransporteurs = value.data;
      state.totalFactureTransporteurs = parseInt(value.headers["x-wp-total"]);
    }
    // AjouterPayementT(state, payement) {
    //     // console.log(payement.get("imageFileLength"));
    //     for (var i = 0; i < payement.get("imageFileLength"); i++) {
    //         // let file = this.imageFile[i];
    //         //payementT.append("files[" + i + "]", file);
    //         console.log(payement.get("files[" + i + "]"));
    //     }
    //     let payementT = {
    //         EtatFacture: payement.get("EtatFacture"),
    //         IdOffreRecu: payement.get("IdOffreRecu"),
    //         Commentaire: payement.get("Commentaire")
    //     };
    //     console.log(payementT); 
    //     console.log(payement.get("imageFileLength"));
    //     axios.post(Url + "FactureTransporteurs", payementT, {
    //         headers: {
    //             Authorization: 'Bearer ' + Token
    //         }
    //     }).then(res => {
    //         let idfactureT = res.data.idFactTransporteur;
    //         console.log(res.data);
    //         for (var i = 0; i < payement.get("imageFileLength"); i++) {
    //             let fileFactureT = new FormData();
    //             fileFactureT.append("IdFactTransporteur", idfactureT);
    //             fileFactureT.append("ImageFile", payement.get("files[" + i + "]"));
    //             axios
    //                 .post(Url + "FileFactureTransporteurs", fileFactureT)
    //                 .then();

    //         }
    //     });
    // },
  },
  actions: {
    //refuser
    //get page : `intermediaires?page=${state.currentPersonnelle}&quantityPage=${state.parPagePersonnelle}&idRole=${state.filterRole}`
    // Get_Facture_Transporteur({ commit }) {
    //   axios.get(Url + 'FactureTransporteurs', {
    //     headers: {
    //       Authorization: 'Bearer ' + Token
    //     }
    //   })
    //     .then(res => {
    //       //  let tot=parseInt(res.headers["x-wp-total"]);
    //       commit('GetFactureTransporteur', res.data);
    //     })
    // },
    Get_Facture_Transporteur({ commit, state }) {
      axios.get(Url + `FactureTransporteurs?page=${state.currentFactureTransporteurs}&quantityPage=${state.parPageFactureTransporteurs}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFactureTransporteur', res);
        })
    },
    Changer_ParpageFactureTransporteurs({ commit, state }, Parpage) {
      state.currentFactureTransporteurs = 1;
      state.parPageFactureTransporteurs = Parpage;
      axios.get(Url + `FactureTransporteurs?page=${state.currentFactureTransporteurs}&quantityPage=${state.parPageFactureTransporteurs}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFactureTransporteur', res);
        })
    },
    // get noveau page 
    Get_NoveauFactureTransporteurs({ commit, state }, NumPage) {
      state.currentFactureTransporteurs = NumPage;
      axios.get(Url + `FactureTransporteurs?page=${state.currentFactureTransporteurs}&quantityPage=${state.parPageFactureTransporteurs}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFactureTransporteur', res);
        })
    },
    Filter_Num({ commit, state }, filter) {
      state.num = filter;
      state.currentFactureTransporteurs = 1;
      axios.get(Url + `FactureTransporteurs?page=${state.currentFactureTransporteurs}&quantityPage=${state.parPageFactureTransporteurs}&num=${state.num}&sortOrder=${state.filterPayement}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFactureTransporteur', res);
        })
    },
    Filter_Payement({ commit, state }, filter) {
      state.filterPayement = filter;
      state.currentFactureTransporteurs = 1;
      axios.get(Url + `FactureTransporteurs?page=${state.currentFactureTransporteurs}&quantityPage=${state.parPageFactureTransporteurs}&sortOrder=${state.filterPayement}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetFactureTransporteur', res);
        })
    },
    

  },
};
