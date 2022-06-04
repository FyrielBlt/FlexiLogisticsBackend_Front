import { createRouter, createWebHistory } from 'vue-router'

//middleware
import auth from '../middleware/auth'
import log from '../middleware/log'
import autht from '../middleware/autht'
import authc from '../middleware/authc'
//login
import Login from '../views/Login.vue'
import Inscription from '../views/Inscription.vue'
//client
import MenuClient from "../views/Client/MenuClient.vue";
import Client from "../views/Client/Personnels.vue";
import Demande from "../views/Client/demande.vue";
import Offres from "../views/Client/offresrecu.vue";
import DashboardClient from "../views/Client/Dashboard.vue";
import Profile from "../views/Client/Profile.vue";
import Facture from "../views/Client/Facture.vue";
import DemandeDetails from "../views/Client/demandedetails.vue";
// fin client
//transporteur
import DashboardTransporteur from "../views/Transporteur/Users/Dashboard.vue";
import MenuTransporteur from "../views/Transporteur/Users/MenuTransporteur.vue";
import ProfilTransprteur from "../views/Transporteur/Users/Profil.vue";
import Transporteurs from "../views/Transporteur/Users/Transporteurs.vue";
import Camions from "../views/Transporteur/Camions/Camions.vue";
import Trajetcamion from "../views/Transporteur/Trajets/Tarjet.vue";
import Trajets from "../views/Transporteur/Trajets/Trajets.vue";
import Itetiaires from "../views/Transporteur/Trajets/Itetiaires.vue";
import Chauffeurs from "../views/Transporteur/Chauffeurs/Chauffeurs.vue";
import Demandechauffeur from "../views/Transporteur/Demandes/Demande.vue";
import ModalLayoutHistoriqueDemande from "../views/Transporteur/Demandes/ModalLayoutHistoriqueDemande.vue";
import Offreschauffeur from "../views/Transporteur/Offres/Offres.vue";
import ModalOffre from "../views/Transporteur/Offres/ModalLayoutOffre.vue";
import FacturesTransporteur from "../views/Transporteur/FactureTransporteur/Factures.vue";
// fin transporteur
// Intermediaire
import SocieteIntermediaire from '../views/Intermediaire/users/societe/Societe.vue'
import TrajetIntermediaire from '../views/Intermediaire/ville/Trajet.vue'
import DetailDemandeIntermediaire from '../views/Intermediaire/demande/DetailDemande.vue'
import Intermediaire from '../views/Intermediaire/Dashboard.vue'
import MenuIntermediaire from '../views/Intermediaire/MenuIntermediaire.vue'
import Role from '../views/Intermediaire/users/role/Role.vue'
import Permission from '../views/Intermediaire/users/permission/Permission.vue'
import ClientIntermediaire from '../views/Intermediaire/users/client/Client.vue'
import PersonnelIntermediaire from '../views/Intermediaire/users/personnel/Personnel.vue'
import TransporteurIntermediaire from '../views/Intermediaire/users/transporteur/Transporteur.vue'
import DemandeIntermediaire from '../views/Intermediaire/demande/Demande.vue'
import DemandeDevis from '../views/Intermediaire/demande/DemandeDevis.vue'
import VilleIntermediaire from '../views/Intermediaire/ville/Ville.vue'
import OffreIntermediaire from '../views/Intermediaire/demande/Offre.vue'
import FactureClient from '../views/Intermediaire/facturesClient/FactureClient.vue'
//import UploadFacture from '../views/Intermediaire/facturesClient/UploadFacture.vue'
//import PayementClient from '../views/Intermediaire/facturesClient/PayementClient.vue'
import ProfilIntermediaire from '../views/Intermediaire/users/profil/Profil.vue'
import FactureTransporteur from '../views/Intermediaire/facturesTransporteur/FactureTransporteur.vue'
//import VoirFacture from '../views/Intermediaire/facturesTransporteur/VoirFacture.vue'
//import PayementTransporteur from '../views/Intermediaire/facturesTransporteur/PayementTransporteur.vue'
//***** */
import Forms from '../views/Forms.vue'
import Tables from '../views/Tables.vue'
import UIElements from '../views/UIElements.vue'
import Modal from '../views/Modal.vue'
// import Chart from "../views/ChartView.vue";
import Card from '../views/CardView.vue'
import Blank from '../views/BlankView.vue'
import NotFound from '../views/NotFound.vue'
const routes = [{
  path: '/',
  name: 'Login',
  component: Login,
},
{
  path: '/Inscription',
  name: 'Inscription',
  component: Inscription,
},

//Router Intermediaire
{
  path: '/dashboard',
  component: MenuIntermediaire,
  meta: {
    middleware: [auth, log],
  },
  children: [{
    path: 'Intermediaire',
    component: Intermediaire,
    name: 'Intermediaire',
  },
  {
    path: 'role',
    component: Role,
    name: 'Role',
  },
  {
    path: 'detailDemandeIntermediaire/:id',
    name: 'DetailDemandeIntermediaire',
    component: DetailDemandeIntermediaire,
  },
  {
    path: 'trajetIntermediaire',
    name: 'trajetIntermediaire',
    component: TrajetIntermediaire,
  },
  {
    path: 'permission',
    component: Permission,
    name: 'Permission',
  },
  {
    path: 'clientIntermediaire',
    component: ClientIntermediaire,
    name: 'ClientIntermediaire',
  },
  {
    path: 'personnelIntermediaire',
    component: PersonnelIntermediaire,
    name: 'PersonnelIntermediaire',
  },
  {
    path: 'transporteurIntermediaire',
    component: TransporteurIntermediaire,
    name: 'TransporteurIntermediaire',
  },
  {
    path: 'demandeIntermediaire',
    component: DemandeIntermediaire,
    name: 'DemandeIntermediaire',
  },
  {
    path: 'demandeDevis/:id',
    name: 'DemandeDevis',
    component: DemandeDevis,
  },
  {
    path: 'offreIntermediaire/:id',
    name: 'OffreIntermediaire',
    component: OffreIntermediaire,
  },

  {
    path: 'villeIntermediaire',
    name: 'VilleIntermediaire',
    component: VilleIntermediaire,
  },
  {
    path: 'factureClient',
    name: 'FactureClient',
    component: FactureClient,
  },
  {
    path: 'factureTransporteur',
    name: 'factureTransporteur',
    component: FactureTransporteur,
  },
  /* {
       path: 'voirFacture/:id',
       name: 'VoirFacture',
       component: VoirFacture,
   },
   {
       path: 'uploadFacture/:demande&:idFactClient',
       name: 'UploadFacture',
       component: UploadFacture,
   }, {
       path: 'payementTransporteur/:facture',
       name: 'PayementTransporteur',
       component: PayementTransporteur,
   },
   {
       path: 'payementClient/:id',
       name: 'PayementClient',
       component: PayementClient,
   },*/
  {
    path: 'profilIntermediaire',
    name: 'ProfilIntermediaire',
    component: ProfilIntermediaire,
  },
  {
    path: 'societeIntermediaire',
    component: SocieteIntermediaire,
    name: 'SocieteIntermediaire',
  },
  ],
},

// fin Router Intermediaire
//Router client
{
  path: '/client',
  component: MenuClient,
  meta: {
    middleware: [authc, log],
  },
  children: [{
    path: 'dashboardClient',
    name: 'DashboardClient',
    component: DashboardClient,
  },
  {
    path: 'clients',
    name: 'Client',
    component: Client,
  },
  {
    path: 'demande',
    name: 'Demande',
    component: Demande,
  },
  {
    path: 'demande/:id',
    name: 'DemandeDetails',
    component: DemandeDetails,
  },
  {
    path: 'offres',
    name: 'Offres',
    component: Offres,
  },
  {
    path: "profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "facture",
    name: "Facture",
    component: Facture,
  },
  ],
},
// fin Router Intermediaire
//Router Transporteur
{
  path: '/dashboard',
  component: MenuTransporteur,
  meta: {
    middleware: [autht, log],
  },
  children: [{
    path: 'dashboardTransporteur',
    name: 'DashboardTransporteur',
    component: DashboardTransporteur,
  },
  {
    path: 'demandechauffeur',
    name: 'Demandechauffeur',
    component: Demandechauffeur,
  },
  {
    path: 'offreschauffeur',
    name: 'Offreschauffeur',
    component: Offreschauffeur,
  },
  {
    path: 'facturesTransporteur',
    name: 'facturesTransporteur',
    component: FacturesTransporteur,
  },
  {
    path: 'trajets',
    name: 'Trajets',
    component: Trajets,
  },
  {
    path: 'transporteurs',
    name: 'Transporteurs',
    component: Transporteurs,
  },
  {
    path: 'chauffeurs',
    name: 'Chauffeurs',
    component: Chauffeurs,
  },
  {
    path: 'itetiaires',
    name: 'itetiaires',
    component: Itetiaires,
  },

  {
    path: 'camions',
    name: 'Camions',
    component: Camions,
  },
  {
    path: 'trajetcamion',
    name: 'Trajetcamion',
    component: Trajetcamion,
  },
  {
    path: "profil",
    name: "Profil",
    component: ProfilTransprteur,
  },


  {
    path: 'historiqueDemande',
    name: 'historiqueDemande',
    component: ModalLayoutHistoriqueDemande,
  },
  ],
},

// fin Router Transporteur
// fin Router Transporteur


{
  path: '/forms',
  name: 'Forms',
  component: Forms,
}, {
  path: '/cards',
  name: 'Cards',
  component: Card,
}, {
  path: '/tables',
  name: 'Tables',
  component: Tables,
}, {
  path: '/ui-elements',
  name: 'UIElements',
  component: UIElements,
}, {
  path: '/modal',
  name: 'Modal',
  component: Modal,
},
// {
//   path: "/charts",
//   name: "Chart",
//   component: Chart,
// },
{
  path: '/blank',
  name: 'Blank',
  component: Blank,
},
// <<<<<<< HEAD
{ path: '/:pathMatch(.*)*', component: NotFound },
// =======
//   { path: "/:pathMatch(.*)*", component: NotFound },
// >>>>>>> c322e0653f0c1f3bdbe0f76ce5b122251f7a7402
// >>>>>>> 639f3fc82e826186c25e0de4c7171dd0e7630b3f

{
  path: '/forms',
  name: 'Forms',
  component: Forms,
}, {
  path: '/cards',
  name: 'Cards',
  component: Card,
}, {
  path: '/tables',
  name: 'Tables',
  component: Tables,
}, {
  path: '/ui-elements',
  name: 'UIElements',
  component: UIElements,
}, {
  path: '/modal',
  name: 'Modal',
  component: Modal,
},
// {
//   path: "/charts",
//   name: "Chart",
//   component: Chart,
// },
{
  path: '/blank',
  name: 'Blank',
  component: Blank,
}, { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/*******************************************************Middelware********************************************/
// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters)
    // Than run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ?
      to.meta.middleware : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to,
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})
/*******************************************************Middelware********************************************/
export default router