import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueTimeline from "@growthbunker/vuetimeline";

Vue.use(VueTimeline);
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

Vue.config.productionTip = false

new Vue({
 
  store,
  render: h => h(App)
}).$mount('#app')


