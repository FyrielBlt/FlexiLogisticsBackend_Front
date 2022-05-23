import Url from "../Api.js";
import axios from "axios";
//import { forEach } from "core-js/core/array";
const Token = localStorage.getItem('token');
export default {
    state: {
        //liste de client
        ListeDemandeDevis: [],
    },
    getters: {
        //return les clients
        ListeDemandeDevis(state) {
            return state.ListeDemandeDevis;
        },
    },
    mutations: {
        // get all
        GetDemandeDevi(state, value) {
            state.ListeDemandeDevis = value;
        },
        // Ajouter
        AjouterDemandeDevi(state, DemandeDevi) {
            //recuperer les id du transporteur
            let liste = [];
            let i;
            for (i = 0; i < DemandeDevi.IdTransporteur.length; i++) {
                liste.push(DemandeDevi.IdTransporteur[i]);
            }
            DemandeDevi.IdTransporteur = null;
            console.log(liste);
            // ajouter
            state.ListeDemandeDevis=[];
            liste.forEach(el => {
                DemandeDevi.IdTransporteur = el;
                console.log(DemandeDevi);
                axios.post(Url + "DemandeDevis", DemandeDevi, {
                    headers: {
                        Authorization: 'Bearer ' + Token
                    }
                }).then(res => {
                    state.ListeDemandeDevis.push(res.data);
                });
            });
        },
        // Modifier
        ModifierDemandeDevi(state, DemandeDevi) {
            //recuperer les id du transporteur
           // let liste = [];
            //let i;
            // supprimer les Demandes anciens
           // let idDemande = DemandeDevi.IdDemande;
            let ListeDevi = state.ListeDemandeDevis
                .map(el => el.idDemandeDevis);
            ListeDevi.forEach(el => {
                axios.delete(Url + "DemandeDevis/" + el, {
                    headers: {
                        Authorization: 'Bearer ' + Token
                    }
                }).then();
            });
         
        }



    },
    actions: {
        // get all
        Get_DemandeDevi({ commit },idDemande) {
            axios.get(Url + `DemandeDevis/${idDemande}`, {
                headers: {
                    Authorization: 'Bearer ' + Token
                }
            })
                .then(res => {
                    commit('GetDemandeDevi', res.data);
                })
        },
       
        // Ajouter
        Ajouter_DemandeDevi({ commit }, DemandeDevi) {
            commit('AjouterDemandeDevi', DemandeDevi);
        },
        //modifier
        Modifier_DemandeDevi({ commit }, DemandeDevi) {
            commit('ModifierDemandeDevi', DemandeDevi);
        },
    },
};
