import { createStore } from "vuex";

//import Url from "./Api.js";
import Transporteur  from "./users/Transporteur.js";
import Client from "./users/Client";
import Role from "./users/Role";
import Permission from "./users/Permission";
import Personnelle from "./users/Personnelle";
import DemandeLivraison from "./demandesLivraison/DemandeLivraison";
import EtatDemandeLivraison from "./demandesLivraison/EtatDemandeLivraison";
import EtatDemandeDevis from "./demandeDevis/EtatDemandeDevis";
import DemandeDevis from"./demandeDevis/DemandeDevis";
import EtatOffre from"./offreRecu/EtatOffre";
import Offre from"./offreRecu/Offre";
import Facture from"./facture/Facture";
import FactureTransporteur from"./facture/FactureTransporteur";
import Ville from"./ville/Ville";
import Profil from "./users/Profil";
// import Trajet from"./trajet/Trajet";

export default createStore({
  
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules:{
    Transporteur,
    Client,
    Role,
    Personnelle,
    DemandeLivraison,
    EtatDemandeLivraison,
    EtatDemandeDevis,
    DemandeDevis,
    EtatOffre,
    Offre,
    Facture,
    FactureTransporteur,
    Permission,
    Ville,
    Profil
   

  }
});
