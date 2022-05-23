import Url from "../Api.js";
import axios from "axios";
const Token = localStorage.getItem('token');

export default {
  state: {
    //liste de role
    ListePermissions: [],
    ListePermissionsAll: [], 
    currentPermission: 1,
    perPagePermission: 1,
    parPagePermission:10,
    totalPermission: 10,
    ChercherPermission:""
  
  },
  getters: {
    //return les roles
    ListePermissions(state) {
      return state.ListePermissions;
    },
    ListePermissionsAll(state) {
      return state.ListePermissionsAll;
    },
    
        currentPermission(state){
            return state.currentPermission;
        },
        perPagePermission(state){
            return state.perPagePermission;
        },
        parPagePermission(state){
            return state.parPagePermission;
        },
        totalPermission(state){
            return state.totalPermission;
        },
   
  },
  mutations: {
    // get all
    GetPermission(state, value) {
      //state.ListePermissions = value;
      state.ListePermissions = value.data;
      state.totalPermission=parseInt(value.headers["x-wp-total"]);
    },
    GetPermissionAll(state, value) {
      //state.ListePermissions = value;
      state.ListePermissionsAll = value;
     // state.totalPermission=parseInt(value.headers["x-wp-total"]);
    },
    //active 
    ActivePermission(state, value) {
      // console.log(value);
      axios.post(Url + "RolePermissions", value, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          axios.get(Url + "Permissions", {
            headers: {
              Authorization: 'Bearer ' + Token
            }
          })
            .then(res => {
              state.ListePermissions = res.data;
            })
        })
    },
    DesactivePermission(state, id) {
      // console.log(id);
      axios.delete(Url + "RolePermissions/" + id, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          axios.get(Url + "Permissions", {
            headers: {
              Authorization: 'Bearer ' + Token
            }
          })
            .then(res => {
              state.ListePermissions = res.data;
            })
        })
    },



  },
  actions: {
    // get all
    Get_Permission_All({ commit,state }) {
      axios.get(Url + `Permissions`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetPermissionAll', res.data);
        })
    },
    // get
    Get_Permission({ commit,state }) {
      axios.get(Url + `Permissions?page=${state.currentPermission}&quantityPage=${state.parPagePermission}&permission=${state.ChercherPermission}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetPermission', res);
        })
    },
     // get noveau page 
     Get_NoveauPermission({ commit,state },NumPage) {
      state.currentPermission=NumPage;
      axios.get(Url + `Permissions?page=${state.currentPermission}&quantityPage=${state.parPagePermission}&permission=${state.ChercherPermission}`, {
          headers: {
              Authorization: 'Bearer ' + Token
          }
      })
          .then(res => {
            //  let tot=parseInt(res.headers["x-wp-total"]);
              commit('GetPermission', res);
          })
  },
  Changer_ParpagePermission({commit,state},Parpage){
      state.currentPermission=1;
      state.parPagePermission=Parpage;
      axios.get(Url + `Permissions?page=${state.currentPermission}&quantityPage=${state.parPagePermission}&permission=${state.ChercherPermission}`, {
          headers: {
              Authorization: 'Bearer ' + Token
          }
      })
          .then(res => {
            //  let tot=parseInt(res.headers["x-wp-total"]);
              commit('GetPermission', res);
          })
  },
  //recherche
  Chercher_Permission({commit,state},chercher){
      state.currentPermission=1;
      state.ChercherPermission=chercher;
      axios.get(Url + `Permissions?page=${state.currentPermission}&quantityPage=${state.parPagePermission}&permission=${state.ChercherPermission}`, {
          headers: {
              Authorization: 'Bearer ' + Token
          }
      })
          .then(res => {
            //  let tot=parseInt(res.headers["x-wp-total"]);
              commit('GetPermission', res);
          })
  },
   
    //activé permission
    Active_Permission({ commit }, rolePermission) {
      commit('ActivePermission', rolePermission)
    },
    Desactive_Permission({ commit }, id) {
      commit('DesactivePermission', id)
    }

  },
};
