import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import store from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/dist/js/pages/dashboard.js';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
