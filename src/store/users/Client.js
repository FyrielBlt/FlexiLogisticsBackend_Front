import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de client
    ListeClientsAll:[],
    ListeClients: [],
    currentClient: 1,
    perPageClient: 1,
    parPageClient: 10,
    totalClient: 10,
    rechercheClient:""
  }, 
  getters: {
    //return les clients
    ListeClientsAll(state) {
      return state.ListeClientsAll;
    },
    ListeClients(state) {
      return state.ListeClients;
    },
    currentClient(state) {
      return state.currentClient;
    },
    perPageClient(state) {
      return state.perPageClient;
    },
    parPageClient(state) {
      return state.parPageClient;
    },
    totalClient(state) {
      return state.totalClient;
    },
  },
  mutations: {
    GetClientAll(state,value){
      state.ListeClientsAll = value;
    },
    // get all d'une page
    GetClient(state, value) {
      state.ListeClients = value.data;
      state.totalClient = parseInt(value.headers["x-wp-total"]);
    },
    // supprimer 
    DeleteClient(state, client) {
      state.ListeClients.splice(state.ListeClients.indexOf(client), 1);
      axios.delete(Url + "Clients/" + client.idclient, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
      axios.delete(Url + "Users/" + client.iduser, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
    },
    // Modifier
    ModifierClient(state, client) {
     
        state.ListeClients[client.index]=client;
        console.log(client);
     
    },
    // Ajouter
    AjouterClient(state, user) {

     
        let UserAjouter=user;
        let client = {
          iduser: user.idUser, 
        };
        //console.log(client);
        axios.post(Url + "clients", client, {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        }).then(res=>{
          let clientAjouter=res.data
          clientAjouter.imageSrc = UserAjouter.imageSrc;
          clientAjouter.iduserNavigation=UserAjouter;
          state.ListeClients.push(clientAjouter);
          //console.log(intermediaireAjouter);
        });
    }
  },
  actions: { 
    
    //get page :
    Get_Client({ commit, state }) {
      axios.get(Url + `Clients?page=${state.currentClient}&quantityPage=${state.parPageClient}&name=${state.rechercheClient}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetClient', res);
        })
    },
    // get noveau page 
    Get_NoveauClient({ commit, state }, NumPage) {
      state.currentClient = NumPage;
      axios.get(Url + `Clients?page=${state.currentClient}&quantityPage=${state.parPageClient}&name=${state.rechercheClient}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetClient', res);
        })
    },
    Changer_ParpageClient({ commit, state }, Parpage) {
      state.currentClient = 1;
      state.parPageClient = Parpage;
      axios.get(Url + `Clients?page=${state.currentClient}&quantityPage=${state.parPageClient}&name=${state.rechercheClient}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetClient', res);
        })
    },
    //recherche
    Recherche_Client({ commit, state }, recherche) {
      state.currentClient = 1;
      state.rechercheClient = recherche;
      axios.get(Url + `Clients?page=${state.currentClient}&quantityPage=${state.parPageClient}&name=${state.rechercheClient}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetClient', res);
        })
    },
    // get all
    Get_Client_All({ commit }) {
      axios.get(Url + "Clients", {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetClientAll', res.data);
        })
    },
    // delete
    Delete_Client({ commit }, client) {
      commit('DeleteClient', client);
    },
    // modifier
    Modifier_Client({ commit }, value) {
      commit('ModifierClient', value);
    },
    // Ajouter
    Ajouter_Client({ commit }, client) {
      commit('AjouterClient', client);
    },
  },
};
