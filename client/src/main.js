import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { IconsPlugin } from 'bootstrap-vue';
import Notifications from 'vue-notification'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.use(VueCookies)

Vue.use(IconsPlugin);
new Vue({
  router,
  store,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')


Vue.$axios = axios;
Vue.config.devtools = true