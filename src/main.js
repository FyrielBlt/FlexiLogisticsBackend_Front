import { createApp } from "vue";
import VueApexCharts from "vue3-apexcharts";
//import DashboardLayout from "./components/DashboardLayout.vue";
//import EmptyLayout from "./components/EmptyLayout.vue";
import "./assets/tailwind.css";
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'animate.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//jQuery libraries
//import 'jquery/dist/jquery.min.js';
//Datatable Modules
//import "datatables.net-dt/js/dataTables.dataTables"
//import "datatables.net-dt/css/jquery.dataTables.min.css"

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
const app = createApp(App);
app.use(router).use(store).use(VueChartkick).use(VCalendar,{}).use(VueSweetalert2).use(VueApexCharts).mount("#app");