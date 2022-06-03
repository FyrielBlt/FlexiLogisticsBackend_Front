import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');
export default {
  state: {
    //liste de role
    ListeRoles: [],
    currentRole: 1,
    perPageRole: 1,
    parPageRole: 10,
    totalRole: 10,
    ChercherRole: ""
  },
  getters: {
    //return les roles
    ListeRoles(state) {
      return state.ListeRoles;
    },
    currentRole(state) {
      return state.currentRole;
    },
    perPageRole(state) {
      return state.perPageRole;
    },
    parPageRole(state) {
      return state.parPageRole;
    },
    totalRole(state) {
      return state.totalRole;
    },
  },
  mutations: {
    // get all
    GetRole(state, value) {
      state.ListeRoles = value.data;
      state.totalRole = parseInt(value.headers["x-wp-total"]);
    },
    // supprimer 
    DeleteRole(state, role) {
      state.ListeRoles.splice(state.ListeRoles.indexOf(role), 1);
      axios.delete(Url + "Roles/" + role.idRole, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
      
    },
    // Modifier
    ModifierRole(state, role) {
     
      state.ListeRoles[role.index] =  role.Role;
     

      // modifier users
      axios
        .put(Url + "Roles/" + role.Role.idRole, role.Role, {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        })
        .then()
        .catch((rer) => console.log(rer));

    },
    // Ajouter
    AjouterRole(state, role) {
      axios.post(Url + "Roles", role, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then(res => {
        state.ListeRoles.push(res.data);
      });
    }

  },
  actions: {
    // get all
    Get_Role({ commit,state }) {
      axios.get(Url + `Roles?page=${state.currentRole}&quantityPage=${state.parPageRole}&role=${state.ChercherRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetRole', res);
        })
    },
     // get noveau page 
     Get_NoveauRole({ commit, state }, NumPage) {
      state.currentRole = NumPage;
      axios.get(Url + `Roles?page=${state.currentRole}&quantityPage=${state.parPageRole}&role=${state.ChercherRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        } 
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetRole', res);
        })
    },
    Changer_ParpageRole({ commit, state }, Parpage) {
      state.currentRole = 1;
      state.parPageRole = Parpage;
      axios.get(Url + `Roles?page=${state.currentRole}&quantityPage=${state.parPageRole}&role=${state.ChercherRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetRole', res);
        })
    },
    //recherche
    Chercher_Role({ commit, state }, chercher) {
      state.currentRole = 1;
      state.ChercherRole = chercher;
      axios.get(Url + `Roles?page=${state.currentRole}&quantityPage=${state.parPageRole}&role=${state.ChercherRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetRole', res);
        })
    },
   
    // delete
    Delete_Role({ commit }, role) {
      commit('DeleteRole', role);
    },
    // modifier
    Modifier_Role({ commit }, role) {
      commit('ModifierRole', role);
    },
    // Ajouter
    Ajouter_Role({ commit }, role) {
      console.log(role);
      commit('AjouterRole', role);
    },

  },
};
