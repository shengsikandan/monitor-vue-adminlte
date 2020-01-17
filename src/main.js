import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import store from "./store/store";
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/dist/js/pages/dashboard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-green.css';
import "font-awesome/css/font-awesome.min.css";


//引入axios
import {axios} from '@/service/service'

// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount("#app");
