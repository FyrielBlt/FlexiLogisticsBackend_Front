import Url from "../Api.js";
import axios from "axios";

const Token = localStorage.getItem('token');
const ID = localStorage.getItem('id');
export default {
  state: {
    //liste de transporteur
    ListePersonnellesAll: [],
    Personnelle: "",
    ListePersonnelles: [],
    currentPersonnelle: 1,
    perPagePersonnelle: 1,
    parPagePersonnelle: 5,
    totalPersonnelle: 10,
    filterRole: 0
  },
  getters: {
    Personnelle(state) {
      return state.Personnelle;
    },
    //return les transporteurs
    ListePersonnellesAll(state) {
      return state.ListePersonnellesAll;
    },
    ListePersonnelles(state) {
      return state.ListePersonnelles;
    },
    currentPersonnelle(state) {
      return state.currentPersonnelle;
    },
    perPagePersonnelle(state) {
      return state.perPagePersonnelle;
    },
    parPagePersonnelle(state) {
      return state.parPagePersonnelle;
    },
    totalPersonnelle(state) {
      return state.totalPersonnelle;
    },
  },
  mutations: {
    GetPersonnelleSeule(state, value) {
      state.Personnelle = value;

    },
    GetPersonnelleAll(state, value) {
      state.ListePersonnellesAll = value;

    },
    // get all d'une page
    GetPersonnelle(state, value) {
      state.ListePersonnelles = value.data;
      console.log(value);
      state.totalPersonnelle = parseInt(value.headers["x-wp-total"]); 
    },
    // supprimer 
    DeletePersonnelle(state, personnelle) {
      state.ListePersonnelles.splice(state.ListePersonnelles.indexOf(personnelle), 1);
      axios.delete(Url + "intermediaires/" + personnelle.idIntermediaire, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
      axios.delete(Url + "Users/" + personnelle.idUser, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then();
    },
    // Modifier
    ModifierPersonnelle(state, personnelle) {  



      axios
      .put(Url + "users/" + personnelle.idUser, personnelle.idUserNavigation, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
      .then(res => {
        personnelle.idUserNavigation=res.data;
        personnelle.imageSrc=res.data.imageSrc;
        state.ListePersonnelles[personnelle.index] = personnelle;
        
      });
    
    },
   
    // Ajouter
    AjouterPersonnelle(state, personnelle) {
      axios.post(Url + "users", personnelle.personnelle, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      }).then(res => {
       // console.log(res.data);
        let UserAjouter=res.data;
        let intermediaire = {
          IdUser: res.data.idUser,
          IdRole: personnelle.Idrole
        };
        //console.log(intermediaire);
        axios.post(Url + "intermediaires", intermediaire, {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        }).then(res=>{
          let intermediaireAjouter=res.data
          intermediaireAjouter.idUserNavigation=UserAjouter;
          intermediaireAjouter.imageSrc = UserAjouter.imageSrc;
          intermediaireAjouter.idRoleNavigation=personnelle.IdRoleNavigation;
          state.ListePersonnelles.push(intermediaireAjouter);
          console.log(intermediaireAjouter);
        });
      });
    }
  },
  actions: {
    Get_Personnelle_Seule({ commit }) {
      axios.get(Url + `intermediaires/` + ID, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-tot al"]);
          commit('GetPersonnelleSeule', res.data);
        })
    },
    //get page :

    Get_Personnelle({ commit, state }) {
      axios.get(Url + `intermediaires?page=${state.currentPersonnelle}&quantityPage=${state.parPagePersonnelle}&idRole=${state.filterRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetPersonnelle', res);
        })
    },
    // get noveau page 
    Get_NoveauPersonnelle({ commit, state }, NumPage) {
      state.currentPersonnelle = NumPage;
      axios.get(Url + `intermediaires?page=${state.currentPersonnelle}&quantityPage=${state.parPagePersonnelle}&idRole=${state.filterRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetPersonnelle', res);
        })
    },
    Changer_ParpagePersonnelle({ commit, state }, Parpage) {
      state.currentPersonnelle = 1;
      state.parPagePersonnelle = Parpage;
      axios.get(Url + `intermediaires?page=${state.currentPersonnelle}&quantityPage=${state.parPagePersonnelle}&idRole=${state.filterRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetPersonnelle', res);
        })
    },
    //Filter Role
    Filter_Role({ commit, state }, idrole) {
      state.filterRole = idrole;
      state.currentPersonnelle = 1;
      axios.get(Url + `intermediaires?page=${state.currentPersonnelle}&quantityPage=${state.parPagePersonnelle}&idRole=${state.filterRole}`, {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          //  let tot=parseInt(res.headers["x-wp-total"]);
          commit('GetPersonnelle', res);
        })
    },
    // get all
    Get_Personnelle_All({ commit }) {
      axios.get(Url + "intermediaires", {
        headers: {
          Authorization: 'Bearer ' + Token
        }
      })
        .then(res => {
          commit('GetPersonnelleAll', res.data);
        })
    },
    // delete
    Delete_Personnelle({ commit }, personnelle) {
      commit('DeletePersonnelle', personnelle);
    },
    // modifier
    Modifier_Personnelle({ commit }, value) {
      commit('ModifierPersonnelle', value);
    },
    // Ajouter
    Ajouter_Personnelle({ commit }, personnelle) {
      commit('AjouterPersonnelle', personnelle);
    },
    Modifier_Personnelle_Seule({ commit }, value) {
      commit('ModifierPersonnelleSeule', value);
    },
  },
};
