import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
    state: {
        //liste de transporteur
        
        ListeTrajets: [],
        // currentTransporteur: 1,
        // perPageTransporteur: 1,
        // parPageTransporteur:3,
        // totalTransporteur: 10,
        ChercherVille1:"",
        ChercherVille2:""
        
    },
    getters: {
        //return les transporteurs
        
        ListeTrajets(state) {
            return state.ListeTrajets;
        },
        ChercherVille1(state) {
          return state.ChercherVille1;
      },
      ChercherVille2(state) {
        return state.ChercherVille2;
    },
        // currentTransporteur(state){
        //     return state.currentTransporteur;
        // },
        // perPageTransporteur(state){
        //     return state.perPageTransporteur;
        // },
        // parPageTransporteur(state){
        //     return state.parPageTransporteur;
        // },
        // totalTransporteur(state){
        //     return state.totalTransporteur;
        // },
        
    },
    mutations: {
        // get all d'une page
        GetTrajet(state, value) {          
            state.ListeTrajets = value.data;
            state.ListeTrajets = state.ListeTrajets.map(el=>el.idCamionNavigation)
            .map(el=>el.idtransporteurNavigation);
            console.log(state.ListeTrajets);
            //state.totalTransporteur=parseInt(value.headers["x-wp-total"]);
        },
        
    },
    actions: {
        
        //recherche
        Chercher_Trajet({commit,state},chercher){
          state.ListeTrajets=[]
            state.currentTransporteur=1;
            state.ChercherVille1=chercher.ville1;
            state.ChercherVille2=chercher.ville2;
            axios.get(Url + `Trajets?page=${1}&quantityPage=${1}&ville1=${state.ChercherVille1}&ville2=${state.ChercherVille2}`, {
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
